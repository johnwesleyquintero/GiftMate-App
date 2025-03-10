async requestPermissions() {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Calendar permission error:', error);
      return false;
    }
  }

  async syncEvents(daysToSync = 30) {
    try {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + daysToSync);

      const events = await Calendar.getEventsAsync(
        [Calendar.DEFAULT],
        startDate,
        endDate
      );

      return events.map(event => ({
        title: event.title,
        start: event.startDate,
        end: event.endDate,
        category: this.categorizeEvent(event),
        metadata: {
          location: event.location,
          notes: event.notes,
          attendees: event.attendees?.length || 0
        }
      }));
    } catch (error) {
      console.error('Calendar sync error:', error);
      return [];
    }
  }

  private categorizeEvent(event) {
    const keywords = {
      anniversary: ['anniversary', 'years together', 'milestone'],
      birthday: ['birthday', 'bday', 'born today'],
      holiday: ['christmas', 'valentine', 'easter', "mother's day"]
    };

    const lowerTitle = event.title.toLowerCase();
    return Object.entries(keywords).find(([_, terms]) => 
      terms.some(term => lowerTitle.includes(term))
    )?.[0] || 'other';
  }
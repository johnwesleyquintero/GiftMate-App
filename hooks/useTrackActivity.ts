import { useCallback } from 'react';
import { supabase } from '../lib/supabase';

export type ActivityType = 'view' | 'save' | 'purchase';

export const useTrackActivity = () => {
  const trackActivity = useCallback(async (giftId: string, activityType: ActivityType) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return;

    const { error } = await supabase
      .from('UserActivities')
      .insert([{
        user_id: user.id,
        activity_type: activityType,
        gift_id: giftId,
        embedding: null // Will be populated via database trigger
      }]);

    if (error) {
      console.error('Activity tracking error:', error);
    }
  }, []);

  return { trackActivity };
};
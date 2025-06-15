export type EventType = 'payment-change';

export interface EventMetadata {
  /**
   * The unique identifier for the event.
   */
  id: string;

  /**
   * The time the event was created in ISO 8601 format.
   */
  time: string;

  /**
   * The type of event.
   */
  type: EventType;
}

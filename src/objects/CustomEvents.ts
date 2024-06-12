export enum EventType {
  PLANET_CHANGED = "PLANET_CHANGED",
}

const events = {
  [EventType.PLANET_CHANGED]: new Event(EventType.PLANET_CHANGED),
};

export class CustomEvents {
  private static events = new EventTarget();

  public static add = (
    event: EventType,
    cb: EventListenerOrEventListenerObject
  ) => {
    this.events.addEventListener(event, cb);
  };

  public static trigger = (event: EventType) => {
    this.events.dispatchEvent(events[event]);
  };

  public static onPlanetChange = (cb: () => void) => {
    this.add(EventType.PLANET_CHANGED, cb);
  };
}

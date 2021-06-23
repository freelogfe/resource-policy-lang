import {Event} from "../index";

export interface EventTranslateStrategy {

    getEventName(): string;

    translate(event: Event, isSign?: boolean): string;
}

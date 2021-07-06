import {EventEntity} from "../tools/EventTool";

export interface EventTranslateStrategy {

    getEventName(): string;

    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo;
}

export class EventTranslateInfo {
    args?: object;
    content: string;
}

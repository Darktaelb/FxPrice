import { InstrumentRateModel } from './rate.model';

export interface InstrumentRateUpdateEvent {
  key: string;
  updatedValue: InstrumentRateModel;
}

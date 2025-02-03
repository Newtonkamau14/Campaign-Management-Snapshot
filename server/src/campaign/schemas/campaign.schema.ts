import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Influencer } from './influencer.schema';
import { Instruction } from './instruction.schema';

export enum Status {
  APPROVE = 'approve',
  REJECT = 'reject',
}

@Schema({
  timestamps: true,
})
export class Campaign {
  @Prop({ required: true })
  campaignName: string;

  @Prop({ required: true })
  influencerName: string;

  @Prop({ required: true, type: [Date] })
  submissionDates: Date[];

  @Prop()
  deadlineDate: Date;

  @Prop({ min: 0 })
  postCount: number;

  @Prop({ type: String, enum: Status })
  status: Status;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Instruction' })
  campaignInstructions: Instruction[];

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Influencer' })
  influencers?: Influencer[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);

import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Influencer } from './influencer.schema';
import { Instruction } from './instruction.schema';
import { Submission } from './submission.schema';

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

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Submission' })
  submissions?: Submission[];

  @Prop()
  deadlineDate: Date;

  @Prop({ min: 0, default: 0, required: false })
  postCount: number;

  @Prop({ type: String, enum: Status, default: null, required: false })
  status: Status;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Instruction' })
  campaignInstructions: Instruction[];

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Influencer' })
  influencers?: Influencer[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);

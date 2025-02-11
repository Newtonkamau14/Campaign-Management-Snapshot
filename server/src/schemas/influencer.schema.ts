import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Campaign } from './campaign.schema';

@Schema()
export class Influencer extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ unique: true })
  tiktokHandle: string;

  @Prop({ unique: true })
  instagramHandle: string;

  @Prop({ unique: true })
  twitterHandle: string;

  @Prop({ unique: true })
  youtubeChannel: string;

  @Prop({ type: Number, min: 0 })
  postCounts: number;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Campaign' })
  campaigns?: Campaign[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);

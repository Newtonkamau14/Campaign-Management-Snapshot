import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Campaign } from './campaign.schema';

@Schema()
export class Influencer {
  @Prop({ required: true })
  fullName: string;

  @Prop()
  tiktokHandle: string;

  @Prop()
  instagramHandle: string;

  @Prop()
  twitterHandle: string;

  @Prop()
  youtubeChannel: string;

  @Prop({ type: Number, min: 0 })
  postCounts: number;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Campaign' })
  campaigns?: Campaign[];
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);

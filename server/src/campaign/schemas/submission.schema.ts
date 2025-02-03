import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum SocialMedia {
  TIKTOK = 'tiktok',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  YOUTUBE = 'youtube',
}

export type SocialLinks = {
  [key in SocialMedia]?: string;
};

@Schema()
export class Submission extends Document {
  @Prop({ required: true })
  influencerName: string;

  @Prop({ type: Object, required: true })
  socialLink: SocialLinks;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);

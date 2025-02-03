import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SocialLinks } from '../schemas/submission.schema';

export class CreateSubmissionDto {
  @IsString()
  @IsNotEmpty()
  influencerName: string;

  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Object)
  socialLink: SocialLinks;
}

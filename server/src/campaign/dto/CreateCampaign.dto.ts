import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  campaignName: string;
}

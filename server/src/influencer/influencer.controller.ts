import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { CreateInfluencerDto } from './dtos/CreateInfluencer.dto';

@Controller('influencers')
export class InfluencerController {
  constructor(private influencerService: InfluencerService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createInfluencer(@Body() createInfluencerDto: CreateInfluencerDto) {
    return this.influencerService.createInfluencer(createInfluencerDto);
  }
}

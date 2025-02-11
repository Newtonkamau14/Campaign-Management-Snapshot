import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Influencer } from 'src/schemas/influencer.schema';
import { CreateInfluencerDto } from './dtos/CreateInfluencer.dto';

@Injectable()
export class InfluencerService {
  constructor(
    @InjectModel(Influencer.name)
    private readonly influencerModel: Model<Influencer>,
  ) {}

  async createInfluencer(createInfluencerDto: CreateInfluencerDto) {
    const newInfluencer = new this.influencerModel(createInfluencerDto);

    return newInfluencer.save();
  }
}

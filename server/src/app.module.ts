import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignController } from './campaign/campaign.controller';
import { CampaignModule } from './campaign/campaign.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { InfluencerModule } from './influencer/influencer.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InfluencerController } from './influencer/influencer.controller';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    CampaignModule,
    AuthModule,
    InfluencerModule,
    SubmissionModule,
  ],
  controllers: [
    AppController,
    CampaignController,
    AuthController,
    InfluencerController,
  ],
  providers: [AppService, AuthService],
})
export class AppModule {}

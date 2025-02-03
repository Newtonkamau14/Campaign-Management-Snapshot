import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CampaignController } from './campaign/campaign.controller';
import { CampaignModule } from './campaign/campaign.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(process), CampaignModule, AuthModule],
  controllers: [AppController, CampaignController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}

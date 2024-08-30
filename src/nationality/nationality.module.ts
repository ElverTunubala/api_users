import { Module } from '@nestjs/common';
import { NationalityController } from './nationality.controller';
import { NationalityService } from './nationality.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nationality } from './entity/nationality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nationality])],
  controllers: [NationalityController],
  providers: [NationalityService]
})
export class NationalityModule {}

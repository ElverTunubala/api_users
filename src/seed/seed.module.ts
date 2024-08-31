import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nationality } from 'src/nationality/entity/nationality.entity';
import { NationalityModule } from 'src/nationality/nationality.module';

@Module({
  imports: [TypeOrmModule.forFeature([Nationality]), NationalityModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nationality } from 'src/nationality/entity/nationality.entity';
import {Repository } from 'typeorm';

@Injectable()
export class SeedService {
  private nationalities = [
    { name: 'Colombian' },
    { name: 'American' },
    { name: 'Canadian' },
    { name: 'Mexican' },
    { name: 'Brazilian'},
    { name: 'Colombian' },
  ];

  constructor(
    @InjectRepository(Nationality)
    private nationalityRepository: Repository<Nationality>,
  ) {}

  async seed() {
    try {
      for (const nationality of this.nationalities) {
        const found = await this.nationalityRepository.findOne({
          where: { name: nationality.name },
        });

        if (!found) {
          await this.nationalityRepository.save(nationality);
          console.log(`Nationality ${nationality.name} saved.`);
        } else {
          console.log(`Nationality ${nationality.name} already exists.`);
        }
      }
      return { message: 'Seeding completed' };
    } catch (error) {
      console.error('Error seeding nationalities:', error);
      throw new Error('Seeding failed');
    }
  }
}







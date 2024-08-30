import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { Nationality } from './entity/nationality.entity';

@Injectable()
export class NationalityService {
    constructor(
        @InjectRepository(Nationality)
        private nationalityRepository: Repository<Nationality>,
    ) {}

    async create(createNationalityDto: CreateNationalityDto) {
        const nationality = this.nationalityRepository.create(createNationalityDto);
        return await this.nationalityRepository.save(nationality);
    }

    async findAll() {
        return await this.nationalityRepository.find();
    }

    async findOne(id: string) {
        const nationality = await this.nationalityRepository.findOne({ where: { id }});
        if (!nationality) {
            throw new NotFoundException(`Nationality with ID ${id} not found`);
        }
        return nationality;
    }

    async update(id: string, updateNationalityDto: UpdateNationalityDto) {
        const nationality = await this.nationalityRepository.preload({
          id,
          ...updateNationalityDto,
        });
        if (!nationality) {
          throw new NotFoundException(`Nationality with ID ${id} not found`);
        }
        return await this.nationalityRepository.save(nationality);
      }
    
      async remove(id: string) {
        const nationality = await this.findOne(id);
        await this.nationalityRepository.remove(nationality);
      }
}

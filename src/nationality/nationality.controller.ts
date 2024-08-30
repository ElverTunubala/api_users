import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { NationalityService } from './nationality.service';

@Controller('nationality')
export class NationalityController {
    constructor(private readonly nationalityService: NationalityService) {}

    @Get()
    async findAll() {
        return await this.nationalityService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.nationalityService.findOne(id);
    }

    @Post()
    async create(@Body() createNationalityDto: CreateNationalityDto) {
        return await this.nationalityService.create(createNationalityDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateNationalityDto: UpdateNationalityDto) {
        return await this.nationalityService.update(id, updateNationalityDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.nationalityService.remove(id);
    }

}

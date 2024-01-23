import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaQuery } from './entities/media.query';
import { MediaController } from './media.controller';
import { Media } from './entities/media.entity';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService, MediaQuery],
  exports: [MediaService],
})
export class MediaModule {}

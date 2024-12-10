import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './users/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/another_knowledge_base'),
    ArticlesModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'supersecretkey',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [JwtStrategy],
})
export class AppModule {}

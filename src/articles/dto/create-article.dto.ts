import { IsString, IsArray } from "class-validator";

export class CreateArticleDto {
    @IsString()
    header: string

    @IsString()
    content: string

    @IsArray()
    @IsString( {each: true} )
    tags: string[]

    @IsString()
    attribute: "public" | "internal"
}

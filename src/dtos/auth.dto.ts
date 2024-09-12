import { IsEmail, IsLowercase, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterDTO {

    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;


}




export class LoginDTO {


    @IsString()
    @IsLowercase()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

}
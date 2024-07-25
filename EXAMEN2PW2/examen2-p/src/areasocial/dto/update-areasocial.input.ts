// src/libro/dto/update-libro.input.ts
import { CreateAreasocialInput} from './create-areasocial.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAreasocialInput extends PartialType(CreateAreasocialInput) {
  @Field(() => Int)
  id: number;
}

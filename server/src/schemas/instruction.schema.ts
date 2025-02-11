import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Instruction {
  @Prop({ required: true, type: String })
  instruction: string;
}

export const InstructionSchema = SchemaFactory.createForClass(Instruction);

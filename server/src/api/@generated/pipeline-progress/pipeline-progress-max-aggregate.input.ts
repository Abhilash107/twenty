import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PipelineProgressMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;

  @Field(() => Boolean, { nullable: true })
  pipelineId?: true;

  @Field(() => Boolean, { nullable: true })
  pipelineStageId?: true;

  @Field(() => Boolean, { nullable: true })
  associableType?: true;

  @Field(() => Boolean, { nullable: true })
  associableId?: true;
}

import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
class ItemEntity {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  price: number;
}

export default ItemEntity;

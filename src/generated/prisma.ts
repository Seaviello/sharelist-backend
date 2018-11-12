import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    permissions: <T = Permission[]>(args: { where?: PermissionWhereInput, orderBy?: PermissionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stocks: <T = Stock[]>(args: { where?: StockWhereInput, orderBy?: StockOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lists: <T = List[]>(args: { where?: ListWhereInput, orderBy?: ListOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Item[]>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    permission: <T = Permission | null>(args: { where: PermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stock: <T = Stock | null>(args: { where: StockWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    list: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    permissionsConnection: <T = PermissionConnection>(args: { where?: PermissionWhereInput, orderBy?: PermissionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stocksConnection: <T = StockConnection>(args: { where?: StockWhereInput, orderBy?: StockOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    listsConnection: <T = ListConnection>(args: { where?: ListWhereInput, orderBy?: ListOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPermission: <T = Permission>(args: { data: PermissionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStock: <T = Stock>(args: { data: StockCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createList: <T = List>(args: { data: ListCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePermission: <T = Permission | null>(args: { data: PermissionUpdateInput, where: PermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStock: <T = Stock | null>(args: { data: StockUpdateInput, where: StockWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateList: <T = List | null>(args: { data: ListUpdateInput, where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePermission: <T = Permission | null>(args: { where: PermissionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStock: <T = Stock | null>(args: { where: StockWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteList: <T = List | null>(args: { where: ListWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPermission: <T = Permission>(args: { where: PermissionWhereUniqueInput, create: PermissionCreateInput, update: PermissionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStock: <T = Stock>(args: { where: StockWhereUniqueInput, create: StockCreateInput, update: StockUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertList: <T = List>(args: { where: ListWhereUniqueInput, create: ListCreateInput, update: ListUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPermissions: <T = BatchPayload>(args: { data: PermissionUpdateManyMutationInput, where?: PermissionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStocks: <T = BatchPayload>(args: { data: StockUpdateManyMutationInput, where?: StockWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLists: <T = BatchPayload>(args: { data: ListUpdateManyMutationInput, where?: ListWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateManyMutationInput, where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPermissions: <T = BatchPayload>(args: { where?: PermissionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStocks: <T = BatchPayload>(args: { where?: StockWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLists: <T = BatchPayload>(args: { where?: ListWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    permission: <T = PermissionSubscriptionPayload | null>(args: { where?: PermissionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stock: <T = StockSubscriptionPayload | null>(args: { where?: StockSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    list: <T = ListSubscriptionPayload | null>(args: { where?: ListSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Permission: (where?: PermissionWhereInput) => Promise<boolean>
  Stock: (where?: StockWhereInput) => Promise<boolean>
  List: (where?: ListWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateItem {
  count: Int!
}

type AggregateList {
  count: Int!
}

type AggregatePermission {
  count: Int!
}

type AggregateStock {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Item implements Node {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  title: String!
  description: String
  owner: UserCreateOneWithoutItemsInput!
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutOwnerInput {
  title: String!
  description: String
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateDataInput {
  title: String
  description: String
  owner: UserUpdateOneRequiredWithoutItemsInput
}

input ItemUpdateInput {
  title: String
  description: String
  owner: UserUpdateOneRequiredWithoutItemsInput
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
}

input ItemUpdateManyMutationInput {
  title: String
  description: String
}

input ItemUpdateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ItemUpdateOneRequiredInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
}

input ItemUpdateWithoutOwnerDataInput {
  title: String
  description: String
}

input ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateDataInput!
}

input ItemUpdateWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutOwnerDataInput!
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutOwnerDataInput!
  create: ItemCreateWithoutOwnerInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  owner: UserWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

type List implements Node {
  id: ID!
  title: String!
  type: ListType!
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
  parentList: List
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

"""A connection to a list of items."""
type ListConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ListEdge]!
  aggregate: AggregateList!
}

input ListCreateInput {
  title: String!
  type: ListType!
  owner: UserCreateOneWithoutListsInput!
  permissions: PermissionCreateManyWithoutListIdInput
  parentList: ListCreateOneInput
  items: ItemCreateManyInput
}

input ListCreateManyWithoutOwnerInput {
  create: [ListCreateWithoutOwnerInput!]
  connect: [ListWhereUniqueInput!]
}

input ListCreateOneInput {
  create: ListCreateInput
  connect: ListWhereUniqueInput
}

input ListCreateOneWithoutPermissionsInput {
  create: ListCreateWithoutPermissionsInput
  connect: ListWhereUniqueInput
}

input ListCreateWithoutOwnerInput {
  title: String!
  type: ListType!
  permissions: PermissionCreateManyWithoutListIdInput
  parentList: ListCreateOneInput
  items: ItemCreateManyInput
}

input ListCreateWithoutPermissionsInput {
  title: String!
  type: ListType!
  owner: UserCreateOneWithoutListsInput!
  parentList: ListCreateOneInput
  items: ItemCreateManyInput
}

"""An edge in a connection."""
type ListEdge {
  """The item at the end of the edge."""
  node: List!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ListOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ListPreviousValues {
  id: ID!
  title: String!
  type: ListType!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ListSubscriptionPayload {
  mutation: MutationType!
  node: List
  updatedFields: [String!]
  previousValues: ListPreviousValues
}

input ListSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ListSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ListWhereInput
}

enum ListType {
  INVENTORY
  CHECKLIST
}

input ListUpdateDataInput {
  title: String
  type: ListType
  owner: UserUpdateOneRequiredWithoutListsInput
  permissions: PermissionUpdateManyWithoutListIdInput
  parentList: ListUpdateOneInput
  items: ItemUpdateManyInput
}

input ListUpdateInput {
  title: String
  type: ListType
  owner: UserUpdateOneRequiredWithoutListsInput
  permissions: PermissionUpdateManyWithoutListIdInput
  parentList: ListUpdateOneInput
  items: ItemUpdateManyInput
}

input ListUpdateManyMutationInput {
  title: String
  type: ListType
}

input ListUpdateManyWithoutOwnerInput {
  create: [ListCreateWithoutOwnerInput!]
  connect: [ListWhereUniqueInput!]
  disconnect: [ListWhereUniqueInput!]
  delete: [ListWhereUniqueInput!]
  update: [ListUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ListUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ListUpdateOneInput {
  create: ListCreateInput
  connect: ListWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ListUpdateDataInput
  upsert: ListUpsertNestedInput
}

input ListUpdateOneRequiredInput {
  create: ListCreateInput
  connect: ListWhereUniqueInput
  update: ListUpdateDataInput
  upsert: ListUpsertNestedInput
}

input ListUpdateOneRequiredWithoutPermissionsInput {
  create: ListCreateWithoutPermissionsInput
  connect: ListWhereUniqueInput
  update: ListUpdateWithoutPermissionsDataInput
  upsert: ListUpsertWithoutPermissionsInput
}

input ListUpdateWithoutOwnerDataInput {
  title: String
  type: ListType
  permissions: PermissionUpdateManyWithoutListIdInput
  parentList: ListUpdateOneInput
  items: ItemUpdateManyInput
}

input ListUpdateWithoutPermissionsDataInput {
  title: String
  type: ListType
  owner: UserUpdateOneRequiredWithoutListsInput
  parentList: ListUpdateOneInput
  items: ItemUpdateManyInput
}

input ListUpdateWithWhereUniqueWithoutOwnerInput {
  where: ListWhereUniqueInput!
  data: ListUpdateWithoutOwnerDataInput!
}

input ListUpsertNestedInput {
  update: ListUpdateDataInput!
  create: ListCreateInput!
}

input ListUpsertWithoutPermissionsInput {
  update: ListUpdateWithoutPermissionsDataInput!
  create: ListCreateWithoutPermissionsInput!
}

input ListUpsertWithWhereUniqueWithoutOwnerInput {
  where: ListWhereUniqueInput!
  update: ListUpdateWithoutOwnerDataInput!
  create: ListCreateWithoutOwnerInput!
}

input ListWhereInput {
  """Logical AND on all given filters."""
  AND: [ListWhereInput!]

  """Logical OR on all given filters."""
  OR: [ListWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ListWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  type: ListType

  """All values that are not equal to given value."""
  type_not: ListType

  """All values that are contained in given list."""
  type_in: [ListType!]

  """All values that are not contained in given list."""
  type_not_in: [ListType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  owner: UserWhereInput
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  parentList: ListWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
}

input ListWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createPermission(data: PermissionCreateInput!): Permission!
  createStock(data: StockCreateInput!): Stock!
  createList(data: ListCreateInput!): List!
  createItem(data: ItemCreateInput!): Item!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePermission(data: PermissionUpdateInput!, where: PermissionWhereUniqueInput!): Permission
  updateStock(data: StockUpdateInput!, where: StockWhereUniqueInput!): Stock
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  deleteUser(where: UserWhereUniqueInput!): User
  deletePermission(where: PermissionWhereUniqueInput!): Permission
  deleteStock(where: StockWhereUniqueInput!): Stock
  deleteList(where: ListWhereUniqueInput!): List
  deleteItem(where: ItemWhereUniqueInput!): Item
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPermission(where: PermissionWhereUniqueInput!, create: PermissionCreateInput!, update: PermissionUpdateInput!): Permission!
  upsertStock(where: StockWhereUniqueInput!, create: StockCreateInput!, update: StockUpdateInput!): Stock!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyPermissions(data: PermissionUpdateManyMutationInput!, where: PermissionWhereInput): BatchPayload!
  updateManyStocks(data: StockUpdateManyMutationInput!, where: StockWhereInput): BatchPayload!
  updateManyLists(data: ListUpdateManyMutationInput!, where: ListWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPermissions(where: PermissionWhereInput): BatchPayload!
  deleteManyStocks(where: StockWhereInput): BatchPayload!
  deleteManyLists(where: ListWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Permission implements Node {
  id: ID!
  userId: User!
  listId: List!
  type: PermissionType!
}

"""A connection to a list of items."""
type PermissionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  type: PermissionType!
  userId: UserCreateOneWithoutPermissionsInput!
  listId: ListCreateOneWithoutPermissionsInput!
}

input PermissionCreateManyWithoutListIdInput {
  create: [PermissionCreateWithoutListIdInput!]
  connect: [PermissionWhereUniqueInput!]
}

input PermissionCreateManyWithoutUserIdInput {
  create: [PermissionCreateWithoutUserIdInput!]
  connect: [PermissionWhereUniqueInput!]
}

input PermissionCreateWithoutListIdInput {
  type: PermissionType!
  userId: UserCreateOneWithoutPermissionsInput!
}

input PermissionCreateWithoutUserIdInput {
  type: PermissionType!
  listId: ListCreateOneWithoutPermissionsInput!
}

"""An edge in a connection."""
type PermissionEdge {
  """The item at the end of the edge."""
  node: Permission!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PermissionOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PermissionPreviousValues {
  id: ID!
  type: PermissionType!
}

type PermissionSubscriptionPayload {
  mutation: MutationType!
  node: Permission
  updatedFields: [String!]
  previousValues: PermissionPreviousValues
}

input PermissionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PermissionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PermissionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PermissionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PermissionWhereInput
}

enum PermissionType {
  ADMIN
  EDITOR
  READONLY
}

input PermissionUpdateInput {
  type: PermissionType
  userId: UserUpdateOneRequiredWithoutPermissionsInput
  listId: ListUpdateOneRequiredWithoutPermissionsInput
}

input PermissionUpdateManyMutationInput {
  type: PermissionType
}

input PermissionUpdateManyWithoutListIdInput {
  create: [PermissionCreateWithoutListIdInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  delete: [PermissionWhereUniqueInput!]
  update: [PermissionUpdateWithWhereUniqueWithoutListIdInput!]
  upsert: [PermissionUpsertWithWhereUniqueWithoutListIdInput!]
}

input PermissionUpdateManyWithoutUserIdInput {
  create: [PermissionCreateWithoutUserIdInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  delete: [PermissionWhereUniqueInput!]
  update: [PermissionUpdateWithWhereUniqueWithoutUserIdInput!]
  upsert: [PermissionUpsertWithWhereUniqueWithoutUserIdInput!]
}

input PermissionUpdateWithoutListIdDataInput {
  type: PermissionType
  userId: UserUpdateOneRequiredWithoutPermissionsInput
}

input PermissionUpdateWithoutUserIdDataInput {
  type: PermissionType
  listId: ListUpdateOneRequiredWithoutPermissionsInput
}

input PermissionUpdateWithWhereUniqueWithoutListIdInput {
  where: PermissionWhereUniqueInput!
  data: PermissionUpdateWithoutListIdDataInput!
}

input PermissionUpdateWithWhereUniqueWithoutUserIdInput {
  where: PermissionWhereUniqueInput!
  data: PermissionUpdateWithoutUserIdDataInput!
}

input PermissionUpsertWithWhereUniqueWithoutListIdInput {
  where: PermissionWhereUniqueInput!
  update: PermissionUpdateWithoutListIdDataInput!
  create: PermissionCreateWithoutListIdInput!
}

input PermissionUpsertWithWhereUniqueWithoutUserIdInput {
  where: PermissionWhereUniqueInput!
  update: PermissionUpdateWithoutUserIdDataInput!
  create: PermissionCreateWithoutUserIdInput!
}

input PermissionWhereInput {
  """Logical AND on all given filters."""
  AND: [PermissionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PermissionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PermissionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: PermissionType

  """All values that are not equal to given value."""
  type_not: PermissionType

  """All values that are contained in given list."""
  type_in: [PermissionType!]

  """All values that are not contained in given list."""
  type_not_in: [PermissionType!]
  userId: UserWhereInput
  listId: ListWhereInput
}

input PermissionWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission]!
  stocks(where: StockWhereInput, orderBy: StockOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stock]!
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  user(where: UserWhereUniqueInput!): User
  permission(where: PermissionWhereUniqueInput!): Permission
  stock(where: StockWhereUniqueInput!): Stock
  list(where: ListWhereUniqueInput!): List
  item(where: ItemWhereUniqueInput!): Item
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  permissionsConnection(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PermissionConnection!
  stocksConnection(where: StockWhereInput, orderBy: StockOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StockConnection!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Stock implements Node {
  id: ID!
  listId: List!
  itemId: Item!
  quantity: Int
  unit: Unit
}

"""A connection to a list of items."""
type StockConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StockEdge]!
  aggregate: AggregateStock!
}

input StockCreateInput {
  quantity: Int
  unit: Unit
  listId: ListCreateOneInput!
  itemId: ItemCreateOneInput!
}

"""An edge in a connection."""
type StockEdge {
  """The item at the end of the edge."""
  node: Stock!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StockOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  unit_ASC
  unit_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type StockPreviousValues {
  id: ID!
  quantity: Int
  unit: Unit
}

type StockSubscriptionPayload {
  mutation: MutationType!
  node: Stock
  updatedFields: [String!]
  previousValues: StockPreviousValues
}

input StockSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StockSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StockSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StockSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StockWhereInput
}

input StockUpdateInput {
  quantity: Int
  unit: Unit
  listId: ListUpdateOneRequiredInput
  itemId: ItemUpdateOneRequiredInput
}

input StockUpdateManyMutationInput {
  quantity: Int
  unit: Unit
}

input StockWhereInput {
  """Logical AND on all given filters."""
  AND: [StockWhereInput!]

  """Logical OR on all given filters."""
  OR: [StockWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StockWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  unit: Unit

  """All values that are not equal to given value."""
  unit_not: Unit

  """All values that are contained in given list."""
  unit_in: [Unit!]

  """All values that are not contained in given list."""
  unit_not_in: [Unit!]
  listId: ListWhereInput
  itemId: ItemWhereInput
}

input StockWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  permission(where: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload
  stock(where: StockSubscriptionWhereInput): StockSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
}

enum Unit {
  COUNT
  MG
  ML
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List!]
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  lists: ListCreateManyWithoutOwnerInput
  items: ItemCreateManyWithoutOwnerInput
  permissions: PermissionCreateManyWithoutUserIdInput
}

input UserCreateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutListsInput {
  create: UserCreateWithoutListsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPermissionsInput {
  create: UserCreateWithoutPermissionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutItemsInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  lists: ListCreateManyWithoutOwnerInput
  permissions: PermissionCreateManyWithoutUserIdInput
}

input UserCreateWithoutListsInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  items: ItemCreateManyWithoutOwnerInput
  permissions: PermissionCreateManyWithoutUserIdInput
}

input UserCreateWithoutPermissionsInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  lists: ListCreateManyWithoutOwnerInput
  items: ItemCreateManyWithoutOwnerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  lists: ListUpdateManyWithoutOwnerInput
  items: ItemUpdateManyWithoutOwnerInput
  permissions: PermissionUpdateManyWithoutUserIdInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
}

input UserUpdateOneRequiredWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
}

input UserUpdateOneRequiredWithoutListsInput {
  create: UserCreateWithoutListsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutListsDataInput
  upsert: UserUpsertWithoutListsInput
}

input UserUpdateOneRequiredWithoutPermissionsInput {
  create: UserCreateWithoutPermissionsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPermissionsDataInput
  upsert: UserUpsertWithoutPermissionsInput
}

input UserUpdateWithoutItemsDataInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  lists: ListUpdateManyWithoutOwnerInput
  permissions: PermissionUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutListsDataInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  items: ItemUpdateManyWithoutOwnerInput
  permissions: PermissionUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutPermissionsDataInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  lists: ListUpdateManyWithoutOwnerInput
  items: ItemUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput!
  create: UserCreateWithoutItemsInput!
}

input UserUpsertWithoutListsInput {
  update: UserUpdateWithoutListsDataInput!
  create: UserCreateWithoutListsInput!
}

input UserUpsertWithoutPermissionsInput {
  update: UserUpdateWithoutPermissionsDataInput!
  create: UserCreateWithoutPermissionsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  resetToken: String

  """All values that are not equal to given value."""
  resetToken_not: String

  """All values that are contained in given list."""
  resetToken_in: [String!]

  """All values that are not contained in given list."""
  resetToken_not_in: [String!]

  """All values less than the given value."""
  resetToken_lt: String

  """All values less than or equal the given value."""
  resetToken_lte: String

  """All values greater than the given value."""
  resetToken_gt: String

  """All values greater than or equal the given value."""
  resetToken_gte: String

  """All values containing the given string."""
  resetToken_contains: String

  """All values not containing the given string."""
  resetToken_not_contains: String

  """All values starting with the given string."""
  resetToken_starts_with: String

  """All values not starting with the given string."""
  resetToken_not_starts_with: String

  """All values ending with the given string."""
  resetToken_ends_with: String

  """All values not ending with the given string."""
  resetToken_not_ends_with: String
  resetTokenExpiry: Float

  """All values that are not equal to given value."""
  resetTokenExpiry_not: Float

  """All values that are contained in given list."""
  resetTokenExpiry_in: [Float!]

  """All values that are not contained in given list."""
  resetTokenExpiry_not_in: [Float!]

  """All values less than the given value."""
  resetTokenExpiry_lt: Float

  """All values less than or equal the given value."""
  resetTokenExpiry_lte: Float

  """All values greater than the given value."""
  resetTokenExpiry_gt: Float

  """All values greater than or equal the given value."""
  resetTokenExpiry_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  lists_every: ListWhereInput
  lists_some: ListWhereInput
  lists_none: ListWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'resetToken_ASC' |
  'resetToken_DESC' |
  'resetTokenExpiry_ASC' |
  'resetTokenExpiry_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ListOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'type_ASC' |
  'type_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type PermissionType =   'ADMIN' |
  'EDITOR' |
  'READONLY'

export type PermissionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ListType =   'INVENTORY' |
  'CHECKLIST'

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type Unit =   'COUNT' |
  'MG' |
  'ML'

export type StockOrderByInput =   'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'unit_ASC' |
  'unit_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface StockCreateInput {
  quantity?: Int
  unit?: Unit
  listId: ListCreateOneInput
  itemId: ItemCreateOneInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  resetToken?: String
  resetToken_not?: String
  resetToken_in?: String[] | String
  resetToken_not_in?: String[] | String
  resetToken_lt?: String
  resetToken_lte?: String
  resetToken_gt?: String
  resetToken_gte?: String
  resetToken_contains?: String
  resetToken_not_contains?: String
  resetToken_starts_with?: String
  resetToken_not_starts_with?: String
  resetToken_ends_with?: String
  resetToken_not_ends_with?: String
  resetTokenExpiry?: Float
  resetTokenExpiry_not?: Float
  resetTokenExpiry_in?: Float[] | Float
  resetTokenExpiry_not_in?: Float[] | Float
  resetTokenExpiry_lt?: Float
  resetTokenExpiry_lte?: Float
  resetTokenExpiry_gt?: Float
  resetTokenExpiry_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  lists_every?: ListWhereInput
  lists_some?: ListWhereInput
  lists_none?: ListWhereInput
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
  permissions_every?: PermissionWhereInput
  permissions_some?: PermissionWhereInput
  permissions_none?: PermissionWhereInput
}

export interface ListCreateOneInput {
  create?: ListCreateInput
  connect?: ListWhereUniqueInput
}

export interface UserUpdateOneRequiredWithoutItemsInput {
  create?: UserCreateWithoutItemsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutItemsDataInput
  upsert?: UserUpsertWithoutItemsInput
}

export interface ListCreateInput {
  title: String
  type: ListType
  owner: UserCreateOneWithoutListsInput
  permissions?: PermissionCreateManyWithoutListIdInput
  parentList?: ListCreateOneInput
  items?: ItemCreateManyInput
}

export interface ListUpdateWithoutOwnerDataInput {
  title?: String
  type?: ListType
  permissions?: PermissionUpdateManyWithoutListIdInput
  parentList?: ListUpdateOneInput
  items?: ItemUpdateManyInput
}

export interface UserCreateOneWithoutListsInput {
  create?: UserCreateWithoutListsInput
  connect?: UserWhereUniqueInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  NOT?: ItemWhereInput[] | ItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  owner?: UserWhereInput
}

export interface UserCreateWithoutListsInput {
  name: String
  email: String
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  items?: ItemCreateManyWithoutOwnerInput
  permissions?: PermissionCreateManyWithoutUserIdInput
}

export interface PermissionWhereInput {
  AND?: PermissionWhereInput[] | PermissionWhereInput
  OR?: PermissionWhereInput[] | PermissionWhereInput
  NOT?: PermissionWhereInput[] | PermissionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: PermissionType
  type_not?: PermissionType
  type_in?: PermissionType[] | PermissionType
  type_not_in?: PermissionType[] | PermissionType
  userId?: UserWhereInput
  listId?: ListWhereInput
}

export interface PermissionCreateManyWithoutUserIdInput {
  create?: PermissionCreateWithoutUserIdInput[] | PermissionCreateWithoutUserIdInput
  connect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
}

export interface ListWhereInput {
  AND?: ListWhereInput[] | ListWhereInput
  OR?: ListWhereInput[] | ListWhereInput
  NOT?: ListWhereInput[] | ListWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  type?: ListType
  type_not?: ListType
  type_in?: ListType[] | ListType
  type_not_in?: ListType[] | ListType
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  owner?: UserWhereInput
  permissions_every?: PermissionWhereInput
  permissions_some?: PermissionWhereInput
  permissions_none?: PermissionWhereInput
  parentList?: ListWhereInput
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
}

export interface PermissionCreateWithoutUserIdInput {
  type: PermissionType
  listId: ListCreateOneWithoutPermissionsInput
}

export interface StockWhereInput {
  AND?: StockWhereInput[] | StockWhereInput
  OR?: StockWhereInput[] | StockWhereInput
  NOT?: StockWhereInput[] | StockWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  unit?: Unit
  unit_not?: Unit
  unit_in?: Unit[] | Unit
  unit_not_in?: Unit[] | Unit
  listId?: ListWhereInput
  itemId?: ItemWhereInput
}

export interface ListCreateOneWithoutPermissionsInput {
  create?: ListCreateWithoutPermissionsInput
  connect?: ListWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface ListCreateWithoutPermissionsInput {
  title: String
  type: ListType
  owner: UserCreateOneWithoutListsInput
  parentList?: ListCreateOneInput
  items?: ItemCreateManyInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ItemCreateManyInput {
  create?: ItemCreateInput[] | ItemCreateInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface StockWhereUniqueInput {
  id?: ID_Input
}

export interface ItemCreateInput {
  title: String
  description?: String
  owner: UserCreateOneWithoutItemsInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutItemsInput {
  create?: UserCreateWithoutItemsInput
  connect?: UserWhereUniqueInput
}

export interface StockUpdateManyMutationInput {
  quantity?: Int
  unit?: Unit
}

export interface UserCreateWithoutItemsInput {
  name: String
  email: String
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: ListCreateManyWithoutOwnerInput
  permissions?: PermissionCreateManyWithoutUserIdInput
}

export interface UserUpdateManyMutationInput {
  name?: String
  email?: String
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
}

export interface PermissionCreateInput {
  type: PermissionType
  userId: UserCreateOneWithoutPermissionsInput
  listId: ListCreateOneWithoutPermissionsInput
}

export interface ListUpdateInput {
  title?: String
  type?: ListType
  owner?: UserUpdateOneRequiredWithoutListsInput
  permissions?: PermissionUpdateManyWithoutListIdInput
  parentList?: ListUpdateOneInput
  items?: ItemUpdateManyInput
}

export interface UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput
  create: UserCreateWithoutItemsInput
}

export interface ItemUpdateOneRequiredInput {
  create?: ItemCreateInput
  connect?: ItemWhereUniqueInput
  update?: ItemUpdateDataInput
  upsert?: ItemUpsertNestedInput
}

export interface ItemCreateOneInput {
  create?: ItemCreateInput
  connect?: ItemWhereUniqueInput
}

export interface StockUpdateInput {
  quantity?: Int
  unit?: Unit
  listId?: ListUpdateOneRequiredInput
  itemId?: ItemUpdateOneRequiredInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: ListUpdateManyWithoutOwnerInput
  items?: ItemUpdateManyWithoutOwnerInput
  permissions?: PermissionUpdateManyWithoutUserIdInput
}

export interface ListUpsertWithWhereUniqueWithoutOwnerInput {
  where: ListWhereUniqueInput
  update: ListUpdateWithoutOwnerDataInput
  create: ListCreateWithoutOwnerInput
}

export interface ListUpdateManyWithoutOwnerInput {
  create?: ListCreateWithoutOwnerInput[] | ListCreateWithoutOwnerInput
  connect?: ListWhereUniqueInput[] | ListWhereUniqueInput
  disconnect?: ListWhereUniqueInput[] | ListWhereUniqueInput
  delete?: ListWhereUniqueInput[] | ListWhereUniqueInput
  update?: ListUpdateWithWhereUniqueWithoutOwnerInput[] | ListUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: ListUpsertWithWhereUniqueWithoutOwnerInput[] | ListUpsertWithWhereUniqueWithoutOwnerInput
}

export interface UserUpsertWithoutListsInput {
  update: UserUpdateWithoutListsDataInput
  create: UserCreateWithoutListsInput
}

export interface ListUpdateWithWhereUniqueWithoutOwnerInput {
  where: ListWhereUniqueInput
  data: ListUpdateWithoutOwnerDataInput
}

export interface ListUpsertWithoutPermissionsInput {
  update: ListUpdateWithoutPermissionsDataInput
  create: ListCreateWithoutPermissionsInput
}

export interface UserUpdateWithoutItemsDataInput {
  name?: String
  email?: String
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: ListUpdateManyWithoutOwnerInput
  permissions?: PermissionUpdateManyWithoutUserIdInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: ListCreateManyWithoutOwnerInput
  items?: ItemCreateManyWithoutOwnerInput
  permissions?: PermissionCreateManyWithoutUserIdInput
}

export interface PermissionUpdateManyWithoutListIdInput {
  create?: PermissionCreateWithoutListIdInput[] | PermissionCreateWithoutListIdInput
  connect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
  disconnect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
  delete?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
  update?: PermissionUpdateWithWhereUniqueWithoutListIdInput[] | PermissionUpdateWithWhereUniqueWithoutListIdInput
  upsert?: PermissionUpsertWithWhereUniqueWithoutListIdInput[] | PermissionUpsertWithWhereUniqueWithoutListIdInput
}

export interface ListCreateWithoutOwnerInput {
  title: String
  type: ListType
  permissions?: PermissionCreateManyWithoutListIdInput
  parentList?: ListCreateOneInput
  items?: ItemCreateManyInput
}

export interface PermissionUpdateWithWhereUniqueWithoutListIdInput {
  where: PermissionWhereUniqueInput
  data: PermissionUpdateWithoutListIdDataInput
}

export interface PermissionCreateWithoutListIdInput {
  type: PermissionType
  userId: UserCreateOneWithoutPermissionsInput
}

export interface PermissionUpdateWithoutListIdDataInput {
  type?: PermissionType
  userId?: UserUpdateOneRequiredWithoutPermissionsInput
}

export interface UserCreateWithoutPermissionsInput {
  name: String
  email: String
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: ListCreateManyWithoutOwnerInput
  items?: ItemCreateManyWithoutOwnerInput
}

export interface UserUpdateOneRequiredWithoutPermissionsInput {
  create?: UserCreateWithoutPermissionsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutPermissionsDataInput
  upsert?: UserUpsertWithoutPermissionsInput
}

export interface ItemCreateWithoutOwnerInput {
  title: String
  description?: String
}

export interface UserUpdateWithoutPermissionsDataInput {
  name?: String
  email?: String
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: ListUpdateManyWithoutOwnerInput
  items?: ItemUpdateManyWithoutOwnerInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemWhereInput
}

export interface ItemUpdateManyWithoutOwnerInput {
  create?: ItemCreateWithoutOwnerInput[] | ItemCreateWithoutOwnerInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutOwnerInput[] | ItemUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput[] | ItemUpsertWithWhereUniqueWithoutOwnerInput
}

export interface StockSubscriptionWhereInput {
  AND?: StockSubscriptionWhereInput[] | StockSubscriptionWhereInput
  OR?: StockSubscriptionWhereInput[] | StockSubscriptionWhereInput
  NOT?: StockSubscriptionWhereInput[] | StockSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StockWhereInput
}

export interface ItemUpdateWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutOwnerDataInput
}

export interface ItemUpdateManyMutationInput {
  title?: String
  description?: String
}

export interface ItemUpdateWithoutOwnerDataInput {
  title?: String
  description?: String
}

export interface ListWhereUniqueInput {
  id?: ID_Input
}

export interface ItemUpsertWithWhereUniqueWithoutOwnerInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutOwnerDataInput
  create: ItemCreateWithoutOwnerInput
}

export interface PermissionUpdateManyMutationInput {
  type?: PermissionType
}

export interface UserUpsertWithoutPermissionsInput {
  update: UserUpdateWithoutPermissionsDataInput
  create: UserCreateWithoutPermissionsInput
}

export interface ItemUpsertNestedInput {
  update: ItemUpdateDataInput
  create: ItemCreateInput
}

export interface PermissionUpsertWithWhereUniqueWithoutListIdInput {
  where: PermissionWhereUniqueInput
  update: PermissionUpdateWithoutListIdDataInput
  create: PermissionCreateWithoutListIdInput
}

export interface PermissionUpdateInput {
  type?: PermissionType
  userId?: UserUpdateOneRequiredWithoutPermissionsInput
  listId?: ListUpdateOneRequiredWithoutPermissionsInput
}

export interface ListUpdateOneInput {
  create?: ListCreateInput
  connect?: ListWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ListUpdateDataInput
  upsert?: ListUpsertNestedInput
}

export interface PermissionUpsertWithWhereUniqueWithoutUserIdInput {
  where: PermissionWhereUniqueInput
  update: PermissionUpdateWithoutUserIdDataInput
  create: PermissionCreateWithoutUserIdInput
}

export interface ListUpdateDataInput {
  title?: String
  type?: ListType
  owner?: UserUpdateOneRequiredWithoutListsInput
  permissions?: PermissionUpdateManyWithoutListIdInput
  parentList?: ListUpdateOneInput
  items?: ItemUpdateManyInput
}

export interface ListCreateManyWithoutOwnerInput {
  create?: ListCreateWithoutOwnerInput[] | ListCreateWithoutOwnerInput
  connect?: ListWhereUniqueInput[] | ListWhereUniqueInput
}

export interface UserUpdateOneRequiredWithoutListsInput {
  create?: UserCreateWithoutListsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutListsDataInput
  upsert?: UserUpsertWithoutListsInput
}

export interface UserCreateOneWithoutPermissionsInput {
  create?: UserCreateWithoutPermissionsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutListsDataInput {
  name?: String
  email?: String
  password?: String
  resetToken?: String
  resetTokenExpiry?: Float
  items?: ItemUpdateManyWithoutOwnerInput
  permissions?: PermissionUpdateManyWithoutUserIdInput
}

export interface PermissionSubscriptionWhereInput {
  AND?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput
  OR?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput
  NOT?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PermissionWhereInput
}

export interface PermissionUpdateManyWithoutUserIdInput {
  create?: PermissionCreateWithoutUserIdInput[] | PermissionCreateWithoutUserIdInput
  connect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
  disconnect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
  delete?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
  update?: PermissionUpdateWithWhereUniqueWithoutUserIdInput[] | PermissionUpdateWithWhereUniqueWithoutUserIdInput
  upsert?: PermissionUpsertWithWhereUniqueWithoutUserIdInput[] | PermissionUpsertWithWhereUniqueWithoutUserIdInput
}

export interface ListUpdateManyMutationInput {
  title?: String
  type?: ListType
}

export interface PermissionUpdateWithWhereUniqueWithoutUserIdInput {
  where: PermissionWhereUniqueInput
  data: PermissionUpdateWithoutUserIdDataInput
}

export interface ListUpdateOneRequiredInput {
  create?: ListCreateInput
  connect?: ListWhereUniqueInput
  update?: ListUpdateDataInput
  upsert?: ListUpsertNestedInput
}

export interface PermissionUpdateWithoutUserIdDataInput {
  type?: PermissionType
  listId?: ListUpdateOneRequiredWithoutPermissionsInput
}

export interface ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateDataInput
  create: ItemCreateInput
}

export interface ListUpdateOneRequiredWithoutPermissionsInput {
  create?: ListCreateWithoutPermissionsInput
  connect?: ListWhereUniqueInput
  update?: ListUpdateWithoutPermissionsDataInput
  upsert?: ListUpsertWithoutPermissionsInput
}

export interface ItemCreateManyWithoutOwnerInput {
  create?: ItemCreateWithoutOwnerInput[] | ItemCreateWithoutOwnerInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface ItemUpdateDataInput {
  title?: String
  description?: String
  owner?: UserUpdateOneRequiredWithoutItemsInput
}

export interface ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateDataInput
}

export interface ItemUpdateManyInput {
  create?: ItemCreateInput[] | ItemCreateInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueNestedInput[] | ItemUpdateWithWhereUniqueNestedInput
  upsert?: ItemUpsertWithWhereUniqueNestedInput[] | ItemUpsertWithWhereUniqueNestedInput
}

export interface ListUpdateWithoutPermissionsDataInput {
  title?: String
  type?: ListType
  owner?: UserUpdateOneRequiredWithoutListsInput
  parentList?: ListUpdateOneInput
  items?: ItemUpdateManyInput
}

export interface ListSubscriptionWhereInput {
  AND?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput
  OR?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput
  NOT?: ListSubscriptionWhereInput[] | ListSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ListWhereInput
}

export interface PermissionCreateManyWithoutListIdInput {
  create?: PermissionCreateWithoutListIdInput[] | PermissionCreateWithoutListIdInput
  connect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput
}

export interface ListUpsertNestedInput {
  update: ListUpdateDataInput
  create: ListCreateInput
}

export interface ItemUpdateInput {
  title?: String
  description?: String
  owner?: UserUpdateOneRequiredWithoutItemsInput
}

export interface PermissionWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ItemPreviousValues {
  id: ID_Output
  title: String
  description?: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  lists?: List[]
  items?: Item[]
  permissions?: Permission[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateItem {
  count: Int
}

export interface Stock extends Node {
  id: ID_Output
  listId: List
  itemId: Item
  quantity?: Int
  unit?: Unit
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

export interface ListPreviousValues {
  id: ID_Output
  title: String
  type: ListType
  createdAt: DateTime
  updatedAt: DateTime
}

export interface StockPreviousValues {
  id: ID_Output
  quantity?: Int
  unit?: Unit
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface ListEdge {
  node: List
  cursor: String
}

export interface AggregateList {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface StockEdge {
  node: Stock
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ListConnection {
  pageInfo: PageInfo
  edges: ListEdge[]
  aggregate: AggregateList
}

export interface AggregatePermission {
  count: Int
}

export interface ListSubscriptionPayload {
  mutation: MutationType
  node?: List
  updatedFields?: String[]
  previousValues?: ListPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PermissionConnection {
  pageInfo: PageInfo
  edges: PermissionEdge[]
  aggregate: AggregatePermission
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  resetToken?: String
  resetTokenExpiry?: Float
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
}

export interface Permission extends Node {
  id: ID_Output
  userId: User
  listId: List
  type: PermissionType
}

export interface AggregateStock {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PermissionEdge {
  node: Permission
  cursor: String
}

export interface StockSubscriptionPayload {
  mutation: MutationType
  node?: Stock
  updatedFields?: String[]
  previousValues?: StockPreviousValues
}

export interface Item extends Node {
  id: ID_Output
  title: String
  description?: String
  createdAt: DateTime
  updatedAt: DateTime
  owner: User
}

export interface PermissionPreviousValues {
  id: ID_Output
  type: PermissionType
}

export interface PermissionSubscriptionPayload {
  mutation: MutationType
  node?: Permission
  updatedFields?: String[]
  previousValues?: PermissionPreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface StockConnection {
  pageInfo: PageInfo
  edges: StockEdge[]
  aggregate: AggregateStock
}

export interface List extends Node {
  id: ID_Output
  title: String
  type: ListType
  createdAt: DateTime
  updatedAt: DateTime
  owner: User
  permissions?: Permission[]
  parentList?: List
  items?: Item[]
}

export interface BatchPayload {
  count: Long
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string
export const typeDefs = /* GraphQL */ `type AggregateItem {
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
  count: Long!
}

scalar DateTime

type Item {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
}

type ItemConnection {
  pageInfo: PageInfo!
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

type ItemEdge {
  node: Item!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
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
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
}

input ItemUpdateManyMutationInput {
  title: String
  description: String
}

input ItemUpdateManyWithoutOwnerInput {
  create: [ItemCreateWithoutOwnerInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ItemUpdateOneRequiredInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  connect: ItemWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owner: UserWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

type List {
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

type ListConnection {
  pageInfo: PageInfo!
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

type ListEdge {
  node: List!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListWhereInput
  AND: [ListSubscriptionWhereInput!]
  OR: [ListSubscriptionWhereInput!]
  NOT: [ListSubscriptionWhereInput!]
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
  delete: [ListWhereUniqueInput!]
  connect: [ListWhereUniqueInput!]
  disconnect: [ListWhereUniqueInput!]
  update: [ListUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ListUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ListUpdateOneInput {
  create: ListCreateInput
  update: ListUpdateDataInput
  upsert: ListUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ListWhereUniqueInput
}

input ListUpdateOneRequiredInput {
  create: ListCreateInput
  update: ListUpdateDataInput
  upsert: ListUpsertNestedInput
  connect: ListWhereUniqueInput
}

input ListUpdateOneRequiredWithoutPermissionsInput {
  create: ListCreateWithoutPermissionsInput
  update: ListUpdateWithoutPermissionsDataInput
  upsert: ListUpsertWithoutPermissionsInput
  connect: ListWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  type: ListType
  type_not: ListType
  type_in: [ListType!]
  type_not_in: [ListType!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owner: UserWhereInput
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  parentList: ListWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  AND: [ListWhereInput!]
  OR: [ListWhereInput!]
  NOT: [ListWhereInput!]
}

input ListWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createList(data: ListCreateInput!): List!
  updateList(data: ListUpdateInput!, where: ListWhereUniqueInput!): List
  updateManyLists(data: ListUpdateManyMutationInput!, where: ListWhereInput): BatchPayload!
  upsertList(where: ListWhereUniqueInput!, create: ListCreateInput!, update: ListUpdateInput!): List!
  deleteList(where: ListWhereUniqueInput!): List
  deleteManyLists(where: ListWhereInput): BatchPayload!
  createPermission(data: PermissionCreateInput!): Permission!
  updatePermission(data: PermissionUpdateInput!, where: PermissionWhereUniqueInput!): Permission
  updateManyPermissions(data: PermissionUpdateManyMutationInput!, where: PermissionWhereInput): BatchPayload!
  upsertPermission(where: PermissionWhereUniqueInput!, create: PermissionCreateInput!, update: PermissionUpdateInput!): Permission!
  deletePermission(where: PermissionWhereUniqueInput!): Permission
  deleteManyPermissions(where: PermissionWhereInput): BatchPayload!
  createStock(data: StockCreateInput!): Stock!
  updateStock(data: StockUpdateInput!, where: StockWhereUniqueInput!): Stock
  updateManyStocks(data: StockUpdateManyMutationInput!, where: StockWhereInput): BatchPayload!
  upsertStock(where: StockWhereUniqueInput!, create: StockCreateInput!, update: StockUpdateInput!): Stock!
  deleteStock(where: StockWhereUniqueInput!): Stock
  deleteManyStocks(where: StockWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Permission {
  id: ID!
  userId: User!
  listId: List!
  type: PermissionType!
}

type PermissionConnection {
  pageInfo: PageInfo!
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  userId: UserCreateOneWithoutPermissionsInput!
  listId: ListCreateOneWithoutPermissionsInput!
  type: PermissionType!
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
  userId: UserCreateOneWithoutPermissionsInput!
  type: PermissionType!
}

input PermissionCreateWithoutUserIdInput {
  listId: ListCreateOneWithoutPermissionsInput!
  type: PermissionType!
}

type PermissionEdge {
  node: Permission!
  cursor: String!
}

enum PermissionOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PermissionWhereInput
  AND: [PermissionSubscriptionWhereInput!]
  OR: [PermissionSubscriptionWhereInput!]
  NOT: [PermissionSubscriptionWhereInput!]
}

enum PermissionType {
  ADMIN
  EDITOR
  READONLY
}

input PermissionUpdateInput {
  userId: UserUpdateOneRequiredWithoutPermissionsInput
  listId: ListUpdateOneRequiredWithoutPermissionsInput
  type: PermissionType
}

input PermissionUpdateManyMutationInput {
  type: PermissionType
}

input PermissionUpdateManyWithoutListIdInput {
  create: [PermissionCreateWithoutListIdInput!]
  delete: [PermissionWhereUniqueInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  update: [PermissionUpdateWithWhereUniqueWithoutListIdInput!]
  upsert: [PermissionUpsertWithWhereUniqueWithoutListIdInput!]
}

input PermissionUpdateManyWithoutUserIdInput {
  create: [PermissionCreateWithoutUserIdInput!]
  delete: [PermissionWhereUniqueInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  update: [PermissionUpdateWithWhereUniqueWithoutUserIdInput!]
  upsert: [PermissionUpsertWithWhereUniqueWithoutUserIdInput!]
}

input PermissionUpdateWithoutListIdDataInput {
  userId: UserUpdateOneRequiredWithoutPermissionsInput
  type: PermissionType
}

input PermissionUpdateWithoutUserIdDataInput {
  listId: ListUpdateOneRequiredWithoutPermissionsInput
  type: PermissionType
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userId: UserWhereInput
  listId: ListWhereInput
  type: PermissionType
  type_not: PermissionType
  type_in: [PermissionType!]
  type_not_in: [PermissionType!]
  AND: [PermissionWhereInput!]
  OR: [PermissionWhereInput!]
  NOT: [PermissionWhereInput!]
}

input PermissionWhereUniqueInput {
  id: ID
}

type Query {
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  list(where: ListWhereUniqueInput!): List
  lists(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [List]!
  listsConnection(where: ListWhereInput, orderBy: ListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListConnection!
  permission(where: PermissionWhereUniqueInput!): Permission
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission]!
  permissionsConnection(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PermissionConnection!
  stock(where: StockWhereUniqueInput!): Stock
  stocks(where: StockWhereInput, orderBy: StockOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stock]!
  stocksConnection(where: StockWhereInput, orderBy: StockOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StockConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Stock {
  id: ID!
  listId: List!
  itemId: Item!
  quantity: Int
  status: StockStatus
  unit: Unit
}

type StockConnection {
  pageInfo: PageInfo!
  edges: [StockEdge]!
  aggregate: AggregateStock!
}

input StockCreateInput {
  listId: ListCreateOneInput!
  itemId: ItemCreateOneInput!
  quantity: Int
  status: StockStatus
  unit: Unit
}

type StockEdge {
  node: Stock!
  cursor: String!
}

enum StockOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  status_ASC
  status_DESC
  unit_ASC
  unit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StockPreviousValues {
  id: ID!
  quantity: Int
  status: StockStatus
  unit: Unit
}

enum StockStatus {
  AVAILABLE
  LIMITED
  OUT
}

type StockSubscriptionPayload {
  mutation: MutationType!
  node: Stock
  updatedFields: [String!]
  previousValues: StockPreviousValues
}

input StockSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StockWhereInput
  AND: [StockSubscriptionWhereInput!]
  OR: [StockSubscriptionWhereInput!]
  NOT: [StockSubscriptionWhereInput!]
}

input StockUpdateInput {
  listId: ListUpdateOneRequiredInput
  itemId: ItemUpdateOneRequiredInput
  quantity: Int
  status: StockStatus
  unit: Unit
}

input StockUpdateManyMutationInput {
  quantity: Int
  status: StockStatus
  unit: Unit
}

input StockWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  listId: ListWhereInput
  itemId: ItemWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  status: StockStatus
  status_not: StockStatus
  status_in: [StockStatus!]
  status_not_in: [StockStatus!]
  unit: Unit
  unit_not: Unit
  unit_in: [Unit!]
  unit_not_in: [Unit!]
  AND: [StockWhereInput!]
  OR: [StockWhereInput!]
  NOT: [StockWhereInput!]
}

input StockWhereUniqueInput {
  id: ID
}

type Subscription {
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  list(where: ListSubscriptionWhereInput): ListSubscriptionPayload
  permission(where: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload
  stock(where: StockSubscriptionWhereInput): StockSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

enum Unit {
  COUNT
  MG
  ML
}

type User {
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

type UserConnection {
  pageInfo: PageInfo!
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

type UserEdge {
  node: User!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
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
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutListsInput {
  create: UserCreateWithoutListsInput
  update: UserUpdateWithoutListsDataInput
  upsert: UserUpsertWithoutListsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPermissionsInput {
  create: UserCreateWithoutPermissionsInput
  update: UserUpdateWithoutPermissionsDataInput
  upsert: UserUpsertWithoutPermissionsInput
  connect: UserWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  lists_every: ListWhereInput
  lists_some: ListWhereInput
  lists_none: ListWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
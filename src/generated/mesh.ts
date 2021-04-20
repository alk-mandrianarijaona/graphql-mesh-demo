import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  DateTime: Date;
  _Any: any;
  _FieldSet: any;
};

export type Query = {
  /**
   * Aio Sleep
   *
   * Equivalent to GET /demo/load-tests/aio-sleep
   */
  aioSleepDemoLoadTestsAioSleepGet?: Maybe<ResponseOk>;
  /**
   * Blocking Sleep
   *
   * Equivalent to GET /demo/load-tests/blocking-sleep
   */
  blockingSleepDemoLoadTestsBlockingSleepGet?: Maybe<ResponseOk>;
  /**
   * Default Ping Endpoint
   *
   * Equivalent to GET /demo/v2/platform/ping
   */
  defaultPingEndpointDemoV2PlatformPingGet?: Maybe<ResponseOk>;
  /**
   * Returns login history information from the given user_id plus the last N login time
   *
   * Equivalent to GET /demo/users/v1/history/{user_id}
   */
  getDemoUsersV1HistoryUserIdGet?: Maybe<UserLoginHistoryResponse>;
  /**
   * Get
   *
   * Equivalent to GET /demo/users/v1/{user_id}
   */
  getUser?: Maybe<User>;
  /**
   * Insert
   *
   * Equivalent to GET /demo/load-tests/sql/insert
   */
  insertDemoLoadTestsSqlInsertGet?: Maybe<EventResponse>;
  /**
   * Publish
   *
   * Equivalent to GET /demo/load-tests/publish
   */
  publishDemoLoadTestsPublishGet?: Maybe<ResponseOk>;
  /**
   * Return Payload
   *
   * Equivalent to GET /demo/load-tests/return-payload
   */
  returnPayloadDemoLoadTestsReturnPayloadGet?: Maybe<Payload>;
  /**
   * Search API allow you to find the last users logged in or find matching users last login date.
   *
   * Equivalent to GET /demo/users/v1/history
   */
  searchDemoUsersV1HistoryGet?: Maybe<UsersLoginHistoryResponse>;
  /**
   * Update
   *
   * Equivalent to GET /demo/load-tests/sql/update/{event_id}
   */
  updateDemoLoadTestsSqlUpdateEventIdGet?: Maybe<EventResponse>;
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  products?: Maybe<Array<Maybe<Product>>>;
  product?: Maybe<Product>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  orders?: Maybe<Array<Maybe<Order>>>;
  order?: Maybe<Order>;
  carts?: Maybe<Array<Maybe<Cart>>>;
  cart?: Maybe<Cart>;
  _typeDefs: Scalars['String'];
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  _aggregation: Scalars['Float'];
};


export type QueryAioSleepDemoLoadTestsAioSleepGetArgs = {
  timeS: Scalars['Float'];
};


export type QueryBlockingSleepDemoLoadTestsBlockingSleepGetArgs = {
  timeS: Scalars['Float'];
};


export type QueryGetDemoUsersV1HistoryUserIdGetArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
};


export type QueryGetUserArgs = {
  userId: Scalars['Int'];
};


export type QueryInsertDemoLoadTestsSqlInsertGetArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type QueryPublishDemoLoadTestsPublishGetArgs = {
  count?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type QueryReturnPayloadDemoLoadTestsReturnPayloadGetArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type QuerySearchDemoUsersV1HistoryGetArgs = {
  filterUsername?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryUpdateDemoLoadTestsSqlUpdateEventIdGetArgs = {
  eventId: Scalars['Int'];
  size?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<UsersWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<ProductsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryCategoriesArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<CategoriesWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<OrdersWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryCartsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<CartsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type QueryCartArgs = {
  id: Scalars['ID'];
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type Query_AggregationArgs = {
  type?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  stat: Scalars['String'];
  ref?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /**
   * Delete
   *
   * Equivalent to DELETE /demo/load-tests/sql/delete/{event_id}
   */
  deleteDemoLoadTestsSqlDeleteEventIdDelete?: Maybe<ResponseOk>;
  /**
   * Receive Payload
   *
   * Equivalent to POST /demo/load-tests/receive-payload
   */
  receivePayloadDemoLoadTestsReceivePayloadPost?: Maybe<PayloadLength>;
  /**
   * Search
   *
   * Equivalent to POST /demo/load-tests/sql/search
   */
  searchDemoLoadTestsSqlSearchPost?: Maybe<Array<Maybe<EventResponse>>>;
  createUser: User;
  updateUser: User;
  deleteUser: Scalars['ID'];
  incrementProductStock?: Maybe<Scalars['Int']>;
  decrementProductStock?: Maybe<Scalars['Int']>;
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: Scalars['ID'];
  createCategory: Category;
  updateCategory: Category;
  deleteCategory: Scalars['ID'];
  addProductToOrder?: Maybe<Order>;
  removeProductFromOrder?: Maybe<Order>;
  createOrder: Order;
  updateOrder: Order;
  deleteOrder: Scalars['ID'];
  addProductToCart?: Maybe<Cart>;
  removeProductFromCart?: Maybe<Cart>;
  createCart: Cart;
  updateCart: Cart;
  deleteCart: Scalars['ID'];
  _createSnapshot: Scalars['Boolean'];
};


export type MutationDeleteDemoLoadTestsSqlDeleteEventIdDeleteArgs = {
  eventId: Scalars['Int'];
};


export type MutationReceivePayloadDemoLoadTestsReceivePayloadPostArgs = {
  payloadInput: PayloadInput;
};


export type MutationSearchDemoLoadTestsSqlSearchPostArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  searchEventInput: SearchEventInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementProductStockArgs = {
  id: Scalars['ID'];
};


export type MutationDecrementProductStockArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input: UpdateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  input: UpdateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationAddProductToOrderArgs = {
  product_id: Scalars['ID'];
  order_id: Scalars['ID'];
};


export type MutationRemoveProductFromOrderArgs = {
  product_id: Scalars['ID'];
  order_id: Scalars['ID'];
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  input: UpdateOrderInput;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationAddProductToCartArgs = {
  product_id: Scalars['ID'];
  cart_id: Scalars['ID'];
};


export type MutationRemoveProductFromCartArgs = {
  product_id: Scalars['ID'];
  cart_id: Scalars['ID'];
};


export type MutationCreateCartArgs = {
  input: CreateCartInput;
};


export type MutationUpdateCartArgs = {
  id: Scalars['ID'];
  input: UpdateCartInput;
};


export type MutationDeleteCartArgs = {
  id: Scalars['ID'];
};


export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};

export type ResponseOk = {
  data?: Maybe<Scalars['String']>;
};

export type UserLoginHistoryResponse = {
  count: Scalars['Int'];
  firstLoginAt: Scalars['String'];
  history?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastLoginAt: Scalars['String'];
  userId: Scalars['Int'];
  username: Scalars['String'];
};

export type User = {
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  _nest: User;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  orders?: Maybe<Array<Maybe<Order>>>;
  email: Scalars['String'];
  cart: Cart;
  isAlkemicsAdmin?: Maybe<Scalars['Boolean']>;
  recentOrders?: Maybe<Array<Maybe<Order>>>;
};


export type UserUsernameArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type User_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type User_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type User_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type UserOrdersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<OrdersWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type UserEmailArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type EventResponse = {
  eventType: Scalars['String'];
  id: Scalars['Int'];
  metadata?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  registeredAt: Scalars['String'];
};


export type Payload = {
  content: Scalars['String'];
};

export type UsersLoginHistoryResponse = {
  results: Array<Maybe<UserLoginHistoryResponse>>;
};

export type PayloadLength = {
  data: Scalars['Int'];
};

export type PayloadInput = {
  content: Scalars['String'];
};

export type SearchEventInput = {
  eventType: Scalars['String'];
  metadata?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};

export type UsersWhere = {
  and?: Maybe<Array<UsersWhere>>;
  or?: Maybe<Array<UsersWhere>>;
  not?: Maybe<Array<UsersWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  username_contains?: Maybe<Scalars['String']>;
  username_startswith?: Maybe<Scalars['String']>;
  username_endswith?: Maybe<Scalars['String']>;
  username_eq?: Maybe<Scalars['String']>;
  username_neq?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Scalars['String']>>;
  username_nin?: Maybe<Array<Scalars['String']>>;
  username_exists?: Maybe<Scalars['Boolean']>;
  email_contains?: Maybe<Scalars['String']>;
  email_startswith?: Maybe<Scalars['String']>;
  email_endswith?: Maybe<Scalars['String']>;
  email_eq?: Maybe<Scalars['String']>;
  email_neq?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_nin?: Maybe<Array<Scalars['String']>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  cart_id_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  cart_and?: Maybe<Array<CartsWhere>>;
  cart_or?: Maybe<Array<CartsWhere>>;
  cart_not?: Maybe<Array<CartsWhere>>;
  cart_id_gt?: Maybe<Scalars['Float']>;
  cart_id_ge?: Maybe<Scalars['Float']>;
  cart_id_lt?: Maybe<Scalars['Float']>;
  cart_id_le?: Maybe<Scalars['Float']>;
  cart_id_eq?: Maybe<Scalars['Float']>;
  cart_id_neq?: Maybe<Scalars['Float']>;
  cart_id_in?: Maybe<Array<Scalars['ID']>>;
  cart_id_nin?: Maybe<Array<Scalars['ID']>>;
};

export type CartsWhere = {
  and?: Maybe<Array<CartsWhere>>;
  or?: Maybe<Array<CartsWhere>>;
  not?: Maybe<Array<CartsWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
};

export type OrdersWhere = {
  and?: Maybe<Array<OrdersWhere>>;
  or?: Maybe<Array<OrdersWhere>>;
  not?: Maybe<Array<OrdersWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  user_id_exists?: Maybe<Scalars['Boolean']>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_ge?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_le?: Maybe<Scalars['DateTime']>;
  date_eq?: Maybe<Scalars['DateTime']>;
  date_neq?: Maybe<Scalars['DateTime']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  payd_eq?: Maybe<Scalars['Boolean']>;
  payd_exists?: Maybe<Scalars['Boolean']>;
  user_and?: Maybe<Array<UsersWhere>>;
  user_or?: Maybe<Array<UsersWhere>>;
  user_not?: Maybe<Array<UsersWhere>>;
  user_id_gt?: Maybe<Scalars['Float']>;
  user_id_ge?: Maybe<Scalars['Float']>;
  user_id_lt?: Maybe<Scalars['Float']>;
  user_id_le?: Maybe<Scalars['Float']>;
  user_id_eq?: Maybe<Scalars['Float']>;
  user_id_neq?: Maybe<Scalars['Float']>;
  user_id_in?: Maybe<Array<Scalars['ID']>>;
  user_id_nin?: Maybe<Array<Scalars['ID']>>;
  user_username_contains?: Maybe<Scalars['String']>;
  user_username_startswith?: Maybe<Scalars['String']>;
  user_username_endswith?: Maybe<Scalars['String']>;
  user_username_eq?: Maybe<Scalars['String']>;
  user_username_neq?: Maybe<Scalars['String']>;
  user_username_in?: Maybe<Array<Scalars['String']>>;
  user_username_nin?: Maybe<Array<Scalars['String']>>;
  user_username_exists?: Maybe<Scalars['Boolean']>;
  user_email_contains?: Maybe<Scalars['String']>;
  user_email_startswith?: Maybe<Scalars['String']>;
  user_email_endswith?: Maybe<Scalars['String']>;
  user_email_eq?: Maybe<Scalars['String']>;
  user_email_neq?: Maybe<Scalars['String']>;
  user_email_in?: Maybe<Array<Scalars['String']>>;
  user_email_nin?: Maybe<Array<Scalars['String']>>;
  user_email_exists?: Maybe<Scalars['Boolean']>;
  user_cart_id_exists?: Maybe<Scalars['Boolean']>;
  user_search?: Maybe<Scalars['String']>;
  user_like?: Maybe<Scalars['String']>;
};


export type Order = {
  id: Scalars['ID'];
  _nest: Order;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  user: User;
  products: Array<Maybe<Product>>;
  date: Scalars['DateTime'];
  payd: Scalars['Boolean'];
};


export type Order_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type Order_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type Order_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type OrderDateArgs = {
  format?: Maybe<Scalars['String']>;
};

export type Product = {
  id: Scalars['ID'];
  _nest: Product;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  color: Scalars['String'];
  stock: Scalars['Int'];
  price: Scalars['Float'];
  category: Category;
};


export type Product_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type Product_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type Product_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type ProductNameArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type ProductDescriptionArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type ProductColorArgs = {
  length?: Maybe<Scalars['Int']>;
};


export type ProductStockArgs = {
  math?: Maybe<MathOptions>;
};


export type ProductPriceArgs = {
  math?: Maybe<MathOptions>;
};

export enum MathOptions {
  ROUND = 'ROUND',
  FLOOR = 'FLOOR',
  CEIL = 'CEIL'
}

export type Category = {
  id: Scalars['ID'];
  _nest: Category;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
  name: CategoriesNameOptions;
  description: Scalars['String'];
};


export type Category_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type Category_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type Category_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type CategoryProductsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<ProductsWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type CategoryDescriptionArgs = {
  length?: Maybe<Scalars['Int']>;
};

export type ProductsWhere = {
  and?: Maybe<Array<ProductsWhere>>;
  or?: Maybe<Array<ProductsWhere>>;
  not?: Maybe<Array<ProductsWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_startswith?: Maybe<Scalars['String']>;
  name_endswith?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_nin?: Maybe<Array<Scalars['String']>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_startswith?: Maybe<Scalars['String']>;
  description_endswith?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_nin?: Maybe<Array<Scalars['String']>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  color_contains?: Maybe<Scalars['String']>;
  color_startswith?: Maybe<Scalars['String']>;
  color_endswith?: Maybe<Scalars['String']>;
  color_eq?: Maybe<Scalars['String']>;
  color_neq?: Maybe<Scalars['String']>;
  color_in?: Maybe<Array<Scalars['String']>>;
  color_nin?: Maybe<Array<Scalars['String']>>;
  color_exists?: Maybe<Scalars['Boolean']>;
  stock_gt?: Maybe<Scalars['Int']>;
  stock_ge?: Maybe<Scalars['Int']>;
  stock_lt?: Maybe<Scalars['Int']>;
  stock_le?: Maybe<Scalars['Int']>;
  stock_eq?: Maybe<Scalars['Int']>;
  stock_neq?: Maybe<Scalars['Int']>;
  stock_in?: Maybe<Array<Scalars['Int']>>;
  stock_nin?: Maybe<Array<Scalars['Int']>>;
  stock_exists?: Maybe<Scalars['Boolean']>;
  price_gt?: Maybe<Scalars['Float']>;
  price_ge?: Maybe<Scalars['Float']>;
  price_lt?: Maybe<Scalars['Float']>;
  price_le?: Maybe<Scalars['Float']>;
  price_eq?: Maybe<Scalars['Float']>;
  price_neq?: Maybe<Scalars['Float']>;
  price_in?: Maybe<Array<Scalars['Float']>>;
  price_nin?: Maybe<Array<Scalars['Float']>>;
  price_exists?: Maybe<Scalars['Boolean']>;
  category_id_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  category_and?: Maybe<Array<CategoriesWhere>>;
  category_or?: Maybe<Array<CategoriesWhere>>;
  category_not?: Maybe<Array<CategoriesWhere>>;
  category_id_gt?: Maybe<Scalars['Float']>;
  category_id_ge?: Maybe<Scalars['Float']>;
  category_id_lt?: Maybe<Scalars['Float']>;
  category_id_le?: Maybe<Scalars['Float']>;
  category_id_eq?: Maybe<Scalars['Float']>;
  category_id_neq?: Maybe<Scalars['Float']>;
  category_id_in?: Maybe<Array<Scalars['ID']>>;
  category_id_nin?: Maybe<Array<Scalars['ID']>>;
  category_name_contains?: Maybe<Scalars['String']>;
  category_name_startswith?: Maybe<Scalars['String']>;
  category_name_endswith?: Maybe<Scalars['String']>;
  category_name_eq?: Maybe<CategoriesNameOptions>;
  category_name_neq?: Maybe<CategoriesNameOptions>;
  category_name_in?: Maybe<Array<CategoriesNameOptions>>;
  category_name_nin?: Maybe<Array<CategoriesNameOptions>>;
  category_name_exists?: Maybe<Scalars['Boolean']>;
  category_description_contains?: Maybe<Scalars['String']>;
  category_description_startswith?: Maybe<Scalars['String']>;
  category_description_endswith?: Maybe<Scalars['String']>;
  category_description_eq?: Maybe<Scalars['String']>;
  category_description_neq?: Maybe<Scalars['String']>;
  category_description_in?: Maybe<Array<Scalars['String']>>;
  category_description_nin?: Maybe<Array<Scalars['String']>>;
  category_description_exists?: Maybe<Scalars['Boolean']>;
  category_search?: Maybe<Scalars['String']>;
  category_like?: Maybe<Scalars['String']>;
};

export type CategoriesWhere = {
  and?: Maybe<Array<CategoriesWhere>>;
  or?: Maybe<Array<CategoriesWhere>>;
  not?: Maybe<Array<CategoriesWhere>>;
  id_gt?: Maybe<Scalars['Float']>;
  id_ge?: Maybe<Scalars['Float']>;
  id_lt?: Maybe<Scalars['Float']>;
  id_le?: Maybe<Scalars['Float']>;
  id_eq?: Maybe<Scalars['Float']>;
  id_neq?: Maybe<Scalars['Float']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_nin?: Maybe<Array<Scalars['ID']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_startswith?: Maybe<Scalars['String']>;
  name_endswith?: Maybe<Scalars['String']>;
  name_eq?: Maybe<CategoriesNameOptions>;
  name_neq?: Maybe<CategoriesNameOptions>;
  name_in?: Maybe<Array<CategoriesNameOptions>>;
  name_nin?: Maybe<Array<CategoriesNameOptions>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_startswith?: Maybe<Scalars['String']>;
  description_endswith?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_nin?: Maybe<Array<Scalars['String']>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
};

export enum CategoriesNameOptions {
  Sports = 'Sports',
  Toys = 'Toys',
  Books = 'Books',
  Baby = 'Baby',
  Automotive = 'Automotive',
  Games = 'Games'
}

export type Cart = {
  id: Scalars['ID'];
  _nest: Cart;
  _int: Scalars['Int'];
  _float: Scalars['Float'];
  _boolean: Scalars['Boolean'];
  _string: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
  products: Array<Maybe<Product>>;
};


export type Cart_IntArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};


export type Cart_FloatArgs = {
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  fixed?: Maybe<Scalars['Int']>;
};


export type Cart_StringArgs = {
  type?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  syllables?: Maybe<Scalars['Int']>;
  casing?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  pool?: Maybe<Scalars['String']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
  nationality?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['Boolean']>;
};


export type CartUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  where?: Maybe<UsersWhere>;
  ref?: Maybe<Scalars['String']>;
};


export type _Entity = User | Product | Category | Order | Cart;

export type _Service = {
  sdl?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  cart_id: Scalars['ID'];
};

export type UpdateUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cart_id?: Maybe<Scalars['ID']>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  color: Scalars['String'];
  stock: Scalars['Int'];
  price: Scalars['Float'];
  category_id: Scalars['ID'];
};

export type UpdateProductInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['ID']>;
};

export type CreateCategoryInput = {
  name: CategoriesNameOptions;
  description: Scalars['String'];
};

export type UpdateCategoryInput = {
  name?: Maybe<CategoriesNameOptions>;
  description?: Maybe<Scalars['String']>;
};

export type CreateOrderInput = {
  user_id: Scalars['ID'];
  products?: Maybe<Array<Maybe<ProductInput>>>;
  date: Scalars['DateTime'];
  payd: Scalars['Boolean'];
};

export type ProductInput = {
  id: Scalars['ID'];
};

export type UpdateOrderInput = {
  user_id?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<ProductInput>>>;
  date?: Maybe<Scalars['DateTime']>;
  payd?: Maybe<Scalars['Boolean']>;
};

export type CreateCartInput = {
  products?: Maybe<Array<Maybe<ProductInput>>>;
};

export type UpdateCartInput = {
  products?: Maybe<Array<Maybe<ProductInput>>>;
};


export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  ResponseOK: ResolverTypeWrapper<ResponseOk>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  UserLoginHistoryResponse: ResolverTypeWrapper<UserLoginHistoryResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  User: ResolverTypeWrapper<User>;
  EventResponse: ResolverTypeWrapper<EventResponse>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Payload: ResolverTypeWrapper<Payload>;
  UsersLoginHistoryResponse: ResolverTypeWrapper<UsersLoginHistoryResponse>;
  PayloadLength: ResolverTypeWrapper<PayloadLength>;
  PayloadInput: PayloadInput;
  SearchEventInput: SearchEventInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UsersWhere: UsersWhere;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  CartsWhere: CartsWhere;
  OrdersWhere: OrdersWhere;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Order: ResolverTypeWrapper<Order>;
  Product: ResolverTypeWrapper<Product>;
  MathOptions: MathOptions;
  Category: ResolverTypeWrapper<Category>;
  ProductsWhere: ProductsWhere;
  CategoriesWhere: CategoriesWhere;
  CategoriesNameOptions: CategoriesNameOptions;
  Cart: ResolverTypeWrapper<Cart>;
  _Any: ResolverTypeWrapper<Scalars['_Any']>;
  _Entity: ResolversTypes['User'] | ResolversTypes['Product'] | ResolversTypes['Category'] | ResolversTypes['Order'] | ResolversTypes['Cart'];
  _Service: ResolverTypeWrapper<_Service>;
  CreateUserInput: CreateUserInput;
  UpdateUserInput: UpdateUserInput;
  CreateProductInput: CreateProductInput;
  UpdateProductInput: UpdateProductInput;
  CreateCategoryInput: CreateCategoryInput;
  UpdateCategoryInput: UpdateCategoryInput;
  CreateOrderInput: CreateOrderInput;
  ProductInput: ProductInput;
  UpdateOrderInput: UpdateOrderInput;
  CreateCartInput: CreateCartInput;
  UpdateCartInput: UpdateCartInput;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  ResponseOK: ResponseOk;
  String: Scalars['String'];
  Float: Scalars['Float'];
  UserLoginHistoryResponse: UserLoginHistoryResponse;
  Int: Scalars['Int'];
  User: User;
  EventResponse: EventResponse;
  JSON: Scalars['JSON'];
  Payload: Payload;
  UsersLoginHistoryResponse: UsersLoginHistoryResponse;
  PayloadLength: PayloadLength;
  PayloadInput: PayloadInput;
  SearchEventInput: SearchEventInput;
  Boolean: Scalars['Boolean'];
  UsersWhere: UsersWhere;
  ID: Scalars['ID'];
  CartsWhere: CartsWhere;
  OrdersWhere: OrdersWhere;
  DateTime: Scalars['DateTime'];
  Order: Order;
  Product: Product;
  Category: Category;
  ProductsWhere: ProductsWhere;
  CategoriesWhere: CategoriesWhere;
  Cart: Cart;
  _Any: Scalars['_Any'];
  _Entity: ResolversParentTypes['User'] | ResolversParentTypes['Product'] | ResolversParentTypes['Category'] | ResolversParentTypes['Order'] | ResolversParentTypes['Cart'];
  _Service: _Service;
  CreateUserInput: CreateUserInput;
  UpdateUserInput: UpdateUserInput;
  CreateProductInput: CreateProductInput;
  UpdateProductInput: UpdateProductInput;
  CreateCategoryInput: CreateCategoryInput;
  UpdateCategoryInput: UpdateCategoryInput;
  CreateOrderInput: CreateOrderInput;
  ProductInput: ProductInput;
  UpdateOrderInput: UpdateOrderInput;
  CreateCartInput: CreateCartInput;
  UpdateCartInput: UpdateCartInput;
  _FieldSet: Scalars['_FieldSet'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  aioSleepDemoLoadTestsAioSleepGet?: Resolver<Maybe<ResolversTypes['ResponseOK']>, ParentType, ContextType, RequireFields<QueryAioSleepDemoLoadTestsAioSleepGetArgs, 'timeS'>>;
  blockingSleepDemoLoadTestsBlockingSleepGet?: Resolver<Maybe<ResolversTypes['ResponseOK']>, ParentType, ContextType, RequireFields<QueryBlockingSleepDemoLoadTestsBlockingSleepGetArgs, 'timeS'>>;
  defaultPingEndpointDemoV2PlatformPingGet?: Resolver<Maybe<ResolversTypes['ResponseOK']>, ParentType, ContextType>;
  getDemoUsersV1HistoryUserIdGet?: Resolver<Maybe<ResolversTypes['UserLoginHistoryResponse']>, ParentType, ContextType, RequireFields<QueryGetDemoUsersV1HistoryUserIdGetArgs, 'userId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  insertDemoLoadTestsSqlInsertGet?: Resolver<Maybe<ResolversTypes['EventResponse']>, ParentType, ContextType, RequireFields<QueryInsertDemoLoadTestsSqlInsertGetArgs, never>>;
  publishDemoLoadTestsPublishGet?: Resolver<Maybe<ResolversTypes['ResponseOK']>, ParentType, ContextType, RequireFields<QueryPublishDemoLoadTestsPublishGetArgs, never>>;
  returnPayloadDemoLoadTestsReturnPayloadGet?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType, RequireFields<QueryReturnPayloadDemoLoadTestsReturnPayloadGetArgs, never>>;
  searchDemoUsersV1HistoryGet?: Resolver<Maybe<ResolversTypes['UsersLoginHistoryResponse']>, ParentType, ContextType, RequireFields<QuerySearchDemoUsersV1HistoryGetArgs, never>>;
  updateDemoLoadTestsSqlUpdateEventIdGet?: Resolver<Maybe<ResolversTypes['EventResponse']>, ParentType, ContextType, RequireFields<QueryUpdateDemoLoadTestsSqlUpdateEventIdGetArgs, 'eventId'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUsersArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<QueryProductsArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, never>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<QueryOrdersArgs, never>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  carts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cart']>>>, ParentType, ContextType, RequireFields<QueryCartsArgs, never>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'id'>>;
  _typeDefs?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _entities?: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_EntitiesArgs, 'representations'>>;
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  _aggregation?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<Query_AggregationArgs, 'stat'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deleteDemoLoadTestsSqlDeleteEventIdDelete?: Resolver<Maybe<ResolversTypes['ResponseOK']>, ParentType, ContextType, RequireFields<MutationDeleteDemoLoadTestsSqlDeleteEventIdDeleteArgs, 'eventId'>>;
  receivePayloadDemoLoadTestsReceivePayloadPost?: Resolver<Maybe<ResolversTypes['PayloadLength']>, ParentType, ContextType, RequireFields<MutationReceivePayloadDemoLoadTestsReceivePayloadPostArgs, 'payloadInput'>>;
  searchDemoLoadTestsSqlSearchPost?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventResponse']>>>, ParentType, ContextType, RequireFields<MutationSearchDemoLoadTestsSqlSearchPostArgs, 'searchEventInput'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
  deleteUser?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  incrementProductStock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationIncrementProductStockArgs, 'id'>>;
  decrementProductStock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDecrementProductStockArgs, 'id'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
  deleteProduct?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input'>>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'input'>>;
  deleteCategory?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  addProductToOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationAddProductToOrderArgs, 'product_id' | 'order_id'>>;
  removeProductFromOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationRemoveProductFromOrderArgs, 'product_id' | 'order_id'>>;
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'input'>>;
  updateOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'id' | 'input'>>;
  deleteOrder?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'id'>>;
  addProductToCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationAddProductToCartArgs, 'product_id' | 'cart_id'>>;
  removeProductFromCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationRemoveProductFromCartArgs, 'product_id' | 'cart_id'>>;
  createCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationCreateCartArgs, 'input'>>;
  updateCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationUpdateCartArgs, 'id' | 'input'>>;
  deleteCart?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteCartArgs, 'id'>>;
  _createSnapshot?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<Mutation_CreateSnapshotArgs, 'key'>>;
}>;

export type ResponseOkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResponseOK'] = ResolversParentTypes['ResponseOK']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLoginHistoryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserLoginHistoryResponse'] = ResolversParentTypes['UserLoginHistoryResponse']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstLoginAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  history?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lastLoginAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<UserUsernameArgs, never>>;
  _nest?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  _int?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<User_IntArgs, never>>;
  _float?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<User_FloatArgs, never>>;
  _boolean?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  _string?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<User_StringArgs, never>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType, RequireFields<UserOrdersArgs, never>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<UserEmailArgs, never>>;
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  isAlkemicsAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recentOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventResponse'] = ResolversParentTypes['EventResponse']> = ResolversObject<{
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  registeredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type PayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersLoginHistoryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsersLoginHistoryResponse'] = ResolversParentTypes['UsersLoginHistoryResponse']> = ResolversObject<{
  results?: Resolver<Array<Maybe<ResolversTypes['UserLoginHistoryResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayloadLengthResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PayloadLength'] = ResolversParentTypes['PayloadLength']> = ResolversObject<{
  data?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _nest?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  _int?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Order_IntArgs, never>>;
  _float?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<Order_FloatArgs, never>>;
  _boolean?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  _string?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<Order_StringArgs, never>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<OrderDateArgs, never>>;
  payd?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _nest?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  _int?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Product_IntArgs, never>>;
  _float?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<Product_FloatArgs, never>>;
  _boolean?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  _string?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<Product_StringArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ProductNameArgs, never>>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ProductDescriptionArgs, never>>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ProductColorArgs, never>>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<ProductStockArgs, never>>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<ProductPriceArgs, never>>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _nest?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  _int?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Category_IntArgs, never>>;
  _float?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<Category_FloatArgs, never>>;
  _boolean?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  _string?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<Category_StringArgs, never>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, RequireFields<CategoryProductsArgs, never>>;
  name?: Resolver<ResolversTypes['CategoriesNameOptions'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<CategoryDescriptionArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _nest?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  _int?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Cart_IntArgs, never>>;
  _float?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<Cart_FloatArgs, never>>;
  _boolean?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  _string?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<Cart_StringArgs, never>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<CartUsersArgs, never>>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export type _EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Entity'] = ResolversParentTypes['_Entity']> = ResolversObject<{
  __resolveType: TypeResolveFn<'User' | 'Product' | 'Category' | 'Order' | 'Cart', ParentType, ContextType>;
}>;

export type _ServiceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = ResolversObject<{
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ResponseOK?: ResponseOkResolvers<ContextType>;
  UserLoginHistoryResponse?: UserLoginHistoryResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  EventResponse?: EventResponseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Payload?: PayloadResolvers<ContextType>;
  UsersLoginHistoryResponse?: UsersLoginHistoryResponseResolvers<ContextType>;
  PayloadLength?: PayloadLengthResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Order?: OrderResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _Entity?: _EntityResolvers<ContextType>;
  _Service?: _ServiceResolvers<ContextType>;
  _FieldSet?: GraphQLScalarType;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type Service DemoSdk = {
  aioSleepDemoLoadTestsAioSleepGet: (args: QueryAioSleepDemoLoadTestsAioSleepGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['aioSleepDemoLoadTestsAioSleepGet']>,
  blockingSleepDemoLoadTestsBlockingSleepGet: (args: QueryBlockingSleepDemoLoadTestsBlockingSleepGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['blockingSleepDemoLoadTestsBlockingSleepGet']>,
  defaultPingEndpointDemoV2PlatformPingGet: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['defaultPingEndpointDemoV2PlatformPingGet']>,
  getDemoUsersV1HistoryUserIdGet: (args: QueryGetDemoUsersV1HistoryUserIdGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getDemoUsersV1HistoryUserIdGet']>,
  getDemoUsersV1UserIdGet: (args: QueryGetDemoUsersV1UserIdGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getDemoUsersV1UserIdGet']>,
  insertDemoLoadTestsSqlInsertGet: (args: QueryInsertDemoLoadTestsSqlInsertGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['insertDemoLoadTestsSqlInsertGet']>,
  publishDemoLoadTestsPublishGet: (args: QueryPublishDemoLoadTestsPublishGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['publishDemoLoadTestsPublishGet']>,
  returnPayloadDemoLoadTestsReturnPayloadGet: (args: QueryReturnPayloadDemoLoadTestsReturnPayloadGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['returnPayloadDemoLoadTestsReturnPayloadGet']>,
  searchDemoUsersV1HistoryGet: (args: QuerySearchDemoUsersV1HistoryGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchDemoUsersV1HistoryGet']>,
  updateDemoLoadTestsSqlUpdateEventIdGet: (args: QueryUpdateDemoLoadTestsSqlUpdateEventIdGetArgs, projectionOptions?: ProjectionOptions) => Promise<Query['updateDemoLoadTestsSqlUpdateEventIdGet']>,
  deleteDemoLoadTestsSqlDeleteEventIdDelete: (args: MutationDeleteDemoLoadTestsSqlDeleteEventIdDeleteArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteDemoLoadTestsSqlDeleteEventIdDelete']>,
  receivePayloadDemoLoadTestsReceivePayloadPost: (args: MutationReceivePayloadDemoLoadTestsReceivePayloadPostArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['receivePayloadDemoLoadTestsReceivePayloadPost']>,
  searchDemoLoadTestsSqlSearchPost: (args: MutationSearchDemoLoadTestsSqlSearchPostArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['searchDemoLoadTestsSqlSearchPost']>
};

export type FakeQL ShopSdk = {
  users: (args: QueryUsersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['users']>,
  user: (args: QueryUserArgs, projectionOptions?: ProjectionOptions) => Promise<Query['user']>,
  products: (args: QueryProductsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['products']>,
  product: (args: QueryProductArgs, projectionOptions?: ProjectionOptions) => Promise<Query['product']>,
  categories: (args: QueryCategoriesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['categories']>,
  category: (args: QueryCategoryArgs, projectionOptions?: ProjectionOptions) => Promise<Query['category']>,
  orders: (args: QueryOrdersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['orders']>,
  order: (args: QueryOrderArgs, projectionOptions?: ProjectionOptions) => Promise<Query['order']>,
  carts: (args: QueryCartsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['carts']>,
  cart: (args: QueryCartArgs, projectionOptions?: ProjectionOptions) => Promise<Query['cart']>,
  _typeDefs: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['_typeDefs']>,
  _entities: (args: Query_EntitiesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_entities']>,
  _service: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['_service']>,
  _aggregation: (args: Query_AggregationArgs, projectionOptions?: ProjectionOptions) => Promise<Query['_aggregation']>,
  createUser: (args: MutationCreateUserArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['createUser']>,
  updateUser: (args: MutationUpdateUserArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['updateUser']>,
  deleteUser: (args: MutationDeleteUserArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteUser']>,
  incrementProductStock: (args: MutationIncrementProductStockArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['incrementProductStock']>,
  decrementProductStock: (args: MutationDecrementProductStockArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['decrementProductStock']>,
  createProduct: (args: MutationCreateProductArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['createProduct']>,
  updateProduct: (args: MutationUpdateProductArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['updateProduct']>,
  deleteProduct: (args: MutationDeleteProductArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteProduct']>,
  createCategory: (args: MutationCreateCategoryArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['createCategory']>,
  updateCategory: (args: MutationUpdateCategoryArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['updateCategory']>,
  deleteCategory: (args: MutationDeleteCategoryArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteCategory']>,
  addProductToOrder: (args: MutationAddProductToOrderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['addProductToOrder']>,
  removeProductFromOrder: (args: MutationRemoveProductFromOrderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['removeProductFromOrder']>,
  createOrder: (args: MutationCreateOrderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['createOrder']>,
  updateOrder: (args: MutationUpdateOrderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['updateOrder']>,
  deleteOrder: (args: MutationDeleteOrderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteOrder']>,
  addProductToCart: (args: MutationAddProductToCartArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['addProductToCart']>,
  removeProductFromCart: (args: MutationRemoveProductFromCartArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['removeProductFromCart']>,
  createCart: (args: MutationCreateCartArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['createCart']>,
  updateCart: (args: MutationUpdateCartArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['updateCart']>,
  deleteCart: (args: MutationDeleteCartArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteCart']>,
  _createSnapshot: (args: Mutation_CreateSnapshotArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['_createSnapshot']>
};

export type Service DemoContext = { 
      Service Demo: { api: Service DemoSdk }, 
    };

export type FakeQL ShopContext = { 
      FakeQL Shop: { api: FakeQL ShopSdk }, 
    };

export type MeshContext = Service DemoContext & FakeQL ShopContext & BaseMeshContext;
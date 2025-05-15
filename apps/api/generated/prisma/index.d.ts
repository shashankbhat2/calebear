
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model IntegrationProvider
 * 
 */
export type IntegrationProvider = $Result.DefaultSelection<Prisma.$IntegrationProviderPayload>
/**
 * Model Integration
 * 
 */
export type Integration = $Result.DefaultSelection<Prisma.$IntegrationPayload>
/**
 * Model UserPersona
 * 
 */
export type UserPersona = $Result.DefaultSelection<Prisma.$UserPersonaPayload>
/**
 * Model UserOnboarding
 * 
 */
export type UserOnboarding = $Result.DefaultSelection<Prisma.$UserOnboardingPayload>
/**
 * Model DestinationCalendar
 * 
 */
export type DestinationCalendar = $Result.DefaultSelection<Prisma.$DestinationCalendarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IntegrationType: {
  CALENDAR: 'CALENDAR',
  CONFERENCING: 'CONFERENCING',
  PAYMENT: 'PAYMENT'
};

export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type IntegrationType = $Enums.IntegrationType

export const IntegrationType: typeof $Enums.IntegrationType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrationProvider`: Exposes CRUD operations for the **IntegrationProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntegrationProviders
    * const integrationProviders = await prisma.integrationProvider.findMany()
    * ```
    */
  get integrationProvider(): Prisma.IntegrationProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integration`: Exposes CRUD operations for the **Integration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integration.findMany()
    * ```
    */
  get integration(): Prisma.IntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPersona`: Exposes CRUD operations for the **UserPersona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPersonas
    * const userPersonas = await prisma.userPersona.findMany()
    * ```
    */
  get userPersona(): Prisma.UserPersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnboarding`: Exposes CRUD operations for the **UserOnboarding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnboardings
    * const userOnboardings = await prisma.userOnboarding.findMany()
    * ```
    */
  get userOnboarding(): Prisma.UserOnboardingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinationCalendar`: Exposes CRUD operations for the **DestinationCalendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationCalendars
    * const destinationCalendars = await prisma.destinationCalendar.findMany()
    * ```
    */
  get destinationCalendar(): Prisma.DestinationCalendarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    IntegrationProvider: 'IntegrationProvider',
    Integration: 'Integration',
    UserPersona: 'UserPersona',
    UserOnboarding: 'UserOnboarding',
    DestinationCalendar: 'DestinationCalendar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "integrationProvider" | "integration" | "userPersona" | "userOnboarding" | "destinationCalendar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      IntegrationProvider: {
        payload: Prisma.$IntegrationProviderPayload<ExtArgs>
        fields: Prisma.IntegrationProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>
          }
          findFirst: {
            args: Prisma.IntegrationProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>
          }
          findMany: {
            args: Prisma.IntegrationProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>[]
          }
          create: {
            args: Prisma.IntegrationProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>
          }
          createMany: {
            args: Prisma.IntegrationProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>[]
          }
          delete: {
            args: Prisma.IntegrationProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>
          }
          update: {
            args: Prisma.IntegrationProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationProviderPayload>
          }
          aggregate: {
            args: Prisma.IntegrationProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrationProvider>
          }
          groupBy: {
            args: Prisma.IntegrationProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationProviderCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationProviderCountAggregateOutputType> | number
          }
        }
      }
      Integration: {
        payload: Prisma.$IntegrationPayload<ExtArgs>
        fields: Prisma.IntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findFirst: {
            args: Prisma.IntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findMany: {
            args: Prisma.IntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          create: {
            args: Prisma.IntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          createMany: {
            args: Prisma.IntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          delete: {
            args: Prisma.IntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          update: {
            args: Prisma.IntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          aggregate: {
            args: Prisma.IntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegration>
          }
          groupBy: {
            args: Prisma.IntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationCountAggregateOutputType> | number
          }
        }
      }
      UserPersona: {
        payload: Prisma.$UserPersonaPayload<ExtArgs>
        fields: Prisma.UserPersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>
          }
          findFirst: {
            args: Prisma.UserPersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>
          }
          findMany: {
            args: Prisma.UserPersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>[]
          }
          create: {
            args: Prisma.UserPersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>
          }
          createMany: {
            args: Prisma.UserPersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>[]
          }
          delete: {
            args: Prisma.UserPersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>
          }
          update: {
            args: Prisma.UserPersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>
          }
          deleteMany: {
            args: Prisma.UserPersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>[]
          }
          upsert: {
            args: Prisma.UserPersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPersonaPayload>
          }
          aggregate: {
            args: Prisma.UserPersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPersona>
          }
          groupBy: {
            args: Prisma.UserPersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPersonaCountArgs<ExtArgs>
            result: $Utils.Optional<UserPersonaCountAggregateOutputType> | number
          }
        }
      }
      UserOnboarding: {
        payload: Prisma.$UserOnboardingPayload<ExtArgs>
        fields: Prisma.UserOnboardingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnboardingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnboardingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>
          }
          findFirst: {
            args: Prisma.UserOnboardingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnboardingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>
          }
          findMany: {
            args: Prisma.UserOnboardingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>[]
          }
          create: {
            args: Prisma.UserOnboardingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>
          }
          createMany: {
            args: Prisma.UserOnboardingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnboardingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>[]
          }
          delete: {
            args: Prisma.UserOnboardingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>
          }
          update: {
            args: Prisma.UserOnboardingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>
          }
          deleteMany: {
            args: Prisma.UserOnboardingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnboardingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOnboardingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>[]
          }
          upsert: {
            args: Prisma.UserOnboardingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnboardingPayload>
          }
          aggregate: {
            args: Prisma.UserOnboardingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnboarding>
          }
          groupBy: {
            args: Prisma.UserOnboardingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnboardingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnboardingCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnboardingCountAggregateOutputType> | number
          }
        }
      }
      DestinationCalendar: {
        payload: Prisma.$DestinationCalendarPayload<ExtArgs>
        fields: Prisma.DestinationCalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationCalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationCalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>
          }
          findFirst: {
            args: Prisma.DestinationCalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationCalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>
          }
          findMany: {
            args: Prisma.DestinationCalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>[]
          }
          create: {
            args: Prisma.DestinationCalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>
          }
          createMany: {
            args: Prisma.DestinationCalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCalendarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>[]
          }
          delete: {
            args: Prisma.DestinationCalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>
          }
          update: {
            args: Prisma.DestinationCalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>
          }
          deleteMany: {
            args: Prisma.DestinationCalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationCalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationCalendarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>[]
          }
          upsert: {
            args: Prisma.DestinationCalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationCalendarPayload>
          }
          aggregate: {
            args: Prisma.DestinationCalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinationCalendar>
          }
          groupBy: {
            args: Prisma.DestinationCalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationCalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCalendarCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCalendarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    integrationProvider?: IntegrationProviderOmit
    integration?: IntegrationOmit
    userPersona?: UserPersonaOmit
    userOnboarding?: UserOnboardingOmit
    destinationCalendar?: DestinationCalendarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    integrations: number
    destinationCalendars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs
    destinationCalendars?: boolean | UserCountOutputTypeCountDestinationCalendarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDestinationCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationCalendarWhereInput
  }


  /**
   * Count Type IntegrationProviderCountOutputType
   */

  export type IntegrationProviderCountOutputType = {
    integrations: number
  }

  export type IntegrationProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrations?: boolean | IntegrationProviderCountOutputTypeCountIntegrationsArgs
  }

  // Custom InputTypes
  /**
   * IntegrationProviderCountOutputType without action
   */
  export type IntegrationProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProviderCountOutputType
     */
    select?: IntegrationProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntegrationProviderCountOutputType without action
   */
  export type IntegrationProviderCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
  }


  /**
   * Count Type IntegrationCountOutputType
   */

  export type IntegrationCountOutputType = {
    destinationCalendars: number
  }

  export type IntegrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationCalendars?: boolean | IntegrationCountOutputTypeCountDestinationCalendarsArgs
  }

  // Custom InputTypes
  /**
   * IntegrationCountOutputType without action
   */
  export type IntegrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationCountOutputType
     */
    select?: IntegrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntegrationCountOutputType without action
   */
  export type IntegrationCountOutputTypeCountDestinationCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationCalendarWhereInput
  }


  /**
   * Count Type UserPersonaCountOutputType
   */

  export type UserPersonaCountOutputType = {
    users: number
    onboardingsWithThisInitialPersona: number
  }

  export type UserPersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserPersonaCountOutputTypeCountUsersArgs
    onboardingsWithThisInitialPersona?: boolean | UserPersonaCountOutputTypeCountOnboardingsWithThisInitialPersonaArgs
  }

  // Custom InputTypes
  /**
   * UserPersonaCountOutputType without action
   */
  export type UserPersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersonaCountOutputType
     */
    select?: UserPersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPersonaCountOutputType without action
   */
  export type UserPersonaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserPersonaCountOutputType without action
   */
  export type UserPersonaCountOutputTypeCountOnboardingsWithThisInitialPersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnboardingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
    googleId: string | null
    chosenPersonaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
    googleId: string | null
    chosenPersonaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    picture: number
    googleId: number
    chosenPersonaId: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    picture?: true
    googleId?: true
    chosenPersonaId?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    picture?: true
    googleId?: true
    chosenPersonaId?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    picture?: true
    googleId?: true
    chosenPersonaId?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    firstName: string | null
    lastName: string | null
    picture: string | null
    googleId: string | null
    chosenPersonaId: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    googleId?: boolean
    chosenPersonaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    onboarding?: boolean | User$onboardingArgs<ExtArgs>
    chosenPersona?: boolean | User$chosenPersonaArgs<ExtArgs>
    destinationCalendars?: boolean | User$destinationCalendarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    googleId?: boolean
    chosenPersonaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    chosenPersona?: boolean | User$chosenPersonaArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    googleId?: boolean
    chosenPersonaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    chosenPersona?: boolean | User$chosenPersonaArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    picture?: boolean
    googleId?: boolean
    chosenPersonaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "picture" | "googleId" | "chosenPersonaId" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    onboarding?: boolean | User$onboardingArgs<ExtArgs>
    chosenPersona?: boolean | User$chosenPersonaArgs<ExtArgs>
    destinationCalendars?: boolean | User$destinationCalendarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chosenPersona?: boolean | User$chosenPersonaArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chosenPersona?: boolean | User$chosenPersonaArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      integrations: Prisma.$IntegrationPayload<ExtArgs>[]
      onboarding: Prisma.$UserOnboardingPayload<ExtArgs> | null
      chosenPersona: Prisma.$UserPersonaPayload<ExtArgs> | null
      destinationCalendars: Prisma.$DestinationCalendarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      firstName: string | null
      lastName: string | null
      picture: string | null
      googleId: string | null
      chosenPersonaId: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integrations<T extends User$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    onboarding<T extends User$onboardingArgs<ExtArgs> = {}>(args?: Subset<T, User$onboardingArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chosenPersona<T extends User$chosenPersonaArgs<ExtArgs> = {}>(args?: Subset<T, User$chosenPersonaArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    destinationCalendars<T extends User$destinationCalendarsArgs<ExtArgs> = {}>(args?: Subset<T, User$destinationCalendarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly chosenPersonaId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.integrations
   */
  export type User$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    cursor?: IntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * User.onboarding
   */
  export type User$onboardingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    where?: UserOnboardingWhereInput
  }

  /**
   * User.chosenPersona
   */
  export type User$chosenPersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    where?: UserPersonaWhereInput
  }

  /**
   * User.destinationCalendars
   */
  export type User$destinationCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    where?: DestinationCalendarWhereInput
    orderBy?: DestinationCalendarOrderByWithRelationInput | DestinationCalendarOrderByWithRelationInput[]
    cursor?: DestinationCalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationCalendarScalarFieldEnum | DestinationCalendarScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model IntegrationProvider
   */

  export type AggregateIntegrationProvider = {
    _count: IntegrationProviderCountAggregateOutputType | null
    _min: IntegrationProviderMinAggregateOutputType | null
    _max: IntegrationProviderMaxAggregateOutputType | null
  }

  export type IntegrationProviderMinAggregateOutputType = {
    id: string | null
    providerKey: string | null
    displayName: string | null
    description: string | null
    logoUrl: string | null
    type: $Enums.IntegrationType | null
    isEnabled: boolean | null
    isBeta: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationProviderMaxAggregateOutputType = {
    id: string | null
    providerKey: string | null
    displayName: string | null
    description: string | null
    logoUrl: string | null
    type: $Enums.IntegrationType | null
    isEnabled: boolean | null
    isBeta: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationProviderCountAggregateOutputType = {
    id: number
    providerKey: number
    displayName: number
    description: number
    logoUrl: number
    type: number
    isEnabled: number
    isBeta: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationProviderMinAggregateInputType = {
    id?: true
    providerKey?: true
    displayName?: true
    description?: true
    logoUrl?: true
    type?: true
    isEnabled?: true
    isBeta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationProviderMaxAggregateInputType = {
    id?: true
    providerKey?: true
    displayName?: true
    description?: true
    logoUrl?: true
    type?: true
    isEnabled?: true
    isBeta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationProviderCountAggregateInputType = {
    id?: true
    providerKey?: true
    displayName?: true
    description?: true
    logoUrl?: true
    type?: true
    isEnabled?: true
    isBeta?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationProvider to aggregate.
     */
    where?: IntegrationProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationProviders to fetch.
     */
    orderBy?: IntegrationProviderOrderByWithRelationInput | IntegrationProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntegrationProviders
    **/
    _count?: true | IntegrationProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationProviderMaxAggregateInputType
  }

  export type GetIntegrationProviderAggregateType<T extends IntegrationProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrationProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrationProvider[P]>
      : GetScalarType<T[P], AggregateIntegrationProvider[P]>
  }




  export type IntegrationProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationProviderWhereInput
    orderBy?: IntegrationProviderOrderByWithAggregationInput | IntegrationProviderOrderByWithAggregationInput[]
    by: IntegrationProviderScalarFieldEnum[] | IntegrationProviderScalarFieldEnum
    having?: IntegrationProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationProviderCountAggregateInputType | true
    _min?: IntegrationProviderMinAggregateInputType
    _max?: IntegrationProviderMaxAggregateInputType
  }

  export type IntegrationProviderGroupByOutputType = {
    id: string
    providerKey: string
    displayName: string
    description: string | null
    logoUrl: string | null
    type: $Enums.IntegrationType
    isEnabled: boolean
    isBeta: boolean
    createdAt: Date
    updatedAt: Date
    _count: IntegrationProviderCountAggregateOutputType | null
    _min: IntegrationProviderMinAggregateOutputType | null
    _max: IntegrationProviderMaxAggregateOutputType | null
  }

  type GetIntegrationProviderGroupByPayload<T extends IntegrationProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationProviderGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationProviderGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerKey?: boolean
    displayName?: boolean
    description?: boolean
    logoUrl?: boolean
    type?: boolean
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integrations?: boolean | IntegrationProvider$integrationsArgs<ExtArgs>
    _count?: boolean | IntegrationProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integrationProvider"]>

  export type IntegrationProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerKey?: boolean
    displayName?: boolean
    description?: boolean
    logoUrl?: boolean
    type?: boolean
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integrationProvider"]>

  export type IntegrationProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerKey?: boolean
    displayName?: boolean
    description?: boolean
    logoUrl?: boolean
    type?: boolean
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["integrationProvider"]>

  export type IntegrationProviderSelectScalar = {
    id?: boolean
    providerKey?: boolean
    displayName?: boolean
    description?: boolean
    logoUrl?: boolean
    type?: boolean
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerKey" | "displayName" | "description" | "logoUrl" | "type" | "isEnabled" | "isBeta" | "createdAt" | "updatedAt", ExtArgs["result"]["integrationProvider"]>
  export type IntegrationProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrations?: boolean | IntegrationProvider$integrationsArgs<ExtArgs>
    _count?: boolean | IntegrationProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IntegrationProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IntegrationProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IntegrationProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntegrationProvider"
    objects: {
      integrations: Prisma.$IntegrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerKey: string
      displayName: string
      description: string | null
      logoUrl: string | null
      type: $Enums.IntegrationType
      isEnabled: boolean
      isBeta: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integrationProvider"]>
    composites: {}
  }

  type IntegrationProviderGetPayload<S extends boolean | null | undefined | IntegrationProviderDefaultArgs> = $Result.GetResult<Prisma.$IntegrationProviderPayload, S>

  type IntegrationProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationProviderCountAggregateInputType | true
    }

  export interface IntegrationProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntegrationProvider'], meta: { name: 'IntegrationProvider' } }
    /**
     * Find zero or one IntegrationProvider that matches the filter.
     * @param {IntegrationProviderFindUniqueArgs} args - Arguments to find a IntegrationProvider
     * @example
     * // Get one IntegrationProvider
     * const integrationProvider = await prisma.integrationProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationProviderFindUniqueArgs>(args: SelectSubset<T, IntegrationProviderFindUniqueArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntegrationProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationProviderFindUniqueOrThrowArgs} args - Arguments to find a IntegrationProvider
     * @example
     * // Get one IntegrationProvider
     * const integrationProvider = await prisma.integrationProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderFindFirstArgs} args - Arguments to find a IntegrationProvider
     * @example
     * // Get one IntegrationProvider
     * const integrationProvider = await prisma.integrationProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationProviderFindFirstArgs>(args?: SelectSubset<T, IntegrationProviderFindFirstArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntegrationProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderFindFirstOrThrowArgs} args - Arguments to find a IntegrationProvider
     * @example
     * // Get one IntegrationProvider
     * const integrationProvider = await prisma.integrationProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntegrationProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntegrationProviders
     * const integrationProviders = await prisma.integrationProvider.findMany()
     * 
     * // Get first 10 IntegrationProviders
     * const integrationProviders = await prisma.integrationProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationProviderWithIdOnly = await prisma.integrationProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationProviderFindManyArgs>(args?: SelectSubset<T, IntegrationProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntegrationProvider.
     * @param {IntegrationProviderCreateArgs} args - Arguments to create a IntegrationProvider.
     * @example
     * // Create one IntegrationProvider
     * const IntegrationProvider = await prisma.integrationProvider.create({
     *   data: {
     *     // ... data to create a IntegrationProvider
     *   }
     * })
     * 
     */
    create<T extends IntegrationProviderCreateArgs>(args: SelectSubset<T, IntegrationProviderCreateArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntegrationProviders.
     * @param {IntegrationProviderCreateManyArgs} args - Arguments to create many IntegrationProviders.
     * @example
     * // Create many IntegrationProviders
     * const integrationProvider = await prisma.integrationProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationProviderCreateManyArgs>(args?: SelectSubset<T, IntegrationProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntegrationProviders and returns the data saved in the database.
     * @param {IntegrationProviderCreateManyAndReturnArgs} args - Arguments to create many IntegrationProviders.
     * @example
     * // Create many IntegrationProviders
     * const integrationProvider = await prisma.integrationProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntegrationProviders and only return the `id`
     * const integrationProviderWithIdOnly = await prisma.integrationProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntegrationProvider.
     * @param {IntegrationProviderDeleteArgs} args - Arguments to delete one IntegrationProvider.
     * @example
     * // Delete one IntegrationProvider
     * const IntegrationProvider = await prisma.integrationProvider.delete({
     *   where: {
     *     // ... filter to delete one IntegrationProvider
     *   }
     * })
     * 
     */
    delete<T extends IntegrationProviderDeleteArgs>(args: SelectSubset<T, IntegrationProviderDeleteArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntegrationProvider.
     * @param {IntegrationProviderUpdateArgs} args - Arguments to update one IntegrationProvider.
     * @example
     * // Update one IntegrationProvider
     * const integrationProvider = await prisma.integrationProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationProviderUpdateArgs>(args: SelectSubset<T, IntegrationProviderUpdateArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntegrationProviders.
     * @param {IntegrationProviderDeleteManyArgs} args - Arguments to filter IntegrationProviders to delete.
     * @example
     * // Delete a few IntegrationProviders
     * const { count } = await prisma.integrationProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationProviderDeleteManyArgs>(args?: SelectSubset<T, IntegrationProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntegrationProviders
     * const integrationProvider = await prisma.integrationProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationProviderUpdateManyArgs>(args: SelectSubset<T, IntegrationProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntegrationProviders and returns the data updated in the database.
     * @param {IntegrationProviderUpdateManyAndReturnArgs} args - Arguments to update many IntegrationProviders.
     * @example
     * // Update many IntegrationProviders
     * const integrationProvider = await prisma.integrationProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntegrationProviders and only return the `id`
     * const integrationProviderWithIdOnly = await prisma.integrationProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegrationProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntegrationProvider.
     * @param {IntegrationProviderUpsertArgs} args - Arguments to update or create a IntegrationProvider.
     * @example
     * // Update or create a IntegrationProvider
     * const integrationProvider = await prisma.integrationProvider.upsert({
     *   create: {
     *     // ... data to create a IntegrationProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntegrationProvider we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationProviderUpsertArgs>(args: SelectSubset<T, IntegrationProviderUpsertArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntegrationProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderCountArgs} args - Arguments to filter IntegrationProviders to count.
     * @example
     * // Count the number of IntegrationProviders
     * const count = await prisma.integrationProvider.count({
     *   where: {
     *     // ... the filter for the IntegrationProviders we want to count
     *   }
     * })
    **/
    count<T extends IntegrationProviderCountArgs>(
      args?: Subset<T, IntegrationProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntegrationProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationProviderAggregateArgs>(args: Subset<T, IntegrationProviderAggregateArgs>): Prisma.PrismaPromise<GetIntegrationProviderAggregateType<T>>

    /**
     * Group by IntegrationProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationProviderGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntegrationProvider model
   */
  readonly fields: IntegrationProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntegrationProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integrations<T extends IntegrationProvider$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationProvider$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntegrationProvider model
   */
  interface IntegrationProviderFieldRefs {
    readonly id: FieldRef<"IntegrationProvider", 'String'>
    readonly providerKey: FieldRef<"IntegrationProvider", 'String'>
    readonly displayName: FieldRef<"IntegrationProvider", 'String'>
    readonly description: FieldRef<"IntegrationProvider", 'String'>
    readonly logoUrl: FieldRef<"IntegrationProvider", 'String'>
    readonly type: FieldRef<"IntegrationProvider", 'IntegrationType'>
    readonly isEnabled: FieldRef<"IntegrationProvider", 'Boolean'>
    readonly isBeta: FieldRef<"IntegrationProvider", 'Boolean'>
    readonly createdAt: FieldRef<"IntegrationProvider", 'DateTime'>
    readonly updatedAt: FieldRef<"IntegrationProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntegrationProvider findUnique
   */
  export type IntegrationProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationProvider to fetch.
     */
    where: IntegrationProviderWhereUniqueInput
  }

  /**
   * IntegrationProvider findUniqueOrThrow
   */
  export type IntegrationProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationProvider to fetch.
     */
    where: IntegrationProviderWhereUniqueInput
  }

  /**
   * IntegrationProvider findFirst
   */
  export type IntegrationProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationProvider to fetch.
     */
    where?: IntegrationProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationProviders to fetch.
     */
    orderBy?: IntegrationProviderOrderByWithRelationInput | IntegrationProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationProviders.
     */
    cursor?: IntegrationProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationProviders.
     */
    distinct?: IntegrationProviderScalarFieldEnum | IntegrationProviderScalarFieldEnum[]
  }

  /**
   * IntegrationProvider findFirstOrThrow
   */
  export type IntegrationProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationProvider to fetch.
     */
    where?: IntegrationProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationProviders to fetch.
     */
    orderBy?: IntegrationProviderOrderByWithRelationInput | IntegrationProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntegrationProviders.
     */
    cursor?: IntegrationProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntegrationProviders.
     */
    distinct?: IntegrationProviderScalarFieldEnum | IntegrationProviderScalarFieldEnum[]
  }

  /**
   * IntegrationProvider findMany
   */
  export type IntegrationProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * Filter, which IntegrationProviders to fetch.
     */
    where?: IntegrationProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntegrationProviders to fetch.
     */
    orderBy?: IntegrationProviderOrderByWithRelationInput | IntegrationProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntegrationProviders.
     */
    cursor?: IntegrationProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntegrationProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntegrationProviders.
     */
    skip?: number
    distinct?: IntegrationProviderScalarFieldEnum | IntegrationProviderScalarFieldEnum[]
  }

  /**
   * IntegrationProvider create
   */
  export type IntegrationProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a IntegrationProvider.
     */
    data: XOR<IntegrationProviderCreateInput, IntegrationProviderUncheckedCreateInput>
  }

  /**
   * IntegrationProvider createMany
   */
  export type IntegrationProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntegrationProviders.
     */
    data: IntegrationProviderCreateManyInput | IntegrationProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationProvider createManyAndReturn
   */
  export type IntegrationProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * The data used to create many IntegrationProviders.
     */
    data: IntegrationProviderCreateManyInput | IntegrationProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntegrationProvider update
   */
  export type IntegrationProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a IntegrationProvider.
     */
    data: XOR<IntegrationProviderUpdateInput, IntegrationProviderUncheckedUpdateInput>
    /**
     * Choose, which IntegrationProvider to update.
     */
    where: IntegrationProviderWhereUniqueInput
  }

  /**
   * IntegrationProvider updateMany
   */
  export type IntegrationProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntegrationProviders.
     */
    data: XOR<IntegrationProviderUpdateManyMutationInput, IntegrationProviderUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationProviders to update
     */
    where?: IntegrationProviderWhereInput
    /**
     * Limit how many IntegrationProviders to update.
     */
    limit?: number
  }

  /**
   * IntegrationProvider updateManyAndReturn
   */
  export type IntegrationProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * The data used to update IntegrationProviders.
     */
    data: XOR<IntegrationProviderUpdateManyMutationInput, IntegrationProviderUncheckedUpdateManyInput>
    /**
     * Filter which IntegrationProviders to update
     */
    where?: IntegrationProviderWhereInput
    /**
     * Limit how many IntegrationProviders to update.
     */
    limit?: number
  }

  /**
   * IntegrationProvider upsert
   */
  export type IntegrationProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the IntegrationProvider to update in case it exists.
     */
    where: IntegrationProviderWhereUniqueInput
    /**
     * In case the IntegrationProvider found by the `where` argument doesn't exist, create a new IntegrationProvider with this data.
     */
    create: XOR<IntegrationProviderCreateInput, IntegrationProviderUncheckedCreateInput>
    /**
     * In case the IntegrationProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationProviderUpdateInput, IntegrationProviderUncheckedUpdateInput>
  }

  /**
   * IntegrationProvider delete
   */
  export type IntegrationProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
    /**
     * Filter which IntegrationProvider to delete.
     */
    where: IntegrationProviderWhereUniqueInput
  }

  /**
   * IntegrationProvider deleteMany
   */
  export type IntegrationProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntegrationProviders to delete
     */
    where?: IntegrationProviderWhereInput
    /**
     * Limit how many IntegrationProviders to delete.
     */
    limit?: number
  }

  /**
   * IntegrationProvider.integrations
   */
  export type IntegrationProvider$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    cursor?: IntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * IntegrationProvider without action
   */
  export type IntegrationProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntegrationProvider
     */
    select?: IntegrationProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntegrationProvider
     */
    omit?: IntegrationProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationProviderInclude<ExtArgs> | null
  }


  /**
   * Model Integration
   */

  export type AggregateIntegration = {
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  export type IntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    accessToken: string | null
    refreshToken: string | null
    lastSync: Date | null
    externalId: string | null
    integrationProviderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    accessToken: string | null
    refreshToken: string | null
    lastSync: Date | null
    externalId: string | null
    integrationProviderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    accessToken: number
    refreshToken: number
    lastSync: number
    externalId: number
    integrationProviderId: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    accessToken?: true
    refreshToken?: true
    lastSync?: true
    externalId?: true
    integrationProviderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    accessToken?: true
    refreshToken?: true
    lastSync?: true
    externalId?: true
    integrationProviderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    accessToken?: true
    refreshToken?: true
    lastSync?: true
    externalId?: true
    integrationProviderId?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integration to aggregate.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationMaxAggregateInputType
  }

  export type GetIntegrationAggregateType<T extends IntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegration[P]>
      : GetScalarType<T[P], AggregateIntegration[P]>
  }




  export type IntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithAggregationInput | IntegrationOrderByWithAggregationInput[]
    by: IntegrationScalarFieldEnum[] | IntegrationScalarFieldEnum
    having?: IntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationCountAggregateInputType | true
    _min?: IntegrationMinAggregateInputType
    _max?: IntegrationMaxAggregateInputType
  }

  export type IntegrationGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    accessToken: string
    refreshToken: string | null
    lastSync: Date | null
    externalId: string | null
    integrationProviderId: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    lastSync?: boolean
    externalId?: boolean
    integrationProviderId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integrationProvider?: boolean | IntegrationProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    destinationCalendars?: boolean | Integration$destinationCalendarsArgs<ExtArgs>
    _count?: boolean | IntegrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    lastSync?: boolean
    externalId?: boolean
    integrationProviderId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integrationProvider?: boolean | IntegrationProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    lastSync?: boolean
    externalId?: boolean
    integrationProviderId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    integrationProvider?: boolean | IntegrationProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    lastSync?: boolean
    externalId?: boolean
    integrationProviderId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "accessToken" | "refreshToken" | "lastSync" | "externalId" | "integrationProviderId" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["integration"]>
  export type IntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrationProvider?: boolean | IntegrationProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    destinationCalendars?: boolean | Integration$destinationCalendarsArgs<ExtArgs>
    _count?: boolean | IntegrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IntegrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrationProvider?: boolean | IntegrationProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntegrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrationProvider?: boolean | IntegrationProviderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integration"
    objects: {
      integrationProvider: Prisma.$IntegrationProviderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      destinationCalendars: Prisma.$DestinationCalendarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      accessToken: string
      refreshToken: string | null
      lastSync: Date | null
      externalId: string | null
      integrationProviderId: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integration"]>
    composites: {}
  }

  type IntegrationGetPayload<S extends boolean | null | undefined | IntegrationDefaultArgs> = $Result.GetResult<Prisma.$IntegrationPayload, S>

  type IntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationCountAggregateInputType | true
    }

  export interface IntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integration'], meta: { name: 'Integration' } }
    /**
     * Find zero or one Integration that matches the filter.
     * @param {IntegrationFindUniqueArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationFindUniqueArgs>(args: SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationFindUniqueOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationFindFirstArgs>(args?: SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integration.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationWithIdOnly = await prisma.integration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationFindManyArgs>(args?: SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integration.
     * @param {IntegrationCreateArgs} args - Arguments to create a Integration.
     * @example
     * // Create one Integration
     * const Integration = await prisma.integration.create({
     *   data: {
     *     // ... data to create a Integration
     *   }
     * })
     * 
     */
    create<T extends IntegrationCreateArgs>(args: SelectSubset<T, IntegrationCreateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrations.
     * @param {IntegrationCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationCreateManyArgs>(args?: SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrations and returns the data saved in the database.
     * @param {IntegrationCreateManyAndReturnArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Integration.
     * @param {IntegrationDeleteArgs} args - Arguments to delete one Integration.
     * @example
     * // Delete one Integration
     * const Integration = await prisma.integration.delete({
     *   where: {
     *     // ... filter to delete one Integration
     *   }
     * })
     * 
     */
    delete<T extends IntegrationDeleteArgs>(args: SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integration.
     * @param {IntegrationUpdateArgs} args - Arguments to update one Integration.
     * @example
     * // Update one Integration
     * const integration = await prisma.integration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationUpdateArgs>(args: SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationDeleteManyArgs>(args?: SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationUpdateManyArgs>(args: SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations and returns the data updated in the database.
     * @param {IntegrationUpdateManyAndReturnArgs} args - Arguments to update many Integrations.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Integration.
     * @param {IntegrationUpsertArgs} args - Arguments to update or create a Integration.
     * @example
     * // Update or create a Integration
     * const integration = await prisma.integration.upsert({
     *   create: {
     *     // ... data to create a Integration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integration we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationUpsertArgs>(args: SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integration.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationCountArgs>(
      args?: Subset<T, IntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationAggregateArgs>(args: Subset<T, IntegrationAggregateArgs>): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>

    /**
     * Group by Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integration model
   */
  readonly fields: IntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    integrationProvider<T extends IntegrationProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationProviderDefaultArgs<ExtArgs>>): Prisma__IntegrationProviderClient<$Result.GetResult<Prisma.$IntegrationProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destinationCalendars<T extends Integration$destinationCalendarsArgs<ExtArgs> = {}>(args?: Subset<T, Integration$destinationCalendarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Integration model
   */
  interface IntegrationFieldRefs {
    readonly id: FieldRef<"Integration", 'String'>
    readonly userId: FieldRef<"Integration", 'String'>
    readonly name: FieldRef<"Integration", 'String'>
    readonly accessToken: FieldRef<"Integration", 'String'>
    readonly refreshToken: FieldRef<"Integration", 'String'>
    readonly lastSync: FieldRef<"Integration", 'DateTime'>
    readonly externalId: FieldRef<"Integration", 'String'>
    readonly integrationProviderId: FieldRef<"Integration", 'String'>
    readonly metadata: FieldRef<"Integration", 'Json'>
    readonly createdAt: FieldRef<"Integration", 'DateTime'>
    readonly updatedAt: FieldRef<"Integration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Integration findUnique
   */
  export type IntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findUniqueOrThrow
   */
  export type IntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findFirst
   */
  export type IntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findFirstOrThrow
   */
  export type IntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findMany
   */
  export type IntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration create
   */
  export type IntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Integration.
     */
    data: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
  }

  /**
   * Integration createMany
   */
  export type IntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integration createManyAndReturn
   */
  export type IntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integration update
   */
  export type IntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Integration.
     */
    data: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
    /**
     * Choose, which Integration to update.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration updateMany
   */
  export type IntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
  }

  /**
   * Integration updateManyAndReturn
   */
  export type IntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integration upsert
   */
  export type IntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Integration to update in case it exists.
     */
    where: IntegrationWhereUniqueInput
    /**
     * In case the Integration found by the `where` argument doesn't exist, create a new Integration with this data.
     */
    create: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
    /**
     * In case the Integration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
  }

  /**
   * Integration delete
   */
  export type IntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter which Integration to delete.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration deleteMany
   */
  export type IntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to delete.
     */
    limit?: number
  }

  /**
   * Integration.destinationCalendars
   */
  export type Integration$destinationCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    where?: DestinationCalendarWhereInput
    orderBy?: DestinationCalendarOrderByWithRelationInput | DestinationCalendarOrderByWithRelationInput[]
    cursor?: DestinationCalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationCalendarScalarFieldEnum | DestinationCalendarScalarFieldEnum[]
  }

  /**
   * Integration without action
   */
  export type IntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
  }


  /**
   * Model UserPersona
   */

  export type AggregateUserPersona = {
    _count: UserPersonaCountAggregateOutputType | null
    _min: UserPersonaMinAggregateOutputType | null
    _max: UserPersonaMaxAggregateOutputType | null
  }

  export type UserPersonaMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPersonaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPersonaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    defaultIntegrationTypes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPersonaMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPersonaMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPersonaCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    defaultIntegrationTypes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPersona to aggregate.
     */
    where?: UserPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPersonas to fetch.
     */
    orderBy?: UserPersonaOrderByWithRelationInput | UserPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPersonas
    **/
    _count?: true | UserPersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPersonaMaxAggregateInputType
  }

  export type GetUserPersonaAggregateType<T extends UserPersonaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPersona[P]>
      : GetScalarType<T[P], AggregateUserPersona[P]>
  }




  export type UserPersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPersonaWhereInput
    orderBy?: UserPersonaOrderByWithAggregationInput | UserPersonaOrderByWithAggregationInput[]
    by: UserPersonaScalarFieldEnum[] | UserPersonaScalarFieldEnum
    having?: UserPersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPersonaCountAggregateInputType | true
    _min?: UserPersonaMinAggregateInputType
    _max?: UserPersonaMaxAggregateInputType
  }

  export type UserPersonaGroupByOutputType = {
    id: string
    name: string
    description: string | null
    defaultIntegrationTypes: $Enums.IntegrationType[]
    createdAt: Date
    updatedAt: Date
    _count: UserPersonaCountAggregateOutputType | null
    _min: UserPersonaMinAggregateOutputType | null
    _max: UserPersonaMaxAggregateOutputType | null
  }

  type GetUserPersonaGroupByPayload<T extends UserPersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPersonaGroupByOutputType[P]>
            : GetScalarType<T[P], UserPersonaGroupByOutputType[P]>
        }
      >
    >


  export type UserPersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    defaultIntegrationTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UserPersona$usersArgs<ExtArgs>
    onboardingsWithThisInitialPersona?: boolean | UserPersona$onboardingsWithThisInitialPersonaArgs<ExtArgs>
    _count?: boolean | UserPersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPersona"]>

  export type UserPersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    defaultIntegrationTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userPersona"]>

  export type UserPersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    defaultIntegrationTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userPersona"]>

  export type UserPersonaSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    defaultIntegrationTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "defaultIntegrationTypes" | "createdAt" | "updatedAt", ExtArgs["result"]["userPersona"]>
  export type UserPersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserPersona$usersArgs<ExtArgs>
    onboardingsWithThisInitialPersona?: boolean | UserPersona$onboardingsWithThisInitialPersonaArgs<ExtArgs>
    _count?: boolean | UserPersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserPersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserPersonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPersona"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      onboardingsWithThisInitialPersona: Prisma.$UserOnboardingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      defaultIntegrationTypes: $Enums.IntegrationType[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPersona"]>
    composites: {}
  }

  type UserPersonaGetPayload<S extends boolean | null | undefined | UserPersonaDefaultArgs> = $Result.GetResult<Prisma.$UserPersonaPayload, S>

  type UserPersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPersonaCountAggregateInputType | true
    }

  export interface UserPersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPersona'], meta: { name: 'UserPersona' } }
    /**
     * Find zero or one UserPersona that matches the filter.
     * @param {UserPersonaFindUniqueArgs} args - Arguments to find a UserPersona
     * @example
     * // Get one UserPersona
     * const userPersona = await prisma.userPersona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPersonaFindUniqueArgs>(args: SelectSubset<T, UserPersonaFindUniqueArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPersona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPersonaFindUniqueOrThrowArgs} args - Arguments to find a UserPersona
     * @example
     * // Get one UserPersona
     * const userPersona = await prisma.userPersona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPersona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaFindFirstArgs} args - Arguments to find a UserPersona
     * @example
     * // Get one UserPersona
     * const userPersona = await prisma.userPersona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPersonaFindFirstArgs>(args?: SelectSubset<T, UserPersonaFindFirstArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPersona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaFindFirstOrThrowArgs} args - Arguments to find a UserPersona
     * @example
     * // Get one UserPersona
     * const userPersona = await prisma.userPersona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPersonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPersonas
     * const userPersonas = await prisma.userPersona.findMany()
     * 
     * // Get first 10 UserPersonas
     * const userPersonas = await prisma.userPersona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPersonaWithIdOnly = await prisma.userPersona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPersonaFindManyArgs>(args?: SelectSubset<T, UserPersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPersona.
     * @param {UserPersonaCreateArgs} args - Arguments to create a UserPersona.
     * @example
     * // Create one UserPersona
     * const UserPersona = await prisma.userPersona.create({
     *   data: {
     *     // ... data to create a UserPersona
     *   }
     * })
     * 
     */
    create<T extends UserPersonaCreateArgs>(args: SelectSubset<T, UserPersonaCreateArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPersonas.
     * @param {UserPersonaCreateManyArgs} args - Arguments to create many UserPersonas.
     * @example
     * // Create many UserPersonas
     * const userPersona = await prisma.userPersona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPersonaCreateManyArgs>(args?: SelectSubset<T, UserPersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPersonas and returns the data saved in the database.
     * @param {UserPersonaCreateManyAndReturnArgs} args - Arguments to create many UserPersonas.
     * @example
     * // Create many UserPersonas
     * const userPersona = await prisma.userPersona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPersonas and only return the `id`
     * const userPersonaWithIdOnly = await prisma.userPersona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPersona.
     * @param {UserPersonaDeleteArgs} args - Arguments to delete one UserPersona.
     * @example
     * // Delete one UserPersona
     * const UserPersona = await prisma.userPersona.delete({
     *   where: {
     *     // ... filter to delete one UserPersona
     *   }
     * })
     * 
     */
    delete<T extends UserPersonaDeleteArgs>(args: SelectSubset<T, UserPersonaDeleteArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPersona.
     * @param {UserPersonaUpdateArgs} args - Arguments to update one UserPersona.
     * @example
     * // Update one UserPersona
     * const userPersona = await prisma.userPersona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPersonaUpdateArgs>(args: SelectSubset<T, UserPersonaUpdateArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPersonas.
     * @param {UserPersonaDeleteManyArgs} args - Arguments to filter UserPersonas to delete.
     * @example
     * // Delete a few UserPersonas
     * const { count } = await prisma.userPersona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPersonaDeleteManyArgs>(args?: SelectSubset<T, UserPersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPersonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPersonas
     * const userPersona = await prisma.userPersona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPersonaUpdateManyArgs>(args: SelectSubset<T, UserPersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPersonas and returns the data updated in the database.
     * @param {UserPersonaUpdateManyAndReturnArgs} args - Arguments to update many UserPersonas.
     * @example
     * // Update many UserPersonas
     * const userPersona = await prisma.userPersona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPersonas and only return the `id`
     * const userPersonaWithIdOnly = await prisma.userPersona.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPersona.
     * @param {UserPersonaUpsertArgs} args - Arguments to update or create a UserPersona.
     * @example
     * // Update or create a UserPersona
     * const userPersona = await prisma.userPersona.upsert({
     *   create: {
     *     // ... data to create a UserPersona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPersona we want to update
     *   }
     * })
     */
    upsert<T extends UserPersonaUpsertArgs>(args: SelectSubset<T, UserPersonaUpsertArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPersonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaCountArgs} args - Arguments to filter UserPersonas to count.
     * @example
     * // Count the number of UserPersonas
     * const count = await prisma.userPersona.count({
     *   where: {
     *     // ... the filter for the UserPersonas we want to count
     *   }
     * })
    **/
    count<T extends UserPersonaCountArgs>(
      args?: Subset<T, UserPersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPersona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPersonaAggregateArgs>(args: Subset<T, UserPersonaAggregateArgs>): Prisma.PrismaPromise<GetUserPersonaAggregateType<T>>

    /**
     * Group by UserPersona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPersonaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPersonaGroupByArgs['orderBy'] }
        : { orderBy?: UserPersonaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPersona model
   */
  readonly fields: UserPersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPersona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserPersona$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserPersona$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    onboardingsWithThisInitialPersona<T extends UserPersona$onboardingsWithThisInitialPersonaArgs<ExtArgs> = {}>(args?: Subset<T, UserPersona$onboardingsWithThisInitialPersonaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPersona model
   */
  interface UserPersonaFieldRefs {
    readonly id: FieldRef<"UserPersona", 'String'>
    readonly name: FieldRef<"UserPersona", 'String'>
    readonly description: FieldRef<"UserPersona", 'String'>
    readonly defaultIntegrationTypes: FieldRef<"UserPersona", 'IntegrationType[]'>
    readonly createdAt: FieldRef<"UserPersona", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPersona", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPersona findUnique
   */
  export type UserPersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * Filter, which UserPersona to fetch.
     */
    where: UserPersonaWhereUniqueInput
  }

  /**
   * UserPersona findUniqueOrThrow
   */
  export type UserPersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * Filter, which UserPersona to fetch.
     */
    where: UserPersonaWhereUniqueInput
  }

  /**
   * UserPersona findFirst
   */
  export type UserPersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * Filter, which UserPersona to fetch.
     */
    where?: UserPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPersonas to fetch.
     */
    orderBy?: UserPersonaOrderByWithRelationInput | UserPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPersonas.
     */
    cursor?: UserPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPersonas.
     */
    distinct?: UserPersonaScalarFieldEnum | UserPersonaScalarFieldEnum[]
  }

  /**
   * UserPersona findFirstOrThrow
   */
  export type UserPersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * Filter, which UserPersona to fetch.
     */
    where?: UserPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPersonas to fetch.
     */
    orderBy?: UserPersonaOrderByWithRelationInput | UserPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPersonas.
     */
    cursor?: UserPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPersonas.
     */
    distinct?: UserPersonaScalarFieldEnum | UserPersonaScalarFieldEnum[]
  }

  /**
   * UserPersona findMany
   */
  export type UserPersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * Filter, which UserPersonas to fetch.
     */
    where?: UserPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPersonas to fetch.
     */
    orderBy?: UserPersonaOrderByWithRelationInput | UserPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPersonas.
     */
    cursor?: UserPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPersonas.
     */
    skip?: number
    distinct?: UserPersonaScalarFieldEnum | UserPersonaScalarFieldEnum[]
  }

  /**
   * UserPersona create
   */
  export type UserPersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPersona.
     */
    data: XOR<UserPersonaCreateInput, UserPersonaUncheckedCreateInput>
  }

  /**
   * UserPersona createMany
   */
  export type UserPersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPersonas.
     */
    data: UserPersonaCreateManyInput | UserPersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPersona createManyAndReturn
   */
  export type UserPersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * The data used to create many UserPersonas.
     */
    data: UserPersonaCreateManyInput | UserPersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPersona update
   */
  export type UserPersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPersona.
     */
    data: XOR<UserPersonaUpdateInput, UserPersonaUncheckedUpdateInput>
    /**
     * Choose, which UserPersona to update.
     */
    where: UserPersonaWhereUniqueInput
  }

  /**
   * UserPersona updateMany
   */
  export type UserPersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPersonas.
     */
    data: XOR<UserPersonaUpdateManyMutationInput, UserPersonaUncheckedUpdateManyInput>
    /**
     * Filter which UserPersonas to update
     */
    where?: UserPersonaWhereInput
    /**
     * Limit how many UserPersonas to update.
     */
    limit?: number
  }

  /**
   * UserPersona updateManyAndReturn
   */
  export type UserPersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * The data used to update UserPersonas.
     */
    data: XOR<UserPersonaUpdateManyMutationInput, UserPersonaUncheckedUpdateManyInput>
    /**
     * Filter which UserPersonas to update
     */
    where?: UserPersonaWhereInput
    /**
     * Limit how many UserPersonas to update.
     */
    limit?: number
  }

  /**
   * UserPersona upsert
   */
  export type UserPersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPersona to update in case it exists.
     */
    where: UserPersonaWhereUniqueInput
    /**
     * In case the UserPersona found by the `where` argument doesn't exist, create a new UserPersona with this data.
     */
    create: XOR<UserPersonaCreateInput, UserPersonaUncheckedCreateInput>
    /**
     * In case the UserPersona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPersonaUpdateInput, UserPersonaUncheckedUpdateInput>
  }

  /**
   * UserPersona delete
   */
  export type UserPersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    /**
     * Filter which UserPersona to delete.
     */
    where: UserPersonaWhereUniqueInput
  }

  /**
   * UserPersona deleteMany
   */
  export type UserPersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPersonas to delete
     */
    where?: UserPersonaWhereInput
    /**
     * Limit how many UserPersonas to delete.
     */
    limit?: number
  }

  /**
   * UserPersona.users
   */
  export type UserPersona$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserPersona.onboardingsWithThisInitialPersona
   */
  export type UserPersona$onboardingsWithThisInitialPersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    where?: UserOnboardingWhereInput
    orderBy?: UserOnboardingOrderByWithRelationInput | UserOnboardingOrderByWithRelationInput[]
    cursor?: UserOnboardingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnboardingScalarFieldEnum | UserOnboardingScalarFieldEnum[]
  }

  /**
   * UserPersona without action
   */
  export type UserPersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
  }


  /**
   * Model UserOnboarding
   */

  export type AggregateUserOnboarding = {
    _count: UserOnboardingCountAggregateOutputType | null
    _min: UserOnboardingMinAggregateOutputType | null
    _max: UserOnboardingMaxAggregateOutputType | null
  }

  export type UserOnboardingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    onboardingId: string | null
    initialPersonaId: string | null
    completed: boolean | null
    currentStep: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOnboardingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    onboardingId: string | null
    initialPersonaId: string | null
    completed: boolean | null
    currentStep: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserOnboardingCountAggregateOutputType = {
    id: number
    userId: number
    onboardingId: number
    initialPersonaId: number
    completed: number
    currentStep: number
    onboardingData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserOnboardingMinAggregateInputType = {
    id?: true
    userId?: true
    onboardingId?: true
    initialPersonaId?: true
    completed?: true
    currentStep?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOnboardingMaxAggregateInputType = {
    id?: true
    userId?: true
    onboardingId?: true
    initialPersonaId?: true
    completed?: true
    currentStep?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserOnboardingCountAggregateInputType = {
    id?: true
    userId?: true
    onboardingId?: true
    initialPersonaId?: true
    completed?: true
    currentStep?: true
    onboardingData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserOnboardingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnboarding to aggregate.
     */
    where?: UserOnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnboardings to fetch.
     */
    orderBy?: UserOnboardingOrderByWithRelationInput | UserOnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnboardings
    **/
    _count?: true | UserOnboardingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnboardingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnboardingMaxAggregateInputType
  }

  export type GetUserOnboardingAggregateType<T extends UserOnboardingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnboarding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnboarding[P]>
      : GetScalarType<T[P], AggregateUserOnboarding[P]>
  }




  export type UserOnboardingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnboardingWhereInput
    orderBy?: UserOnboardingOrderByWithAggregationInput | UserOnboardingOrderByWithAggregationInput[]
    by: UserOnboardingScalarFieldEnum[] | UserOnboardingScalarFieldEnum
    having?: UserOnboardingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnboardingCountAggregateInputType | true
    _min?: UserOnboardingMinAggregateInputType
    _max?: UserOnboardingMaxAggregateInputType
  }

  export type UserOnboardingGroupByOutputType = {
    id: string
    userId: string
    onboardingId: string
    initialPersonaId: string | null
    completed: boolean
    currentStep: string | null
    onboardingData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserOnboardingCountAggregateOutputType | null
    _min: UserOnboardingMinAggregateOutputType | null
    _max: UserOnboardingMaxAggregateOutputType | null
  }

  type GetUserOnboardingGroupByPayload<T extends UserOnboardingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnboardingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnboardingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnboardingGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnboardingGroupByOutputType[P]>
        }
      >
    >


  export type UserOnboardingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    onboardingId?: boolean
    initialPersonaId?: boolean
    completed?: boolean
    currentStep?: boolean
    onboardingData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    initialPersona?: boolean | UserOnboarding$initialPersonaArgs<ExtArgs>
  }, ExtArgs["result"]["userOnboarding"]>

  export type UserOnboardingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    onboardingId?: boolean
    initialPersonaId?: boolean
    completed?: boolean
    currentStep?: boolean
    onboardingData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    initialPersona?: boolean | UserOnboarding$initialPersonaArgs<ExtArgs>
  }, ExtArgs["result"]["userOnboarding"]>

  export type UserOnboardingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    onboardingId?: boolean
    initialPersonaId?: boolean
    completed?: boolean
    currentStep?: boolean
    onboardingData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    initialPersona?: boolean | UserOnboarding$initialPersonaArgs<ExtArgs>
  }, ExtArgs["result"]["userOnboarding"]>

  export type UserOnboardingSelectScalar = {
    id?: boolean
    userId?: boolean
    onboardingId?: boolean
    initialPersonaId?: boolean
    completed?: boolean
    currentStep?: boolean
    onboardingData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOnboardingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "onboardingId" | "initialPersonaId" | "completed" | "currentStep" | "onboardingData" | "createdAt" | "updatedAt", ExtArgs["result"]["userOnboarding"]>
  export type UserOnboardingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    initialPersona?: boolean | UserOnboarding$initialPersonaArgs<ExtArgs>
  }
  export type UserOnboardingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    initialPersona?: boolean | UserOnboarding$initialPersonaArgs<ExtArgs>
  }
  export type UserOnboardingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    initialPersona?: boolean | UserOnboarding$initialPersonaArgs<ExtArgs>
  }

  export type $UserOnboardingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnboarding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      initialPersona: Prisma.$UserPersonaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      onboardingId: string
      initialPersonaId: string | null
      completed: boolean
      currentStep: string | null
      onboardingData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userOnboarding"]>
    composites: {}
  }

  type UserOnboardingGetPayload<S extends boolean | null | undefined | UserOnboardingDefaultArgs> = $Result.GetResult<Prisma.$UserOnboardingPayload, S>

  type UserOnboardingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnboardingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnboardingCountAggregateInputType | true
    }

  export interface UserOnboardingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnboarding'], meta: { name: 'UserOnboarding' } }
    /**
     * Find zero or one UserOnboarding that matches the filter.
     * @param {UserOnboardingFindUniqueArgs} args - Arguments to find a UserOnboarding
     * @example
     * // Get one UserOnboarding
     * const userOnboarding = await prisma.userOnboarding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnboardingFindUniqueArgs>(args: SelectSubset<T, UserOnboardingFindUniqueArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnboarding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnboardingFindUniqueOrThrowArgs} args - Arguments to find a UserOnboarding
     * @example
     * // Get one UserOnboarding
     * const userOnboarding = await prisma.userOnboarding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnboardingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnboardingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnboarding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingFindFirstArgs} args - Arguments to find a UserOnboarding
     * @example
     * // Get one UserOnboarding
     * const userOnboarding = await prisma.userOnboarding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnboardingFindFirstArgs>(args?: SelectSubset<T, UserOnboardingFindFirstArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnboarding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingFindFirstOrThrowArgs} args - Arguments to find a UserOnboarding
     * @example
     * // Get one UserOnboarding
     * const userOnboarding = await prisma.userOnboarding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnboardingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnboardingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnboardings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnboardings
     * const userOnboardings = await prisma.userOnboarding.findMany()
     * 
     * // Get first 10 UserOnboardings
     * const userOnboardings = await prisma.userOnboarding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOnboardingWithIdOnly = await prisma.userOnboarding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOnboardingFindManyArgs>(args?: SelectSubset<T, UserOnboardingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnboarding.
     * @param {UserOnboardingCreateArgs} args - Arguments to create a UserOnboarding.
     * @example
     * // Create one UserOnboarding
     * const UserOnboarding = await prisma.userOnboarding.create({
     *   data: {
     *     // ... data to create a UserOnboarding
     *   }
     * })
     * 
     */
    create<T extends UserOnboardingCreateArgs>(args: SelectSubset<T, UserOnboardingCreateArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnboardings.
     * @param {UserOnboardingCreateManyArgs} args - Arguments to create many UserOnboardings.
     * @example
     * // Create many UserOnboardings
     * const userOnboarding = await prisma.userOnboarding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnboardingCreateManyArgs>(args?: SelectSubset<T, UserOnboardingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnboardings and returns the data saved in the database.
     * @param {UserOnboardingCreateManyAndReturnArgs} args - Arguments to create many UserOnboardings.
     * @example
     * // Create many UserOnboardings
     * const userOnboarding = await prisma.userOnboarding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnboardings and only return the `id`
     * const userOnboardingWithIdOnly = await prisma.userOnboarding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOnboardingCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOnboardingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOnboarding.
     * @param {UserOnboardingDeleteArgs} args - Arguments to delete one UserOnboarding.
     * @example
     * // Delete one UserOnboarding
     * const UserOnboarding = await prisma.userOnboarding.delete({
     *   where: {
     *     // ... filter to delete one UserOnboarding
     *   }
     * })
     * 
     */
    delete<T extends UserOnboardingDeleteArgs>(args: SelectSubset<T, UserOnboardingDeleteArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnboarding.
     * @param {UserOnboardingUpdateArgs} args - Arguments to update one UserOnboarding.
     * @example
     * // Update one UserOnboarding
     * const userOnboarding = await prisma.userOnboarding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnboardingUpdateArgs>(args: SelectSubset<T, UserOnboardingUpdateArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnboardings.
     * @param {UserOnboardingDeleteManyArgs} args - Arguments to filter UserOnboardings to delete.
     * @example
     * // Delete a few UserOnboardings
     * const { count } = await prisma.userOnboarding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnboardingDeleteManyArgs>(args?: SelectSubset<T, UserOnboardingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnboardings
     * const userOnboarding = await prisma.userOnboarding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnboardingUpdateManyArgs>(args: SelectSubset<T, UserOnboardingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnboardings and returns the data updated in the database.
     * @param {UserOnboardingUpdateManyAndReturnArgs} args - Arguments to update many UserOnboardings.
     * @example
     * // Update many UserOnboardings
     * const userOnboarding = await prisma.userOnboarding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOnboardings and only return the `id`
     * const userOnboardingWithIdOnly = await prisma.userOnboarding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserOnboardingUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOnboardingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOnboarding.
     * @param {UserOnboardingUpsertArgs} args - Arguments to update or create a UserOnboarding.
     * @example
     * // Update or create a UserOnboarding
     * const userOnboarding = await prisma.userOnboarding.upsert({
     *   create: {
     *     // ... data to create a UserOnboarding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnboarding we want to update
     *   }
     * })
     */
    upsert<T extends UserOnboardingUpsertArgs>(args: SelectSubset<T, UserOnboardingUpsertArgs<ExtArgs>>): Prisma__UserOnboardingClient<$Result.GetResult<Prisma.$UserOnboardingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingCountArgs} args - Arguments to filter UserOnboardings to count.
     * @example
     * // Count the number of UserOnboardings
     * const count = await prisma.userOnboarding.count({
     *   where: {
     *     // ... the filter for the UserOnboardings we want to count
     *   }
     * })
    **/
    count<T extends UserOnboardingCountArgs>(
      args?: Subset<T, UserOnboardingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnboardingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnboardingAggregateArgs>(args: Subset<T, UserOnboardingAggregateArgs>): Prisma.PrismaPromise<GetUserOnboardingAggregateType<T>>

    /**
     * Group by UserOnboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnboardingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnboardingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnboardingGroupByArgs['orderBy'] }
        : { orderBy?: UserOnboardingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnboardingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnboardingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnboarding model
   */
  readonly fields: UserOnboardingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnboarding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnboardingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    initialPersona<T extends UserOnboarding$initialPersonaArgs<ExtArgs> = {}>(args?: Subset<T, UserOnboarding$initialPersonaArgs<ExtArgs>>): Prisma__UserPersonaClient<$Result.GetResult<Prisma.$UserPersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOnboarding model
   */
  interface UserOnboardingFieldRefs {
    readonly id: FieldRef<"UserOnboarding", 'String'>
    readonly userId: FieldRef<"UserOnboarding", 'String'>
    readonly onboardingId: FieldRef<"UserOnboarding", 'String'>
    readonly initialPersonaId: FieldRef<"UserOnboarding", 'String'>
    readonly completed: FieldRef<"UserOnboarding", 'Boolean'>
    readonly currentStep: FieldRef<"UserOnboarding", 'String'>
    readonly onboardingData: FieldRef<"UserOnboarding", 'Json'>
    readonly createdAt: FieldRef<"UserOnboarding", 'DateTime'>
    readonly updatedAt: FieldRef<"UserOnboarding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOnboarding findUnique
   */
  export type UserOnboardingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * Filter, which UserOnboarding to fetch.
     */
    where: UserOnboardingWhereUniqueInput
  }

  /**
   * UserOnboarding findUniqueOrThrow
   */
  export type UserOnboardingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * Filter, which UserOnboarding to fetch.
     */
    where: UserOnboardingWhereUniqueInput
  }

  /**
   * UserOnboarding findFirst
   */
  export type UserOnboardingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * Filter, which UserOnboarding to fetch.
     */
    where?: UserOnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnboardings to fetch.
     */
    orderBy?: UserOnboardingOrderByWithRelationInput | UserOnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnboardings.
     */
    cursor?: UserOnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnboardings.
     */
    distinct?: UserOnboardingScalarFieldEnum | UserOnboardingScalarFieldEnum[]
  }

  /**
   * UserOnboarding findFirstOrThrow
   */
  export type UserOnboardingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * Filter, which UserOnboarding to fetch.
     */
    where?: UserOnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnboardings to fetch.
     */
    orderBy?: UserOnboardingOrderByWithRelationInput | UserOnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnboardings.
     */
    cursor?: UserOnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnboardings.
     */
    distinct?: UserOnboardingScalarFieldEnum | UserOnboardingScalarFieldEnum[]
  }

  /**
   * UserOnboarding findMany
   */
  export type UserOnboardingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * Filter, which UserOnboardings to fetch.
     */
    where?: UserOnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnboardings to fetch.
     */
    orderBy?: UserOnboardingOrderByWithRelationInput | UserOnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnboardings.
     */
    cursor?: UserOnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnboardings.
     */
    skip?: number
    distinct?: UserOnboardingScalarFieldEnum | UserOnboardingScalarFieldEnum[]
  }

  /**
   * UserOnboarding create
   */
  export type UserOnboardingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnboarding.
     */
    data: XOR<UserOnboardingCreateInput, UserOnboardingUncheckedCreateInput>
  }

  /**
   * UserOnboarding createMany
   */
  export type UserOnboardingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnboardings.
     */
    data: UserOnboardingCreateManyInput | UserOnboardingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnboarding createManyAndReturn
   */
  export type UserOnboardingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * The data used to create many UserOnboardings.
     */
    data: UserOnboardingCreateManyInput | UserOnboardingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnboarding update
   */
  export type UserOnboardingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnboarding.
     */
    data: XOR<UserOnboardingUpdateInput, UserOnboardingUncheckedUpdateInput>
    /**
     * Choose, which UserOnboarding to update.
     */
    where: UserOnboardingWhereUniqueInput
  }

  /**
   * UserOnboarding updateMany
   */
  export type UserOnboardingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnboardings.
     */
    data: XOR<UserOnboardingUpdateManyMutationInput, UserOnboardingUncheckedUpdateManyInput>
    /**
     * Filter which UserOnboardings to update
     */
    where?: UserOnboardingWhereInput
    /**
     * Limit how many UserOnboardings to update.
     */
    limit?: number
  }

  /**
   * UserOnboarding updateManyAndReturn
   */
  export type UserOnboardingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * The data used to update UserOnboardings.
     */
    data: XOR<UserOnboardingUpdateManyMutationInput, UserOnboardingUncheckedUpdateManyInput>
    /**
     * Filter which UserOnboardings to update
     */
    where?: UserOnboardingWhereInput
    /**
     * Limit how many UserOnboardings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnboarding upsert
   */
  export type UserOnboardingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnboarding to update in case it exists.
     */
    where: UserOnboardingWhereUniqueInput
    /**
     * In case the UserOnboarding found by the `where` argument doesn't exist, create a new UserOnboarding with this data.
     */
    create: XOR<UserOnboardingCreateInput, UserOnboardingUncheckedCreateInput>
    /**
     * In case the UserOnboarding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnboardingUpdateInput, UserOnboardingUncheckedUpdateInput>
  }

  /**
   * UserOnboarding delete
   */
  export type UserOnboardingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
    /**
     * Filter which UserOnboarding to delete.
     */
    where: UserOnboardingWhereUniqueInput
  }

  /**
   * UserOnboarding deleteMany
   */
  export type UserOnboardingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnboardings to delete
     */
    where?: UserOnboardingWhereInput
    /**
     * Limit how many UserOnboardings to delete.
     */
    limit?: number
  }

  /**
   * UserOnboarding.initialPersona
   */
  export type UserOnboarding$initialPersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPersona
     */
    select?: UserPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPersona
     */
    omit?: UserPersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPersonaInclude<ExtArgs> | null
    where?: UserPersonaWhereInput
  }

  /**
   * UserOnboarding without action
   */
  export type UserOnboardingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnboarding
     */
    select?: UserOnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnboarding
     */
    omit?: UserOnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnboardingInclude<ExtArgs> | null
  }


  /**
   * Model DestinationCalendar
   */

  export type AggregateDestinationCalendar = {
    _count: DestinationCalendarCountAggregateOutputType | null
    _min: DestinationCalendarMinAggregateOutputType | null
    _max: DestinationCalendarMaxAggregateOutputType | null
  }

  export type DestinationCalendarMinAggregateOutputType = {
    id: string | null
    userId: string | null
    integrationId: string | null
    externalId: string | null
    name: string | null
    isPrimary: boolean | null
    isReadOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCalendarMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    integrationId: string | null
    externalId: string | null
    name: string | null
    isPrimary: boolean | null
    isReadOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCalendarCountAggregateOutputType = {
    id: number
    userId: number
    integrationId: number
    externalId: number
    name: number
    isPrimary: number
    isReadOnly: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationCalendarMinAggregateInputType = {
    id?: true
    userId?: true
    integrationId?: true
    externalId?: true
    name?: true
    isPrimary?: true
    isReadOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCalendarMaxAggregateInputType = {
    id?: true
    userId?: true
    integrationId?: true
    externalId?: true
    name?: true
    isPrimary?: true
    isReadOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCalendarCountAggregateInputType = {
    id?: true
    userId?: true
    integrationId?: true
    externalId?: true
    name?: true
    isPrimary?: true
    isReadOnly?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationCalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationCalendar to aggregate.
     */
    where?: DestinationCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationCalendars to fetch.
     */
    orderBy?: DestinationCalendarOrderByWithRelationInput | DestinationCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationCalendars
    **/
    _count?: true | DestinationCalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationCalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationCalendarMaxAggregateInputType
  }

  export type GetDestinationCalendarAggregateType<T extends DestinationCalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationCalendar[P]>
      : GetScalarType<T[P], AggregateDestinationCalendar[P]>
  }




  export type DestinationCalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationCalendarWhereInput
    orderBy?: DestinationCalendarOrderByWithAggregationInput | DestinationCalendarOrderByWithAggregationInput[]
    by: DestinationCalendarScalarFieldEnum[] | DestinationCalendarScalarFieldEnum
    having?: DestinationCalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCalendarCountAggregateInputType | true
    _min?: DestinationCalendarMinAggregateInputType
    _max?: DestinationCalendarMaxAggregateInputType
  }

  export type DestinationCalendarGroupByOutputType = {
    id: string
    userId: string
    integrationId: string
    externalId: string
    name: string
    isPrimary: boolean
    isReadOnly: boolean
    createdAt: Date
    updatedAt: Date
    _count: DestinationCalendarCountAggregateOutputType | null
    _min: DestinationCalendarMinAggregateOutputType | null
    _max: DestinationCalendarMaxAggregateOutputType | null
  }

  type GetDestinationCalendarGroupByPayload<T extends DestinationCalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationCalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationCalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationCalendarGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationCalendarGroupByOutputType[P]>
        }
      >
    >


  export type DestinationCalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationCalendar"]>

  export type DestinationCalendarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationCalendar"]>

  export type DestinationCalendarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationCalendar"]>

  export type DestinationCalendarSelectScalar = {
    id?: boolean
    userId?: boolean
    integrationId?: boolean
    externalId?: boolean
    name?: boolean
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationCalendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "integrationId" | "externalId" | "name" | "isPrimary" | "isReadOnly" | "createdAt" | "updatedAt", ExtArgs["result"]["destinationCalendar"]>
  export type DestinationCalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }
  export type DestinationCalendarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }
  export type DestinationCalendarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    integration?: boolean | IntegrationDefaultArgs<ExtArgs>
  }

  export type $DestinationCalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DestinationCalendar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      integration: Prisma.$IntegrationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      integrationId: string
      externalId: string
      name: string
      isPrimary: boolean
      isReadOnly: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destinationCalendar"]>
    composites: {}
  }

  type DestinationCalendarGetPayload<S extends boolean | null | undefined | DestinationCalendarDefaultArgs> = $Result.GetResult<Prisma.$DestinationCalendarPayload, S>

  type DestinationCalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationCalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCalendarCountAggregateInputType | true
    }

  export interface DestinationCalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationCalendar'], meta: { name: 'DestinationCalendar' } }
    /**
     * Find zero or one DestinationCalendar that matches the filter.
     * @param {DestinationCalendarFindUniqueArgs} args - Arguments to find a DestinationCalendar
     * @example
     * // Get one DestinationCalendar
     * const destinationCalendar = await prisma.destinationCalendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationCalendarFindUniqueArgs>(args: SelectSubset<T, DestinationCalendarFindUniqueArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DestinationCalendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationCalendarFindUniqueOrThrowArgs} args - Arguments to find a DestinationCalendar
     * @example
     * // Get one DestinationCalendar
     * const destinationCalendar = await prisma.destinationCalendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationCalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationCalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationCalendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarFindFirstArgs} args - Arguments to find a DestinationCalendar
     * @example
     * // Get one DestinationCalendar
     * const destinationCalendar = await prisma.destinationCalendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationCalendarFindFirstArgs>(args?: SelectSubset<T, DestinationCalendarFindFirstArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationCalendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarFindFirstOrThrowArgs} args - Arguments to find a DestinationCalendar
     * @example
     * // Get one DestinationCalendar
     * const destinationCalendar = await prisma.destinationCalendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationCalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationCalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DestinationCalendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationCalendars
     * const destinationCalendars = await prisma.destinationCalendar.findMany()
     * 
     * // Get first 10 DestinationCalendars
     * const destinationCalendars = await prisma.destinationCalendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationCalendarWithIdOnly = await prisma.destinationCalendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationCalendarFindManyArgs>(args?: SelectSubset<T, DestinationCalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DestinationCalendar.
     * @param {DestinationCalendarCreateArgs} args - Arguments to create a DestinationCalendar.
     * @example
     * // Create one DestinationCalendar
     * const DestinationCalendar = await prisma.destinationCalendar.create({
     *   data: {
     *     // ... data to create a DestinationCalendar
     *   }
     * })
     * 
     */
    create<T extends DestinationCalendarCreateArgs>(args: SelectSubset<T, DestinationCalendarCreateArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DestinationCalendars.
     * @param {DestinationCalendarCreateManyArgs} args - Arguments to create many DestinationCalendars.
     * @example
     * // Create many DestinationCalendars
     * const destinationCalendar = await prisma.destinationCalendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCalendarCreateManyArgs>(args?: SelectSubset<T, DestinationCalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DestinationCalendars and returns the data saved in the database.
     * @param {DestinationCalendarCreateManyAndReturnArgs} args - Arguments to create many DestinationCalendars.
     * @example
     * // Create many DestinationCalendars
     * const destinationCalendar = await prisma.destinationCalendar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DestinationCalendars and only return the `id`
     * const destinationCalendarWithIdOnly = await prisma.destinationCalendar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCalendarCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DestinationCalendar.
     * @param {DestinationCalendarDeleteArgs} args - Arguments to delete one DestinationCalendar.
     * @example
     * // Delete one DestinationCalendar
     * const DestinationCalendar = await prisma.destinationCalendar.delete({
     *   where: {
     *     // ... filter to delete one DestinationCalendar
     *   }
     * })
     * 
     */
    delete<T extends DestinationCalendarDeleteArgs>(args: SelectSubset<T, DestinationCalendarDeleteArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DestinationCalendar.
     * @param {DestinationCalendarUpdateArgs} args - Arguments to update one DestinationCalendar.
     * @example
     * // Update one DestinationCalendar
     * const destinationCalendar = await prisma.destinationCalendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationCalendarUpdateArgs>(args: SelectSubset<T, DestinationCalendarUpdateArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DestinationCalendars.
     * @param {DestinationCalendarDeleteManyArgs} args - Arguments to filter DestinationCalendars to delete.
     * @example
     * // Delete a few DestinationCalendars
     * const { count } = await prisma.destinationCalendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationCalendarDeleteManyArgs>(args?: SelectSubset<T, DestinationCalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationCalendars
     * const destinationCalendar = await prisma.destinationCalendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationCalendarUpdateManyArgs>(args: SelectSubset<T, DestinationCalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationCalendars and returns the data updated in the database.
     * @param {DestinationCalendarUpdateManyAndReturnArgs} args - Arguments to update many DestinationCalendars.
     * @example
     * // Update many DestinationCalendars
     * const destinationCalendar = await prisma.destinationCalendar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DestinationCalendars and only return the `id`
     * const destinationCalendarWithIdOnly = await prisma.destinationCalendar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationCalendarUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationCalendarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DestinationCalendar.
     * @param {DestinationCalendarUpsertArgs} args - Arguments to update or create a DestinationCalendar.
     * @example
     * // Update or create a DestinationCalendar
     * const destinationCalendar = await prisma.destinationCalendar.upsert({
     *   create: {
     *     // ... data to create a DestinationCalendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationCalendar we want to update
     *   }
     * })
     */
    upsert<T extends DestinationCalendarUpsertArgs>(args: SelectSubset<T, DestinationCalendarUpsertArgs<ExtArgs>>): Prisma__DestinationCalendarClient<$Result.GetResult<Prisma.$DestinationCalendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DestinationCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarCountArgs} args - Arguments to filter DestinationCalendars to count.
     * @example
     * // Count the number of DestinationCalendars
     * const count = await prisma.destinationCalendar.count({
     *   where: {
     *     // ... the filter for the DestinationCalendars we want to count
     *   }
     * })
    **/
    count<T extends DestinationCalendarCountArgs>(
      args?: Subset<T, DestinationCalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationCalendarAggregateArgs>(args: Subset<T, DestinationCalendarAggregateArgs>): Prisma.PrismaPromise<GetDestinationCalendarAggregateType<T>>

    /**
     * Group by DestinationCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCalendarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationCalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationCalendarGroupByArgs['orderBy'] }
        : { orderBy?: DestinationCalendarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationCalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DestinationCalendar model
   */
  readonly fields: DestinationCalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationCalendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationCalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    integration<T extends IntegrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IntegrationDefaultArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DestinationCalendar model
   */
  interface DestinationCalendarFieldRefs {
    readonly id: FieldRef<"DestinationCalendar", 'String'>
    readonly userId: FieldRef<"DestinationCalendar", 'String'>
    readonly integrationId: FieldRef<"DestinationCalendar", 'String'>
    readonly externalId: FieldRef<"DestinationCalendar", 'String'>
    readonly name: FieldRef<"DestinationCalendar", 'String'>
    readonly isPrimary: FieldRef<"DestinationCalendar", 'Boolean'>
    readonly isReadOnly: FieldRef<"DestinationCalendar", 'Boolean'>
    readonly createdAt: FieldRef<"DestinationCalendar", 'DateTime'>
    readonly updatedAt: FieldRef<"DestinationCalendar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DestinationCalendar findUnique
   */
  export type DestinationCalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * Filter, which DestinationCalendar to fetch.
     */
    where: DestinationCalendarWhereUniqueInput
  }

  /**
   * DestinationCalendar findUniqueOrThrow
   */
  export type DestinationCalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * Filter, which DestinationCalendar to fetch.
     */
    where: DestinationCalendarWhereUniqueInput
  }

  /**
   * DestinationCalendar findFirst
   */
  export type DestinationCalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * Filter, which DestinationCalendar to fetch.
     */
    where?: DestinationCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationCalendars to fetch.
     */
    orderBy?: DestinationCalendarOrderByWithRelationInput | DestinationCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationCalendars.
     */
    cursor?: DestinationCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationCalendars.
     */
    distinct?: DestinationCalendarScalarFieldEnum | DestinationCalendarScalarFieldEnum[]
  }

  /**
   * DestinationCalendar findFirstOrThrow
   */
  export type DestinationCalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * Filter, which DestinationCalendar to fetch.
     */
    where?: DestinationCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationCalendars to fetch.
     */
    orderBy?: DestinationCalendarOrderByWithRelationInput | DestinationCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationCalendars.
     */
    cursor?: DestinationCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationCalendars.
     */
    distinct?: DestinationCalendarScalarFieldEnum | DestinationCalendarScalarFieldEnum[]
  }

  /**
   * DestinationCalendar findMany
   */
  export type DestinationCalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * Filter, which DestinationCalendars to fetch.
     */
    where?: DestinationCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationCalendars to fetch.
     */
    orderBy?: DestinationCalendarOrderByWithRelationInput | DestinationCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationCalendars.
     */
    cursor?: DestinationCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationCalendars.
     */
    skip?: number
    distinct?: DestinationCalendarScalarFieldEnum | DestinationCalendarScalarFieldEnum[]
  }

  /**
   * DestinationCalendar create
   */
  export type DestinationCalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationCalendar.
     */
    data: XOR<DestinationCalendarCreateInput, DestinationCalendarUncheckedCreateInput>
  }

  /**
   * DestinationCalendar createMany
   */
  export type DestinationCalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationCalendars.
     */
    data: DestinationCalendarCreateManyInput | DestinationCalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DestinationCalendar createManyAndReturn
   */
  export type DestinationCalendarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * The data used to create many DestinationCalendars.
     */
    data: DestinationCalendarCreateManyInput | DestinationCalendarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationCalendar update
   */
  export type DestinationCalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationCalendar.
     */
    data: XOR<DestinationCalendarUpdateInput, DestinationCalendarUncheckedUpdateInput>
    /**
     * Choose, which DestinationCalendar to update.
     */
    where: DestinationCalendarWhereUniqueInput
  }

  /**
   * DestinationCalendar updateMany
   */
  export type DestinationCalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationCalendars.
     */
    data: XOR<DestinationCalendarUpdateManyMutationInput, DestinationCalendarUncheckedUpdateManyInput>
    /**
     * Filter which DestinationCalendars to update
     */
    where?: DestinationCalendarWhereInput
    /**
     * Limit how many DestinationCalendars to update.
     */
    limit?: number
  }

  /**
   * DestinationCalendar updateManyAndReturn
   */
  export type DestinationCalendarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * The data used to update DestinationCalendars.
     */
    data: XOR<DestinationCalendarUpdateManyMutationInput, DestinationCalendarUncheckedUpdateManyInput>
    /**
     * Filter which DestinationCalendars to update
     */
    where?: DestinationCalendarWhereInput
    /**
     * Limit how many DestinationCalendars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationCalendar upsert
   */
  export type DestinationCalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationCalendar to update in case it exists.
     */
    where: DestinationCalendarWhereUniqueInput
    /**
     * In case the DestinationCalendar found by the `where` argument doesn't exist, create a new DestinationCalendar with this data.
     */
    create: XOR<DestinationCalendarCreateInput, DestinationCalendarUncheckedCreateInput>
    /**
     * In case the DestinationCalendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationCalendarUpdateInput, DestinationCalendarUncheckedUpdateInput>
  }

  /**
   * DestinationCalendar delete
   */
  export type DestinationCalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
    /**
     * Filter which DestinationCalendar to delete.
     */
    where: DestinationCalendarWhereUniqueInput
  }

  /**
   * DestinationCalendar deleteMany
   */
  export type DestinationCalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationCalendars to delete
     */
    where?: DestinationCalendarWhereInput
    /**
     * Limit how many DestinationCalendars to delete.
     */
    limit?: number
  }

  /**
   * DestinationCalendar without action
   */
  export type DestinationCalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCalendar
     */
    select?: DestinationCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationCalendar
     */
    omit?: DestinationCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationCalendarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    picture: 'picture',
    googleId: 'googleId',
    chosenPersonaId: 'chosenPersonaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IntegrationProviderScalarFieldEnum: {
    id: 'id',
    providerKey: 'providerKey',
    displayName: 'displayName',
    description: 'description',
    logoUrl: 'logoUrl',
    type: 'type',
    isEnabled: 'isEnabled',
    isBeta: 'isBeta',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegrationProviderScalarFieldEnum = (typeof IntegrationProviderScalarFieldEnum)[keyof typeof IntegrationProviderScalarFieldEnum]


  export const IntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    lastSync: 'lastSync',
    externalId: 'externalId',
    integrationProviderId: 'integrationProviderId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegrationScalarFieldEnum = (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum]


  export const UserPersonaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    defaultIntegrationTypes: 'defaultIntegrationTypes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPersonaScalarFieldEnum = (typeof UserPersonaScalarFieldEnum)[keyof typeof UserPersonaScalarFieldEnum]


  export const UserOnboardingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    onboardingId: 'onboardingId',
    initialPersonaId: 'initialPersonaId',
    completed: 'completed',
    currentStep: 'currentStep',
    onboardingData: 'onboardingData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserOnboardingScalarFieldEnum = (typeof UserOnboardingScalarFieldEnum)[keyof typeof UserOnboardingScalarFieldEnum]


  export const DestinationCalendarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    integrationId: 'integrationId',
    externalId: 'externalId',
    name: 'name',
    isPrimary: 'isPrimary',
    isReadOnly: 'isReadOnly',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationCalendarScalarFieldEnum = (typeof DestinationCalendarScalarFieldEnum)[keyof typeof DestinationCalendarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'IntegrationType'
   */
  export type EnumIntegrationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationType'>
    


  /**
   * Reference to a field of type 'IntegrationType[]'
   */
  export type ListEnumIntegrationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntegrationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    chosenPersonaId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    integrations?: IntegrationListRelationFilter
    onboarding?: XOR<UserOnboardingNullableScalarRelationFilter, UserOnboardingWhereInput> | null
    chosenPersona?: XOR<UserPersonaNullableScalarRelationFilter, UserPersonaWhereInput> | null
    destinationCalendars?: DestinationCalendarListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    chosenPersonaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    integrations?: IntegrationOrderByRelationAggregateInput
    onboarding?: UserOnboardingOrderByWithRelationInput
    chosenPersona?: UserPersonaOrderByWithRelationInput
    destinationCalendars?: DestinationCalendarOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    chosenPersonaId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    integrations?: IntegrationListRelationFilter
    onboarding?: XOR<UserOnboardingNullableScalarRelationFilter, UserOnboardingWhereInput> | null
    chosenPersona?: XOR<UserPersonaNullableScalarRelationFilter, UserPersonaWhereInput> | null
    destinationCalendars?: DestinationCalendarListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    chosenPersonaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    chosenPersonaId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type IntegrationProviderWhereInput = {
    AND?: IntegrationProviderWhereInput | IntegrationProviderWhereInput[]
    OR?: IntegrationProviderWhereInput[]
    NOT?: IntegrationProviderWhereInput | IntegrationProviderWhereInput[]
    id?: StringFilter<"IntegrationProvider"> | string
    providerKey?: StringFilter<"IntegrationProvider"> | string
    displayName?: StringFilter<"IntegrationProvider"> | string
    description?: StringNullableFilter<"IntegrationProvider"> | string | null
    logoUrl?: StringNullableFilter<"IntegrationProvider"> | string | null
    type?: EnumIntegrationTypeFilter<"IntegrationProvider"> | $Enums.IntegrationType
    isEnabled?: BoolFilter<"IntegrationProvider"> | boolean
    isBeta?: BoolFilter<"IntegrationProvider"> | boolean
    createdAt?: DateTimeFilter<"IntegrationProvider"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationProvider"> | Date | string
    integrations?: IntegrationListRelationFilter
  }

  export type IntegrationProviderOrderByWithRelationInput = {
    id?: SortOrder
    providerKey?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    isEnabled?: SortOrder
    isBeta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    integrations?: IntegrationOrderByRelationAggregateInput
  }

  export type IntegrationProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerKey?: string
    AND?: IntegrationProviderWhereInput | IntegrationProviderWhereInput[]
    OR?: IntegrationProviderWhereInput[]
    NOT?: IntegrationProviderWhereInput | IntegrationProviderWhereInput[]
    displayName?: StringFilter<"IntegrationProvider"> | string
    description?: StringNullableFilter<"IntegrationProvider"> | string | null
    logoUrl?: StringNullableFilter<"IntegrationProvider"> | string | null
    type?: EnumIntegrationTypeFilter<"IntegrationProvider"> | $Enums.IntegrationType
    isEnabled?: BoolFilter<"IntegrationProvider"> | boolean
    isBeta?: BoolFilter<"IntegrationProvider"> | boolean
    createdAt?: DateTimeFilter<"IntegrationProvider"> | Date | string
    updatedAt?: DateTimeFilter<"IntegrationProvider"> | Date | string
    integrations?: IntegrationListRelationFilter
  }, "id" | "providerKey">

  export type IntegrationProviderOrderByWithAggregationInput = {
    id?: SortOrder
    providerKey?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    isEnabled?: SortOrder
    isBeta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationProviderCountOrderByAggregateInput
    _max?: IntegrationProviderMaxOrderByAggregateInput
    _min?: IntegrationProviderMinOrderByAggregateInput
  }

  export type IntegrationProviderScalarWhereWithAggregatesInput = {
    AND?: IntegrationProviderScalarWhereWithAggregatesInput | IntegrationProviderScalarWhereWithAggregatesInput[]
    OR?: IntegrationProviderScalarWhereWithAggregatesInput[]
    NOT?: IntegrationProviderScalarWhereWithAggregatesInput | IntegrationProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntegrationProvider"> | string
    providerKey?: StringWithAggregatesFilter<"IntegrationProvider"> | string
    displayName?: StringWithAggregatesFilter<"IntegrationProvider"> | string
    description?: StringNullableWithAggregatesFilter<"IntegrationProvider"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"IntegrationProvider"> | string | null
    type?: EnumIntegrationTypeWithAggregatesFilter<"IntegrationProvider"> | $Enums.IntegrationType
    isEnabled?: BoolWithAggregatesFilter<"IntegrationProvider"> | boolean
    isBeta?: BoolWithAggregatesFilter<"IntegrationProvider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"IntegrationProvider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntegrationProvider"> | Date | string
  }

  export type IntegrationWhereInput = {
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    id?: StringFilter<"Integration"> | string
    userId?: StringFilter<"Integration"> | string
    name?: StringNullableFilter<"Integration"> | string | null
    accessToken?: StringFilter<"Integration"> | string
    refreshToken?: StringNullableFilter<"Integration"> | string | null
    lastSync?: DateTimeNullableFilter<"Integration"> | Date | string | null
    externalId?: StringNullableFilter<"Integration"> | string | null
    integrationProviderId?: StringFilter<"Integration"> | string
    metadata?: JsonNullableFilter<"Integration">
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    integrationProvider?: XOR<IntegrationProviderScalarRelationFilter, IntegrationProviderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destinationCalendars?: DestinationCalendarListRelationFilter
  }

  export type IntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    integrationProviderId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    integrationProvider?: IntegrationProviderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    destinationCalendars?: DestinationCalendarOrderByRelationAggregateInput
  }

  export type IntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_provider_external_id_key?: IntegrationUser_provider_external_id_keyCompoundUniqueInput
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    userId?: StringFilter<"Integration"> | string
    name?: StringNullableFilter<"Integration"> | string | null
    accessToken?: StringFilter<"Integration"> | string
    refreshToken?: StringNullableFilter<"Integration"> | string | null
    lastSync?: DateTimeNullableFilter<"Integration"> | Date | string | null
    externalId?: StringNullableFilter<"Integration"> | string | null
    integrationProviderId?: StringFilter<"Integration"> | string
    metadata?: JsonNullableFilter<"Integration">
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    integrationProvider?: XOR<IntegrationProviderScalarRelationFilter, IntegrationProviderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destinationCalendars?: DestinationCalendarListRelationFilter
  }, "id" | "user_provider_external_id_key">

  export type IntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    integrationProviderId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationCountOrderByAggregateInput
    _max?: IntegrationMaxOrderByAggregateInput
    _min?: IntegrationMinOrderByAggregateInput
  }

  export type IntegrationScalarWhereWithAggregatesInput = {
    AND?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    OR?: IntegrationScalarWhereWithAggregatesInput[]
    NOT?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Integration"> | string
    userId?: StringWithAggregatesFilter<"Integration"> | string
    name?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    accessToken?: StringWithAggregatesFilter<"Integration"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Integration"> | Date | string | null
    externalId?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    integrationProviderId?: StringWithAggregatesFilter<"Integration"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Integration">
    createdAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
  }

  export type UserPersonaWhereInput = {
    AND?: UserPersonaWhereInput | UserPersonaWhereInput[]
    OR?: UserPersonaWhereInput[]
    NOT?: UserPersonaWhereInput | UserPersonaWhereInput[]
    id?: StringFilter<"UserPersona"> | string
    name?: StringFilter<"UserPersona"> | string
    description?: StringNullableFilter<"UserPersona"> | string | null
    defaultIntegrationTypes?: EnumIntegrationTypeNullableListFilter<"UserPersona">
    createdAt?: DateTimeFilter<"UserPersona"> | Date | string
    updatedAt?: DateTimeFilter<"UserPersona"> | Date | string
    users?: UserListRelationFilter
    onboardingsWithThisInitialPersona?: UserOnboardingListRelationFilter
  }

  export type UserPersonaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    defaultIntegrationTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    onboardingsWithThisInitialPersona?: UserOnboardingOrderByRelationAggregateInput
  }

  export type UserPersonaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserPersonaWhereInput | UserPersonaWhereInput[]
    OR?: UserPersonaWhereInput[]
    NOT?: UserPersonaWhereInput | UserPersonaWhereInput[]
    description?: StringNullableFilter<"UserPersona"> | string | null
    defaultIntegrationTypes?: EnumIntegrationTypeNullableListFilter<"UserPersona">
    createdAt?: DateTimeFilter<"UserPersona"> | Date | string
    updatedAt?: DateTimeFilter<"UserPersona"> | Date | string
    users?: UserListRelationFilter
    onboardingsWithThisInitialPersona?: UserOnboardingListRelationFilter
  }, "id" | "name">

  export type UserPersonaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    defaultIntegrationTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPersonaCountOrderByAggregateInput
    _max?: UserPersonaMaxOrderByAggregateInput
    _min?: UserPersonaMinOrderByAggregateInput
  }

  export type UserPersonaScalarWhereWithAggregatesInput = {
    AND?: UserPersonaScalarWhereWithAggregatesInput | UserPersonaScalarWhereWithAggregatesInput[]
    OR?: UserPersonaScalarWhereWithAggregatesInput[]
    NOT?: UserPersonaScalarWhereWithAggregatesInput | UserPersonaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPersona"> | string
    name?: StringWithAggregatesFilter<"UserPersona"> | string
    description?: StringNullableWithAggregatesFilter<"UserPersona"> | string | null
    defaultIntegrationTypes?: EnumIntegrationTypeNullableListFilter<"UserPersona">
    createdAt?: DateTimeWithAggregatesFilter<"UserPersona"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPersona"> | Date | string
  }

  export type UserOnboardingWhereInput = {
    AND?: UserOnboardingWhereInput | UserOnboardingWhereInput[]
    OR?: UserOnboardingWhereInput[]
    NOT?: UserOnboardingWhereInput | UserOnboardingWhereInput[]
    id?: StringFilter<"UserOnboarding"> | string
    userId?: StringFilter<"UserOnboarding"> | string
    onboardingId?: StringFilter<"UserOnboarding"> | string
    initialPersonaId?: StringNullableFilter<"UserOnboarding"> | string | null
    completed?: BoolFilter<"UserOnboarding"> | boolean
    currentStep?: StringNullableFilter<"UserOnboarding"> | string | null
    onboardingData?: JsonNullableFilter<"UserOnboarding">
    createdAt?: DateTimeFilter<"UserOnboarding"> | Date | string
    updatedAt?: DateTimeFilter<"UserOnboarding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    initialPersona?: XOR<UserPersonaNullableScalarRelationFilter, UserPersonaWhereInput> | null
  }

  export type UserOnboardingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    onboardingId?: SortOrder
    initialPersonaId?: SortOrderInput | SortOrder
    completed?: SortOrder
    currentStep?: SortOrderInput | SortOrder
    onboardingData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    initialPersona?: UserPersonaOrderByWithRelationInput
  }

  export type UserOnboardingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserOnboardingWhereInput | UserOnboardingWhereInput[]
    OR?: UserOnboardingWhereInput[]
    NOT?: UserOnboardingWhereInput | UserOnboardingWhereInput[]
    onboardingId?: StringFilter<"UserOnboarding"> | string
    initialPersonaId?: StringNullableFilter<"UserOnboarding"> | string | null
    completed?: BoolFilter<"UserOnboarding"> | boolean
    currentStep?: StringNullableFilter<"UserOnboarding"> | string | null
    onboardingData?: JsonNullableFilter<"UserOnboarding">
    createdAt?: DateTimeFilter<"UserOnboarding"> | Date | string
    updatedAt?: DateTimeFilter<"UserOnboarding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    initialPersona?: XOR<UserPersonaNullableScalarRelationFilter, UserPersonaWhereInput> | null
  }, "id" | "userId">

  export type UserOnboardingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    onboardingId?: SortOrder
    initialPersonaId?: SortOrderInput | SortOrder
    completed?: SortOrder
    currentStep?: SortOrderInput | SortOrder
    onboardingData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserOnboardingCountOrderByAggregateInput
    _max?: UserOnboardingMaxOrderByAggregateInput
    _min?: UserOnboardingMinOrderByAggregateInput
  }

  export type UserOnboardingScalarWhereWithAggregatesInput = {
    AND?: UserOnboardingScalarWhereWithAggregatesInput | UserOnboardingScalarWhereWithAggregatesInput[]
    OR?: UserOnboardingScalarWhereWithAggregatesInput[]
    NOT?: UserOnboardingScalarWhereWithAggregatesInput | UserOnboardingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserOnboarding"> | string
    userId?: StringWithAggregatesFilter<"UserOnboarding"> | string
    onboardingId?: StringWithAggregatesFilter<"UserOnboarding"> | string
    initialPersonaId?: StringNullableWithAggregatesFilter<"UserOnboarding"> | string | null
    completed?: BoolWithAggregatesFilter<"UserOnboarding"> | boolean
    currentStep?: StringNullableWithAggregatesFilter<"UserOnboarding"> | string | null
    onboardingData?: JsonNullableWithAggregatesFilter<"UserOnboarding">
    createdAt?: DateTimeWithAggregatesFilter<"UserOnboarding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserOnboarding"> | Date | string
  }

  export type DestinationCalendarWhereInput = {
    AND?: DestinationCalendarWhereInput | DestinationCalendarWhereInput[]
    OR?: DestinationCalendarWhereInput[]
    NOT?: DestinationCalendarWhereInput | DestinationCalendarWhereInput[]
    id?: StringFilter<"DestinationCalendar"> | string
    userId?: StringFilter<"DestinationCalendar"> | string
    integrationId?: StringFilter<"DestinationCalendar"> | string
    externalId?: StringFilter<"DestinationCalendar"> | string
    name?: StringFilter<"DestinationCalendar"> | string
    isPrimary?: BoolFilter<"DestinationCalendar"> | boolean
    isReadOnly?: BoolFilter<"DestinationCalendar"> | boolean
    createdAt?: DateTimeFilter<"DestinationCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationCalendar"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    integration?: XOR<IntegrationScalarRelationFilter, IntegrationWhereInput>
  }

  export type DestinationCalendarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isPrimary?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    integration?: IntegrationOrderByWithRelationInput
  }

  export type DestinationCalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_integration_external_id_key?: DestinationCalendarUser_integration_external_id_keyCompoundUniqueInput
    AND?: DestinationCalendarWhereInput | DestinationCalendarWhereInput[]
    OR?: DestinationCalendarWhereInput[]
    NOT?: DestinationCalendarWhereInput | DestinationCalendarWhereInput[]
    userId?: StringFilter<"DestinationCalendar"> | string
    integrationId?: StringFilter<"DestinationCalendar"> | string
    externalId?: StringFilter<"DestinationCalendar"> | string
    name?: StringFilter<"DestinationCalendar"> | string
    isPrimary?: BoolFilter<"DestinationCalendar"> | boolean
    isReadOnly?: BoolFilter<"DestinationCalendar"> | boolean
    createdAt?: DateTimeFilter<"DestinationCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationCalendar"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    integration?: XOR<IntegrationScalarRelationFilter, IntegrationWhereInput>
  }, "id" | "user_integration_external_id_key">

  export type DestinationCalendarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isPrimary?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCalendarCountOrderByAggregateInput
    _max?: DestinationCalendarMaxOrderByAggregateInput
    _min?: DestinationCalendarMinOrderByAggregateInput
  }

  export type DestinationCalendarScalarWhereWithAggregatesInput = {
    AND?: DestinationCalendarScalarWhereWithAggregatesInput | DestinationCalendarScalarWhereWithAggregatesInput[]
    OR?: DestinationCalendarScalarWhereWithAggregatesInput[]
    NOT?: DestinationCalendarScalarWhereWithAggregatesInput | DestinationCalendarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DestinationCalendar"> | string
    userId?: StringWithAggregatesFilter<"DestinationCalendar"> | string
    integrationId?: StringWithAggregatesFilter<"DestinationCalendar"> | string
    externalId?: StringWithAggregatesFilter<"DestinationCalendar"> | string
    name?: StringWithAggregatesFilter<"DestinationCalendar"> | string
    isPrimary?: BoolWithAggregatesFilter<"DestinationCalendar"> | boolean
    isReadOnly?: BoolWithAggregatesFilter<"DestinationCalendar"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DestinationCalendar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DestinationCalendar"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    onboarding?: UserOnboardingCreateNestedOneWithoutUserInput
    chosenPersona?: UserPersonaCreateNestedOneWithoutUsersInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    chosenPersonaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    onboarding?: UserOnboardingUncheckedCreateNestedOneWithoutUserInput
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    onboarding?: UserOnboardingUpdateOneWithoutUserNestedInput
    chosenPersona?: UserPersonaUpdateOneWithoutUsersNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    chosenPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    onboarding?: UserOnboardingUncheckedUpdateOneWithoutUserNestedInput
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    chosenPersonaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    chosenPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IntegrationProviderCreateInput = {
    id?: string
    providerKey: string
    displayName: string
    description?: string | null
    logoUrl?: string | null
    type: $Enums.IntegrationType
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    integrations?: IntegrationCreateNestedManyWithoutIntegrationProviderInput
  }

  export type IntegrationProviderUncheckedCreateInput = {
    id?: string
    providerKey: string
    displayName: string
    description?: string | null
    logoUrl?: string | null
    type: $Enums.IntegrationType
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    integrations?: IntegrationUncheckedCreateNestedManyWithoutIntegrationProviderInput
  }

  export type IntegrationProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerKey?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIntegrationTypeFieldUpdateOperationsInput | $Enums.IntegrationType
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    isBeta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationUpdateManyWithoutIntegrationProviderNestedInput
  }

  export type IntegrationProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerKey?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIntegrationTypeFieldUpdateOperationsInput | $Enums.IntegrationType
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    isBeta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationUncheckedUpdateManyWithoutIntegrationProviderNestedInput
  }

  export type IntegrationProviderCreateManyInput = {
    id?: string
    providerKey: string
    displayName: string
    description?: string | null
    logoUrl?: string | null
    type: $Enums.IntegrationType
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerKey?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIntegrationTypeFieldUpdateOperationsInput | $Enums.IntegrationType
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    isBeta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerKey?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIntegrationTypeFieldUpdateOperationsInput | $Enums.IntegrationType
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    isBeta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateInput = {
    id?: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    integrationProvider: IntegrationProviderCreateNestedOneWithoutIntegrationsInput
    user: UserCreateNestedOneWithoutIntegrationsInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    integrationProviderId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrationProvider?: IntegrationProviderUpdateOneRequiredWithoutIntegrationsNestedInput
    user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    integrationProviderId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    integrationProviderId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    integrationProviderId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPersonaCreateInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutChosenPersonaInput
    onboardingsWithThisInitialPersona?: UserOnboardingCreateNestedManyWithoutInitialPersonaInput
  }

  export type UserPersonaUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutChosenPersonaInput
    onboardingsWithThisInitialPersona?: UserOnboardingUncheckedCreateNestedManyWithoutInitialPersonaInput
  }

  export type UserPersonaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutChosenPersonaNestedInput
    onboardingsWithThisInitialPersona?: UserOnboardingUpdateManyWithoutInitialPersonaNestedInput
  }

  export type UserPersonaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutChosenPersonaNestedInput
    onboardingsWithThisInitialPersona?: UserOnboardingUncheckedUpdateManyWithoutInitialPersonaNestedInput
  }

  export type UserPersonaCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPersonaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPersonaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnboardingCreateInput = {
    id?: string
    onboardingId: string
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOnboardingInput
    initialPersona?: UserPersonaCreateNestedOneWithoutOnboardingsWithThisInitialPersonaInput
  }

  export type UserOnboardingUncheckedCreateInput = {
    id?: string
    userId: string
    onboardingId: string
    initialPersonaId?: string | null
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnboardingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnboardingNestedInput
    initialPersona?: UserPersonaUpdateOneWithoutOnboardingsWithThisInitialPersonaNestedInput
  }

  export type UserOnboardingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    initialPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnboardingCreateManyInput = {
    id?: string
    userId: string
    onboardingId: string
    initialPersonaId?: string | null
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnboardingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnboardingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    initialPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarCreateInput = {
    id?: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDestinationCalendarsInput
    integration: IntegrationCreateNestedOneWithoutDestinationCalendarsInput
  }

  export type DestinationCalendarUncheckedCreateInput = {
    id?: string
    userId: string
    integrationId: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCalendarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDestinationCalendarsNestedInput
    integration?: IntegrationUpdateOneRequiredWithoutDestinationCalendarsNestedInput
  }

  export type DestinationCalendarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarCreateManyInput = {
    id?: string
    userId: string
    integrationId: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCalendarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntegrationListRelationFilter = {
    every?: IntegrationWhereInput
    some?: IntegrationWhereInput
    none?: IntegrationWhereInput
  }

  export type UserOnboardingNullableScalarRelationFilter = {
    is?: UserOnboardingWhereInput | null
    isNot?: UserOnboardingWhereInput | null
  }

  export type UserPersonaNullableScalarRelationFilter = {
    is?: UserPersonaWhereInput | null
    isNot?: UserPersonaWhereInput | null
  }

  export type DestinationCalendarListRelationFilter = {
    every?: DestinationCalendarWhereInput
    some?: DestinationCalendarWhereInput
    none?: DestinationCalendarWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IntegrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCalendarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    googleId?: SortOrder
    chosenPersonaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    googleId?: SortOrder
    chosenPersonaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    picture?: SortOrder
    googleId?: SortOrder
    chosenPersonaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumIntegrationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationType | EnumIntegrationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationTypeFilter<$PrismaModel> | $Enums.IntegrationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntegrationProviderCountOrderByAggregateInput = {
    id?: SortOrder
    providerKey?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    type?: SortOrder
    isEnabled?: SortOrder
    isBeta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    providerKey?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    type?: SortOrder
    isEnabled?: SortOrder
    isBeta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationProviderMinOrderByAggregateInput = {
    id?: SortOrder
    providerKey?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    type?: SortOrder
    isEnabled?: SortOrder
    isBeta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIntegrationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationType | EnumIntegrationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationTypeWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationTypeFilter<$PrismaModel>
    _max?: NestedEnumIntegrationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntegrationProviderScalarRelationFilter = {
    is?: IntegrationProviderWhereInput
    isNot?: IntegrationProviderWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IntegrationUser_provider_external_id_keyCompoundUniqueInput = {
    userId: string
    integrationProviderId: string
    externalId: string
  }

  export type IntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    lastSync?: SortOrder
    externalId?: SortOrder
    integrationProviderId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    lastSync?: SortOrder
    externalId?: SortOrder
    integrationProviderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    lastSync?: SortOrder
    externalId?: SortOrder
    integrationProviderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumIntegrationTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.IntegrationType | EnumIntegrationTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOnboardingListRelationFilter = {
    every?: UserOnboardingWhereInput
    some?: UserOnboardingWhereInput
    none?: UserOnboardingWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnboardingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPersonaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    defaultIntegrationTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPersonaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPersonaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnboardingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    onboardingId?: SortOrder
    initialPersonaId?: SortOrder
    completed?: SortOrder
    currentStep?: SortOrder
    onboardingData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnboardingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    onboardingId?: SortOrder
    initialPersonaId?: SortOrder
    completed?: SortOrder
    currentStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOnboardingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    onboardingId?: SortOrder
    initialPersonaId?: SortOrder
    completed?: SortOrder
    currentStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationScalarRelationFilter = {
    is?: IntegrationWhereInput
    isNot?: IntegrationWhereInput
  }

  export type DestinationCalendarUser_integration_external_id_keyCompoundUniqueInput = {
    userId: string
    integrationId: string
    externalId: string
  }

  export type DestinationCalendarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isPrimary?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationCalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isPrimary?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationCalendarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    integrationId?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    isPrimary?: SortOrder
    isReadOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type UserOnboardingCreateNestedOneWithoutUserInput = {
    create?: XOR<UserOnboardingCreateWithoutUserInput, UserOnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutUserInput
    connect?: UserOnboardingWhereUniqueInput
  }

  export type UserPersonaCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserPersonaCreateWithoutUsersInput, UserPersonaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserPersonaCreateOrConnectWithoutUsersInput
    connect?: UserPersonaWhereUniqueInput
  }

  export type DestinationCalendarCreateNestedManyWithoutUserInput = {
    create?: XOR<DestinationCalendarCreateWithoutUserInput, DestinationCalendarUncheckedCreateWithoutUserInput> | DestinationCalendarCreateWithoutUserInput[] | DestinationCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutUserInput | DestinationCalendarCreateOrConnectWithoutUserInput[]
    createMany?: DestinationCalendarCreateManyUserInputEnvelope
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
  }

  export type IntegrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type UserOnboardingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserOnboardingCreateWithoutUserInput, UserOnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutUserInput
    connect?: UserOnboardingWhereUniqueInput
  }

  export type DestinationCalendarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DestinationCalendarCreateWithoutUserInput, DestinationCalendarUncheckedCreateWithoutUserInput> | DestinationCalendarCreateWithoutUserInput[] | DestinationCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutUserInput | DestinationCalendarCreateOrConnectWithoutUserInput[]
    createMany?: DestinationCalendarCreateManyUserInputEnvelope
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntegrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput | IntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutUserInput | IntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput | IntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type UserOnboardingUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserOnboardingCreateWithoutUserInput, UserOnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutUserInput
    upsert?: UserOnboardingUpsertWithoutUserInput
    disconnect?: UserOnboardingWhereInput | boolean
    delete?: UserOnboardingWhereInput | boolean
    connect?: UserOnboardingWhereUniqueInput
    update?: XOR<XOR<UserOnboardingUpdateToOneWithWhereWithoutUserInput, UserOnboardingUpdateWithoutUserInput>, UserOnboardingUncheckedUpdateWithoutUserInput>
  }

  export type UserPersonaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UserPersonaCreateWithoutUsersInput, UserPersonaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserPersonaCreateOrConnectWithoutUsersInput
    upsert?: UserPersonaUpsertWithoutUsersInput
    disconnect?: UserPersonaWhereInput | boolean
    delete?: UserPersonaWhereInput | boolean
    connect?: UserPersonaWhereUniqueInput
    update?: XOR<XOR<UserPersonaUpdateToOneWithWhereWithoutUsersInput, UserPersonaUpdateWithoutUsersInput>, UserPersonaUncheckedUpdateWithoutUsersInput>
  }

  export type DestinationCalendarUpdateManyWithoutUserNestedInput = {
    create?: XOR<DestinationCalendarCreateWithoutUserInput, DestinationCalendarUncheckedCreateWithoutUserInput> | DestinationCalendarCreateWithoutUserInput[] | DestinationCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutUserInput | DestinationCalendarCreateOrConnectWithoutUserInput[]
    upsert?: DestinationCalendarUpsertWithWhereUniqueWithoutUserInput | DestinationCalendarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DestinationCalendarCreateManyUserInputEnvelope
    set?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    disconnect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    delete?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    update?: DestinationCalendarUpdateWithWhereUniqueWithoutUserInput | DestinationCalendarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DestinationCalendarUpdateManyWithWhereWithoutUserInput | DestinationCalendarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DestinationCalendarScalarWhereInput | DestinationCalendarScalarWhereInput[]
  }

  export type IntegrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput | IntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutUserInput | IntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput | IntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type UserOnboardingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserOnboardingCreateWithoutUserInput, UserOnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutUserInput
    upsert?: UserOnboardingUpsertWithoutUserInput
    disconnect?: UserOnboardingWhereInput | boolean
    delete?: UserOnboardingWhereInput | boolean
    connect?: UserOnboardingWhereUniqueInput
    update?: XOR<XOR<UserOnboardingUpdateToOneWithWhereWithoutUserInput, UserOnboardingUpdateWithoutUserInput>, UserOnboardingUncheckedUpdateWithoutUserInput>
  }

  export type DestinationCalendarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DestinationCalendarCreateWithoutUserInput, DestinationCalendarUncheckedCreateWithoutUserInput> | DestinationCalendarCreateWithoutUserInput[] | DestinationCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutUserInput | DestinationCalendarCreateOrConnectWithoutUserInput[]
    upsert?: DestinationCalendarUpsertWithWhereUniqueWithoutUserInput | DestinationCalendarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DestinationCalendarCreateManyUserInputEnvelope
    set?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    disconnect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    delete?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    update?: DestinationCalendarUpdateWithWhereUniqueWithoutUserInput | DestinationCalendarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DestinationCalendarUpdateManyWithWhereWithoutUserInput | DestinationCalendarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DestinationCalendarScalarWhereInput | DestinationCalendarScalarWhereInput[]
  }

  export type IntegrationCreateNestedManyWithoutIntegrationProviderInput = {
    create?: XOR<IntegrationCreateWithoutIntegrationProviderInput, IntegrationUncheckedCreateWithoutIntegrationProviderInput> | IntegrationCreateWithoutIntegrationProviderInput[] | IntegrationUncheckedCreateWithoutIntegrationProviderInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutIntegrationProviderInput | IntegrationCreateOrConnectWithoutIntegrationProviderInput[]
    createMany?: IntegrationCreateManyIntegrationProviderInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type IntegrationUncheckedCreateNestedManyWithoutIntegrationProviderInput = {
    create?: XOR<IntegrationCreateWithoutIntegrationProviderInput, IntegrationUncheckedCreateWithoutIntegrationProviderInput> | IntegrationCreateWithoutIntegrationProviderInput[] | IntegrationUncheckedCreateWithoutIntegrationProviderInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutIntegrationProviderInput | IntegrationCreateOrConnectWithoutIntegrationProviderInput[]
    createMany?: IntegrationCreateManyIntegrationProviderInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type EnumIntegrationTypeFieldUpdateOperationsInput = {
    set?: $Enums.IntegrationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntegrationUpdateManyWithoutIntegrationProviderNestedInput = {
    create?: XOR<IntegrationCreateWithoutIntegrationProviderInput, IntegrationUncheckedCreateWithoutIntegrationProviderInput> | IntegrationCreateWithoutIntegrationProviderInput[] | IntegrationUncheckedCreateWithoutIntegrationProviderInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutIntegrationProviderInput | IntegrationCreateOrConnectWithoutIntegrationProviderInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutIntegrationProviderInput | IntegrationUpsertWithWhereUniqueWithoutIntegrationProviderInput[]
    createMany?: IntegrationCreateManyIntegrationProviderInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutIntegrationProviderInput | IntegrationUpdateWithWhereUniqueWithoutIntegrationProviderInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutIntegrationProviderInput | IntegrationUpdateManyWithWhereWithoutIntegrationProviderInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type IntegrationUncheckedUpdateManyWithoutIntegrationProviderNestedInput = {
    create?: XOR<IntegrationCreateWithoutIntegrationProviderInput, IntegrationUncheckedCreateWithoutIntegrationProviderInput> | IntegrationCreateWithoutIntegrationProviderInput[] | IntegrationUncheckedCreateWithoutIntegrationProviderInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutIntegrationProviderInput | IntegrationCreateOrConnectWithoutIntegrationProviderInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutIntegrationProviderInput | IntegrationUpsertWithWhereUniqueWithoutIntegrationProviderInput[]
    createMany?: IntegrationCreateManyIntegrationProviderInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutIntegrationProviderInput | IntegrationUpdateWithWhereUniqueWithoutIntegrationProviderInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutIntegrationProviderInput | IntegrationUpdateManyWithWhereWithoutIntegrationProviderInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type IntegrationProviderCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<IntegrationProviderCreateWithoutIntegrationsInput, IntegrationProviderUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: IntegrationProviderCreateOrConnectWithoutIntegrationsInput
    connect?: IntegrationProviderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type DestinationCalendarCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<DestinationCalendarCreateWithoutIntegrationInput, DestinationCalendarUncheckedCreateWithoutIntegrationInput> | DestinationCalendarCreateWithoutIntegrationInput[] | DestinationCalendarUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutIntegrationInput | DestinationCalendarCreateOrConnectWithoutIntegrationInput[]
    createMany?: DestinationCalendarCreateManyIntegrationInputEnvelope
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
  }

  export type DestinationCalendarUncheckedCreateNestedManyWithoutIntegrationInput = {
    create?: XOR<DestinationCalendarCreateWithoutIntegrationInput, DestinationCalendarUncheckedCreateWithoutIntegrationInput> | DestinationCalendarCreateWithoutIntegrationInput[] | DestinationCalendarUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutIntegrationInput | DestinationCalendarCreateOrConnectWithoutIntegrationInput[]
    createMany?: DestinationCalendarCreateManyIntegrationInputEnvelope
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntegrationProviderUpdateOneRequiredWithoutIntegrationsNestedInput = {
    create?: XOR<IntegrationProviderCreateWithoutIntegrationsInput, IntegrationProviderUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: IntegrationProviderCreateOrConnectWithoutIntegrationsInput
    upsert?: IntegrationProviderUpsertWithoutIntegrationsInput
    connect?: IntegrationProviderWhereUniqueInput
    update?: XOR<XOR<IntegrationProviderUpdateToOneWithWhereWithoutIntegrationsInput, IntegrationProviderUpdateWithoutIntegrationsInput>, IntegrationProviderUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateOneRequiredWithoutIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    upsert?: UserUpsertWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationsInput, UserUpdateWithoutIntegrationsInput>, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type DestinationCalendarUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<DestinationCalendarCreateWithoutIntegrationInput, DestinationCalendarUncheckedCreateWithoutIntegrationInput> | DestinationCalendarCreateWithoutIntegrationInput[] | DestinationCalendarUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutIntegrationInput | DestinationCalendarCreateOrConnectWithoutIntegrationInput[]
    upsert?: DestinationCalendarUpsertWithWhereUniqueWithoutIntegrationInput | DestinationCalendarUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: DestinationCalendarCreateManyIntegrationInputEnvelope
    set?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    disconnect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    delete?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    update?: DestinationCalendarUpdateWithWhereUniqueWithoutIntegrationInput | DestinationCalendarUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: DestinationCalendarUpdateManyWithWhereWithoutIntegrationInput | DestinationCalendarUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: DestinationCalendarScalarWhereInput | DestinationCalendarScalarWhereInput[]
  }

  export type DestinationCalendarUncheckedUpdateManyWithoutIntegrationNestedInput = {
    create?: XOR<DestinationCalendarCreateWithoutIntegrationInput, DestinationCalendarUncheckedCreateWithoutIntegrationInput> | DestinationCalendarCreateWithoutIntegrationInput[] | DestinationCalendarUncheckedCreateWithoutIntegrationInput[]
    connectOrCreate?: DestinationCalendarCreateOrConnectWithoutIntegrationInput | DestinationCalendarCreateOrConnectWithoutIntegrationInput[]
    upsert?: DestinationCalendarUpsertWithWhereUniqueWithoutIntegrationInput | DestinationCalendarUpsertWithWhereUniqueWithoutIntegrationInput[]
    createMany?: DestinationCalendarCreateManyIntegrationInputEnvelope
    set?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    disconnect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    delete?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    connect?: DestinationCalendarWhereUniqueInput | DestinationCalendarWhereUniqueInput[]
    update?: DestinationCalendarUpdateWithWhereUniqueWithoutIntegrationInput | DestinationCalendarUpdateWithWhereUniqueWithoutIntegrationInput[]
    updateMany?: DestinationCalendarUpdateManyWithWhereWithoutIntegrationInput | DestinationCalendarUpdateManyWithWhereWithoutIntegrationInput[]
    deleteMany?: DestinationCalendarScalarWhereInput | DestinationCalendarScalarWhereInput[]
  }

  export type UserPersonaCreatedefaultIntegrationTypesInput = {
    set: $Enums.IntegrationType[]
  }

  export type UserCreateNestedManyWithoutChosenPersonaInput = {
    create?: XOR<UserCreateWithoutChosenPersonaInput, UserUncheckedCreateWithoutChosenPersonaInput> | UserCreateWithoutChosenPersonaInput[] | UserUncheckedCreateWithoutChosenPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChosenPersonaInput | UserCreateOrConnectWithoutChosenPersonaInput[]
    createMany?: UserCreateManyChosenPersonaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserOnboardingCreateNestedManyWithoutInitialPersonaInput = {
    create?: XOR<UserOnboardingCreateWithoutInitialPersonaInput, UserOnboardingUncheckedCreateWithoutInitialPersonaInput> | UserOnboardingCreateWithoutInitialPersonaInput[] | UserOnboardingUncheckedCreateWithoutInitialPersonaInput[]
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutInitialPersonaInput | UserOnboardingCreateOrConnectWithoutInitialPersonaInput[]
    createMany?: UserOnboardingCreateManyInitialPersonaInputEnvelope
    connect?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChosenPersonaInput = {
    create?: XOR<UserCreateWithoutChosenPersonaInput, UserUncheckedCreateWithoutChosenPersonaInput> | UserCreateWithoutChosenPersonaInput[] | UserUncheckedCreateWithoutChosenPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChosenPersonaInput | UserCreateOrConnectWithoutChosenPersonaInput[]
    createMany?: UserCreateManyChosenPersonaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserOnboardingUncheckedCreateNestedManyWithoutInitialPersonaInput = {
    create?: XOR<UserOnboardingCreateWithoutInitialPersonaInput, UserOnboardingUncheckedCreateWithoutInitialPersonaInput> | UserOnboardingCreateWithoutInitialPersonaInput[] | UserOnboardingUncheckedCreateWithoutInitialPersonaInput[]
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutInitialPersonaInput | UserOnboardingCreateOrConnectWithoutInitialPersonaInput[]
    createMany?: UserOnboardingCreateManyInitialPersonaInputEnvelope
    connect?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
  }

  export type UserPersonaUpdatedefaultIntegrationTypesInput = {
    set?: $Enums.IntegrationType[]
    push?: $Enums.IntegrationType | $Enums.IntegrationType[]
  }

  export type UserUpdateManyWithoutChosenPersonaNestedInput = {
    create?: XOR<UserCreateWithoutChosenPersonaInput, UserUncheckedCreateWithoutChosenPersonaInput> | UserCreateWithoutChosenPersonaInput[] | UserUncheckedCreateWithoutChosenPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChosenPersonaInput | UserCreateOrConnectWithoutChosenPersonaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChosenPersonaInput | UserUpsertWithWhereUniqueWithoutChosenPersonaInput[]
    createMany?: UserCreateManyChosenPersonaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChosenPersonaInput | UserUpdateWithWhereUniqueWithoutChosenPersonaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChosenPersonaInput | UserUpdateManyWithWhereWithoutChosenPersonaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserOnboardingUpdateManyWithoutInitialPersonaNestedInput = {
    create?: XOR<UserOnboardingCreateWithoutInitialPersonaInput, UserOnboardingUncheckedCreateWithoutInitialPersonaInput> | UserOnboardingCreateWithoutInitialPersonaInput[] | UserOnboardingUncheckedCreateWithoutInitialPersonaInput[]
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutInitialPersonaInput | UserOnboardingCreateOrConnectWithoutInitialPersonaInput[]
    upsert?: UserOnboardingUpsertWithWhereUniqueWithoutInitialPersonaInput | UserOnboardingUpsertWithWhereUniqueWithoutInitialPersonaInput[]
    createMany?: UserOnboardingCreateManyInitialPersonaInputEnvelope
    set?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    disconnect?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    delete?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    connect?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    update?: UserOnboardingUpdateWithWhereUniqueWithoutInitialPersonaInput | UserOnboardingUpdateWithWhereUniqueWithoutInitialPersonaInput[]
    updateMany?: UserOnboardingUpdateManyWithWhereWithoutInitialPersonaInput | UserOnboardingUpdateManyWithWhereWithoutInitialPersonaInput[]
    deleteMany?: UserOnboardingScalarWhereInput | UserOnboardingScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChosenPersonaNestedInput = {
    create?: XOR<UserCreateWithoutChosenPersonaInput, UserUncheckedCreateWithoutChosenPersonaInput> | UserCreateWithoutChosenPersonaInput[] | UserUncheckedCreateWithoutChosenPersonaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChosenPersonaInput | UserCreateOrConnectWithoutChosenPersonaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChosenPersonaInput | UserUpsertWithWhereUniqueWithoutChosenPersonaInput[]
    createMany?: UserCreateManyChosenPersonaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChosenPersonaInput | UserUpdateWithWhereUniqueWithoutChosenPersonaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChosenPersonaInput | UserUpdateManyWithWhereWithoutChosenPersonaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserOnboardingUncheckedUpdateManyWithoutInitialPersonaNestedInput = {
    create?: XOR<UserOnboardingCreateWithoutInitialPersonaInput, UserOnboardingUncheckedCreateWithoutInitialPersonaInput> | UserOnboardingCreateWithoutInitialPersonaInput[] | UserOnboardingUncheckedCreateWithoutInitialPersonaInput[]
    connectOrCreate?: UserOnboardingCreateOrConnectWithoutInitialPersonaInput | UserOnboardingCreateOrConnectWithoutInitialPersonaInput[]
    upsert?: UserOnboardingUpsertWithWhereUniqueWithoutInitialPersonaInput | UserOnboardingUpsertWithWhereUniqueWithoutInitialPersonaInput[]
    createMany?: UserOnboardingCreateManyInitialPersonaInputEnvelope
    set?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    disconnect?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    delete?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    connect?: UserOnboardingWhereUniqueInput | UserOnboardingWhereUniqueInput[]
    update?: UserOnboardingUpdateWithWhereUniqueWithoutInitialPersonaInput | UserOnboardingUpdateWithWhereUniqueWithoutInitialPersonaInput[]
    updateMany?: UserOnboardingUpdateManyWithWhereWithoutInitialPersonaInput | UserOnboardingUpdateManyWithWhereWithoutInitialPersonaInput[]
    deleteMany?: UserOnboardingScalarWhereInput | UserOnboardingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOnboardingInput = {
    create?: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardingInput
    connect?: UserWhereUniqueInput
  }

  export type UserPersonaCreateNestedOneWithoutOnboardingsWithThisInitialPersonaInput = {
    create?: XOR<UserPersonaCreateWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUncheckedCreateWithoutOnboardingsWithThisInitialPersonaInput>
    connectOrCreate?: UserPersonaCreateOrConnectWithoutOnboardingsWithThisInitialPersonaInput
    connect?: UserPersonaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOnboardingNestedInput = {
    create?: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardingInput
    upsert?: UserUpsertWithoutOnboardingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnboardingInput, UserUpdateWithoutOnboardingInput>, UserUncheckedUpdateWithoutOnboardingInput>
  }

  export type UserPersonaUpdateOneWithoutOnboardingsWithThisInitialPersonaNestedInput = {
    create?: XOR<UserPersonaCreateWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUncheckedCreateWithoutOnboardingsWithThisInitialPersonaInput>
    connectOrCreate?: UserPersonaCreateOrConnectWithoutOnboardingsWithThisInitialPersonaInput
    upsert?: UserPersonaUpsertWithoutOnboardingsWithThisInitialPersonaInput
    disconnect?: UserPersonaWhereInput | boolean
    delete?: UserPersonaWhereInput | boolean
    connect?: UserPersonaWhereUniqueInput
    update?: XOR<XOR<UserPersonaUpdateToOneWithWhereWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUpdateWithoutOnboardingsWithThisInitialPersonaInput>, UserPersonaUncheckedUpdateWithoutOnboardingsWithThisInitialPersonaInput>
  }

  export type UserCreateNestedOneWithoutDestinationCalendarsInput = {
    create?: XOR<UserCreateWithoutDestinationCalendarsInput, UserUncheckedCreateWithoutDestinationCalendarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDestinationCalendarsInput
    connect?: UserWhereUniqueInput
  }

  export type IntegrationCreateNestedOneWithoutDestinationCalendarsInput = {
    create?: XOR<IntegrationCreateWithoutDestinationCalendarsInput, IntegrationUncheckedCreateWithoutDestinationCalendarsInput>
    connectOrCreate?: IntegrationCreateOrConnectWithoutDestinationCalendarsInput
    connect?: IntegrationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDestinationCalendarsNestedInput = {
    create?: XOR<UserCreateWithoutDestinationCalendarsInput, UserUncheckedCreateWithoutDestinationCalendarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDestinationCalendarsInput
    upsert?: UserUpsertWithoutDestinationCalendarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDestinationCalendarsInput, UserUpdateWithoutDestinationCalendarsInput>, UserUncheckedUpdateWithoutDestinationCalendarsInput>
  }

  export type IntegrationUpdateOneRequiredWithoutDestinationCalendarsNestedInput = {
    create?: XOR<IntegrationCreateWithoutDestinationCalendarsInput, IntegrationUncheckedCreateWithoutDestinationCalendarsInput>
    connectOrCreate?: IntegrationCreateOrConnectWithoutDestinationCalendarsInput
    upsert?: IntegrationUpsertWithoutDestinationCalendarsInput
    connect?: IntegrationWhereUniqueInput
    update?: XOR<XOR<IntegrationUpdateToOneWithWhereWithoutDestinationCalendarsInput, IntegrationUpdateWithoutDestinationCalendarsInput>, IntegrationUncheckedUpdateWithoutDestinationCalendarsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumIntegrationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationType | EnumIntegrationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationTypeFilter<$PrismaModel> | $Enums.IntegrationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumIntegrationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntegrationType | EnumIntegrationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntegrationType[] | ListEnumIntegrationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntegrationTypeWithAggregatesFilter<$PrismaModel> | $Enums.IntegrationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntegrationTypeFilter<$PrismaModel>
    _max?: NestedEnumIntegrationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntegrationCreateWithoutUserInput = {
    id?: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    integrationProvider: IntegrationProviderCreateNestedOneWithoutIntegrationsInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    integrationProviderId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationCreateOrConnectWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput>
  }

  export type IntegrationCreateManyUserInputEnvelope = {
    data: IntegrationCreateManyUserInput | IntegrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnboardingCreateWithoutUserInput = {
    id?: string
    onboardingId: string
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    initialPersona?: UserPersonaCreateNestedOneWithoutOnboardingsWithThisInitialPersonaInput
  }

  export type UserOnboardingUncheckedCreateWithoutUserInput = {
    id?: string
    onboardingId: string
    initialPersonaId?: string | null
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnboardingCreateOrConnectWithoutUserInput = {
    where: UserOnboardingWhereUniqueInput
    create: XOR<UserOnboardingCreateWithoutUserInput, UserOnboardingUncheckedCreateWithoutUserInput>
  }

  export type UserPersonaCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingsWithThisInitialPersona?: UserOnboardingCreateNestedManyWithoutInitialPersonaInput
  }

  export type UserPersonaUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    onboardingsWithThisInitialPersona?: UserOnboardingUncheckedCreateNestedManyWithoutInitialPersonaInput
  }

  export type UserPersonaCreateOrConnectWithoutUsersInput = {
    where: UserPersonaWhereUniqueInput
    create: XOR<UserPersonaCreateWithoutUsersInput, UserPersonaUncheckedCreateWithoutUsersInput>
  }

  export type DestinationCalendarCreateWithoutUserInput = {
    id?: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    integration: IntegrationCreateNestedOneWithoutDestinationCalendarsInput
  }

  export type DestinationCalendarUncheckedCreateWithoutUserInput = {
    id?: string
    integrationId: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCalendarCreateOrConnectWithoutUserInput = {
    where: DestinationCalendarWhereUniqueInput
    create: XOR<DestinationCalendarCreateWithoutUserInput, DestinationCalendarUncheckedCreateWithoutUserInput>
  }

  export type DestinationCalendarCreateManyUserInputEnvelope = {
    data: DestinationCalendarCreateManyUserInput | DestinationCalendarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    update: XOR<IntegrationUpdateWithoutUserInput, IntegrationUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput>
  }

  export type IntegrationUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    data: XOR<IntegrationUpdateWithoutUserInput, IntegrationUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationScalarWhereInput
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationScalarWhereInput = {
    AND?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    OR?: IntegrationScalarWhereInput[]
    NOT?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    id?: StringFilter<"Integration"> | string
    userId?: StringFilter<"Integration"> | string
    name?: StringNullableFilter<"Integration"> | string | null
    accessToken?: StringFilter<"Integration"> | string
    refreshToken?: StringNullableFilter<"Integration"> | string | null
    lastSync?: DateTimeNullableFilter<"Integration"> | Date | string | null
    externalId?: StringNullableFilter<"Integration"> | string | null
    integrationProviderId?: StringFilter<"Integration"> | string
    metadata?: JsonNullableFilter<"Integration">
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
  }

  export type UserOnboardingUpsertWithoutUserInput = {
    update: XOR<UserOnboardingUpdateWithoutUserInput, UserOnboardingUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnboardingCreateWithoutUserInput, UserOnboardingUncheckedCreateWithoutUserInput>
    where?: UserOnboardingWhereInput
  }

  export type UserOnboardingUpdateToOneWithWhereWithoutUserInput = {
    where?: UserOnboardingWhereInput
    data: XOR<UserOnboardingUpdateWithoutUserInput, UserOnboardingUncheckedUpdateWithoutUserInput>
  }

  export type UserOnboardingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    initialPersona?: UserPersonaUpdateOneWithoutOnboardingsWithThisInitialPersonaNestedInput
  }

  export type UserOnboardingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    initialPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPersonaUpsertWithoutUsersInput = {
    update: XOR<UserPersonaUpdateWithoutUsersInput, UserPersonaUncheckedUpdateWithoutUsersInput>
    create: XOR<UserPersonaCreateWithoutUsersInput, UserPersonaUncheckedCreateWithoutUsersInput>
    where?: UserPersonaWhereInput
  }

  export type UserPersonaUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserPersonaWhereInput
    data: XOR<UserPersonaUpdateWithoutUsersInput, UserPersonaUncheckedUpdateWithoutUsersInput>
  }

  export type UserPersonaUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingsWithThisInitialPersona?: UserOnboardingUpdateManyWithoutInitialPersonaNestedInput
  }

  export type UserPersonaUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingsWithThisInitialPersona?: UserOnboardingUncheckedUpdateManyWithoutInitialPersonaNestedInput
  }

  export type DestinationCalendarUpsertWithWhereUniqueWithoutUserInput = {
    where: DestinationCalendarWhereUniqueInput
    update: XOR<DestinationCalendarUpdateWithoutUserInput, DestinationCalendarUncheckedUpdateWithoutUserInput>
    create: XOR<DestinationCalendarCreateWithoutUserInput, DestinationCalendarUncheckedCreateWithoutUserInput>
  }

  export type DestinationCalendarUpdateWithWhereUniqueWithoutUserInput = {
    where: DestinationCalendarWhereUniqueInput
    data: XOR<DestinationCalendarUpdateWithoutUserInput, DestinationCalendarUncheckedUpdateWithoutUserInput>
  }

  export type DestinationCalendarUpdateManyWithWhereWithoutUserInput = {
    where: DestinationCalendarScalarWhereInput
    data: XOR<DestinationCalendarUpdateManyMutationInput, DestinationCalendarUncheckedUpdateManyWithoutUserInput>
  }

  export type DestinationCalendarScalarWhereInput = {
    AND?: DestinationCalendarScalarWhereInput | DestinationCalendarScalarWhereInput[]
    OR?: DestinationCalendarScalarWhereInput[]
    NOT?: DestinationCalendarScalarWhereInput | DestinationCalendarScalarWhereInput[]
    id?: StringFilter<"DestinationCalendar"> | string
    userId?: StringFilter<"DestinationCalendar"> | string
    integrationId?: StringFilter<"DestinationCalendar"> | string
    externalId?: StringFilter<"DestinationCalendar"> | string
    name?: StringFilter<"DestinationCalendar"> | string
    isPrimary?: BoolFilter<"DestinationCalendar"> | boolean
    isReadOnly?: BoolFilter<"DestinationCalendar"> | boolean
    createdAt?: DateTimeFilter<"DestinationCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"DestinationCalendar"> | Date | string
  }

  export type IntegrationCreateWithoutIntegrationProviderInput = {
    id?: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIntegrationsInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationUncheckedCreateWithoutIntegrationProviderInput = {
    id?: string
    userId: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutIntegrationInput
  }

  export type IntegrationCreateOrConnectWithoutIntegrationProviderInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutIntegrationProviderInput, IntegrationUncheckedCreateWithoutIntegrationProviderInput>
  }

  export type IntegrationCreateManyIntegrationProviderInputEnvelope = {
    data: IntegrationCreateManyIntegrationProviderInput | IntegrationCreateManyIntegrationProviderInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationUpsertWithWhereUniqueWithoutIntegrationProviderInput = {
    where: IntegrationWhereUniqueInput
    update: XOR<IntegrationUpdateWithoutIntegrationProviderInput, IntegrationUncheckedUpdateWithoutIntegrationProviderInput>
    create: XOR<IntegrationCreateWithoutIntegrationProviderInput, IntegrationUncheckedCreateWithoutIntegrationProviderInput>
  }

  export type IntegrationUpdateWithWhereUniqueWithoutIntegrationProviderInput = {
    where: IntegrationWhereUniqueInput
    data: XOR<IntegrationUpdateWithoutIntegrationProviderInput, IntegrationUncheckedUpdateWithoutIntegrationProviderInput>
  }

  export type IntegrationUpdateManyWithWhereWithoutIntegrationProviderInput = {
    where: IntegrationScalarWhereInput
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyWithoutIntegrationProviderInput>
  }

  export type IntegrationProviderCreateWithoutIntegrationsInput = {
    id?: string
    providerKey: string
    displayName: string
    description?: string | null
    logoUrl?: string | null
    type: $Enums.IntegrationType
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationProviderUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    providerKey: string
    displayName: string
    description?: string | null
    logoUrl?: string | null
    type: $Enums.IntegrationType
    isEnabled?: boolean
    isBeta?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationProviderCreateOrConnectWithoutIntegrationsInput = {
    where: IntegrationProviderWhereUniqueInput
    create: XOR<IntegrationProviderCreateWithoutIntegrationsInput, IntegrationProviderUncheckedCreateWithoutIntegrationsInput>
  }

  export type UserCreateWithoutIntegrationsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    onboarding?: UserOnboardingCreateNestedOneWithoutUserInput
    chosenPersona?: UserPersonaCreateNestedOneWithoutUsersInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    chosenPersonaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    onboarding?: UserOnboardingUncheckedCreateNestedOneWithoutUserInput
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
  }

  export type DestinationCalendarCreateWithoutIntegrationInput = {
    id?: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDestinationCalendarsInput
  }

  export type DestinationCalendarUncheckedCreateWithoutIntegrationInput = {
    id?: string
    userId: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCalendarCreateOrConnectWithoutIntegrationInput = {
    where: DestinationCalendarWhereUniqueInput
    create: XOR<DestinationCalendarCreateWithoutIntegrationInput, DestinationCalendarUncheckedCreateWithoutIntegrationInput>
  }

  export type DestinationCalendarCreateManyIntegrationInputEnvelope = {
    data: DestinationCalendarCreateManyIntegrationInput | DestinationCalendarCreateManyIntegrationInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationProviderUpsertWithoutIntegrationsInput = {
    update: XOR<IntegrationProviderUpdateWithoutIntegrationsInput, IntegrationProviderUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<IntegrationProviderCreateWithoutIntegrationsInput, IntegrationProviderUncheckedCreateWithoutIntegrationsInput>
    where?: IntegrationProviderWhereInput
  }

  export type IntegrationProviderUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: IntegrationProviderWhereInput
    data: XOR<IntegrationProviderUpdateWithoutIntegrationsInput, IntegrationProviderUncheckedUpdateWithoutIntegrationsInput>
  }

  export type IntegrationProviderUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerKey?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIntegrationTypeFieldUpdateOperationsInput | $Enums.IntegrationType
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    isBeta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationProviderUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerKey?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumIntegrationTypeFieldUpdateOperationsInput | $Enums.IntegrationType
    isEnabled?: BoolFieldUpdateOperationsInput | boolean
    isBeta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutIntegrationsInput = {
    update: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboarding?: UserOnboardingUpdateOneWithoutUserNestedInput
    chosenPersona?: UserPersonaUpdateOneWithoutUsersNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    chosenPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    onboarding?: UserOnboardingUncheckedUpdateOneWithoutUserNestedInput
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DestinationCalendarUpsertWithWhereUniqueWithoutIntegrationInput = {
    where: DestinationCalendarWhereUniqueInput
    update: XOR<DestinationCalendarUpdateWithoutIntegrationInput, DestinationCalendarUncheckedUpdateWithoutIntegrationInput>
    create: XOR<DestinationCalendarCreateWithoutIntegrationInput, DestinationCalendarUncheckedCreateWithoutIntegrationInput>
  }

  export type DestinationCalendarUpdateWithWhereUniqueWithoutIntegrationInput = {
    where: DestinationCalendarWhereUniqueInput
    data: XOR<DestinationCalendarUpdateWithoutIntegrationInput, DestinationCalendarUncheckedUpdateWithoutIntegrationInput>
  }

  export type DestinationCalendarUpdateManyWithWhereWithoutIntegrationInput = {
    where: DestinationCalendarScalarWhereInput
    data: XOR<DestinationCalendarUpdateManyMutationInput, DestinationCalendarUncheckedUpdateManyWithoutIntegrationInput>
  }

  export type UserCreateWithoutChosenPersonaInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    onboarding?: UserOnboardingCreateNestedOneWithoutUserInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChosenPersonaInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    onboarding?: UserOnboardingUncheckedCreateNestedOneWithoutUserInput
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChosenPersonaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChosenPersonaInput, UserUncheckedCreateWithoutChosenPersonaInput>
  }

  export type UserCreateManyChosenPersonaInputEnvelope = {
    data: UserCreateManyChosenPersonaInput | UserCreateManyChosenPersonaInput[]
    skipDuplicates?: boolean
  }

  export type UserOnboardingCreateWithoutInitialPersonaInput = {
    id?: string
    onboardingId: string
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOnboardingInput
  }

  export type UserOnboardingUncheckedCreateWithoutInitialPersonaInput = {
    id?: string
    userId: string
    onboardingId: string
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnboardingCreateOrConnectWithoutInitialPersonaInput = {
    where: UserOnboardingWhereUniqueInput
    create: XOR<UserOnboardingCreateWithoutInitialPersonaInput, UserOnboardingUncheckedCreateWithoutInitialPersonaInput>
  }

  export type UserOnboardingCreateManyInitialPersonaInputEnvelope = {
    data: UserOnboardingCreateManyInitialPersonaInput | UserOnboardingCreateManyInitialPersonaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutChosenPersonaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChosenPersonaInput, UserUncheckedUpdateWithoutChosenPersonaInput>
    create: XOR<UserCreateWithoutChosenPersonaInput, UserUncheckedCreateWithoutChosenPersonaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChosenPersonaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChosenPersonaInput, UserUncheckedUpdateWithoutChosenPersonaInput>
  }

  export type UserUpdateManyWithWhereWithoutChosenPersonaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChosenPersonaInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    chosenPersonaId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOnboardingUpsertWithWhereUniqueWithoutInitialPersonaInput = {
    where: UserOnboardingWhereUniqueInput
    update: XOR<UserOnboardingUpdateWithoutInitialPersonaInput, UserOnboardingUncheckedUpdateWithoutInitialPersonaInput>
    create: XOR<UserOnboardingCreateWithoutInitialPersonaInput, UserOnboardingUncheckedCreateWithoutInitialPersonaInput>
  }

  export type UserOnboardingUpdateWithWhereUniqueWithoutInitialPersonaInput = {
    where: UserOnboardingWhereUniqueInput
    data: XOR<UserOnboardingUpdateWithoutInitialPersonaInput, UserOnboardingUncheckedUpdateWithoutInitialPersonaInput>
  }

  export type UserOnboardingUpdateManyWithWhereWithoutInitialPersonaInput = {
    where: UserOnboardingScalarWhereInput
    data: XOR<UserOnboardingUpdateManyMutationInput, UserOnboardingUncheckedUpdateManyWithoutInitialPersonaInput>
  }

  export type UserOnboardingScalarWhereInput = {
    AND?: UserOnboardingScalarWhereInput | UserOnboardingScalarWhereInput[]
    OR?: UserOnboardingScalarWhereInput[]
    NOT?: UserOnboardingScalarWhereInput | UserOnboardingScalarWhereInput[]
    id?: StringFilter<"UserOnboarding"> | string
    userId?: StringFilter<"UserOnboarding"> | string
    onboardingId?: StringFilter<"UserOnboarding"> | string
    initialPersonaId?: StringNullableFilter<"UserOnboarding"> | string | null
    completed?: BoolFilter<"UserOnboarding"> | boolean
    currentStep?: StringNullableFilter<"UserOnboarding"> | string | null
    onboardingData?: JsonNullableFilter<"UserOnboarding">
    createdAt?: DateTimeFilter<"UserOnboarding"> | Date | string
    updatedAt?: DateTimeFilter<"UserOnboarding"> | Date | string
  }

  export type UserCreateWithoutOnboardingInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    chosenPersona?: UserPersonaCreateNestedOneWithoutUsersInput
    destinationCalendars?: DestinationCalendarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOnboardingInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    chosenPersonaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    destinationCalendars?: DestinationCalendarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOnboardingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
  }

  export type UserPersonaCreateWithoutOnboardingsWithThisInitialPersonaInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutChosenPersonaInput
  }

  export type UserPersonaUncheckedCreateWithoutOnboardingsWithThisInitialPersonaInput = {
    id?: string
    name: string
    description?: string | null
    defaultIntegrationTypes?: UserPersonaCreatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutChosenPersonaInput
  }

  export type UserPersonaCreateOrConnectWithoutOnboardingsWithThisInitialPersonaInput = {
    where: UserPersonaWhereUniqueInput
    create: XOR<UserPersonaCreateWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUncheckedCreateWithoutOnboardingsWithThisInitialPersonaInput>
  }

  export type UserUpsertWithoutOnboardingInput = {
    update: XOR<UserUpdateWithoutOnboardingInput, UserUncheckedUpdateWithoutOnboardingInput>
    create: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnboardingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnboardingInput, UserUncheckedUpdateWithoutOnboardingInput>
  }

  export type UserUpdateWithoutOnboardingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    chosenPersona?: UserPersonaUpdateOneWithoutUsersNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOnboardingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    chosenPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserPersonaUpsertWithoutOnboardingsWithThisInitialPersonaInput = {
    update: XOR<UserPersonaUpdateWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUncheckedUpdateWithoutOnboardingsWithThisInitialPersonaInput>
    create: XOR<UserPersonaCreateWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUncheckedCreateWithoutOnboardingsWithThisInitialPersonaInput>
    where?: UserPersonaWhereInput
  }

  export type UserPersonaUpdateToOneWithWhereWithoutOnboardingsWithThisInitialPersonaInput = {
    where?: UserPersonaWhereInput
    data: XOR<UserPersonaUpdateWithoutOnboardingsWithThisInitialPersonaInput, UserPersonaUncheckedUpdateWithoutOnboardingsWithThisInitialPersonaInput>
  }

  export type UserPersonaUpdateWithoutOnboardingsWithThisInitialPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutChosenPersonaNestedInput
  }

  export type UserPersonaUncheckedUpdateWithoutOnboardingsWithThisInitialPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    defaultIntegrationTypes?: UserPersonaUpdatedefaultIntegrationTypesInput | $Enums.IntegrationType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutChosenPersonaNestedInput
  }

  export type UserCreateWithoutDestinationCalendarsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    onboarding?: UserOnboardingCreateNestedOneWithoutUserInput
    chosenPersona?: UserPersonaCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDestinationCalendarsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    chosenPersonaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    onboarding?: UserOnboardingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDestinationCalendarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDestinationCalendarsInput, UserUncheckedCreateWithoutDestinationCalendarsInput>
  }

  export type IntegrationCreateWithoutDestinationCalendarsInput = {
    id?: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    integrationProvider: IntegrationProviderCreateNestedOneWithoutIntegrationsInput
    user: UserCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationUncheckedCreateWithoutDestinationCalendarsInput = {
    id?: string
    userId: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    integrationProviderId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateOrConnectWithoutDestinationCalendarsInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutDestinationCalendarsInput, IntegrationUncheckedCreateWithoutDestinationCalendarsInput>
  }

  export type UserUpsertWithoutDestinationCalendarsInput = {
    update: XOR<UserUpdateWithoutDestinationCalendarsInput, UserUncheckedUpdateWithoutDestinationCalendarsInput>
    create: XOR<UserCreateWithoutDestinationCalendarsInput, UserUncheckedCreateWithoutDestinationCalendarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDestinationCalendarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDestinationCalendarsInput, UserUncheckedUpdateWithoutDestinationCalendarsInput>
  }

  export type UserUpdateWithoutDestinationCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    onboarding?: UserOnboardingUpdateOneWithoutUserNestedInput
    chosenPersona?: UserPersonaUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDestinationCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    chosenPersonaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    onboarding?: UserOnboardingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type IntegrationUpsertWithoutDestinationCalendarsInput = {
    update: XOR<IntegrationUpdateWithoutDestinationCalendarsInput, IntegrationUncheckedUpdateWithoutDestinationCalendarsInput>
    create: XOR<IntegrationCreateWithoutDestinationCalendarsInput, IntegrationUncheckedCreateWithoutDestinationCalendarsInput>
    where?: IntegrationWhereInput
  }

  export type IntegrationUpdateToOneWithWhereWithoutDestinationCalendarsInput = {
    where?: IntegrationWhereInput
    data: XOR<IntegrationUpdateWithoutDestinationCalendarsInput, IntegrationUncheckedUpdateWithoutDestinationCalendarsInput>
  }

  export type IntegrationUpdateWithoutDestinationCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrationProvider?: IntegrationProviderUpdateOneRequiredWithoutIntegrationsNestedInput
    user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutDestinationCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    integrationProviderId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateManyUserInput = {
    id?: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    integrationProviderId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCalendarCreateManyUserInput = {
    id?: string
    integrationId: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrationProvider?: IntegrationProviderUpdateOneRequiredWithoutIntegrationsNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    integrationProviderId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    integrationProviderId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integration?: IntegrationUpdateOneRequiredWithoutDestinationCalendarsNestedInput
  }

  export type DestinationCalendarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    integrationId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateManyIntegrationProviderInput = {
    id?: string
    userId: string
    name?: string | null
    accessToken: string
    refreshToken?: string | null
    lastSync?: Date | string | null
    externalId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateWithoutIntegrationProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutIntegrationProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutIntegrationNestedInput
  }

  export type IntegrationUncheckedUpdateManyWithoutIntegrationProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarCreateManyIntegrationInput = {
    id?: string
    userId: string
    externalId: string
    name: string
    isPrimary?: boolean
    isReadOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCalendarUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDestinationCalendarsNestedInput
  }

  export type DestinationCalendarUncheckedUpdateWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCalendarUncheckedUpdateManyWithoutIntegrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyChosenPersonaInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    picture?: string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
  }

  export type UserOnboardingCreateManyInitialPersonaInput = {
    id?: string
    userId: string
    onboardingId: string
    completed?: boolean
    currentStep?: string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutChosenPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    onboarding?: UserOnboardingUpdateOneWithoutUserNestedInput
    destinationCalendars?: DestinationCalendarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChosenPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    onboarding?: UserOnboardingUncheckedUpdateOneWithoutUserNestedInput
    destinationCalendars?: DestinationCalendarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChosenPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserOnboardingUpdateWithoutInitialPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnboardingNestedInput
  }

  export type UserOnboardingUncheckedUpdateWithoutInitialPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnboardingUncheckedUpdateManyWithoutInitialPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    onboardingId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    currentStep?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function getLatestProtocolVersion(): number;
/**
* @param {any} raw_parameters
* @returns {any}
*/
export function createAssetLockProofInstance(raw_parameters: any): any;
/**
* @param {Uint8Array} bytes
* @returns {any}
*/
export function deserializeConsensusError(bytes: Uint8Array): any;
/**
* @param {any} contract_id
* @param {any} owner_id
* @param {string} document_type
* @param {Uint8Array} entropy
* @returns {any}
*/
export function generateDocumentId(contract_id: any, owner_id: any, document_type: string, entropy: Uint8Array): any;
/**
*/
export enum StateTransitionTypes {
  DataContractCreate = 0,
  DocumentsBatch = 1,
  IdentityCreate = 2,
  IdentityTopUp = 3,
  DataContractUpdate = 4,
  IdentityUpdate = 5,
  IdentityCreditWithdrawal = 6,
  IdentityCreditTransfer = 7,
  MasternodeVote = 8,
}
/**
*/
export enum KeyType {
  ECDSA_SECP256K1 = 0,
  BLS12_381 = 1,
  ECDSA_HASH160 = 2,
  BIP13_SCRIPT_HASH = 3,
  EDDSA_25519_HASH160 = 4,
}
/**
*/
export enum KeyPurpose {
/**
* at least one authentication key must be registered for all security levels
*/
  AUTHENTICATION = 0,
/**
* this key cannot be used for signing documents
*/
  ENCRYPTION = 1,
/**
* this key cannot be used for signing documents
*/
  DECRYPTION = 2,
/**
* this key cannot be used for signing documents
*/
  TRANSFER = 3,
/**
* this key cannot be used for signing documents
*/
  SYSTEM = 4,
/**
* this key cannot be used for signing documents
*/
  VOTING = 5,
/**
* this key is only for masternode owners
*/
  OWNER = 6,
}
/**
*/
export enum KeySecurityLevel {
  MASTER = 0,
  CRITICAL = 1,
  HIGH = 2,
  MEDIUM = 3,
}
/**
*/
export class AssetLockOutputNotFoundError {
  free(): void;
}
/**
*/
export class AssetLockProof {
  free(): void;
/**
* @param {any} raw_asset_lock_proof
*/
  constructor(raw_asset_lock_proof: any);
/**
* @returns {any}
*/
  createIdentifier(): any;
/**
* @returns {any}
*/
  toObject(): any;
}
/**
*/
export class AssetLockTransactionIsNotFoundError {
  free(): void;
/**
* @returns {any}
*/
  getTransactionId(): any;
}
/**
*/
export class BalanceIsNotEnoughError {
  free(): void;
/**
* @param {bigint} balance
* @param {bigint} fee
*/
  constructor(balance: bigint, fee: bigint);
/**
* @returns {number}
*/
  getBalance(): number;
/**
* @returns {number}
*/
  getFee(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class BasicBLSError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class BasicECDSAError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class ChainAssetLockProof {
  free(): void;
/**
* @param {any} raw_parameters
*/
  constructor(raw_parameters: any);
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {number}
*/
  getCoreChainLockedHeight(): number;
/**
* @param {number} value
*/
  setCoreChainLockedHeight(value: number): void;
/**
* @returns {any}
*/
  getOutPoint(): any;
/**
* @param {Uint8Array} out_point
*/
  setOutPoint(out_point: Uint8Array): void;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any}
*/
  toObject(): any;
/**
* @returns {any}
*/
  createIdentifier(): any;
}
/**
*/
export class ContestedDocumentsTemporarilyNotAllowedError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class ContestedUniqueIndexOnMutableDocumentTypeError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class ContestedUniqueIndexWithUniqueIndexError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DashPlatformProtocol {
  free(): void;
/**
* @param {any} entropy_generator
* @param {number | undefined} maybe_protocol_version
*/
  constructor(entropy_generator: any, maybe_protocol_version?: number);
/**
*/
  readonly dataContract: DataContractFacade;
/**
*/
  readonly document: DocumentFacade;
/**
*/
  readonly identity: IdentityFacade;
/**
*/
  readonly protocolVersion: number;
/**
*/
  readonly stateTransition: StateTransitionFactory;
}
/**
*/
export class DataContract {
  free(): void;
/**
* @param {any} raw_parameters
* @param {object | undefined} options
*/
  constructor(raw_parameters: any, options?: object);
/**
* @returns {any}
*/
  getId(): any;
/**
* @param {any} id
*/
  setId(id: any): void;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getVersion(): number;
/**
* @param {number} v
*/
  setVersion(v: number): void;
/**
*/
  incrementVersion(): void;
/**
* @param {string} doc_type
* @returns {any}
*/
  getBinaryProperties(doc_type: string): any;
/**
* @param {any} schemas
* @param {object | undefined} options
*/
  setDocumentSchemas(schemas: any, options?: object): void;
/**
* @param {string} name
* @param {any} schema
* @param {object | undefined} options
*/
  setDocumentSchema(name: string, schema: any, options?: object): void;
/**
* @param {string} name
* @returns {any}
*/
  getDocumentSchema(name: string): any;
/**
* @returns {any}
*/
  getDocumentSchemas(): any;
/**
* @returns {any}
*/
  getSchemaDefs(): any;
/**
* @param {object | undefined} defs
* @param {object | undefined} options
*/
  setSchemaDefs(defs?: object, options?: object): void;
/**
* @param {string} doc_type
* @returns {boolean}
*/
  hasDocumentType(doc_type: string): boolean;
/**
* @param {bigint} e
*/
  setIdentityNonce(e: bigint): void;
/**
* @returns {bigint}
*/
  getIdentityNonce(): bigint;
/**
* @returns {Metadata | undefined}
*/
  getMetadata(): Metadata | undefined;
/**
* @param {any} metadata
*/
  setMetadata(metadata: any): void;
/**
* @returns {any}
*/
  toObject(): any;
/**
* @returns {any}
*/
  getConfig(): any;
/**
* @param {any} config
*/
  setConfig(config: any): void;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {Uint8Array}
*/
  hash(): Uint8Array;
/**
* @returns {DataContract}
*/
  clone(): DataContract;
}
/**
*/
export class DataContractAlreadyPresentError {
  free(): void;
/**
* @param {any} data_contract_id
*/
  constructor(data_contract_id: any);
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractBoundsNotPresentError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractConfigUpdateError {
  free(): void;
/**
* @param {any} data_contract_id
* @param {string} message
*/
  constructor(data_contract_id: any, message: string);
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractCreateTransition {
  free(): void;
/**
* @param {any} value
*/
  constructor(value: any);
/**
* @returns {DataContract}
*/
  getDataContract(): DataContract;
/**
* @returns {bigint}
*/
  getIdentityNonce(): bigint;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getType(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @returns {number}
*/
  getSignaturePublicKeyId(): number;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @param {Uint8Array} buffer
* @returns {DataContractCreateTransition}
*/
  static fromBuffer(buffer: Uint8Array): DataContractCreateTransition;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {boolean | undefined} skip_signature
* @returns {any}
*/
  toObject(skip_signature?: boolean): any;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {any} bls
* @returns {boolean}
*/
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
}
/**
*/
export class DataContractEmptySchemaError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractFacade {
  free(): void;
/**
* Create Data Contract
* @param {Uint8Array} owner_id
* @param {bigint} identity_nonce
* @param {any} documents
* @param {object | undefined} definitions
* @returns {DataContract}
*/
  create(owner_id: Uint8Array, identity_nonce: bigint, documents: any, definitions?: object): DataContract;
/**
* Create Data Contract from plain object
* @param {any} js_raw_data_contract
* @param {object | undefined} options
* @returns {Promise<DataContract>}
*/
  createFromObject(js_raw_data_contract: any, options?: object): Promise<DataContract>;
/**
* Create Data Contract from buffer
* @param {Uint8Array} buffer
* @param {object | undefined} options
* @returns {Promise<DataContract>}
*/
  createFromBuffer(buffer: Uint8Array, options?: object): Promise<DataContract>;
/**
* Create Data Contract Create State Transition
* @param {DataContract} data_contract
* @returns {DataContractCreateTransition}
*/
  createDataContractCreateTransition(data_contract: DataContract): DataContractCreateTransition;
/**
* Create Data Contract Update State Transition
* @param {DataContract} data_contract
* @param {bigint} identity_contract_nonce
* @returns {DataContractUpdateTransition}
*/
  createDataContractUpdateTransition(data_contract: DataContract, identity_contract_nonce: bigint): DataContractUpdateTransition;
}
/**
*/
export class DataContractFactory {
  free(): void;
/**
* @param {number} protocol_version
*/
  constructor(protocol_version: number);
/**
* @param {Uint8Array} owner_id
* @param {bigint} identity_nonce
* @param {any} documents
* @param {any} config
* @returns {DataContract}
*/
  create(owner_id: Uint8Array, identity_nonce: bigint, documents: any, config: any): DataContract;
/**
* @param {Uint8Array} buffer
* @param {boolean | undefined} skip_validation
* @returns {Promise<DataContract>}
*/
  createFromBuffer(buffer: Uint8Array, skip_validation?: boolean): Promise<DataContract>;
/**
* @param {DataContract} data_contract
* @returns {Promise<DataContractCreateTransition>}
*/
  createDataContractCreateTransition(data_contract: DataContract): Promise<DataContractCreateTransition>;
}
/**
*/
export class DataContractGenericError {
  free(): void;
/**
* @returns {string}
*/
  getMessage(): string;
}
/**
*/
export class DataContractHaveNewUniqueIndexError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractImmutablePropertiesUpdateError {
  free(): void;
/**
* @returns {string}
*/
  getOperation(): string;
/**
* @returns {string}
*/
  getFieldPath(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractInvalidIndexDefinitionUpdateError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractIsReadonlyError {
  free(): void;
/**
* @param {any} data_contract_id
*/
  constructor(data_contract_id: any);
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractMaxDepthExceedError {
  free(): void;
}
/**
*/
export class DataContractNotPresentError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractNotPresentNotConsensusError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
}
/**
*/
export class DataContractUniqueIndicesChangedError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractUpdatePermissionError {
  free(): void;
/**
* @param {any} data_contract_id
* @param {any} identity_id
*/
  constructor(data_contract_id: any, identity_id: any);
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DataContractUpdateTransition {
  free(): void;
/**
* @param {any} raw_parameters
*/
  constructor(raw_parameters: any);
/**
* @returns {DataContract}
*/
  getDataContract(): DataContract;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {bigint}
*/
  getIdentityContractNonce(): bigint;
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @returns {number}
*/
  getSignaturePublicKeyId(): number;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @param {Uint8Array} buffer
* @returns {DataContractUpdateTransition}
*/
  static fromBuffer(buffer: Uint8Array): DataContractUpdateTransition;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {boolean | undefined} skip_signature
* @returns {any}
*/
  toObject(skip_signature?: boolean): any;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {any} bls
* @returns {boolean}
*/
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
}
/**
*/
export class DataTriggerActionConditionError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getDocumentTransitionId(): any;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {any | undefined}
*/
  getOwnerId(): any | undefined;
/**
* @returns {number}
*/
  getCode(): number;
}
/**
*/
export class DataTriggerActionExecutionError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getExecutionError(): any;
/**
* @returns {any}
*/
  getDocumentTransitionId(): any;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {any | undefined}
*/
  getOwnerId(): any | undefined;
/**
* @returns {number}
*/
  getCode(): number;
}
/**
*/
export class DataTriggerActionInvalidResultError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getDocumentTransitionId(): any;
/**
* @returns {any | undefined}
*/
  getOwnerId(): any | undefined;
/**
* @returns {number}
*/
  getCode(): number;
}
/**
*/
export class DataTriggerConditionError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DataTriggerExecutionError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DataTriggerInvalidResultError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DisablingKeyIdAlsoBeingAddedInSameTransitionError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class Document {
  free(): void;
/**
* @param {any} js_raw_document
* @param {DataContract} js_data_contract
* @param {any} js_document_type_name
*/
  constructor(js_raw_document: any, js_data_contract: DataContract, js_document_type_name: any);
/**
* @returns {any}
*/
  getId(): any;
/**
* @param {any} js_id
*/
  setId(js_id: any): void;
/**
* @param {any} owner_id
*/
  setOwnerId(owner_id: any): void;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @param {number | undefined} revision
*/
  setRevision(revision?: number): void;
/**
* @returns {number | undefined}
*/
  getRevision(): number | undefined;
/**
* @param {any} d
*/
  setData(d: any): void;
/**
* @returns {any}
*/
  getData(): any;
/**
* @param {string} path
* @param {any} js_value_to_set
*/
  set(path: string, js_value_to_set: any): void;
/**
* @param {string} path
* @returns {any}
*/
  get(path: string): any;
/**
* @param {Date | undefined} created_at
*/
  setCreatedAt(created_at?: Date): void;
/**
* @param {Date | undefined} updated_at
*/
  setUpdatedAt(updated_at?: Date): void;
/**
* @returns {Date | undefined}
*/
  getCreatedAt(): Date | undefined;
/**
* @returns {Date | undefined}
*/
  getUpdatedAt(): Date | undefined;
/**
* @param {DataContract} data_contract
* @param {string} document_type_name
* @returns {any}
*/
  hash(data_contract: DataContract, document_type_name: string): any;
/**
* @returns {Document}
*/
  clone(): Document;
}
/**
*/
export class DocumentAlreadyExistsError {
  free(): void;
}
/**
*/
export class DocumentAlreadyPresentError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentContestCurrentlyLockedError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentContestDocumentWithSameIdAlreadyPresentError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentContestIdentityAlreadyContestantError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentContestNotJoinableError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentContestNotPaidForError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentCreateTransition {
  free(): void;
/**
* @returns {bigint}
*/
  getRevision(): bigint;
/**
* @returns {Uint8Array}
*/
  getEntropy(): Uint8Array;
/**
* @returns {bigint}
*/
  getIdentityContractNonce(): bigint;
/**
* @param {bigint} identity_contract_nonce
*/
  setIdentityContractNonce(identity_contract_nonce: bigint): void;
/**
* @returns {any}
*/
  getPrefundedVotingBalance(): any;
/**
*/
  static readonly INITIAL_REVISION: number;
}
/**
*/
export class DocumentCreationNotAllowedError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentFacade {
  free(): void;
/**
* @param {DocumentFactory} document_factory
*/
  constructor(document_factory: DocumentFactory);
/**
* @param {DataContract} data_contract
* @param {any} js_owner_id
* @param {string} document_type
* @param {any} data
* @returns {ExtendedDocument}
*/
  create(data_contract: DataContract, js_owner_id: any, document_type: string, data: any): ExtendedDocument;
/**
* @param {Uint8Array} buffer
* @param {string} document_type
* @param {DataContract} data_contract
* @returns {ExtendedDocument}
*/
  createExtendedDocumentFromDocumentBuffer(buffer: Uint8Array, document_type: string, data_contract: DataContract): ExtendedDocument;
/**
* Creates Documents State Transition
* @param {any} documents
* @param {object} nonce_counter_value
* @returns {DocumentsBatchTransition}
*/
  createStateTransition(documents: any, nonce_counter_value: object): DocumentsBatchTransition;
}
/**
*/
export class DocumentFactory {
  free(): void;
/**
* @param {number} protocol_version
* @param {any | undefined} external_entropy_generator_arg
*/
  constructor(protocol_version: number, external_entropy_generator_arg?: any);
/**
* @param {DataContract} data_contract
* @param {any} js_owner_id
* @param {string} document_type
* @param {any} data
* @returns {ExtendedDocument}
*/
  create(data_contract: DataContract, js_owner_id: any, document_type: string, data: any): ExtendedDocument;
/**
* @param {any} documents
* @param {object} nonce_counter_value
* @returns {DocumentsBatchTransition}
*/
  createStateTransition(documents: any, nonce_counter_value: object): DocumentsBatchTransition;
/**
* @param {Uint8Array} buffer
* @param {string} document_type
* @param {DataContract} data_contract
* @returns {ExtendedDocument}
*/
  createExtendedDocumentFromDocumentBuffer(buffer: Uint8Array, document_type: string, data_contract: DataContract): ExtendedDocument;
}
/**
*/
export class DocumentFieldMaxSizeExceededError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentIncorrectPurchasePriceError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentNoRevisionError {
  free(): void;
/**
* @param {Document} document
*/
  constructor(document: Document);
/**
* @returns {Document}
*/
  getDocument(): Document;
}
/**
*/
export class DocumentNotForSaleError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentNotFoundError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentNotProvidedError {
  free(): void;
}
/**
*/
export class DocumentOwnerIdMismatchError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {any}
*/
  getDocumentOwnerId(): any;
/**
* @returns {any}
*/
  getExistingDocumentOwnerId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentTimestampWindowViolationError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {string}
*/
  getTimestampName(): string;
/**
* @returns {Date}
*/
  getTimestamp(): Date;
/**
* @returns {Date}
*/
  getTimeWindowStart(): Date;
/**
* @returns {Date}
*/
  getTimeWindowEnd(): Date;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentTimestampsAreEqualError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentTimestampsMismatchError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentTransition {
  free(): void;
/**
* @returns {any}
*/
  getId(): any;
/**
* @returns {string}
*/
  getType(): string;
/**
* @returns {any}
*/
  getData(): any;
/**
* @returns {number}
*/
  getAction(): number;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @param {any} js_data_contract_id
*/
  setDataContractId(js_data_contract_id: any): void;
/**
* @returns {any}
*/
  getIdentityContractNonce(): any;
/**
* @returns {any}
*/
  getRevision(): any;
/**
* @returns {Uint8Array | undefined}
*/
  getEntropy(): Uint8Array | undefined;
/**
* @returns {bigint | undefined}
*/
  get_price(): bigint | undefined;
/**
* @returns {any | undefined}
*/
  getReceiverId(): any | undefined;
/**
* @param {number} revision
*/
  setRevision(revision: number): void;
/**
* @returns {boolean}
*/
  hasPrefundedBalance(): boolean;
/**
* @returns {any}
*/
  getPrefundedVotingBalance(): any;
}
/**
*/
export class DocumentTransitions {
  free(): void;
/**
*/
  constructor();
/**
* @param {ExtendedDocument} transition
*/
  addTransitionCreate(transition: ExtendedDocument): void;
/**
* @param {ExtendedDocument} transition
*/
  addTransitionReplace(transition: ExtendedDocument): void;
/**
* @param {ExtendedDocument} transition
*/
  addTransitionDelete(transition: ExtendedDocument): void;
}
/**
*/
export class DocumentTransitionsAreAbsentError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentTypeUpdateError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class DocumentsBatchTransition {
  free(): void;
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @returns {Array<any>}
*/
  getTransitions(): Array<any>;
/**
* @param {Array<any>} js_transitions
*/
  setTransitions(js_transitions: Array<any>): void;
/**
* @param {number} nonce
*/
  setIdentityContractNonce(nonce: number): void;
/**
* @returns {Array<any>}
*/
  getModifiedDataIds(): Array<any>;
/**
* @returns {number}
*/
  getSignaturePublicKeyId(): number;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {any} bls
* @returns {boolean}
*/
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
/**
* @param {number} key_id
*/
  setSignaturePublicKeyId(key_id: number): void;
/**
* @param {number} purpose
* @returns {Array<any>}
*/
  getKeySecurityLevelRequirement(purpose: number): Array<any>;
/**
* @returns {Uint8Array}
*/
  getSignature(): Uint8Array;
/**
* @param {Uint8Array} signature
*/
  setSignature(signature: Uint8Array): void;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @returns {any}
*/
  toBuffer(): any;
}
/**
*/
export class DuplicateDocumentTransitionsWithIdsError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDocumentTransitionReferences(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicateDocumentTransitionsWithIndicesError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDocumentTransitionReferences(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicateIndexError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicateIndexNameError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getDuplicateIndexName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicateUniqueIndexError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {Array<any>}
*/
  getDuplicatingProperties(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicatedIdentityPublicKeyError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDuplicatedPublicKeysIds(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicatedIdentityPublicKeyIdError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDuplicatedIds(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicatedIdentityPublicKeyIdStateError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDuplicatedIds(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class DuplicatedIdentityPublicKeyStateError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDuplicatedPublicKeysIds(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class ExtendedDocument {
  free(): void;
/**
* @param {any} js_raw_document
* @param {DataContract} js_data_contract
*/
  constructor(js_raw_document: any, js_data_contract: DataContract);
/**
* @returns {number}
*/
  getFeatureVersion(): number;
/**
* @returns {any}
*/
  getId(): any;
/**
* @param {any} js_id
*/
  setId(js_id: any): void;
/**
* @returns {string}
*/
  getType(): string;
/**
* @param {string} document_type_name
*/
  setType(document_type_name: string): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {DataContract}
*/
  getDataContract(): DataContract;
/**
* @param {any} js_data_contract_id
*/
  setDataContractId(js_data_contract_id: any): void;
/**
* @returns {Document}
*/
  getDocument(): Document;
/**
* @param {any} owner_id
*/
  setOwnerId(owner_id: any): void;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @param {number | undefined} rev
*/
  setRevision(rev?: number): void;
/**
* @returns {number | undefined}
*/
  getRevision(): number | undefined;
/**
* @param {Uint8Array} e
*/
  setEntropy(e: Uint8Array): void;
/**
* @returns {any}
*/
  getEntropy(): any;
/**
* @param {any} d
*/
  setData(d: any): void;
/**
* @returns {any}
*/
  getData(): any;
/**
* @param {string} path
* @param {any} js_value_to_set
*/
  set(path: string, js_value_to_set: any): void;
/**
* @param {string} path
* @returns {any}
*/
  get(path: string): any;
/**
* @param {Date | undefined} ts
*/
  setCreatedAt(ts?: Date): void;
/**
* @param {Date | undefined} ts
*/
  setUpdatedAt(ts?: Date): void;
/**
* @returns {Date | undefined}
*/
  getCreatedAt(): Date | undefined;
/**
* @returns {Date | undefined}
*/
  getUpdatedAt(): Date | undefined;
/**
* @returns {Metadata | undefined}
*/
  getMetadata(): Metadata | undefined;
/**
* @param {any} metadata
*/
  setMetadata(metadata: any): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  hash(): any;
/**
* @returns {ExtendedDocument}
*/
  clone(): ExtendedDocument;
/**
* @param {number} platform_version
* @returns {ValidationResult}
*/
  validate(platform_version: number): ValidationResult;
}
/**
*/
export class Identity {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @returns {any}
*/
  getId(): any;
/**
* @param {any} id
*/
  setId(id: any): void;
/**
* @param {Array<any>} public_keys
* @returns {number}
*/
  setPublicKeys(public_keys: Array<any>): number;
/**
* @returns {any[]}
*/
  getPublicKeys(): any[];
/**
* @param {number} key_id
* @returns {IdentityPublicKey | undefined}
*/
  getPublicKeyById(key_id: number): IdentityPublicKey | undefined;
/**
* @returns {number}
*/
  getBalance(): number;
/**
* @param {number} balance
*/
  setBalance(balance: number): void;
/**
* @param {number} amount
* @returns {number}
*/
  increaseBalance(amount: number): number;
/**
* @param {number} amount
* @returns {number}
*/
  reduceBalance(amount: number): number;
/**
* @param {number} revision
*/
  setRevision(revision: number): void;
/**
* @returns {number}
*/
  getRevision(): number;
/**
* @param {any} metadata
*/
  setMetadata(metadata: any): void;
/**
* @returns {Metadata | undefined}
*/
  getMetadata(): Metadata | undefined;
/**
* @param {any} object
* @returns {Identity}
*/
  static from(object: any): Identity;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any}
*/
  toObject(): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {Uint8Array}
*/
  hash(): Uint8Array;
/**
* @param {IdentityPublicKey} public_key
*/
  addPublicKey(public_key: IdentityPublicKey): void;
/**
* @param {Array<any>} public_keys
*/
  addPublicKeys(public_keys: Array<any>): void;
/**
* @returns {number}
*/
  getPublicKeyMaxId(): number;
/**
* @param {Uint8Array} buffer
* @returns {Identity}
*/
  static fromBuffer(buffer: Uint8Array): Identity;
/**
*/
  readonly balance: number;
}
/**
*/
export class IdentityAlreadyExistsError {
  free(): void;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityAssetLockProofLockedTransactionMismatchError {
  free(): void;
/**
* @returns {any}
*/
  getInstantLockTransactionId(): any;
/**
* @returns {any}
*/
  getAssetLockTransactionId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityAssetLockTransactionIsNotFoundError {
  free(): void;
/**
* @returns {any}
*/
  getTransactionId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityAssetLockTransactionOutPointAlreadyExistsError {
  free(): void;
/**
* @returns {number}
*/
  getOutputIndex(): number;
/**
* @returns {any}
*/
  getTransactionId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityAssetLockTransactionOutPointNotEnoughBalanceError {
  free(): void;
/**
* @returns {any}
*/
  getTransactionId(): any;
/**
* @returns {number}
*/
  getOutputIndex(): number;
/**
* @returns {bigint}
*/
  getInitialAssetLockCredits(): bigint;
/**
* @returns {bigint}
*/
  getCreditsLeft(): bigint;
/**
* @returns {bigint}
*/
  getCreditsRequired(): bigint;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityAssetLockTransactionOutputNotFoundError {
  free(): void;
/**
* @returns {number}
*/
  getOutputIndex(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityAssetLockTransactionReplayError {
  free(): void;
/**
* @returns {any}
*/
  getTransactionId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  getStateTransitionId(): any;
/**
* @returns {number}
*/
  getOutputIndex(): number;
}
/**
*/
export class IdentityContractNonceOutOfBoundsError {
  free(): void;
/**
* @returns {bigint}
*/
  getIdentityContractNonce(): bigint;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityCreateTransition {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @param {any} asset_lock_proof
*/
  setAssetLockProof(asset_lock_proof: any): void;
/**
* @returns {any}
*/
  getAssetLockProof(): any;
/**
* @param {any[]} public_keys
*/
  setPublicKeys(public_keys: any[]): void;
/**
* @param {any[]} public_keys
*/
  addPublicKeys(public_keys: any[]): void;
/**
* @returns {any[]}
*/
  getPublicKeys(): any[];
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {Uint8Array} private_key
* @param {number} key_type
* @param {any | undefined} bls
*/
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @param {Uint8Array | undefined} signature
*/
  setSignature(signature?: Uint8Array): void;
/**
*/
  readonly assetLockProof: any;
/**
*/
  readonly identityId: any;
/**
*/
  readonly publicKeys: any[];
}
/**
*/
export class IdentityCreditTransferToSelfError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityCreditTransferTransition {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {any}
*/
  getRecipientId(): any;
/**
* @param {any} identity_id
*/
  setIdentityId(identity_id: any): void;
/**
* @param {any} recipient_id
*/
  setRecipientId(recipient_id: any): void;
/**
* @returns {number}
*/
  getAmount(): number;
/**
* @param {number} amount
*/
  setAmount(amount: number): void;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @returns {bigint}
*/
  getNonce(): bigint;
/**
* @param {bigint} nonce
*/
  setNonce(nonce: bigint): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {Uint8Array} private_key
* @param {number} key_type
* @param {any | undefined} bls
*/
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @param {Uint8Array | undefined} signature
*/
  setSignature(signature?: Uint8Array): void;
/**
* @returns {number}
*/
  getSignaturePublicKeyId(): number;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
/**
*/
  readonly amount: bigint;
/**
*/
  readonly identityId: any;
/**
*/
  readonly recipientId: any;
}
/**
*/
export class IdentityCreditWithdrawalTransition {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @param {any} identity_id
*/
  setIdentityId(identity_id: any): void;
/**
* @returns {bigint}
*/
  getAmount(): bigint;
/**
* @param {bigint} amount
*/
  setAmount(amount: bigint): void;
/**
* @returns {number}
*/
  getCoreFeePerByte(): number;
/**
* @param {number} core_fee_per_byte
*/
  setCoreFeePerByte(core_fee_per_byte: number): void;
/**
* @returns {number}
*/
  getPooling(): number;
/**
* @param {number} pooling
*/
  setPooling(pooling: number): void;
/**
* @returns {any | undefined}
*/
  getOutputScript(): any | undefined;
/**
* @param {Uint8Array | undefined} output_script
*/
  setOutputScript(output_script?: Uint8Array): void;
/**
* @returns {bigint}
*/
  getNonce(): bigint;
/**
* @param {bigint} revision
*/
  setNonce(revision: bigint): void;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {Uint8Array} private_key
* @param {number} key_type
* @param {any | undefined} bls
*/
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @param {Uint8Array | undefined} signature
*/
  setSignature(signature?: Uint8Array): void;
/**
* @returns {number}
*/
  getSignaturePublicKeyId(): number;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
/**
*/
  readonly amount: bigint;
/**
*/
  readonly identityId: any;
}
/**
*/
export class IdentityFacade {
  free(): void;
/**
* @param {any} id
* @param {Array<any>} public_keys
* @returns {Identity}
*/
  create(id: any, public_keys: Array<any>): Identity;
/**
* @param {Uint8Array} buffer
* @param {object | undefined} options
* @returns {Identity}
*/
  createFromBuffer(buffer: Uint8Array, options?: object): Identity;
/**
* @param {Uint8Array} instant_lock
* @param {Uint8Array} asset_lock_transaction
* @param {number} output_index
* @returns {InstantAssetLockProof}
*/
  createInstantAssetLockProof(instant_lock: Uint8Array, asset_lock_transaction: Uint8Array, output_index: number): InstantAssetLockProof;
/**
* @param {number} core_chain_locked_height
* @param {Uint8Array} out_point
* @returns {ChainAssetLockProof}
*/
  createChainAssetLockProof(core_chain_locked_height: number, out_point: Uint8Array): ChainAssetLockProof;
/**
* @param {Identity} identity
* @param {any} asset_lock_proof
* @returns {IdentityCreateTransition}
*/
  createIdentityCreateTransition(identity: Identity, asset_lock_proof: any): IdentityCreateTransition;
/**
* @param {any} identity_id
* @param {any} asset_lock_proof
* @returns {IdentityTopUpTransition}
*/
  createIdentityTopUpTransition(identity_id: any, asset_lock_proof: any): IdentityTopUpTransition;
/**
* @param {any} identity_id
* @param {bigint} amount
* @param {number} core_fee_per_byte
* @param {number} pooling
* @param {Uint8Array | undefined} output_script
* @param {bigint} identity_nonce
* @returns {IdentityCreditWithdrawalTransition}
*/
  createIdentityCreditWithdrawalTransition(identity_id: any, amount: bigint, core_fee_per_byte: number, pooling: number, output_script: Uint8Array | undefined, identity_nonce: bigint): IdentityCreditWithdrawalTransition;
/**
* @param {Identity} identity
* @param {any} recipient_id
* @param {bigint} amount
* @param {bigint} identity_nonce
* @returns {IdentityCreditTransferTransition}
*/
  createIdentityCreditTransferTransition(identity: Identity, recipient_id: any, amount: bigint, identity_nonce: bigint): IdentityCreditTransferTransition;
/**
* @param {Identity} identity
* @param {bigint} identity_nonce
* @param {any} public_keys
* @returns {IdentityUpdateTransition}
*/
  createIdentityUpdateTransition(identity: Identity, identity_nonce: bigint, public_keys: any): IdentityUpdateTransition;
}
/**
*/
export class IdentityFactory {
  free(): void;
/**
* @param {number} protocol_version
*/
  constructor(protocol_version: number);
/**
* @param {any} id
* @param {Array<any>} public_keys
* @returns {Identity}
*/
  create(id: any, public_keys: Array<any>): Identity;
/**
* @param {Uint8Array} buffer
* @param {any} options
* @returns {Identity}
*/
  createFromBuffer(buffer: Uint8Array, options: any): Identity;
/**
* @param {Uint8Array} instant_lock
* @param {Uint8Array} asset_lock_transaction
* @param {number} output_index
* @returns {InstantAssetLockProof}
*/
  createInstantAssetLockProof(instant_lock: Uint8Array, asset_lock_transaction: Uint8Array, output_index: number): InstantAssetLockProof;
/**
* @param {number} core_chain_locked_height
* @param {Uint8Array} out_point
* @returns {ChainAssetLockProof}
*/
  createChainAssetLockProof(core_chain_locked_height: number, out_point: Uint8Array): ChainAssetLockProof;
/**
* @param {Identity} identity
* @param {any} asset_lock_proof
* @returns {IdentityCreateTransition}
*/
  createIdentityCreateTransition(identity: Identity, asset_lock_proof: any): IdentityCreateTransition;
/**
* @param {any} identity_id
* @param {any} asset_lock_proof
* @returns {IdentityTopUpTransition}
*/
  createIdentityTopUpTransition(identity_id: any, asset_lock_proof: any): IdentityTopUpTransition;
/**
* @param {Identity} identity
* @param {any} recipient_id
* @param {bigint} amount
* @param {bigint} identity_nonce
* @returns {IdentityCreditTransferTransition}
*/
  createIdentityCreditTransferTransition(identity: Identity, recipient_id: any, amount: bigint, identity_nonce: bigint): IdentityCreditTransferTransition;
/**
* @param {any} identity_id
* @param {bigint} amount
* @param {number} core_fee_per_byte
* @param {number} pooling
* @param {Uint8Array | undefined} output_script
* @param {bigint} identity_nonce
* @returns {IdentityCreditWithdrawalTransition}
*/
  createIdentityCreditWithdrawalTransition(identity_id: any, amount: bigint, core_fee_per_byte: number, pooling: number, output_script: Uint8Array | undefined, identity_nonce: bigint): IdentityCreditWithdrawalTransition;
/**
* @param {Identity} identity
* @param {bigint} identity_nonce
* @param {any} public_keys
* @returns {IdentityUpdateTransition}
*/
  createIdentityUpdateTransition(identity: Identity, identity_nonce: bigint, public_keys: any): IdentityUpdateTransition;
}
/**
*/
export class IdentityInsufficientBalanceError {
  free(): void;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {number}
*/
  getBalance(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityNotFoundError {
  free(): void;
/**
* @param {any} identity_id
*/
  constructor(identity_id: any);
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityPublicKey {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @returns {number}
*/
  getId(): number;
/**
* @param {number} id
*/
  setId(id: number): void;
/**
* @returns {number}
*/
  getType(): number;
/**
* @param {number} key_type
*/
  setType(key_type: number): void;
/**
* @param {Uint8Array} data
*/
  setData(data: Uint8Array): void;
/**
* @returns {any}
*/
  getData(): any;
/**
* @param {number} purpose
*/
  setPurpose(purpose: number): void;
/**
* @returns {number}
*/
  getPurpose(): number;
/**
* @param {number} security_level
*/
  setSecurityLevel(security_level: number): void;
/**
* @returns {number}
*/
  getSecurityLevel(): number;
/**
* @param {boolean} read_only
*/
  setReadOnly(read_only: boolean): void;
/**
* @returns {boolean}
*/
  isReadOnly(): boolean;
/**
* @param {Date} timestamp
*/
  setDisabledAt(timestamp: Date): void;
/**
* @returns {Date | undefined}
*/
  getDisabledAt(): Date | undefined;
/**
* @returns {Uint8Array}
*/
  hash(): Uint8Array;
/**
* @returns {boolean}
*/
  isMaster(): boolean;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any}
*/
  toObject(): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @param {Uint8Array} buffer
* @returns {IdentityPublicKey}
*/
  static fromBuffer(buffer: Uint8Array): IdentityPublicKey;
}
/**
*/
export class IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityPublicKeyIsDisabledError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyIndex(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityPublicKeyIsReadOnlyError {
  free(): void;
/**
* @returns {number}
*/
  getKeyId(): number;
/**
* @returns {number}
*/
  getPublicKeyIndex(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IdentityPublicKeyWithWitness {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @returns {number}
*/
  getId(): number;
/**
* @param {number} id
*/
  setId(id: number): void;
/**
* @returns {number}
*/
  getType(): number;
/**
* @param {number} key_type
*/
  setType(key_type: number): void;
/**
* @param {Uint8Array} data
*/
  setData(data: Uint8Array): void;
/**
* @returns {any}
*/
  getData(): any;
/**
* @param {number} purpose
*/
  setPurpose(purpose: number): void;
/**
* @returns {number}
*/
  getPurpose(): number;
/**
* @param {number} security_level
*/
  setSecurityLevel(security_level: number): void;
/**
* @param {any} contract_id
* @param {string | undefined} document_type_name
*/
  setContractBounds(contract_id: any, document_type_name?: string): void;
/**
* @returns {number}
*/
  getSecurityLevel(): number;
/**
* @param {boolean} read_only
*/
  setReadOnly(read_only: boolean): void;
/**
* @returns {boolean}
*/
  isReadOnly(): boolean;
/**
* @param {Uint8Array} signature
*/
  setSignature(signature: Uint8Array): void;
/**
* @returns {Uint8Array}
*/
  getSignature(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  hash(): Uint8Array;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @param {boolean} skip_signature
* @returns {any}
*/
  toObject(skip_signature: boolean): any;
}
/**
*/
export class IdentityTopUpTransition {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @param {any} asset_lock_proof
*/
  setAssetLockProof(asset_lock_proof: any): void;
/**
* @returns {any}
*/
  getAssetLockProof(): any;
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @param {any} identity_id
*/
  setIdentityId(identity_id: any): void;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {Uint8Array} private_key
* @param {number} key_type
* @param {any | undefined} bls
*/
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @param {Uint8Array | undefined} signature
*/
  setSignature(signature?: Uint8Array): void;
/**
*/
  readonly assetLockProof: any;
/**
*/
  readonly identityId: any;
}
/**
*/
export class IdentityUpdateTransition {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @param {any[] | undefined} public_keys
*/
  setPublicKeysToAdd(public_keys?: any[]): void;
/**
* @returns {any[]}
*/
  getPublicKeysToAdd(): any[];
/**
* @returns {any[]}
*/
  getPublicKeyIdsToDisable(): any[];
/**
* @param {Uint32Array | undefined} public_key_ids
*/
  setPublicKeyIdsToDisable(public_key_ids?: Uint32Array): void;
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @param {any} identity_id
*/
  setIdentityId(identity_id: any): void;
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @returns {bigint}
*/
  getIdentityContractNonce(): bigint;
/**
* @param {bigint} identity_nonce
*/
  setIdentityContractNonce(identity_nonce: bigint): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @param {Uint8Array} private_key
* @param {number} key_type
* @param {any | undefined} bls
*/
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any): void;
/**
* @param {number | undefined} key_id
*/
  setSignaturePublicKeyId(key_id?: number): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @returns {number}
*/
  getSignaturePublicKeyId(): number;
/**
* @param {Uint8Array | undefined} signature
*/
  setSignature(signature?: Uint8Array): void;
/**
* @returns {number}
*/
  getRevision(): number;
/**
* @param {number} revision
*/
  setRevision(revision: number): void;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {any} bls
* @returns {boolean}
*/
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
/**
*/
  readonly addPublicKeys: any[];
/**
*/
  readonly identityId: any;
}
/**
*/
export class IncompatibleDataContractSchemaError {
  free(): void;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {string}
*/
  getOperation(): string;
/**
* @returns {string}
*/
  getFieldPath(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IncompatibleDocumentTypeSchemaError {
  free(): void;
/**
* @returns {string}
*/
  getOperation(): string;
/**
* @returns {string}
*/
  getPropertyPath(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IncompatibleProtocolVersionError {
  free(): void;
/**
* @returns {number}
*/
  getParsedProtocolVersion(): number;
/**
* @returns {number}
*/
  getMinimalProtocolVersion(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class IncompatibleRe2PatternError {
  free(): void;
/**
* @returns {string}
*/
  getPattern(): string;
/**
* @returns {string}
*/
  getPath(): string;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InconsistentCompoundIndexDataError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getIndexedProperties(): Array<any>;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InstantAssetLockProof {
  free(): void;
/**
* @param {any} raw_parameters
*/
  constructor(raw_parameters: any);
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {number}
*/
  getOutputIndex(): number;
/**
* @returns {any | undefined}
*/
  getOutPoint(): any | undefined;
/**
* @returns {any}
*/
  getOutput(): any;
/**
* @returns {any}
*/
  createIdentifier(): any;
/**
* @returns {any}
*/
  getInstantLock(): any;
/**
* @returns {any}
*/
  getTransaction(): any;
/**
* @returns {any}
*/
  toObject(): any;
/**
* @returns {any}
*/
  toJSON(): any;
}
/**
*/
export class InvalidActionError {
  free(): void;
}
/**
*/
export class InvalidActionNameError {
  free(): void;
/**
* @param {any[]} actions
*/
  constructor(actions: any[]);
/**
* @returns {any[]}
*/
  getActions(): any[];
}
/**
*/
export class InvalidAssetLockProofCoreChainHeightError {
  free(): void;
/**
* @returns {number}
*/
  getProofCoreChainLockedHeight(): number;
/**
* @returns {number}
*/
  getCurrentCoreChainLockedHeight(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidAssetLockProofTransactionHeightError {
  free(): void;
/**
* @returns {number}
*/
  getProofCoreChainLockedHeight(): number;
/**
* @returns {number | undefined}
*/
  getTransactionHeight(): number | undefined;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidAssetLockTransactionOutputReturnSizeError {
  free(): void;
/**
* @returns {number}
*/
  getOutputIndex(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidCompoundIndexError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDataContractError {
  free(): void;
/**
* @returns {any[]}
*/
  getErrors(): any[];
/**
* @returns {any}
*/
  getRawDataContract(): any;
/**
* @returns {string}
*/
  getMessage(): string;
}
/**
*/
export class InvalidDataContractIdError {
  free(): void;
/**
* @returns {any}
*/
  getExpectedId(): any;
/**
* @returns {any}
*/
  getInvalidId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDataContractVersionError {
  free(): void;
/**
* @returns {number}
*/
  getExpectedVersion(): number;
/**
* @returns {number}
*/
  getVersion(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDocumentActionError {
  free(): void;
}
/**
*/
export class InvalidDocumentError {
  free(): void;
/**
* @param {any} raw_document
* @param {any[]} errors
*/
  constructor(raw_document: any, errors: any[]);
/**
* @returns {any[]}
*/
  getErrors(): any[];
/**
* @returns {any}
*/
  getRawDocument(): any;
/**
* @returns {string}
*/
  getMessage(): string;
}
/**
*/
export class InvalidDocumentRevisionError {
  free(): void;
/**
* @returns {any}
*/
  getDocumentId(): any;
/**
* @returns {bigint | undefined}
*/
  getPreviousRevision(): bigint | undefined;
/**
* @returns {bigint}
*/
  getDesiredRevision(): bigint;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDocumentTransitionActionError {
  free(): void;
/**
* @returns {string}
*/
  getAction(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDocumentTransitionIdError {
  free(): void;
/**
* @returns {any}
*/
  getExpectedId(): any;
/**
* @returns {any}
*/
  getInvalidId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDocumentTypeError {
  free(): void;
/**
* @returns {string}
*/
  getType(): string;
/**
* @returns {any}
*/
  getDataContractId(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidDocumentTypeInDataContractError {
  free(): void;
/**
* @param {string} doc_type
* @param {any} data_contract_id
*/
  constructor(doc_type: string, data_contract_id: any);
/**
* @returns {string}
*/
  getType(): string;
/**
* @returns {any}
*/
  getDataContractId(): any;
}
/**
*/
export class InvalidDocumentTypeNameError {
  free(): void;
}
/**
*/
export class InvalidDocumentTypeRequiredSecurityLevelError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentifierError {
  free(): void;
/**
* @returns {string}
*/
  getIdentifierName(): string;
/**
* @returns {string}
*/
  getIdentifierError(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityAssetLockProofChainLockValidationErrorWasm {
  free(): void;
/**
* @returns {any}
*/
  getTransactionId(): any;
/**
* @returns {number}
*/
  getHeightReportedNotLocked(): number;
}
/**
*/
export class InvalidIdentityAssetLockTransactionError {
  free(): void;
/**
* @returns {string}
*/
  getErrorMessage(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityAssetLockTransactionOutputError {
  free(): void;
/**
* @returns {number}
*/
  getOutputIndex(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityCreditTransferAmountError {
  free(): void;
/**
* @returns {bigint}
*/
  getAmount(): bigint;
/**
* @returns {bigint}
*/
  getMinAmount(): bigint;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityCreditWithdrawalTransitionAmountError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityCreditWithdrawalTransitionCoreFeeError {
  free(): void;
/**
* @returns {number}
*/
  getCoreFee(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityCreditWithdrawalTransitionOutputScriptError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityError {
  free(): void;
/**
* @returns {any[]}
*/
  getErrors(): any[];
/**
* @returns {any}
*/
  getRawIdentity(): any;
}
/**
*/
export class InvalidIdentityKeySignatureError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyId(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityNonceError {
  free(): void;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {bigint | undefined}
*/
  getCurrentIdentityContractNonce(): bigint | undefined;
/**
* @returns {bigint}
*/
  getSettingIdentityContractNonce(): bigint;
/**
* @returns {Error}
*/
  getError(): Error;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityPublicKeyDataError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyId(): number;
/**
* @returns {string}
*/
  getValidationError(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityPublicKeyIdError {
  free(): void;
/**
* @returns {number}
*/
  getId(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityPublicKeySecurityLevelError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyId(): number;
/**
* @returns {number}
*/
  getPublicKeyPurpose(): number;
/**
* @returns {number}
*/
  getPublicKeySecurityLevel(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityPublicKeyTypeError {
  free(): void;
/**
* @param {number} key_type
*/
  constructor(key_type: number);
/**
* @returns {number}
*/
  getPublicKeyType(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityRevisionError {
  free(): void;
/**
* @returns {any}
*/
  getIdentityId(): any;
/**
* @returns {number}
*/
  getCurrentRevision(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityUpdateTransitionDisableKeysError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIdentityUpdateTransitionEmptyError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIndexPropertyTypeError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {string}
*/
  getPropertyName(): string;
/**
* @returns {string}
*/
  getPropertyType(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidIndexedPropertyConstraintError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {string}
*/
  getPropertyName(): string;
/**
* @returns {string}
*/
  getConstraintName(): string;
/**
* @returns {string}
*/
  getReason(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidInitialRevisionError {
  free(): void;
/**
* @param {Document} document
*/
  constructor(document: Document);
/**
* @returns {Document}
*/
  getDocument(): Document;
}
/**
*/
export class InvalidInstantAssetLockProofError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidInstantAssetLockProofSignatureError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidJsonSchemaRefError {
  free(): void;
/**
* @returns {string}
*/
  getRefError(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidSignaturePublicKeyPurposeError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyPurpose(): number;
/**
* @returns {Array<any>}
*/
  getKeyPurposeRequirement(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidSignaturePublicKeySecurityLevelError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeySecurityLevel(): number;
/**
* @returns {Array<any>}
*/
  getKeySecurityLevelRequirement(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidStateTransitionError {
  free(): void;
/**
* @param {any[]} error_buffers
* @param {any} raw_state_transition
*/
  constructor(error_buffers: any[], raw_state_transition: any);
/**
* @returns {any[]}
*/
  getErrors(): any[];
/**
* @returns {any}
*/
  getRawStateTransition(): any;
}
/**
*/
export class InvalidStateTransitionSignatureError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class InvalidStateTransitionTypeError {
  free(): void;
/**
* @param {number} transition_type
*/
  constructor(transition_type: number);
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class JsonSchemaCompilationError {
  free(): void;
/**
* @returns {string}
*/
  getError(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class JsonSchemaError {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {string}
*/
  getKeyword(): string;
/**
* @returns {string}
*/
  getInstancePath(): string;
/**
* @returns {string}
*/
  getSchemaPath(): string;
/**
* @returns {string}
*/
  getPropertyName(): string;
/**
* @returns {any}
*/
  getParams(): any;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {string}
*/
  toString(): string;
/**
*/
  readonly code: number;
/**
*/
  readonly instancePath: string;
/**
*/
  readonly keyword: string;
/**
*/
  readonly message: string;
/**
*/
  readonly params: any;
/**
*/
  readonly propertyName: string;
/**
*/
  readonly schemaPath: string;
}
/**
*/
export class MasterPublicKeyUpdateError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MasternodeIncorrectVoterIdentityIdError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MasternodeIncorrectVotingAddressError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MasternodeNotFoundError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MasternodeVoteAlreadyPresentError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MasternodeVoteTransition {
  free(): void;
/**
* @param {number} platform_version
*/
  constructor(platform_version: number);
/**
* @returns {any}
*/
  getOwnerId(): any;
/**
* @returns {number}
*/
  getType(): number;
/**
* @returns {any}
*/
  getProTxHash(): any;
/**
* @param {any} pro_tx_hash
*/
  setProTxHash(pro_tx_hash: any): void;
/**
* @param {any} options
* @returns {any}
*/
  toObject(options: any): any;
/**
* @returns {any}
*/
  toBuffer(): any;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any[]}
*/
  getModifiedDataIds(): any[];
/**
* @returns {boolean}
*/
  isDataContractStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isDocumentStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isIdentityStateTransition(): boolean;
/**
* @returns {boolean}
*/
  isVotingStateTransition(): boolean;
/**
* @returns {number}
*/
  getUserFeeIncrease(): number;
/**
* @param {number} user_fee_increase
*/
  setUserFeeIncrease(user_fee_increase: number): void;
/**
* @returns {bigint}
*/
  getIdentityContractNonce(): bigint;
/**
* @returns {object | undefined}
*/
  getContestedDocumentResourceVotePoll(): object | undefined;
/**
* @param {Uint8Array} private_key
* @param {number} key_type
* @param {any | undefined} bls
*/
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any): void;
/**
* @returns {any}
*/
  getSignature(): any;
/**
* @param {Uint8Array | undefined} signature
*/
  setSignature(signature?: Uint8Array): void;
/**
* @param {IdentityPublicKey} identity_public_key
* @param {Uint8Array} private_key
* @param {any} bls
*/
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
}
/**
*/
export class MasternodeVotedTooManyTimesError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MaxDocumentsTransitionsExceededError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MaxIdentityPublicKeyLimitReachedError {
  free(): void;
/**
* @returns {number}
*/
  getMaxItems(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class Metadata {
  free(): void;
/**
* @param {any} options
*/
  constructor(options: any);
/**
* @param {any} object
* @returns {Metadata}
*/
  static from(object: any): Metadata;
/**
* @returns {any}
*/
  toJSON(): any;
/**
* @returns {any}
*/
  toObject(): any;
/**
* @returns {number}
*/
  getBlockHeight(): number;
/**
* @returns {number}
*/
  getCoreChainLockedHeight(): number;
/**
* @returns {number}
*/
  getTimeMs(): number;
/**
* @returns {number}
*/
  getProtocolVersion(): number;
}
/**
*/
export class MismatchOwnerIdsError {
  free(): void;
/**
* @param {any[]} documents
*/
  constructor(documents: any[]);
/**
* @returns {any[]}
*/
  getDocuments(): any[];
}
/**
*/
export class MissingDataContractIdError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingDocumentTransitionActionError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingDocumentTransitionTypeError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingDocumentTypeError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingIdentityPublicKeyIdsError {
  free(): void;
/**
* @returns {Array<any>}
*/
  getDuplicatedIds(): Array<any>;
}
/**
*/
export class MissingMasterPublicKeyError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingPositionsInDocumentTypePropertiesError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingPublicKeyError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyId(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingStateTransitionTypeError {
  free(): void;
/**
*/
  constructor();
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class MissingTransferKeyError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class NoDocumentsSuppliedError {
  free(): void;
/**
*/
  constructor();
}
/**
*/
export class NoTransferKeyForCoreWithdrawalAvailableError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class NonConsensusErrorWasm {
  free(): void;
}
/**
*/
export class NotImplementedIdentityCreditWithdrawalTransitionPoolingError {
  free(): void;
/**
* @returns {number}
*/
  getPooling(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class OverflowError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class PlatformValueError {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {string}
*/
  toString(): string;
/**
* @returns {string}
*/
  valueOf(): string;
}
/**
*/
export class PrefundedSpecializedBalanceInsufficientError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class PrefundedSpecializedBalanceNotFoundError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class ProtocolVersionParsingError {
  free(): void;
/**
* @param {string} parsing_error
*/
  constructor(parsing_error: string);
/**
* @returns {string}
*/
  getParsingError(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class PublicKeyIsDisabledError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyId(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class PublicKeySecurityLevelNotMetError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeySecurityLevel(): number;
/**
* @returns {number}
*/
  getKeySecurityLevelRequirement(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class RevisionAbsentError {
  free(): void;
/**
* @param {Document} document
*/
  constructor(document: Document);
/**
* @returns {Document}
*/
  getDocument(): Document;
}
/**
*/
export class SerializedObjectParsingError {
  free(): void;
/**
* @returns {string}
*/
  getParsingError(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class SignatureShouldNotBePresentError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class StateTransitionFactory {
  free(): void;
/**
* @param {Uint8Array} buffer
* @param {any} _options
* @returns {Promise<any>}
*/
  createFromBuffer(buffer: Uint8Array, _options: any): Promise<any>;
}
/**
*/
export class StateTransitionMaxSizeExceededError {
  free(): void;
/**
* @returns {bigint}
*/
  getActualSizeBytes(): bigint;
/**
* @returns {bigint}
*/
  getMaxSizeBytes(): bigint;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class SystemPropertyIndexAlreadyPresentError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {string}
*/
  getPropertyName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class TooManyMasterPublicKeyError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class TryingToDeleteImmutableDocumentError {
  free(): void;
/**
* @param {Document} document
*/
  constructor(document: Document);
}
/**
*/
export class TryingToReplaceImmutableDocumentError {
  free(): void;
/**
* @param {Document} document
*/
  constructor(document: Document);
}
/**
*/
export class UndefinedIndexPropertyError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {string}
*/
  getIndexName(): string;
/**
* @returns {string}
*/
  getPropertyName(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class UniqueIndicesLimitReachedError {
  free(): void;
/**
* @returns {string}
*/
  getDocumentType(): string;
/**
* @returns {number}
*/
  getIndexLimit(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class UnknownAssetLockProofTypeError {
  free(): void;
/**
* @returns {number | undefined}
*/
  getType(): number | undefined;
}
/**
*/
export class UnknownDocumentCreationRestrictionModeError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class UnknownSecurityLevelError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class UnknownStorageKeyRequirementsError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class UnknownTradeModeError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class UnknownTransferableTypeError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class UnsupportedFeatureError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class UnsupportedProtocolVersionError {
  free(): void;
/**
* @returns {number}
*/
  getParsedProtocolVersion(): number;
/**
* @returns {number}
*/
  getLatestVersion(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class UnsupportedVersionError {
  free(): void;
/**
* @returns {number}
*/
  getReceivedVersion(): number;
/**
* @returns {number}
*/
  getMinVersion(): number;
/**
* @returns {number}
*/
  getMaxVersion(): number;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class ValidationResult {
  free(): void;
/**
* @param {any[] | undefined} errors_option
*/
  constructor(errors_option?: any[]);
/**
* This is just a test method - doesn't need to be in the resulted binding. Please
* remove before shipping
* @returns {(string)[]}
*/
  errorsText(): (string)[];
/**
* @returns {boolean}
*/
  isValid(): boolean;
/**
* @returns {any[]}
*/
  getErrors(): any[];
/**
* @returns {any}
*/
  getData(): any;
/**
* @returns {any}
*/
  getFirstError(): any;
/**
*/
  readonly errors: any[];
}
/**
*/
export class ValueError {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
/**
* @returns {string}
*/
  getMessage(): string;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}
/**
*/
export class VersionError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class VotePollNotAvailableForVotingError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class VotePollNotFoundError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError {
  free(): void;
/**
* @returns {number}
*/
  getCode(): number;
/**
* @returns {any}
*/
  serialize(): any;
/**
*/
  readonly message: string;
}
/**
*/
export class WrongPublicKeyPurposeError {
  free(): void;
/**
* @returns {number}
*/
  getPublicKeyPurpose(): number;
/**
* @returns {Array<any>}
*/
  getKeyPurposeRequirement(): Array<any>;
/**
* @returns {number}
*/
  getCode(): number;
/**
*/
  readonly message: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_invalidcompoundindexerror_free: (a: number) => void;
  readonly invalidcompoundindexerror_getDocumentType: (a: number, b: number) => void;
  readonly invalidcompoundindexerror_getIndexName: (a: number, b: number) => void;
  readonly invalidcompoundindexerror_getCode: (a: number) => number;
  readonly invalidcompoundindexerror_message: (a: number, b: number) => void;
  readonly __wbg_invalidstatetransitionsignatureerror_free: (a: number) => void;
  readonly invalidstatetransitionsignatureerror_getCode: (a: number) => number;
  readonly invalidstatetransitionsignatureerror_message: (a: number, b: number) => void;
  readonly __wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_free: (a: number) => void;
  readonly withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_getCode: (a: number) => number;
  readonly withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_message: (a: number, b: number) => void;
  readonly withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_serialize: (a: number, b: number) => void;
  readonly __wbg_contesteddocumentstemporarilynotallowederror_free: (a: number) => void;
  readonly contesteddocumentstemporarilynotallowederror_getCode: (a: number) => number;
  readonly contesteddocumentstemporarilynotallowederror_message: (a: number, b: number) => void;
  readonly contesteddocumentstemporarilynotallowederror_serialize: (a: number, b: number) => void;
  readonly __wbg_contesteduniqueindexwithuniqueindexerror_free: (a: number) => void;
  readonly contesteduniqueindexwithuniqueindexerror_getCode: (a: number) => number;
  readonly contesteduniqueindexwithuniqueindexerror_message: (a: number, b: number) => void;
  readonly contesteduniqueindexwithuniqueindexerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentfieldmaxsizeexceedederror_free: (a: number) => void;
  readonly documentfieldmaxsizeexceedederror_getCode: (a: number) => number;
  readonly documentfieldmaxsizeexceedederror_message: (a: number, b: number) => void;
  readonly documentfieldmaxsizeexceedederror_serialize: (a: number, b: number) => void;
  readonly __wbg_unsupportedfeatureerror_free: (a: number) => void;
  readonly unsupportedfeatureerror_getCode: (a: number) => number;
  readonly unsupportedfeatureerror_message: (a: number, b: number) => void;
  readonly unsupportedfeatureerror_serialize: (a: number, b: number) => void;
  readonly __wbg_contesteduniqueindexonmutabledocumenttypeerror_free: (a: number) => void;
  readonly contesteduniqueindexonmutabledocumenttypeerror_getCode: (a: number) => number;
  readonly contesteduniqueindexonmutabledocumenttypeerror_message: (a: number, b: number) => void;
  readonly contesteduniqueindexonmutabledocumenttypeerror_serialize: (a: number, b: number) => void;
  readonly __wbg_overflowerror_free: (a: number) => void;
  readonly overflowerror_getCode: (a: number) => number;
  readonly overflowerror_message: (a: number, b: number) => void;
  readonly overflowerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentcreationnotallowederror_free: (a: number) => void;
  readonly documentcreationnotallowederror_getCode: (a: number) => number;
  readonly documentcreationnotallowederror_message: (a: number, b: number) => void;
  readonly documentcreationnotallowederror_serialize: (a: number, b: number) => void;
  readonly __wbg_unknowndocumentcreationrestrictionmodeerror_free: (a: number) => void;
  readonly unknowndocumentcreationrestrictionmodeerror_getCode: (a: number) => number;
  readonly unknowndocumentcreationrestrictionmodeerror_message: (a: number, b: number) => void;
  readonly unknowndocumentcreationrestrictionmodeerror_serialize: (a: number, b: number) => void;
  readonly __wbg_unknowntrademodeerror_free: (a: number) => void;
  readonly unknowntrademodeerror_getCode: (a: number) => number;
  readonly unknowntrademodeerror_message: (a: number, b: number) => void;
  readonly unknowntrademodeerror_serialize: (a: number, b: number) => void;
  readonly __wbg_unknowntransferabletypeerror_free: (a: number) => void;
  readonly unknowntransferabletypeerror_getCode: (a: number) => number;
  readonly unknowntransferabletypeerror_message: (a: number, b: number) => void;
  readonly unknowntransferabletypeerror_serialize: (a: number, b: number) => void;
  readonly __wbg_invalididentityupdatetransitiondisablekeyserror_free: (a: number) => void;
  readonly invalididentityupdatetransitiondisablekeyserror_getCode: (a: number) => number;
  readonly invalididentityupdatetransitiondisablekeyserror_message: (a: number, b: number) => void;
  readonly invalididentityupdatetransitiondisablekeyserror_serialize: (a: number, b: number) => void;
  readonly __wbg_invalididentityupdatetransitionemptyerror_free: (a: number) => void;
  readonly invalididentityupdatetransitionemptyerror_getCode: (a: number) => number;
  readonly invalididentityupdatetransitionemptyerror_message: (a: number, b: number) => void;
  readonly invalididentityupdatetransitionemptyerror_serialize: (a: number, b: number) => void;
  readonly __wbg_invalididentitycreditwithdrawaltransitionamounterror_free: (a: number) => void;
  readonly invalididentitycreditwithdrawaltransitionamounterror_getCode: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitionamounterror_message: (a: number, b: number) => void;
  readonly invalididentitycreditwithdrawaltransitionamounterror_serialize: (a: number, b: number) => void;
  readonly __wbg_invaliddocumenttyperequiredsecuritylevelerror_free: (a: number) => void;
  readonly invaliddocumenttyperequiredsecuritylevelerror_getCode: (a: number) => number;
  readonly invaliddocumenttyperequiredsecuritylevelerror_message: (a: number, b: number) => void;
  readonly invaliddocumenttyperequiredsecuritylevelerror_serialize: (a: number, b: number) => void;
  readonly __wbg_masterpublickeyupdateerror_free: (a: number) => void;
  readonly masterpublickeyupdateerror_getCode: (a: number) => number;
  readonly masterpublickeyupdateerror_message: (a: number, b: number) => void;
  readonly masterpublickeyupdateerror_serialize: (a: number, b: number) => void;
  readonly __wbg_toomanymasterpublickeyerror_free: (a: number) => void;
  readonly toomanymasterpublickeyerror_getCode: (a: number) => number;
  readonly toomanymasterpublickeyerror_message: (a: number, b: number) => void;
  readonly toomanymasterpublickeyerror_serialize: (a: number, b: number) => void;
  readonly __wbg_disablingkeyidalsobeingaddedinsametransitionerror_free: (a: number) => void;
  readonly disablingkeyidalsobeingaddedinsametransitionerror_getCode: (a: number) => number;
  readonly disablingkeyidalsobeingaddedinsametransitionerror_message: (a: number, b: number) => void;
  readonly disablingkeyidalsobeingaddedinsametransitionerror_serialize: (a: number, b: number) => void;
  readonly __wbg_maxdocumentstransitionsexceedederror_free: (a: number) => void;
  readonly maxdocumentstransitionsexceedederror_getCode: (a: number) => number;
  readonly maxdocumentstransitionsexceedederror_message: (a: number, b: number) => void;
  readonly maxdocumentstransitionsexceedederror_serialize: (a: number, b: number) => void;
  readonly __wbg_missingpositionsindocumenttypepropertieserror_free: (a: number) => void;
  readonly missingpositionsindocumenttypepropertieserror_getCode: (a: number) => number;
  readonly missingpositionsindocumenttypepropertieserror_message: (a: number, b: number) => void;
  readonly missingpositionsindocumenttypepropertieserror_serialize: (a: number, b: number) => void;
  readonly __wbg_datacontractboundsnotpresenterror_free: (a: number) => void;
  readonly datacontractboundsnotpresenterror_getCode: (a: number) => number;
  readonly datacontractboundsnotpresenterror_message: (a: number, b: number) => void;
  readonly datacontractboundsnotpresenterror_serialize: (a: number, b: number) => void;
  readonly __wbg_unknownstoragekeyrequirementserror_free: (a: number) => void;
  readonly unknownstoragekeyrequirementserror_getCode: (a: number) => number;
  readonly unknownstoragekeyrequirementserror_message: (a: number, b: number) => void;
  readonly unknownstoragekeyrequirementserror_serialize: (a: number, b: number) => void;
  readonly __wbg_unknownsecuritylevelerror_free: (a: number) => void;
  readonly unknownsecuritylevelerror_getCode: (a: number) => number;
  readonly unknownsecuritylevelerror_message: (a: number, b: number) => void;
  readonly unknownsecuritylevelerror_serialize: (a: number, b: number) => void;
  readonly __wbg_versionerror_free: (a: number) => void;
  readonly versionerror_getCode: (a: number) => number;
  readonly versionerror_message: (a: number, b: number) => void;
  readonly versionerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentcontestnotpaidforerror_free: (a: number) => void;
  readonly documentcontestnotpaidforerror_getCode: (a: number) => number;
  readonly documentcontestnotpaidforerror_message: (a: number, b: number) => void;
  readonly documentcontestnotpaidforerror_serialize: (a: number, b: number) => void;
  readonly __wbg_notransferkeyforcorewithdrawalavailableerror_free: (a: number) => void;
  readonly notransferkeyforcorewithdrawalavailableerror_getCode: (a: number) => number;
  readonly notransferkeyforcorewithdrawalavailableerror_message: (a: number, b: number) => void;
  readonly notransferkeyforcorewithdrawalavailableerror_serialize: (a: number, b: number) => void;
  readonly __wbg_missingtransferkeyerror_free: (a: number) => void;
  readonly missingtransferkeyerror_getCode: (a: number) => number;
  readonly missingtransferkeyerror_message: (a: number, b: number) => void;
  readonly missingtransferkeyerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentcontestdocumentwithsameidalreadypresenterror_free: (a: number) => void;
  readonly documentcontestdocumentwithsameidalreadypresenterror_getCode: (a: number) => number;
  readonly documentcontestdocumentwithsameidalreadypresenterror_message: (a: number, b: number) => void;
  readonly documentcontestdocumentwithsameidalreadypresenterror_serialize: (a: number, b: number) => void;
  readonly __wbg_masternodeincorrectvoteridentityiderror_free: (a: number) => void;
  readonly masternodeincorrectvoteridentityiderror_getCode: (a: number) => number;
  readonly masternodeincorrectvoteridentityiderror_message: (a: number, b: number) => void;
  readonly masternodeincorrectvoteridentityiderror_serialize: (a: number, b: number) => void;
  readonly __wbg_masternodeincorrectvotingaddresserror_free: (a: number) => void;
  readonly masternodeincorrectvotingaddresserror_getCode: (a: number) => number;
  readonly masternodeincorrectvotingaddresserror_message: (a: number, b: number) => void;
  readonly masternodeincorrectvotingaddresserror_serialize: (a: number, b: number) => void;
  readonly __wbg_masternodevotealreadypresenterror_free: (a: number) => void;
  readonly masternodevotealreadypresenterror_getCode: (a: number) => number;
  readonly masternodevotealreadypresenterror_message: (a: number, b: number) => void;
  readonly masternodevotealreadypresenterror_serialize: (a: number, b: number) => void;
  readonly __wbg_masternodevotedtoomanytimeserror_free: (a: number) => void;
  readonly masternodevotedtoomanytimeserror_getCode: (a: number) => number;
  readonly masternodevotedtoomanytimeserror_message: (a: number, b: number) => void;
  readonly masternodevotedtoomanytimeserror_serialize: (a: number, b: number) => void;
  readonly __wbg_votepollnotavailableforvotingerror_free: (a: number) => void;
  readonly votepollnotavailableforvotingerror_getCode: (a: number) => number;
  readonly votepollnotavailableforvotingerror_message: (a: number, b: number) => void;
  readonly votepollnotavailableforvotingerror_serialize: (a: number, b: number) => void;
  readonly __wbg_votepollnotfounderror_free: (a: number) => void;
  readonly votepollnotfounderror_getCode: (a: number) => number;
  readonly votepollnotfounderror_message: (a: number, b: number) => void;
  readonly votepollnotfounderror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentcontestidentityalreadycontestanterror_free: (a: number) => void;
  readonly documentcontestidentityalreadycontestanterror_getCode: (a: number) => number;
  readonly documentcontestidentityalreadycontestanterror_message: (a: number, b: number) => void;
  readonly documentcontestidentityalreadycontestanterror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentcontestnotjoinableerror_free: (a: number) => void;
  readonly documentcontestnotjoinableerror_getCode: (a: number) => number;
  readonly documentcontestnotjoinableerror_message: (a: number, b: number) => void;
  readonly documentcontestnotjoinableerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentcontestcurrentlylockederror_free: (a: number) => void;
  readonly documentcontestcurrentlylockederror_getCode: (a: number) => number;
  readonly documentcontestcurrentlylockederror_message: (a: number, b: number) => void;
  readonly documentcontestcurrentlylockederror_serialize: (a: number, b: number) => void;
  readonly __wbg_masternodenotfounderror_free: (a: number) => void;
  readonly masternodenotfounderror_getCode: (a: number) => number;
  readonly masternodenotfounderror_message: (a: number, b: number) => void;
  readonly masternodenotfounderror_serialize: (a: number, b: number) => void;
  readonly __wbg_prefundedspecializedbalancenotfounderror_free: (a: number) => void;
  readonly prefundedspecializedbalancenotfounderror_getCode: (a: number) => number;
  readonly prefundedspecializedbalancenotfounderror_message: (a: number, b: number) => void;
  readonly prefundedspecializedbalancenotfounderror_serialize: (a: number, b: number) => void;
  readonly __wbg_prefundedspecializedbalanceinsufficienterror_free: (a: number) => void;
  readonly prefundedspecializedbalanceinsufficienterror_getCode: (a: number) => number;
  readonly prefundedspecializedbalanceinsufficienterror_message: (a: number, b: number) => void;
  readonly prefundedspecializedbalanceinsufficienterror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentincorrectpurchasepriceerror_free: (a: number) => void;
  readonly documentincorrectpurchasepriceerror_getCode: (a: number) => number;
  readonly documentincorrectpurchasepriceerror_message: (a: number, b: number) => void;
  readonly documentincorrectpurchasepriceerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documentnotforsaleerror_free: (a: number) => void;
  readonly documentnotforsaleerror_getCode: (a: number) => number;
  readonly documentnotforsaleerror_message: (a: number, b: number) => void;
  readonly documentnotforsaleerror_serialize: (a: number, b: number) => void;
  readonly __wbg_documenttypeupdateerror_free: (a: number) => void;
  readonly documenttypeupdateerror_getCode: (a: number) => number;
  readonly documenttypeupdateerror_message: (a: number, b: number) => void;
  readonly documenttypeupdateerror_serialize: (a: number, b: number) => void;
  readonly __wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_free: (a: number) => void;
  readonly identitypublickeyalreadyexistsforuniquecontractboundserror_getCode: (a: number) => number;
  readonly identitypublickeyalreadyexistsforuniquecontractboundserror_message: (a: number, b: number) => void;
  readonly identitypublickeyalreadyexistsforuniquecontractboundserror_serialize: (a: number, b: number) => void;
  readonly __wbg_identitycredittransfertransition_free: (a: number) => void;
  readonly identitycredittransfertransition_new: (a: number, b: number) => void;
  readonly identitycredittransfertransition_getType: (a: number) => number;
  readonly identitycredittransfertransition_identityId: (a: number) => number;
  readonly identitycredittransfertransition_recipientId: (a: number) => number;
  readonly identitycredittransfertransition_amount: (a: number) => number;
  readonly identitycredittransfertransition_getIdentityId: (a: number) => number;
  readonly identitycredittransfertransition_getRecipientId: (a: number) => number;
  readonly identitycredittransfertransition_setIdentityId: (a: number, b: number) => void;
  readonly identitycredittransfertransition_setRecipientId: (a: number, b: number) => void;
  readonly identitycredittransfertransition_getAmount: (a: number) => number;
  readonly identitycredittransfertransition_setAmount: (a: number, b: number) => void;
  readonly identitycredittransfertransition_getUserFeeIncrease: (a: number) => number;
  readonly identitycredittransfertransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitycredittransfertransition_getNonce: (a: number) => number;
  readonly identitycredittransfertransition_setNonce: (a: number, b: number) => void;
  readonly identitycredittransfertransition_toObject: (a: number, b: number, c: number) => void;
  readonly identitycredittransfertransition_toBuffer: (a: number, b: number) => void;
  readonly identitycredittransfertransition_toJSON: (a: number, b: number) => void;
  readonly identitycredittransfertransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly identitycredittransfertransition_isDataContractStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_isDocumentStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_isIdentityStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_isVotingStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identitycredittransfertransition_getSignature: (a: number) => number;
  readonly identitycredittransfertransition_setSignature: (a: number, b: number, c: number) => void;
  readonly identitycredittransfertransition_getSignaturePublicKeyId: (a: number) => number;
  readonly identitycredittransfertransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_document_free: (a: number) => void;
  readonly document_new: (a: number, b: number, c: number, d: number) => void;
  readonly document_getId: (a: number) => number;
  readonly document_setId: (a: number, b: number) => void;
  readonly document_setOwnerId: (a: number, b: number) => void;
  readonly document_getOwnerId: (a: number) => number;
  readonly document_setRevision: (a: number, b: number, c: number) => void;
  readonly document_getRevision: (a: number, b: number) => void;
  readonly document_setData: (a: number, b: number, c: number) => void;
  readonly document_getData: (a: number, b: number) => void;
  readonly document_set: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly document_get: (a: number, b: number, c: number, d: number) => void;
  readonly document_setCreatedAt: (a: number, b: number) => void;
  readonly document_setUpdatedAt: (a: number, b: number) => void;
  readonly document_getCreatedAt: (a: number) => number;
  readonly document_getUpdatedAt: (a: number) => number;
  readonly document_hash: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly document_clone: (a: number) => number;
  readonly __wbg_documenttimestampwindowviolationerror_free: (a: number) => void;
  readonly documenttimestampwindowviolationerror_getDocumentId: (a: number) => number;
  readonly documenttimestampwindowviolationerror_getTimestampName: (a: number, b: number) => void;
  readonly documenttimestampwindowviolationerror_getTimestamp: (a: number) => number;
  readonly documenttimestampwindowviolationerror_getTimeWindowStart: (a: number) => number;
  readonly documenttimestampwindowviolationerror_getTimeWindowEnd: (a: number) => number;
  readonly documenttimestampwindowviolationerror_getCode: (a: number) => number;
  readonly documenttimestampwindowviolationerror_message: (a: number, b: number) => void;
  readonly __wbg_invalidassetlocktransactionoutputreturnsizeerror_free: (a: number) => void;
  readonly invalidassetlocktransactionoutputreturnsizeerror_getOutputIndex: (a: number) => number;
  readonly invalidassetlocktransactionoutputreturnsizeerror_getCode: (a: number) => number;
  readonly invalidassetlocktransactionoutputreturnsizeerror_message: (a: number, b: number) => void;
  readonly __wbg_identitypublickeyisdisablederror_free: (a: number) => void;
  readonly identitypublickeyisdisablederror_getPublicKeyIndex: (a: number) => number;
  readonly identitypublickeyisdisablederror_getCode: (a: number) => number;
  readonly identitypublickeyisdisablederror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddatacontractiderror_free: (a: number) => void;
  readonly invaliddatacontractiderror_getExpectedId: (a: number) => number;
  readonly invaliddatacontractiderror_getInvalidId: (a: number) => number;
  readonly invaliddatacontractiderror_getCode: (a: number) => number;
  readonly invaliddatacontractiderror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumenttransitioniderror_free: (a: number) => void;
  readonly invaliddocumenttransitioniderror_getExpectedId: (a: number) => number;
  readonly invaliddocumenttransitioniderror_getInvalidId: (a: number) => number;
  readonly invaliddocumenttransitioniderror_getCode: (a: number) => number;
  readonly invaliddocumenttransitioniderror_message: (a: number, b: number) => void;
  readonly __wbg_datatriggerconditionerror_free: (a: number) => void;
  readonly datatriggerconditionerror_getDataContractId: (a: number) => number;
  readonly datatriggerconditionerror_getDocumentId: (a: number) => number;
  readonly datatriggerconditionerror_getMessage: (a: number, b: number) => void;
  readonly datatriggerconditionerror_getCode: (a: number) => number;
  readonly datatriggerconditionerror_message: (a: number, b: number) => void;
  readonly datatriggerconditionerror_serialize: (a: number, b: number) => void;
  readonly __wbg_datatriggeractionconditionerror_free: (a: number) => void;
  readonly datatriggeractionconditionerror_getDataContractId: (a: number) => number;
  readonly datatriggeractionconditionerror_getDocumentTransitionId: (a: number) => number;
  readonly datatriggeractionconditionerror_getMessage: (a: number, b: number) => void;
  readonly datatriggeractionconditionerror_getOwnerId: (a: number) => number;
  readonly datatriggeractionconditionerror_getCode: (a: number) => number;
  readonly __wbg_invalidinstantassetlockproofsignatureerror_free: (a: number) => void;
  readonly invalidinstantassetlockproofsignatureerror_getCode: (a: number) => number;
  readonly invalidinstantassetlockproofsignatureerror_message: (a: number, b: number) => void;
  readonly __wbg_assetlocktransactionisnotfounderror_free: (a: number) => void;
  readonly assetlocktransactionisnotfounderror_getTransactionId: (a: number) => number;
  readonly __wbg_identitycontractnonceoutofboundserror_free: (a: number) => void;
  readonly identitycontractnonceoutofboundserror_getIdentityContractNonce: (a: number) => number;
  readonly identitycontractnonceoutofboundserror_getCode: (a: number) => number;
  readonly identitycontractnonceoutofboundserror_message: (a: number, b: number) => void;
  readonly __wbg_unsupportedprotocolversionerror_free: (a: number) => void;
  readonly unsupportedprotocolversionerror_getParsedProtocolVersion: (a: number) => number;
  readonly unsupportedprotocolversionerror_getLatestVersion: (a: number) => number;
  readonly unsupportedprotocolversionerror_getCode: (a: number) => number;
  readonly unsupportedprotocolversionerror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumentrevisionerror_free: (a: number) => void;
  readonly invaliddocumentrevisionerror_getDocumentId: (a: number) => number;
  readonly invaliddocumentrevisionerror_getPreviousRevision: (a: number, b: number) => void;
  readonly invaliddocumentrevisionerror_getDesiredRevision: (a: number) => number;
  readonly invaliddocumentrevisionerror_getCode: (a: number) => number;
  readonly invaliddocumentrevisionerror_message: (a: number, b: number) => void;
  readonly __wbg_documentnorevisionerror_free: (a: number) => void;
  readonly documentnorevisionerror_new: (a: number) => number;
  readonly documentnorevisionerror_getDocument: (a: number) => number;
  readonly __wbg_datatriggerinvalidresulterror_free: (a: number) => void;
  readonly datatriggerinvalidresulterror_getDataContractId: (a: number) => number;
  readonly datatriggerinvalidresulterror_getDocumentId: (a: number) => number;
  readonly datatriggerinvalidresulterror_getCode: (a: number) => number;
  readonly datatriggerinvalidresulterror_message: (a: number, b: number) => void;
  readonly datatriggerinvalidresulterror_serialize: (a: number, b: number) => void;
  readonly __wbg_datatriggeractioninvalidresulterror_free: (a: number) => void;
  readonly datatriggeractioninvalidresulterror_getDataContractId: (a: number) => number;
  readonly datatriggeractioninvalidresulterror_getDocumentTransitionId: (a: number) => number;
  readonly datatriggeractioninvalidresulterror_getOwnerId: (a: number) => number;
  readonly datatriggeractioninvalidresulterror_getCode: (a: number) => number;
  readonly __wbg_documenttransition_free: (a: number) => void;
  readonly documenttransition_getId: (a: number) => number;
  readonly documenttransition_getType: (a: number, b: number) => void;
  readonly documenttransition_getData: (a: number) => number;
  readonly documenttransition_getAction: (a: number) => number;
  readonly documenttransition_getDataContractId: (a: number) => number;
  readonly documenttransition_setDataContractId: (a: number, b: number, c: number) => void;
  readonly documenttransition_getIdentityContractNonce: (a: number) => number;
  readonly documenttransition_getRevision: (a: number) => number;
  readonly documenttransition_getEntropy: (a: number, b: number) => void;
  readonly documenttransition_get_price: (a: number, b: number) => void;
  readonly documenttransition_getReceiverId: (a: number) => number;
  readonly documenttransition_setRevision: (a: number, b: number) => void;
  readonly documenttransition_hasPrefundedBalance: (a: number) => number;
  readonly documenttransition_getPrefundedVotingBalance: (a: number, b: number) => void;
  readonly __wbg_identitytopuptransition_free: (a: number) => void;
  readonly identitytopuptransition_new: (a: number, b: number) => void;
  readonly identitytopuptransition_setAssetLockProof: (a: number, b: number, c: number) => void;
  readonly identitytopuptransition_assetLockProof: (a: number) => number;
  readonly identitytopuptransition_getAssetLockProof: (a: number) => number;
  readonly identitytopuptransition_getType: (a: number) => number;
  readonly identitytopuptransition_identityId: (a: number) => number;
  readonly identitytopuptransition_getIdentityId: (a: number) => number;
  readonly identitytopuptransition_setIdentityId: (a: number, b: number) => void;
  readonly identitytopuptransition_getOwnerId: (a: number) => number;
  readonly identitytopuptransition_getUserFeeIncrease: (a: number) => number;
  readonly identitytopuptransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitytopuptransition_toObject: (a: number, b: number, c: number) => void;
  readonly identitytopuptransition_toBuffer: (a: number, b: number) => void;
  readonly identitytopuptransition_toJSON: (a: number, b: number) => void;
  readonly identitytopuptransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly identitytopuptransition_isDataContractStateTransition: (a: number) => number;
  readonly identitytopuptransition_isDocumentStateTransition: (a: number) => number;
  readonly identitytopuptransition_isIdentityStateTransition: (a: number) => number;
  readonly identitytopuptransition_isVotingStateTransition: (a: number) => number;
  readonly identitytopuptransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identitytopuptransition_getSignature: (a: number) => number;
  readonly identitytopuptransition_setSignature: (a: number, b: number, c: number) => void;
  readonly __wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_free: (a: number) => void;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getTransactionId: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getOutputIndex: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getInitialAssetLockCredits: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getCreditsLeft: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getCreditsRequired: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getCode: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_message: (a: number, b: number) => void;
  readonly __wbg_documentfacade_free: (a: number) => void;
  readonly documentfacade_new: (a: number) => number;
  readonly documentfacade_create: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly documentfacade_createExtendedDocumentFromDocumentBuffer: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly documentfacade_createStateTransition: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_documenttransitions_free: (a: number) => void;
  readonly documenttransitions_new: () => number;
  readonly documenttransitions_addTransitionCreate: (a: number, b: number) => void;
  readonly documenttransitions_addTransitionReplace: (a: number, b: number) => void;
  readonly documenttransitions_addTransitionDelete: (a: number, b: number) => void;
  readonly __wbg_documentfactory_free: (a: number) => void;
  readonly documentfactory_new: (a: number, b: number, c: number) => void;
  readonly documentfactory_create: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly documentfactory_createStateTransition: (a: number, b: number, c: number, d: number) => void;
  readonly documentfactory_createExtendedDocumentFromDocumentBuffer: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly __wbg_datacontractupdatepermissionerror_free: (a: number) => void;
  readonly datacontractupdatepermissionerror_new: (a: number, b: number) => number;
  readonly datacontractupdatepermissionerror_getDataContractId: (a: number) => number;
  readonly datacontractupdatepermissionerror_getIdentityId: (a: number) => number;
  readonly datacontractupdatepermissionerror_getCode: (a: number) => number;
  readonly datacontractupdatepermissionerror_message: (a: number, b: number) => void;
  readonly __wbg_unsupportedversionerror_free: (a: number) => void;
  readonly unsupportedversionerror_getReceivedVersion: (a: number) => number;
  readonly unsupportedversionerror_getMinVersion: (a: number) => number;
  readonly unsupportedversionerror_getMaxVersion: (a: number) => number;
  readonly unsupportedversionerror_getCode: (a: number) => number;
  readonly unsupportedversionerror_message: (a: number, b: number) => void;
  readonly __wbg_documentalreadyexistserror_free: (a: number) => void;
  readonly __wbg_invalidinitialrevisionerror_free: (a: number) => void;
  readonly invalidinitialrevisionerror_new: (a: number) => number;
  readonly invalidinitialrevisionerror_getDocument: (a: number) => number;
  readonly __wbg_documentsbatchtransition_free: (a: number) => void;
  readonly documentsbatchtransition_getType: (a: number) => number;
  readonly documentsbatchtransition_getOwnerId: (a: number) => number;
  readonly documentsbatchtransition_getUserFeeIncrease: (a: number) => number;
  readonly documentsbatchtransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly documentsbatchtransition_getTransitions: (a: number) => number;
  readonly documentsbatchtransition_setTransitions: (a: number, b: number, c: number) => void;
  readonly documentsbatchtransition_setIdentityContractNonce: (a: number, b: number) => void;
  readonly documentsbatchtransition_getModifiedDataIds: (a: number) => number;
  readonly documentsbatchtransition_getSignaturePublicKeyId: (a: number) => number;
  readonly documentsbatchtransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly documentsbatchtransition_verifySignature: (a: number, b: number, c: number, d: number) => void;
  readonly documentsbatchtransition_setSignaturePublicKeyId: (a: number, b: number) => void;
  readonly documentsbatchtransition_getKeySecurityLevelRequirement: (a: number, b: number, c: number) => void;
  readonly documentsbatchtransition_getSignature: (a: number, b: number) => void;
  readonly documentsbatchtransition_setSignature: (a: number, b: number, c: number) => void;
  readonly documentsbatchtransition_isDocumentStateTransition: (a: number) => number;
  readonly documentsbatchtransition_isDataContractStateTransition: (a: number) => number;
  readonly documentsbatchtransition_isIdentityStateTransition: (a: number) => number;
  readonly documentsbatchtransition_isVotingStateTransition: (a: number) => number;
  readonly documentsbatchtransition_toBuffer: (a: number, b: number) => void;
  readonly __wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_free: (a: number) => void;
  readonly notimplementedidentitycreditwithdrawaltransitionpoolingerror_getPooling: (a: number) => number;
  readonly notimplementedidentitycreditwithdrawaltransitionpoolingerror_getCode: (a: number) => number;
  readonly notimplementedidentitycreditwithdrawaltransitionpoolingerror_message: (a: number, b: number) => void;
  readonly __wbg_duplicatedidentitypublickeystateerror_free: (a: number) => void;
  readonly duplicatedidentitypublickeystateerror_getDuplicatedPublicKeysIds: (a: number) => number;
  readonly duplicatedidentitypublickeystateerror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeystateerror_message: (a: number, b: number) => void;
  readonly __wbg_missingdatacontractiderror_free: (a: number) => void;
  readonly missingdatacontractiderror_getCode: (a: number) => number;
  readonly missingdatacontractiderror_message: (a: number, b: number) => void;
  readonly __wbg_datacontracthavenewuniqueindexerror_free: (a: number) => void;
  readonly datacontracthavenewuniqueindexerror_getDocumentType: (a: number, b: number) => void;
  readonly datacontracthavenewuniqueindexerror_getIndexName: (a: number, b: number) => void;
  readonly datacontracthavenewuniqueindexerror_getCode: (a: number) => number;
  readonly datacontracthavenewuniqueindexerror_message: (a: number, b: number) => void;
  readonly __wbg_identityinsufficientbalanceerror_free: (a: number) => void;
  readonly identityinsufficientbalanceerror_getIdentityId: (a: number) => number;
  readonly identityinsufficientbalanceerror_getBalance: (a: number) => number;
  readonly identityinsufficientbalanceerror_getCode: (a: number) => number;
  readonly identityinsufficientbalanceerror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_free: (a: number) => void;
  readonly invalididentitycreditwithdrawaltransitionoutputscripterror_getCode: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitionoutputscripterror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumenttypeindatacontracterror_free: (a: number) => void;
  readonly invaliddocumenttypeindatacontracterror_new: (a: number, b: number, c: number) => number;
  readonly invaliddocumenttypeindatacontracterror_getType: (a: number, b: number) => void;
  readonly invaliddocumenttypeindatacontracterror_getDataContractId: (a: number) => number;
  readonly __wbg_datacontracterror_free: (a: number) => void;
  readonly datacontracterror_getCode: (a: number) => number;
  readonly datacontracterror_message: (a: number, b: number) => void;
  readonly __wbg_assetlockoutputnotfounderror_free: (a: number) => void;
  readonly __wbg_invalididentitypublickeyiderror_free: (a: number) => void;
  readonly invalididentitypublickeyiderror_getId: (a: number) => number;
  readonly invalididentitypublickeyiderror_getCode: (a: number) => number;
  readonly invalididentitypublickeyiderror_message: (a: number, b: number) => void;
  readonly __wbg_invalidsignaturepublickeysecuritylevelerror_free: (a: number) => void;
  readonly invalidsignaturepublickeysecuritylevelerror_getPublicKeySecurityLevel: (a: number) => number;
  readonly invalidsignaturepublickeysecuritylevelerror_getKeySecurityLevelRequirement: (a: number) => number;
  readonly invalidsignaturepublickeysecuritylevelerror_getCode: (a: number) => number;
  readonly invalidsignaturepublickeysecuritylevelerror_message: (a: number, b: number) => void;
  readonly __wbg_protocolversionparsingerror_free: (a: number) => void;
  readonly protocolversionparsingerror_new: (a: number, b: number) => number;
  readonly protocolversionparsingerror_getParsingError: (a: number, b: number) => void;
  readonly protocolversionparsingerror_getCode: (a: number) => number;
  readonly protocolversionparsingerror_message: (a: number, b: number) => void;
  readonly protocolversionparsingerror_serialize: (a: number, b: number) => void;
  readonly __wbg_inconsistentcompoundindexdataerror_free: (a: number) => void;
  readonly inconsistentcompoundindexdataerror_getIndexedProperties: (a: number) => number;
  readonly inconsistentcompoundindexdataerror_getDocumentType: (a: number, b: number) => void;
  readonly inconsistentcompoundindexdataerror_getCode: (a: number) => number;
  readonly inconsistentcompoundindexdataerror_message: (a: number, b: number) => void;
  readonly __wbg_metadata_free: (a: number) => void;
  readonly metadata_new: (a: number, b: number) => void;
  readonly metadata_from: (a: number, b: number) => void;
  readonly metadata_toJSON: (a: number) => number;
  readonly metadata_toObject: (a: number) => number;
  readonly metadata_getBlockHeight: (a: number) => number;
  readonly metadata_getCoreChainLockedHeight: (a: number) => number;
  readonly metadata_getTimeMs: (a: number) => number;
  readonly metadata_getProtocolVersion: (a: number) => number;
  readonly __wbg_datacontractuniqueindiceschangederror_free: (a: number) => void;
  readonly datacontractuniqueindiceschangederror_getDocumentType: (a: number, b: number) => void;
  readonly datacontractuniqueindiceschangederror_getIndexName: (a: number, b: number) => void;
  readonly datacontractuniqueindiceschangederror_getCode: (a: number) => number;
  readonly datacontractuniqueindiceschangederror_message: (a: number, b: number) => void;
  readonly __wbg_invalidjsonschemareferror_free: (a: number) => void;
  readonly invalidjsonschemareferror_getRefError: (a: number, b: number) => void;
  readonly invalidjsonschemareferror_getCode: (a: number) => number;
  readonly invalidjsonschemareferror_message: (a: number, b: number) => void;
  readonly __wbg_identityfactory_free: (a: number) => void;
  readonly identityfactory_new: (a: number, b: number) => void;
  readonly identityfactory_create: (a: number, b: number, c: number, d: number) => void;
  readonly identityfactory_createFromBuffer: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly identityfactory_createInstantAssetLockProof: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly identityfactory_createChainAssetLockProof: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly identityfactory_createIdentityCreateTransition: (a: number, b: number, c: number, d: number) => void;
  readonly identityfactory_createIdentityTopUpTransition: (a: number, b: number, c: number, d: number) => void;
  readonly identityfactory_createIdentityCreditTransferTransition: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identityfactory_createIdentityCreditWithdrawalTransition: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly identityfactory_createIdentityUpdateTransition: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_datacontractfactory_free: (a: number) => void;
  readonly datacontractfactory_new: (a: number) => number;
  readonly datacontractfactory_create: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly datacontractfactory_createFromBuffer: (a: number, b: number, c: number, d: number) => number;
  readonly datacontractfactory_createDataContractCreateTransition: (a: number, b: number) => number;
  readonly __wbg_documenttransitionsareabsenterror_free: (a: number) => void;
  readonly documenttransitionsareabsenterror_getCode: (a: number) => number;
  readonly documenttransitionsareabsenterror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractnotpresentnotconsensuserror_free: (a: number) => void;
  readonly datacontractnotpresentnotconsensuserror_getDataContractId: (a: number) => number;
  readonly __wbg_signatureshouldnotbepresenterror_free: (a: number) => void;
  readonly signatureshouldnotbepresenterror_getCode: (a: number) => number;
  readonly signatureshouldnotbepresenterror_message: (a: number, b: number) => void;
  readonly getLatestProtocolVersion: () => number;
  readonly __wbg_tryingtodeleteimmutabledocumenterror_free: (a: number) => void;
  readonly tryingtodeleteimmutabledocumenterror_new: (a: number) => number;
  readonly __wbg_basicecdsaerror_free: (a: number) => void;
  readonly basicecdsaerror_getCode: (a: number) => number;
  readonly basicecdsaerror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentifiererror_free: (a: number) => void;
  readonly invalididentifiererror_getIdentifierName: (a: number, b: number) => void;
  readonly invalididentifiererror_getIdentifierError: (a: number, b: number) => void;
  readonly invalididentifiererror_getCode: (a: number) => number;
  readonly invalididentifiererror_message: (a: number, b: number) => void;
  readonly __wbg_datatriggerexecutionerror_free: (a: number) => void;
  readonly datatriggerexecutionerror_getDataContractId: (a: number) => number;
  readonly datatriggerexecutionerror_getDocumentId: (a: number) => number;
  readonly datatriggerexecutionerror_getMessage: (a: number, b: number) => void;
  readonly datatriggerexecutionerror_getCode: (a: number) => number;
  readonly datatriggerexecutionerror_message: (a: number, b: number) => void;
  readonly datatriggerexecutionerror_serialize: (a: number, b: number) => void;
  readonly __wbg_datatriggeractionexecutionerror_free: (a: number) => void;
  readonly datatriggeractionexecutionerror_getDataContractId: (a: number) => number;
  readonly datatriggeractionexecutionerror_getExecutionError: (a: number) => number;
  readonly datatriggeractionexecutionerror_getDocumentTransitionId: (a: number) => number;
  readonly datatriggeractionexecutionerror_getMessage: (a: number, b: number) => void;
  readonly datatriggeractionexecutionerror_getOwnerId: (a: number) => number;
  readonly datatriggeractionexecutionerror_getCode: (a: number) => number;
  readonly __wbg_identitycreatetransition_free: (a: number) => void;
  readonly identitycreatetransition_new: (a: number, b: number) => void;
  readonly identitycreatetransition_setAssetLockProof: (a: number, b: number, c: number) => void;
  readonly identitycreatetransition_assetLockProof: (a: number) => number;
  readonly identitycreatetransition_getAssetLockProof: (a: number) => number;
  readonly identitycreatetransition_setPublicKeys: (a: number, b: number, c: number, d: number) => void;
  readonly identitycreatetransition_addPublicKeys: (a: number, b: number, c: number, d: number) => void;
  readonly identitycreatetransition_getPublicKeys: (a: number, b: number) => void;
  readonly identitycreatetransition_publicKeys: (a: number, b: number) => void;
  readonly identitycreatetransition_getType: (a: number) => number;
  readonly identitycreatetransition_identityId: (a: number) => number;
  readonly identitycreatetransition_getIdentityId: (a: number) => number;
  readonly identitycreatetransition_getOwnerId: (a: number) => number;
  readonly identitycreatetransition_getUserFeeIncrease: (a: number) => number;
  readonly identitycreatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitycreatetransition_toObject: (a: number, b: number, c: number) => void;
  readonly identitycreatetransition_toBuffer: (a: number, b: number) => void;
  readonly identitycreatetransition_toJSON: (a: number, b: number) => void;
  readonly identitycreatetransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly identitycreatetransition_isDataContractStateTransition: (a: number) => number;
  readonly identitycreatetransition_isDocumentStateTransition: (a: number) => number;
  readonly identitycreatetransition_isIdentityStateTransition: (a: number) => number;
  readonly identitycreatetransition_isVotingStateTransition: (a: number) => number;
  readonly identitycreatetransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identitycreatetransition_getSignature: (a: number) => number;
  readonly identitycreatetransition_setSignature: (a: number, b: number, c: number) => void;
  readonly __wbg_undefinedindexpropertyerror_free: (a: number) => void;
  readonly undefinedindexpropertyerror_getDocumentType: (a: number, b: number) => void;
  readonly undefinedindexpropertyerror_getIndexName: (a: number, b: number) => void;
  readonly undefinedindexpropertyerror_getPropertyName: (a: number, b: number) => void;
  readonly undefinedindexpropertyerror_getCode: (a: number) => number;
  readonly undefinedindexpropertyerror_message: (a: number, b: number) => void;
  readonly __wbg_identity_free: (a: number) => void;
  readonly identity_new: (a: number, b: number) => void;
  readonly identity_getId: (a: number) => number;
  readonly identity_setId: (a: number, b: number) => void;
  readonly identity_setPublicKeys: (a: number, b: number, c: number) => void;
  readonly identity_getPublicKeys: (a: number, b: number) => void;
  readonly identity_getPublicKeyById: (a: number, b: number) => number;
  readonly identity_balance: (a: number) => number;
  readonly identity_getBalance: (a: number) => number;
  readonly identity_setBalance: (a: number, b: number) => void;
  readonly identity_increaseBalance: (a: number, b: number) => number;
  readonly identity_reduceBalance: (a: number, b: number) => number;
  readonly identity_setRevision: (a: number, b: number) => void;
  readonly identity_getRevision: (a: number) => number;
  readonly identity_setMetadata: (a: number, b: number, c: number) => void;
  readonly identity_getMetadata: (a: number) => number;
  readonly identity_from: (a: number) => number;
  readonly identity_toJSON: (a: number, b: number) => void;
  readonly identity_toObject: (a: number, b: number) => void;
  readonly identity_toBuffer: (a: number, b: number) => void;
  readonly identity_hash: (a: number, b: number) => void;
  readonly identity_addPublicKey: (a: number, b: number) => void;
  readonly identity_addPublicKeys: (a: number, b: number, c: number) => void;
  readonly identity_getPublicKeyMaxId: (a: number) => number;
  readonly identity_fromBuffer: (a: number, b: number, c: number) => void;
  readonly __wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_free: (a: number) => void;
  readonly invalididentityassetlockproofchainlockvalidationerrorwasm_getTransactionId: (a: number) => number;
  readonly invalididentityassetlockproofchainlockvalidationerrorwasm_getHeightReportedNotLocked: (a: number) => number;
  readonly __wbg_assetlockproof_free: (a: number) => void;
  readonly assetlockproof_new: (a: number, b: number) => void;
  readonly assetlockproof_createIdentifier: (a: number, b: number) => void;
  readonly assetlockproof_toObject: (a: number, b: number) => void;
  readonly createAssetLockProofInstance: (a: number, b: number) => void;
  readonly __wbg_invalididentityrevisionerror_free: (a: number) => void;
  readonly invalididentityrevisionerror_getIdentityId: (a: number) => number;
  readonly invalididentityrevisionerror_getCurrentRevision: (a: number) => number;
  readonly invalididentityrevisionerror_getCode: (a: number) => number;
  readonly invalididentityrevisionerror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractgenericerror_free: (a: number) => void;
  readonly datacontractgenericerror_getMessage: (a: number, b: number) => void;
  readonly __wbg_identitycredittransfertoselferror_free: (a: number) => void;
  readonly identitycredittransfertoselferror_getCode: (a: number) => number;
  readonly identitycredittransfertoselferror_message: (a: number, b: number) => void;
  readonly __wbg_identityfacade_free: (a: number) => void;
  readonly identityfacade_create: (a: number, b: number, c: number, d: number) => void;
  readonly identityfacade_createFromBuffer: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly identityfacade_createInstantAssetLockProof: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly identityfacade_createChainAssetLockProof: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly identityfacade_createIdentityCreateTransition: (a: number, b: number, c: number, d: number) => void;
  readonly identityfacade_createIdentityTopUpTransition: (a: number, b: number, c: number, d: number) => void;
  readonly identityfacade_createIdentityCreditWithdrawalTransition: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly identityfacade_createIdentityCreditTransferTransition: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identityfacade_createIdentityUpdateTransition: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_nonconsensuserrorwasm_free: (a: number) => void;
  readonly __wbg_uniqueindiceslimitreachederror_free: (a: number) => void;
  readonly uniqueindiceslimitreachederror_getDocumentType: (a: number, b: number) => void;
  readonly uniqueindiceslimitreachederror_getIndexLimit: (a: number) => number;
  readonly uniqueindiceslimitreachederror_getCode: (a: number) => number;
  readonly uniqueindiceslimitreachederror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractcreatetransition_free: (a: number) => void;
  readonly datacontractcreatetransition_new: (a: number, b: number) => void;
  readonly datacontractcreatetransition_getDataContract: (a: number) => number;
  readonly datacontractcreatetransition_getIdentityNonce: (a: number) => number;
  readonly datacontractcreatetransition_getOwnerId: (a: number) => number;
  readonly datacontractcreatetransition_getType: (a: number) => number;
  readonly datacontractcreatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly datacontractcreatetransition_getUserFeeIncrease: (a: number) => number;
  readonly datacontractcreatetransition_getSignature: (a: number) => number;
  readonly datacontractcreatetransition_getSignaturePublicKeyId: (a: number) => number;
  readonly datacontractcreatetransition_toBuffer: (a: number, b: number) => void;
  readonly datacontractcreatetransition_fromBuffer: (a: number, b: number, c: number) => void;
  readonly datacontractcreatetransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly datacontractcreatetransition_isDataContractStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_isDocumentStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_isIdentityStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_isVotingStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_toObject: (a: number, b: number, c: number) => void;
  readonly datacontractcreatetransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly datacontractcreatetransition_verifySignature: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_masternodevotetransition_free: (a: number) => void;
  readonly masternodevotetransition_new: (a: number, b: number) => void;
  readonly masternodevotetransition_getOwnerId: (a: number) => number;
  readonly masternodevotetransition_getType: (a: number) => number;
  readonly masternodevotetransition_getProTxHash: (a: number) => number;
  readonly masternodevotetransition_setProTxHash: (a: number, b: number) => void;
  readonly masternodevotetransition_toObject: (a: number, b: number, c: number) => void;
  readonly masternodevotetransition_toBuffer: (a: number, b: number) => void;
  readonly masternodevotetransition_toJSON: (a: number, b: number) => void;
  readonly masternodevotetransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly masternodevotetransition_isDataContractStateTransition: (a: number) => number;
  readonly masternodevotetransition_isDocumentStateTransition: (a: number) => number;
  readonly masternodevotetransition_isIdentityStateTransition: (a: number) => number;
  readonly masternodevotetransition_isVotingStateTransition: (a: number) => number;
  readonly masternodevotetransition_getUserFeeIncrease: (a: number) => number;
  readonly masternodevotetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly masternodevotetransition_getIdentityContractNonce: (a: number) => number;
  readonly masternodevotetransition_getContestedDocumentResourceVotePoll: (a: number) => number;
  readonly masternodevotetransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly masternodevotetransition_getSignature: (a: number) => number;
  readonly masternodevotetransition_setSignature: (a: number, b: number, c: number) => void;
  readonly masternodevotetransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_invalididentityassetlocktransactionerror_free: (a: number) => void;
  readonly invalididentityassetlocktransactionerror_getErrorMessage: (a: number, b: number) => void;
  readonly invalididentityassetlocktransactionerror_getCode: (a: number) => number;
  readonly invalididentityassetlocktransactionerror_message: (a: number, b: number) => void;
  readonly __wbg_instantassetlockproof_free: (a: number) => void;
  readonly instantassetlockproof_new: (a: number, b: number) => void;
  readonly instantassetlockproof_getType: (a: number) => number;
  readonly instantassetlockproof_getOutputIndex: (a: number) => number;
  readonly instantassetlockproof_getOutPoint: (a: number, b: number) => void;
  readonly instantassetlockproof_getOutput: (a: number, b: number) => void;
  readonly instantassetlockproof_createIdentifier: (a: number, b: number) => void;
  readonly instantassetlockproof_getInstantLock: (a: number) => number;
  readonly instantassetlockproof_getTransaction: (a: number) => number;
  readonly instantassetlockproof_toObject: (a: number, b: number) => void;
  readonly instantassetlockproof_toJSON: (a: number, b: number) => void;
  readonly __wbg_publickeyisdisablederror_free: (a: number) => void;
  readonly publickeyisdisablederror_getPublicKeyId: (a: number) => number;
  readonly publickeyisdisablederror_getCode: (a: number) => number;
  readonly publickeyisdisablederror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentityerror_free: (a: number) => void;
  readonly invalididentityerror_getErrors: (a: number, b: number) => void;
  readonly invalididentityerror_getRawIdentity: (a: number) => number;
  readonly __wbg_incompatiblere2patternerror_free: (a: number) => void;
  readonly incompatiblere2patternerror_getPattern: (a: number, b: number) => void;
  readonly incompatiblere2patternerror_getPath: (a: number, b: number) => void;
  readonly incompatiblere2patternerror_getMessage: (a: number, b: number) => void;
  readonly incompatiblere2patternerror_getCode: (a: number) => number;
  readonly incompatiblere2patternerror_message: (a: number, b: number) => void;
  readonly __wbg_duplicateuniqueindexerror_free: (a: number) => void;
  readonly duplicateuniqueindexerror_getDocumentId: (a: number) => number;
  readonly duplicateuniqueindexerror_getDuplicatingProperties: (a: number) => number;
  readonly duplicateuniqueindexerror_getCode: (a: number) => number;
  readonly duplicateuniqueindexerror_message: (a: number, b: number) => void;
  readonly __wbg_jsonschemaerror_free: (a: number) => void;
  readonly jsonschemaerror_getKeyword: (a: number, b: number) => void;
  readonly jsonschemaerror_getInstancePath: (a: number, b: number) => void;
  readonly jsonschemaerror_getSchemaPath: (a: number, b: number) => void;
  readonly jsonschemaerror_getPropertyName: (a: number, b: number) => void;
  readonly jsonschemaerror_getParams: (a: number, b: number) => void;
  readonly jsonschemaerror_getCode: (a: number) => number;
  readonly jsonschemaerror_toString: (a: number, b: number) => void;
  readonly jsonschemaerror_message: (a: number, b: number) => void;
  readonly jsonschemaerror_keyword: (a: number, b: number) => void;
  readonly jsonschemaerror_instancePath: (a: number, b: number) => void;
  readonly jsonschemaerror_schemaPath: (a: number, b: number) => void;
  readonly jsonschemaerror_propertyName: (a: number, b: number) => void;
  readonly jsonschemaerror_params: (a: number, b: number) => void;
  readonly jsonschemaerror_code: (a: number) => number;
  readonly __wbg_datacontractfacade_free: (a: number) => void;
  readonly datacontractfacade_create: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly datacontractfacade_createFromObject: (a: number, b: number, c: number) => number;
  readonly datacontractfacade_createFromBuffer: (a: number, b: number, c: number, d: number) => number;
  readonly datacontractfacade_createDataContractCreateTransition: (a: number, b: number, c: number) => void;
  readonly datacontractfacade_createDataContractUpdateTransition: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_documentnotprovidederror_free: (a: number) => void;
  readonly __wbg_documentnotfounderror_free: (a: number) => void;
  readonly documentnotfounderror_getDocumentId: (a: number) => number;
  readonly documentnotfounderror_getCode: (a: number) => number;
  readonly documentnotfounderror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractimmutablepropertiesupdateerror_free: (a: number) => void;
  readonly datacontractimmutablepropertiesupdateerror_getOperation: (a: number, b: number) => void;
  readonly datacontractimmutablepropertiesupdateerror_getFieldPath: (a: number, b: number) => void;
  readonly datacontractimmutablepropertiesupdateerror_getCode: (a: number) => number;
  readonly datacontractimmutablepropertiesupdateerror_message: (a: number, b: number) => void;
  readonly __wbg_identityassetlocktransactionoutputnotfounderror_free: (a: number) => void;
  readonly identityassetlocktransactionoutputnotfounderror_getOutputIndex: (a: number) => number;
  readonly identityassetlocktransactionoutputnotfounderror_getCode: (a: number) => number;
  readonly identityassetlocktransactionoutputnotfounderror_message: (a: number, b: number) => void;
  readonly __wbg_revisionabsenterror_free: (a: number) => void;
  readonly revisionabsenterror_new: (a: number) => number;
  readonly revisionabsenterror_getDocument: (a: number) => number;
  readonly __wbg_invalidsignaturepublickeypurposeerror_free: (a: number) => void;
  readonly invalidsignaturepublickeypurposeerror_getPublicKeyPurpose: (a: number) => number;
  readonly invalidsignaturepublickeypurposeerror_getKeyPurposeRequirement: (a: number) => number;
  readonly invalidsignaturepublickeypurposeerror_getCode: (a: number) => number;
  readonly invalidsignaturepublickeypurposeerror_message: (a: number, b: number) => void;
  readonly __wbg_wrongpublickeypurposeerror_free: (a: number) => void;
  readonly wrongpublickeypurposeerror_getPublicKeyPurpose: (a: number) => number;
  readonly wrongpublickeypurposeerror_getKeyPurposeRequirement: (a: number) => number;
  readonly wrongpublickeypurposeerror_getCode: (a: number) => number;
  readonly wrongpublickeypurposeerror_message: (a: number, b: number) => void;
  readonly __wbg_duplicateindexerror_free: (a: number) => void;
  readonly duplicateindexerror_getDocumentType: (a: number, b: number) => void;
  readonly duplicateindexerror_getIndexName: (a: number, b: number) => void;
  readonly duplicateindexerror_getCode: (a: number) => number;
  readonly duplicateindexerror_message: (a: number, b: number) => void;
  readonly __wbg_identitycreditwithdrawaltransition_free: (a: number) => void;
  readonly identitycreditwithdrawaltransition_new: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getType: (a: number) => number;
  readonly identitycreditwithdrawaltransition_identityId: (a: number) => number;
  readonly identitycreditwithdrawaltransition_amount: (a: number) => number;
  readonly identitycreditwithdrawaltransition_getIdentityId: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setIdentityId: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getAmount: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setAmount: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getCoreFeePerByte: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setCoreFeePerByte: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getPooling: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setPooling: (a: number, b: number, c: number) => void;
  readonly identitycreditwithdrawaltransition_getOutputScript: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setOutputScript: (a: number, b: number, c: number) => void;
  readonly identitycreditwithdrawaltransition_getNonce: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setNonce: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getUserFeeIncrease: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_toObject: (a: number, b: number, c: number) => void;
  readonly identitycreditwithdrawaltransition_toBuffer: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_toJSON: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_isDataContractStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_isDocumentStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_isIdentityStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_isVotingStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identitycreditwithdrawaltransition_getSignature: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setSignature: (a: number, b: number, c: number) => void;
  readonly identitycreditwithdrawaltransition_getSignaturePublicKeyId: (a: number) => number;
  readonly identitycreditwithdrawaltransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_documentalreadypresenterror_free: (a: number) => void;
  readonly documentalreadypresenterror_getDocumentId: (a: number) => number;
  readonly documentalreadypresenterror_getCode: (a: number) => number;
  readonly documentalreadypresenterror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_free: (a: number) => void;
  readonly invalididentitycreditwithdrawaltransitioncorefeeerror_getCoreFee: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitioncorefeeerror_getCode: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitioncorefeeerror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractisreadonlyerror_free: (a: number) => void;
  readonly datacontractisreadonlyerror_new: (a: number) => number;
  readonly datacontractisreadonlyerror_getDataContractId: (a: number) => number;
  readonly datacontractisreadonlyerror_getCode: (a: number) => number;
  readonly datacontractisreadonlyerror_message: (a: number, b: number) => void;
  readonly __wbg_documentcreatetransition_free: (a: number) => void;
  readonly documentcreatetransition_getRevision: (a: number) => number;
  readonly documentcreatetransition_INITIAL_REVISION: () => number;
  readonly documentcreatetransition_getEntropy: (a: number, b: number) => void;
  readonly documentcreatetransition_getIdentityContractNonce: (a: number) => number;
  readonly documentcreatetransition_setIdentityContractNonce: (a: number, b: number) => void;
  readonly documentcreatetransition_getPrefundedVotingBalance: (a: number, b: number) => void;
  readonly __wbg_invalidinstantassetlockprooferror_free: (a: number) => void;
  readonly invalidinstantassetlockprooferror_getCode: (a: number) => number;
  readonly invalidinstantassetlockprooferror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitycredittransferamounterror_free: (a: number) => void;
  readonly invalididentitycredittransferamounterror_getAmount: (a: number) => number;
  readonly invalididentitycredittransferamounterror_getMinAmount: (a: number) => number;
  readonly invalididentitycredittransferamounterror_getCode: (a: number) => number;
  readonly invalididentitycredittransferamounterror_message: (a: number, b: number) => void;
  readonly __wbg_missingpublickeyerror_free: (a: number) => void;
  readonly missingpublickeyerror_getPublicKeyId: (a: number) => number;
  readonly missingpublickeyerror_getCode: (a: number) => number;
  readonly missingpublickeyerror_message: (a: number, b: number) => void;
  readonly __wbg_missingmasterpublickeyerror_free: (a: number) => void;
  readonly missingmasterpublickeyerror_getCode: (a: number) => number;
  readonly missingmasterpublickeyerror_message: (a: number, b: number) => void;
  readonly __wbg_invalidstatetransitionerror_free: (a: number) => void;
  readonly invalidstatetransitionerror_new_wasm: (a: number, b: number, c: number, d: number) => void;
  readonly invalidstatetransitionerror_getErrors: (a: number, b: number) => void;
  readonly invalidstatetransitionerror_getRawStateTransition: (a: number) => number;
  readonly __wbg_statetransitionfactory_free: (a: number) => void;
  readonly statetransitionfactory_createFromBuffer: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_invalidindexedpropertyconstrainterror_free: (a: number) => void;
  readonly invalidindexedpropertyconstrainterror_getDocumentType: (a: number, b: number) => void;
  readonly invalidindexedpropertyconstrainterror_getIndexName: (a: number, b: number) => void;
  readonly invalidindexedpropertyconstrainterror_getPropertyName: (a: number, b: number) => void;
  readonly invalidindexedpropertyconstrainterror_getConstraintName: (a: number, b: number) => void;
  readonly invalidindexedpropertyconstrainterror_getReason: (a: number, b: number) => void;
  readonly invalidindexedpropertyconstrainterror_getCode: (a: number) => number;
  readonly invalidindexedpropertyconstrainterror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractnotpresenterror_free: (a: number) => void;
  readonly datacontractnotpresenterror_getDataContractId: (a: number) => number;
  readonly datacontractnotpresenterror_getCode: (a: number) => number;
  readonly datacontractnotpresenterror_message: (a: number, b: number) => void;
  readonly __wbg_identitypublickeyisreadonlyerror_free: (a: number) => void;
  readonly identitypublickeyisreadonlyerror_getKeyId: (a: number) => number;
  readonly identitypublickeyisreadonlyerror_getPublicKeyIndex: (a: number) => number;
  readonly identitypublickeyisreadonlyerror_getCode: (a: number) => number;
  readonly identitypublickeyisreadonlyerror_message: (a: number, b: number) => void;
  readonly __wbg_identitynotfounderror_free: (a: number) => void;
  readonly identitynotfounderror_new: (a: number) => number;
  readonly identitynotfounderror_getIdentityId: (a: number) => number;
  readonly identitynotfounderror_getCode: (a: number) => number;
  readonly identitynotfounderror_message: (a: number, b: number) => void;
  readonly identitynotfounderror_serialize: (a: number, b: number) => void;
  readonly __wbg_invalidactionnameerror_free: (a: number) => void;
  readonly invalidactionnameerror_new: (a: number, b: number) => number;
  readonly invalidactionnameerror_getActions: (a: number, b: number) => void;
  readonly __wbg_identitypublickey_free: (a: number) => void;
  readonly identitypublickey_new: (a: number, b: number) => void;
  readonly identitypublickey_getId: (a: number) => number;
  readonly identitypublickey_setId: (a: number, b: number) => void;
  readonly identitypublickey_getType: (a: number) => number;
  readonly identitypublickey_setType: (a: number, b: number, c: number) => void;
  readonly identitypublickey_setData: (a: number, b: number, c: number, d: number) => void;
  readonly identitypublickey_getData: (a: number) => number;
  readonly identitypublickey_setPurpose: (a: number, b: number, c: number) => void;
  readonly identitypublickey_getPurpose: (a: number) => number;
  readonly identitypublickey_setSecurityLevel: (a: number, b: number, c: number) => void;
  readonly identitypublickey_getSecurityLevel: (a: number) => number;
  readonly identitypublickey_setReadOnly: (a: number, b: number) => void;
  readonly identitypublickey_isReadOnly: (a: number) => number;
  readonly identitypublickey_setDisabledAt: (a: number, b: number) => void;
  readonly identitypublickey_getDisabledAt: (a: number) => number;
  readonly identitypublickey_hash: (a: number, b: number) => void;
  readonly identitypublickey_isMaster: (a: number) => number;
  readonly identitypublickey_toJSON: (a: number, b: number) => void;
  readonly identitypublickey_toObject: (a: number, b: number) => void;
  readonly identitypublickey_toBuffer: (a: number, b: number) => void;
  readonly identitypublickey_fromBuffer: (a: number, b: number, c: number) => void;
  readonly __wbg_documenttimestampsareequalerror_free: (a: number) => void;
  readonly documenttimestampsareequalerror_getDocumentId: (a: number) => number;
  readonly documenttimestampsareequalerror_getCode: (a: number) => number;
  readonly documenttimestampsareequalerror_message: (a: number, b: number) => void;
  readonly __wbg_mismatchowneridserror_free: (a: number) => void;
  readonly mismatchowneridserror_new: (a: number, b: number) => number;
  readonly mismatchowneridserror_getDocuments: (a: number, b: number) => void;
  readonly deserializeConsensusError: (a: number, b: number, c: number) => void;
  readonly __wbg_basicblserror_free: (a: number) => void;
  readonly basicblserror_getCode: (a: number) => number;
  readonly basicblserror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitypublickeytypeerror_free: (a: number) => void;
  readonly invalididentitypublickeytypeerror_new: (a: number, b: number) => void;
  readonly invalididentitypublickeytypeerror_getPublicKeyType: (a: number) => number;
  readonly invalididentitypublickeytypeerror_getCode: (a: number) => number;
  readonly invalididentitypublickeytypeerror_message: (a: number, b: number) => void;
  readonly __wbg_dashplatformprotocol_free: (a: number) => void;
  readonly dashplatformprotocol_new: (a: number, b: number, c: number, d: number) => void;
  readonly dashplatformprotocol_data_contract: (a: number) => number;
  readonly dashplatformprotocol_document: (a: number) => number;
  readonly dashplatformprotocol_identity: (a: number) => number;
  readonly dashplatformprotocol_state_transition: (a: number) => number;
  readonly dashplatformprotocol_protocol_version: (a: number) => number;
  readonly __wbg_systempropertyindexalreadypresenterror_free: (a: number) => void;
  readonly systempropertyindexalreadypresenterror_getDocumentType: (a: number, b: number) => void;
  readonly systempropertyindexalreadypresenterror_getIndexName: (a: number, b: number) => void;
  readonly systempropertyindexalreadypresenterror_getPropertyName: (a: number, b: number) => void;
  readonly systempropertyindexalreadypresenterror_getCode: (a: number) => number;
  readonly systempropertyindexalreadypresenterror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddatacontractversionerror_free: (a: number) => void;
  readonly invaliddatacontractversionerror_getExpectedVersion: (a: number) => number;
  readonly invaliddatacontractversionerror_getVersion: (a: number) => number;
  readonly invaliddatacontractversionerror_getCode: (a: number) => number;
  readonly invaliddatacontractversionerror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumenterror_free: (a: number) => void;
  readonly invaliddocumenterror_new: (a: number, b: number, c: number) => number;
  readonly invaliddocumenterror_getErrors: (a: number, b: number) => void;
  readonly invaliddocumenterror_getRawDocument: (a: number) => number;
  readonly invaliddocumenterror_getMessage: (a: number, b: number) => void;
  readonly __wbg_identityupdatetransition_free: (a: number) => void;
  readonly identityupdatetransition_new: (a: number, b: number) => void;
  readonly identityupdatetransition_setPublicKeysToAdd: (a: number, b: number, c: number, d: number) => void;
  readonly identityupdatetransition_getPublicKeysToAdd: (a: number, b: number) => void;
  readonly identityupdatetransition_addPublicKeys: (a: number, b: number) => void;
  readonly identityupdatetransition_getPublicKeyIdsToDisable: (a: number, b: number) => void;
  readonly identityupdatetransition_setPublicKeyIdsToDisable: (a: number, b: number, c: number) => void;
  readonly identityupdatetransition_getType: (a: number) => number;
  readonly identityupdatetransition_identityId: (a: number) => number;
  readonly identityupdatetransition_getIdentityId: (a: number) => number;
  readonly identityupdatetransition_setIdentityId: (a: number, b: number) => void;
  readonly identityupdatetransition_getOwnerId: (a: number) => number;
  readonly identityupdatetransition_getUserFeeIncrease: (a: number) => number;
  readonly identityupdatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identityupdatetransition_getIdentityContractNonce: (a: number) => number;
  readonly identityupdatetransition_setIdentityContractNonce: (a: number, b: number) => void;
  readonly identityupdatetransition_toObject: (a: number, b: number, c: number) => void;
  readonly identityupdatetransition_toBuffer: (a: number, b: number) => void;
  readonly identityupdatetransition_toJSON: (a: number, b: number) => void;
  readonly identityupdatetransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly identityupdatetransition_isDataContractStateTransition: (a: number) => number;
  readonly identityupdatetransition_isDocumentStateTransition: (a: number) => number;
  readonly identityupdatetransition_isIdentityStateTransition: (a: number) => number;
  readonly identityupdatetransition_isVotingStateTransition: (a: number) => number;
  readonly identityupdatetransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identityupdatetransition_setSignaturePublicKeyId: (a: number, b: number, c: number) => void;
  readonly identityupdatetransition_getSignature: (a: number) => number;
  readonly identityupdatetransition_getSignaturePublicKeyId: (a: number) => number;
  readonly identityupdatetransition_setSignature: (a: number, b: number, c: number) => void;
  readonly identityupdatetransition_getRevision: (a: number) => number;
  readonly identityupdatetransition_setRevision: (a: number, b: number) => void;
  readonly identityupdatetransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly identityupdatetransition_verifySignature: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_invalidassetlockprooftransactionheighterror_free: (a: number) => void;
  readonly invalidassetlockprooftransactionheighterror_getProofCoreChainLockedHeight: (a: number) => number;
  readonly invalidassetlockprooftransactionheighterror_getTransactionHeight: (a: number, b: number) => void;
  readonly invalidassetlockprooftransactionheighterror_getCode: (a: number) => number;
  readonly invalidassetlockprooftransactionheighterror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitypublickeysecuritylevelerror_free: (a: number) => void;
  readonly invalididentitypublickeysecuritylevelerror_getPublicKeyId: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_getPublicKeyPurpose: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_getPublicKeySecurityLevel: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_getCode: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumentactionerror_free: (a: number) => void;
  readonly __wbg_documenttimestampsmismatcherror_free: (a: number) => void;
  readonly documenttimestampsmismatcherror_getDocumentId: (a: number) => number;
  readonly documenttimestampsmismatcherror_getCode: (a: number) => number;
  readonly documenttimestampsmismatcherror_message: (a: number, b: number) => void;
  readonly __wbg_chainassetlockproof_free: (a: number) => void;
  readonly chainassetlockproof_new: (a: number, b: number) => void;
  readonly chainassetlockproof_getType: (a: number) => number;
  readonly chainassetlockproof_getCoreChainLockedHeight: (a: number) => number;
  readonly chainassetlockproof_setCoreChainLockedHeight: (a: number, b: number) => void;
  readonly chainassetlockproof_getOutPoint: (a: number, b: number) => void;
  readonly chainassetlockproof_setOutPoint: (a: number, b: number, c: number, d: number) => void;
  readonly chainassetlockproof_toJSON: (a: number, b: number) => void;
  readonly chainassetlockproof_toObject: (a: number, b: number) => void;
  readonly chainassetlockproof_createIdentifier: (a: number) => number;
  readonly __wbg_missingdocumenttransitionactionerror_free: (a: number) => void;
  readonly missingdocumenttransitionactionerror_getCode: (a: number) => number;
  readonly missingdocumenttransitionactionerror_message: (a: number, b: number) => void;
  readonly __wbg_unknownassetlockprooftypeerror_free: (a: number) => void;
  readonly unknownassetlockprooftypeerror_getType: (a: number) => number;
  readonly __wbg_datacontractalreadypresenterror_free: (a: number) => void;
  readonly datacontractalreadypresenterror_new: (a: number) => number;
  readonly datacontractalreadypresenterror_getDataContractId: (a: number) => number;
  readonly datacontractalreadypresenterror_getCode: (a: number) => number;
  readonly datacontractalreadypresenterror_message: (a: number, b: number) => void;
  readonly datacontractalreadypresenterror_serialize: (a: number, b: number) => void;
  readonly __wbg_valueerror_free: (a: number) => void;
  readonly valueerror_getMessage: (a: number, b: number) => void;
  readonly valueerror_getCode: (a: number) => number;
  readonly valueerror_message: (a: number, b: number) => void;
  readonly __wbg_duplicatedidentitypublickeyerror_free: (a: number) => void;
  readonly duplicatedidentitypublickeyerror_getDuplicatedPublicKeysIds: (a: number) => number;
  readonly duplicatedidentitypublickeyerror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeyerror_message: (a: number, b: number) => void;
  readonly __wbg_invalidactionerror_free: (a: number) => void;
  readonly invalidactionterror_new: (a: number) => number;
  readonly __wbg_jsonschemacompilationerror_free: (a: number) => void;
  readonly jsonschemacompilationerror_getError: (a: number, b: number) => void;
  readonly jsonschemacompilationerror_getCode: (a: number) => number;
  readonly jsonschemacompilationerror_message: (a: number, b: number) => void;
  readonly __wbg_statetransitionmaxsizeexceedederror_free: (a: number) => void;
  readonly statetransitionmaxsizeexceedederror_getActualSizeBytes: (a: number) => number;
  readonly statetransitionmaxsizeexceedederror_getMaxSizeBytes: (a: number) => number;
  readonly statetransitionmaxsizeexceedederror_getCode: (a: number) => number;
  readonly statetransitionmaxsizeexceedederror_message: (a: number, b: number) => void;
  readonly __wbg_identityassetlocktransactionreplayerror_free: (a: number) => void;
  readonly identityassetlocktransactionreplayerror_getTransactionId: (a: number) => number;
  readonly identityassetlocktransactionreplayerror_getCode: (a: number) => number;
  readonly identityassetlocktransactionreplayerror_getStateTransitionId: (a: number) => number;
  readonly identityassetlocktransactionreplayerror_getOutputIndex: (a: number) => number;
  readonly __wbg_datacontractupdatetransition_free: (a: number) => void;
  readonly datacontractupdatetransition_new: (a: number, b: number) => void;
  readonly datacontractupdatetransition_getDataContract: (a: number) => number;
  readonly datacontractupdatetransition_getOwnerId: (a: number) => number;
  readonly datacontractupdatetransition_getIdentityContractNonce: (a: number) => number;
  readonly datacontractupdatetransition_getType: (a: number) => number;
  readonly datacontractupdatetransition_getUserFeeIncrease: (a: number) => number;
  readonly datacontractupdatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly datacontractupdatetransition_getSignature: (a: number) => number;
  readonly datacontractupdatetransition_getSignaturePublicKeyId: (a: number) => number;
  readonly datacontractupdatetransition_toBuffer: (a: number, b: number) => void;
  readonly datacontractupdatetransition_fromBuffer: (a: number, b: number, c: number) => void;
  readonly datacontractupdatetransition_getModifiedDataIds: (a: number, b: number) => void;
  readonly datacontractupdatetransition_isDataContractStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_isDocumentStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_isIdentityStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_isVotingStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_toObject: (a: number, b: number, c: number) => void;
  readonly datacontractupdatetransition_sign: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly datacontractupdatetransition_verifySignature: (a: number, b: number, c: number, d: number) => void;
  readonly __wbg_invaliddocumenttypeerror_free: (a: number) => void;
  readonly invaliddocumenttypeerror_getType: (a: number, b: number) => void;
  readonly invaliddocumenttypeerror_getDataContractId: (a: number) => number;
  readonly invaliddocumenttypeerror_getCode: (a: number) => number;
  readonly invaliddocumenttypeerror_message: (a: number, b: number) => void;
  readonly __wbg_missingstatetransitiontypeerror_free: (a: number) => void;
  readonly missingstatetransitiontypeerror_new: () => number;
  readonly missingstatetransitiontypeerror_getCode: (a: number) => number;
  readonly missingstatetransitiontypeerror_message: (a: number, b: number) => void;
  readonly __wbg_identityalreadyexistserror_free: (a: number) => void;
  readonly identityalreadyexistserror_getIdentityId: (a: number) => number;
  readonly identityalreadyexistserror_getCode: (a: number) => number;
  readonly identityalreadyexistserror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractinvalidindexdefinitionupdateerror_free: (a: number) => void;
  readonly datacontractinvalidindexdefinitionupdateerror_getDocumentType: (a: number, b: number) => void;
  readonly datacontractinvalidindexdefinitionupdateerror_getIndexName: (a: number, b: number) => void;
  readonly datacontractinvalidindexdefinitionupdateerror_getCode: (a: number) => number;
  readonly datacontractinvalidindexdefinitionupdateerror_message: (a: number, b: number) => void;
  readonly __wbg_missingdocumenttransitiontypeerror_free: (a: number) => void;
  readonly missingdocumenttransitiontypeerror_getCode: (a: number) => number;
  readonly missingdocumenttransitiontypeerror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitypublickeydataerror_free: (a: number) => void;
  readonly invalididentitypublickeydataerror_getPublicKeyId: (a: number) => number;
  readonly invalididentitypublickeydataerror_getValidationError: (a: number, b: number) => void;
  readonly invalididentitypublickeydataerror_getCode: (a: number) => number;
  readonly invalididentitypublickeydataerror_message: (a: number, b: number) => void;
  readonly __wbg_publickeysecuritylevelnotmeterror_free: (a: number) => void;
  readonly publickeysecuritylevelnotmeterror_getPublicKeySecurityLevel: (a: number) => number;
  readonly publickeysecuritylevelnotmeterror_getKeySecurityLevelRequirement: (a: number) => number;
  readonly publickeysecuritylevelnotmeterror_getCode: (a: number) => number;
  readonly publickeysecuritylevelnotmeterror_message: (a: number, b: number) => void;
  readonly __wbg_documentowneridmismatcherror_free: (a: number) => void;
  readonly documentowneridmismatcherror_getDocumentId: (a: number) => number;
  readonly documentowneridmismatcherror_getDocumentOwnerId: (a: number) => number;
  readonly documentowneridmismatcherror_getExistingDocumentOwnerId: (a: number) => number;
  readonly documentowneridmismatcherror_getCode: (a: number) => number;
  readonly documentowneridmismatcherror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitykeysignatureerror_free: (a: number) => void;
  readonly invalididentitykeysignatureerror_getPublicKeyId: (a: number) => number;
  readonly invalididentitykeysignatureerror_getCode: (a: number) => number;
  readonly invalididentitykeysignatureerror_message: (a: number, b: number) => void;
  readonly __wbg_invalidstatetransitiontypeerror_free: (a: number) => void;
  readonly invalidstatetransitiontypeerror_new: (a: number) => number;
  readonly invalidstatetransitiontypeerror_getType: (a: number) => number;
  readonly invalidstatetransitiontypeerror_getCode: (a: number) => number;
  readonly invalidstatetransitiontypeerror_message: (a: number, b: number) => void;
  readonly __wbg_nodocumentssuppliederror_free: (a: number) => void;
  readonly nodocumentssuppliederror_new: () => number;
  readonly __wbg_missingidentitypublickeyidserror_free: (a: number) => void;
  readonly missingidentitypublickeyidserror_getDuplicatedIds: (a: number) => number;
  readonly __wbg_datacontract_free: (a: number) => void;
  readonly datacontract_new: (a: number, b: number, c: number) => void;
  readonly datacontract_getId: (a: number) => number;
  readonly datacontract_setId: (a: number, b: number, c: number) => void;
  readonly datacontract_getOwnerId: (a: number) => number;
  readonly datacontract_getVersion: (a: number) => number;
  readonly datacontract_setVersion: (a: number, b: number) => void;
  readonly datacontract_incrementVersion: (a: number) => void;
  readonly datacontract_getBinaryProperties: (a: number, b: number, c: number, d: number) => void;
  readonly datacontract_setDocumentSchemas: (a: number, b: number, c: number, d: number) => void;
  readonly datacontract_setDocumentSchema: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly datacontract_getDocumentSchema: (a: number, b: number, c: number, d: number) => void;
  readonly datacontract_getDocumentSchemas: (a: number) => number;
  readonly datacontract_getSchemaDefs: (a: number) => number;
  readonly datacontract_setSchemaDefs: (a: number, b: number, c: number, d: number) => void;
  readonly datacontract_hasDocumentType: (a: number, b: number, c: number) => number;
  readonly datacontract_setIdentityNonce: (a: number, b: number, c: number) => void;
  readonly datacontract_getIdentityNonce: (a: number) => number;
  readonly datacontract_getMetadata: (a: number) => number;
  readonly datacontract_setMetadata: (a: number, b: number, c: number) => void;
  readonly datacontract_toObject: (a: number, b: number) => void;
  readonly datacontract_getConfig: (a: number, b: number) => void;
  readonly datacontract_setConfig: (a: number, b: number, c: number) => void;
  readonly datacontract_toJSON: (a: number, b: number) => void;
  readonly datacontract_toBuffer: (a: number, b: number) => void;
  readonly datacontract_hash: (a: number, b: number) => void;
  readonly datacontract_clone: (a: number) => number;
  readonly generateDocumentId: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly __wbg_missingdocumenttypeerror_free: (a: number) => void;
  readonly missingdocumenttypeerror_getCode: (a: number) => number;
  readonly missingdocumenttypeerror_message: (a: number, b: number) => void;
  readonly __wbg_tryingtoreplaceimmutabledocumenterror_free: (a: number) => void;
  readonly tryingtoreplaceimmutabledocumenterror_new: (a: number) => number;
  readonly __wbg_incompatibledocumenttypeschemaerror_free: (a: number) => void;
  readonly incompatibledocumenttypeschemaerror_getOperation: (a: number, b: number) => void;
  readonly incompatibledocumenttypeschemaerror_getPropertyPath: (a: number, b: number) => void;
  readonly incompatibledocumenttypeschemaerror_getCode: (a: number) => number;
  readonly incompatibledocumenttypeschemaerror_message: (a: number, b: number) => void;
  readonly __wbg_extendeddocument_free: (a: number) => void;
  readonly extendeddocument_new: (a: number, b: number, c: number) => void;
  readonly extendeddocument_getFeatureVersion: (a: number) => number;
  readonly extendeddocument_getId: (a: number) => number;
  readonly extendeddocument_setId: (a: number, b: number) => void;
  readonly extendeddocument_getType: (a: number, b: number) => void;
  readonly extendeddocument_setType: (a: number, b: number, c: number) => void;
  readonly extendeddocument_getDataContractId: (a: number) => number;
  readonly extendeddocument_getDataContract: (a: number) => number;
  readonly extendeddocument_setDataContractId: (a: number, b: number, c: number) => void;
  readonly extendeddocument_getDocument: (a: number) => number;
  readonly extendeddocument_setOwnerId: (a: number, b: number) => void;
  readonly extendeddocument_getOwnerId: (a: number) => number;
  readonly extendeddocument_setRevision: (a: number, b: number, c: number) => void;
  readonly extendeddocument_getRevision: (a: number, b: number) => void;
  readonly extendeddocument_setEntropy: (a: number, b: number, c: number, d: number) => void;
  readonly extendeddocument_getEntropy: (a: number) => number;
  readonly extendeddocument_setData: (a: number, b: number, c: number) => void;
  readonly extendeddocument_getData: (a: number, b: number) => void;
  readonly extendeddocument_set: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly extendeddocument_get: (a: number, b: number, c: number) => number;
  readonly extendeddocument_setCreatedAt: (a: number, b: number) => void;
  readonly extendeddocument_setUpdatedAt: (a: number, b: number) => void;
  readonly extendeddocument_getCreatedAt: (a: number) => number;
  readonly extendeddocument_getUpdatedAt: (a: number) => number;
  readonly extendeddocument_getMetadata: (a: number) => number;
  readonly extendeddocument_setMetadata: (a: number, b: number, c: number) => void;
  readonly extendeddocument_toObject: (a: number, b: number, c: number) => void;
  readonly extendeddocument_toJSON: (a: number, b: number) => void;
  readonly extendeddocument_toBuffer: (a: number, b: number) => void;
  readonly extendeddocument_hash: (a: number, b: number) => void;
  readonly extendeddocument_clone: (a: number) => number;
  readonly extendeddocument_validate: (a: number, b: number, c: number) => void;
  readonly __wbg_platformvalueerror_free: (a: number) => void;
  readonly platformvalueerror_getMessage: (a: number, b: number) => void;
  readonly platformvalueerror_toString: (a: number, b: number) => void;
  readonly platformvalueerror_valueOf: (a: number, b: number) => void;
  readonly __wbg_serializedobjectparsingerror_free: (a: number) => void;
  readonly serializedobjectparsingerror_getParsingError: (a: number, b: number) => void;
  readonly serializedobjectparsingerror_getCode: (a: number) => number;
  readonly serializedobjectparsingerror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractmaxdepthexceederror_free: (a: number) => void;
  readonly datacontractmaxdeptherror_getMaxDepth: (a: number) => number;
  readonly datacontractmaxdeptherror_getCode: (a: number) => number;
  readonly datacontractmaxdeptherror_message: (a: number, b: number) => void;
  readonly __wbg_invalidindexpropertytypeerror_free: (a: number) => void;
  readonly invalidindexpropertytypeerror_getDocumentType: (a: number, b: number) => void;
  readonly invalidindexpropertytypeerror_getIndexName: (a: number, b: number) => void;
  readonly invalidindexpropertytypeerror_getPropertyName: (a: number, b: number) => void;
  readonly invalidindexpropertytypeerror_getPropertyType: (a: number, b: number) => void;
  readonly invalidindexpropertytypeerror_getCode: (a: number) => number;
  readonly invalidindexpropertytypeerror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentitynonceerror_free: (a: number) => void;
  readonly invalididentitynonceerror_getIdentityId: (a: number) => number;
  readonly invalididentitynonceerror_getCurrentIdentityContractNonce: (a: number, b: number) => void;
  readonly invalididentitynonceerror_getSettingIdentityContractNonce: (a: number) => number;
  readonly invalididentitynonceerror_getError: (a: number) => number;
  readonly invalididentitynonceerror_getCode: (a: number) => number;
  readonly invalididentitynonceerror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractemptyschemaerror_free: (a: number) => void;
  readonly datacontractemptyschemaerror_getDataContractId: (a: number) => number;
  readonly datacontractemptyschemaerror_getCode: (a: number) => number;
  readonly datacontractemptyschemaerror_message: (a: number, b: number) => void;
  readonly __wbg_duplicatedocumenttransitionswithindiceserror_free: (a: number) => void;
  readonly duplicatedocumenttransitionswithindiceserror_getDocumentTransitionReferences: (a: number) => number;
  readonly duplicatedocumenttransitionswithindiceserror_getCode: (a: number) => number;
  readonly duplicatedocumenttransitionswithindiceserror_message: (a: number, b: number) => void;
  readonly __wbg_maxidentitypublickeylimitreachederror_free: (a: number) => void;
  readonly maxidentitypublickeylimitreachederror_getMaxItems: (a: number) => number;
  readonly maxidentitypublickeylimitreachederror_getCode: (a: number) => number;
  readonly maxidentitypublickeylimitreachederror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumenttypenameerror_free: (a: number) => void;
  readonly invaliddocumenttypenameerrorwasm_getName: (a: number, b: number) => void;
  readonly invaliddocumenttypenameerrorwasm_getCode: (a: number) => number;
  readonly invaliddocumenttypenameerrorwasm_message: (a: number, b: number) => void;
  readonly __wbg_balanceisnotenougherror_free: (a: number) => void;
  readonly balanceisnotenougherror_new: (a: number, b: number) => number;
  readonly balanceisnotenougherror_getBalance: (a: number) => number;
  readonly balanceisnotenougherror_getFee: (a: number) => number;
  readonly balanceisnotenougherror_getCode: (a: number) => number;
  readonly balanceisnotenougherror_message: (a: number, b: number) => void;
  readonly balanceisnotenougherror_serialize: (a: number, b: number) => void;
  readonly __wbg_duplicatedocumenttransitionswithidserror_free: (a: number) => void;
  readonly duplicatedocumenttransitionswithidserror_getDocumentTransitionReferences: (a: number) => number;
  readonly duplicatedocumenttransitionswithidserror_getCode: (a: number) => number;
  readonly duplicatedocumenttransitionswithidserror_message: (a: number, b: number) => void;
  readonly __wbg_duplicateindexnameerror_free: (a: number) => void;
  readonly duplicateindexnameerror_getDocumentType: (a: number, b: number) => void;
  readonly duplicateindexnameerror_getDuplicateIndexName: (a: number, b: number) => void;
  readonly duplicateindexnameerror_getCode: (a: number) => number;
  readonly duplicateindexnameerror_message: (a: number, b: number) => void;
  readonly __wbg_identityassetlockprooflockedtransactionmismatcherror_free: (a: number) => void;
  readonly identityassetlockprooflockedtransactionmismatcherror_getInstantLockTransactionId: (a: number) => number;
  readonly identityassetlockprooflockedtransactionmismatcherror_getAssetLockTransactionId: (a: number) => number;
  readonly identityassetlockprooflockedtransactionmismatcherror_getCode: (a: number) => number;
  readonly identityassetlockprooflockedtransactionmismatcherror_message: (a: number, b: number) => void;
  readonly __wbg_invalidassetlockproofcorechainheighterror_free: (a: number) => void;
  readonly invalidassetlockproofcorechainheighterror_getProofCoreChainLockedHeight: (a: number) => number;
  readonly invalidassetlockproofcorechainheighterror_getCurrentCoreChainLockedHeight: (a: number) => number;
  readonly invalidassetlockproofcorechainheighterror_getCode: (a: number) => number;
  readonly invalidassetlockproofcorechainheighterror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddocumenttransitionactionerror_free: (a: number) => void;
  readonly invaliddocumenttransitionactionerror_getAction: (a: number, b: number) => void;
  readonly invaliddocumenttransitionactionerror_getCode: (a: number) => number;
  readonly invaliddocumenttransitionactionerror_message: (a: number, b: number) => void;
  readonly __wbg_identityassetlocktransactionoutpointalreadyexistserror_free: (a: number) => void;
  readonly identityassetlocktransactionoutpointalreadyexistserror_getOutputIndex: (a: number) => number;
  readonly identityassetlocktransactionoutpointalreadyexistserror_getTransactionId: (a: number) => number;
  readonly identityassetlocktransactionoutpointalreadyexistserror_getCode: (a: number) => number;
  readonly identityassetlocktransactionoutpointalreadyexistserror_message: (a: number, b: number) => void;
  readonly __wbg_invalididentityassetlocktransactionoutputerror_free: (a: number) => void;
  readonly invalididentityassetlocktransactionoutputerror_getOutputIndex: (a: number) => number;
  readonly invalididentityassetlocktransactionoutputerror_getCode: (a: number) => number;
  readonly invalididentityassetlocktransactionoutputerror_message: (a: number, b: number) => void;
  readonly __wbg_identitypublickeywithwitness_free: (a: number) => void;
  readonly identitypublickeywithwitness_new: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_getId: (a: number) => number;
  readonly identitypublickeywithwitness_setId: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_getType: (a: number) => number;
  readonly identitypublickeywithwitness_setType: (a: number, b: number, c: number) => void;
  readonly identitypublickeywithwitness_setData: (a: number, b: number, c: number, d: number) => void;
  readonly identitypublickeywithwitness_getData: (a: number) => number;
  readonly identitypublickeywithwitness_setPurpose: (a: number, b: number, c: number) => void;
  readonly identitypublickeywithwitness_getPurpose: (a: number) => number;
  readonly identitypublickeywithwitness_setSecurityLevel: (a: number, b: number, c: number) => void;
  readonly identitypublickeywithwitness_setContractBounds: (a: number, b: number, c: number, d: number) => void;
  readonly identitypublickeywithwitness_getSecurityLevel: (a: number) => number;
  readonly identitypublickeywithwitness_setReadOnly: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_isReadOnly: (a: number) => number;
  readonly identitypublickeywithwitness_setSignature: (a: number, b: number, c: number) => void;
  readonly identitypublickeywithwitness_getSignature: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_hash: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_toJSON: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_toObject: (a: number, b: number, c: number) => void;
  readonly __wbg_incompatibleprotocolversionerror_free: (a: number) => void;
  readonly incompatibleprotocolversionerror_getParsedProtocolVersion: (a: number) => number;
  readonly incompatibleprotocolversionerror_getMinimalProtocolVersion: (a: number) => number;
  readonly incompatibleprotocolversionerror_getCode: (a: number) => number;
  readonly incompatibleprotocolversionerror_message: (a: number, b: number) => void;
  readonly __wbg_datacontractconfigupdateerror_free: (a: number) => void;
  readonly datacontractconfigupdateerror_new: (a: number, b: number, c: number) => number;
  readonly datacontractconfigupdateerror_getDataContractId: (a: number) => number;
  readonly datacontractconfigupdateerror_getCode: (a: number) => number;
  readonly datacontractconfigupdateerror_message: (a: number, b: number) => void;
  readonly __wbg_identityassetlocktransactionisnotfounderror_free: (a: number) => void;
  readonly identityassetlocktransactionisnotfounderror_getTransactionId: (a: number) => number;
  readonly identityassetlocktransactionisnotfounderror_getCode: (a: number) => number;
  readonly identityassetlocktransactionisnotfounderror_message: (a: number, b: number) => void;
  readonly __wbg_invaliddatacontracterror_free: (a: number) => void;
  readonly invaliddatacontracterror_getErrors: (a: number, b: number) => void;
  readonly invaliddatacontracterror_getRawDataContract: (a: number) => number;
  readonly invaliddatacontracterror_getMessage: (a: number, b: number) => void;
  readonly __wbg_duplicatedidentitypublickeyidstateerror_free: (a: number) => void;
  readonly duplicatedidentitypublickeyidstateerror_getDuplicatedIds: (a: number) => number;
  readonly duplicatedidentitypublickeyidstateerror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeyidstateerror_message: (a: number, b: number) => void;
  readonly __wbg_validationresult_free: (a: number) => void;
  readonly validationresult_new: (a: number, b: number, c: number) => void;
  readonly validationresult_errorsText: (a: number, b: number) => void;
  readonly validationresult_isValid: (a: number) => number;
  readonly validationresult_getErrors: (a: number, b: number) => void;
  readonly validationresult_errors: (a: number, b: number) => void;
  readonly validationresult_getData: (a: number) => number;
  readonly validationresult_getFirstError: (a: number) => number;
  readonly __wbg_duplicatedidentitypublickeyiderror_free: (a: number) => void;
  readonly duplicatedidentitypublickeyiderror_getDuplicatedIds: (a: number) => number;
  readonly duplicatedidentitypublickeyiderror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeyiderror_message: (a: number, b: number) => void;
  readonly __wbg_incompatibledatacontractschemaerror_free: (a: number) => void;
  readonly incompatibledatacontractschemaerror_getDataContractId: (a: number) => number;
  readonly incompatibledatacontractschemaerror_getOperation: (a: number, b: number) => void;
  readonly incompatibledatacontractschemaerror_getFieldPath: (a: number, b: number) => void;
  readonly incompatibledatacontractschemaerror_getCode: (a: number) => number;
  readonly incompatibledatacontractschemaerror_message: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_10_0_context_create: (a: number) => number;
  readonly rustsecp256k1_v0_10_0_context_destroy: (a: number) => void;
  readonly rustsecp256k1_v0_10_0_default_illegal_callback_fn: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_10_0_default_error_callback_fn: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfef537ee1a7c902f: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h3989d5e62d306492: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path: InitInput | Promise<InitInput>): Promise<InitOutput>;

/* tslint:disable */
/* eslint-disable */
export function getLatestProtocolVersion(): number;
export function createAssetLockProofInstance(raw_parameters: any): any;
export function deserializeConsensusError(bytes: Uint8Array): any;
export function generateDocumentId(contract_id: any, owner_id: any, document_type: string, entropy: Uint8Array): any;
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
export enum KeySecurityLevel {
  MASTER = 0,
  CRITICAL = 1,
  HIGH = 2,
  MEDIUM = 3,
}
export enum KeyType {
  ECDSA_SECP256K1 = 0,
  BLS12_381 = 1,
  ECDSA_HASH160 = 2,
  BIP13_SCRIPT_HASH = 3,
  EDDSA_25519_HASH160 = 4,
}
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
export enum TokenTransitionType {
  Burn = 0,
  Mint = 1,
  Transfer = 2,
  Freeze = 3,
  Unfreeze = 4,
  DestroyFrozenFunds = 5,
  Claim = 6,
  EmergencyAction = 7,
  ConfigUpdate = 8,
  DirectPurchase = 9,
  SetPriceForDirectPurchase = 10,
}
export class AssetLockOutputNotFoundError {
  private constructor();
  free(): void;
}
export class AssetLockProof {
  free(): void;
  constructor(raw_asset_lock_proof: any);
  createIdentifier(): any;
  toObject(): any;
}
export class AssetLockTransactionIsNotFoundError {
  private constructor();
  free(): void;
  getTransactionId(): any;
}
export class BalanceIsNotEnoughError {
  free(): void;
  constructor(balance: bigint, fee: bigint);
  getBalance(): bigint;
  getFee(): bigint;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class BasicBLSError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class BasicECDSAError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class BatchTransition {
  private constructor();
  free(): void;
  getType(): number;
  getOwnerId(): any;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  getTransitions(): Array<any>;
  setTransitions(js_transitions: Array<any>): void;
  setIdentityContractNonce(nonce: bigint): void;
  getModifiedDataIds(): Array<any>;
  getSignaturePublicKeyId(): number;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
  setSignaturePublicKeyId(key_id: number): void;
  getKeySecurityLevelRequirement(purpose: number): Array<any>;
  getSignature(): Uint8Array;
  setSignature(signature: Uint8Array): void;
  isDocumentStateTransition(): boolean;
  isDataContractStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  toBuffer(): any;
}
export class BatchedTransition {
  private constructor();
  free(): void;
}
export class ChainAssetLockProof {
  free(): void;
  constructor(raw_parameters: any);
  getType(): number;
  getCoreChainLockedHeight(): number;
  setCoreChainLockedHeight(value: number): void;
  getOutPoint(): any;
  setOutPoint(out_point: Uint8Array): void;
  toJSON(): any;
  toObject(): any;
  createIdentifier(): any;
}
export class ChoosingTokenMintRecipientNotAllowedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class ContestedDocumentsTemporarilyNotAllowedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class ContestedUniqueIndexOnMutableDocumentTypeError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class ContestedUniqueIndexWithUniqueIndexError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class ContractHasNoTokensError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DashPlatformProtocol {
  free(): void;
  constructor(entropy_generator: any, maybe_protocol_version?: number | null);
  readonly dataContract: DataContractFacade;
  readonly document: DocumentFacade;
  readonly identity: IdentityFacade;
  readonly stateTransition: StateTransitionFactory;
  readonly protocolVersion: number;
}
export class DataContract {
  free(): void;
  constructor(raw_parameters: any, options?: object | null);
  getId(): any;
  setId(id: any): void;
  getOwnerId(): any;
  getVersion(): number;
  setVersion(v: number): void;
  incrementVersion(): void;
  getBinaryProperties(doc_type: string): any;
  setDocumentSchemas(schemas: any, options?: object | null): void;
  setDocumentSchema(name: string, schema: any, options?: object | null): void;
  getDocumentSchema(name: string): any;
  getDocumentSchemas(): any;
  getSchemaDefs(): any;
  setSchemaDefs(defs?: object | null, options?: object | null): void;
  hasDocumentType(doc_type: string): boolean;
  setIdentityNonce(nonce: bigint): void;
  getIdentityNonce(): bigint;
  toObject(): any;
  getConfig(): any;
  setConfig(config: any): void;
  toJSON(): any;
  toBuffer(): any;
  hash(): Uint8Array;
  clone(): DataContract;
  getTokenConfiguration(token_contract_position: number): TokenConfiguration;
}
export class DataContractAlreadyPresentError {
  free(): void;
  constructor(data_contract_id: any);
  getDataContractId(): any;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataContractBoundsNotPresentError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataContractConfigUpdateError {
  free(): void;
  constructor(data_contract_id: any, message: string);
  getDataContractId(): any;
  getCode(): number;
  readonly message: string;
}
export class DataContractCreateTransition {
  free(): void;
  constructor(value: any);
  getDataContract(): DataContract;
  getIdentityNonce(): bigint;
  getOwnerId(): any;
  getType(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  getUserFeeIncrease(): number;
  getSignature(): any;
  getSignaturePublicKeyId(): number;
  toBuffer(): any;
  static fromBuffer(buffer: Uint8Array): DataContractCreateTransition;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  toObject(skip_signature?: boolean | null): any;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
}
export class DataContractEmptySchemaError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getCode(): number;
  readonly message: string;
}
export class DataContractError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class DataContractFacade {
  private constructor();
  free(): void;
  /**
   * Create Data Contract
   */
  create(owner_id: Uint8Array, identity_nonce: bigint, documents: any, definitions?: object | null): DataContract;
  /**
   * Create Data Contract from plain object
   */
  createFromObject(js_raw_data_contract: any, options?: object | null): Promise<DataContract>;
  /**
   * Create Data Contract from buffer
   */
  createFromBuffer(buffer: Uint8Array, options?: object | null): Promise<DataContract>;
  /**
   * Create Data Contract Create State Transition
   */
  createDataContractCreateTransition(data_contract: DataContract): DataContractCreateTransition;
  /**
   * Create Data Contract Update State Transition
   */
  createDataContractUpdateTransition(data_contract: DataContract, identity_contract_nonce: bigint): DataContractUpdateTransition;
}
export class DataContractFactory {
  free(): void;
  constructor(protocol_version: number);
  create(owner_id: Uint8Array, identity_nonce: bigint, documents: any, config: any): DataContract;
  createFromBuffer(buffer: Uint8Array, skip_validation?: boolean | null): Promise<DataContract>;
  createDataContractCreateTransition(data_contract: DataContract): Promise<DataContractCreateTransition>;
}
export class DataContractGenericError {
  private constructor();
  free(): void;
  getMessage(): string;
}
export class DataContractHaveNewUniqueIndexError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getCode(): number;
  readonly message: string;
}
export class DataContractImmutablePropertiesUpdateError {
  private constructor();
  free(): void;
  getOperation(): string;
  getFieldPath(): string;
  getCode(): number;
  readonly message: string;
}
export class DataContractInvalidIndexDefinitionUpdateError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getCode(): number;
  readonly message: string;
}
export class DataContractIsReadonlyError {
  free(): void;
  constructor(data_contract_id: any);
  getDataContractId(): any;
  getCode(): number;
  readonly message: string;
}
export class DataContractMaxDepthExceedError {
  private constructor();
  free(): void;
}
export class DataContractNotFoundError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataContractNotPresentError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getCode(): number;
  readonly message: string;
}
export class DataContractNotPresentNotConsensusError {
  private constructor();
  free(): void;
  getDataContractId(): any;
}
export class DataContractTokenConfigurationUpdateError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataContractUniqueIndicesChangedError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getCode(): number;
  readonly message: string;
}
export class DataContractUpdateActionNotAllowedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataContractUpdatePermissionError {
  free(): void;
  constructor(data_contract_id: any, identity_id: any);
  getDataContractId(): any;
  getIdentityId(): any;
  getCode(): number;
  readonly message: string;
}
export class DataContractUpdateTransition {
  free(): void;
  constructor(raw_parameters: any);
  getDataContract(): DataContract;
  getOwnerId(): any;
  getIdentityContractNonce(): bigint;
  getType(): number;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  getSignature(): any;
  getSignaturePublicKeyId(): number;
  toBuffer(): any;
  static fromBuffer(buffer: Uint8Array): DataContractUpdateTransition;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  toObject(skip_signature?: boolean | null): any;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
}
export class DataTriggerActionConditionError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getDocumentTransitionId(): any;
  getMessage(): string;
  getOwnerId(): any | undefined;
  getCode(): number;
}
export class DataTriggerActionExecutionError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getExecutionError(): any;
  getDocumentTransitionId(): any;
  getMessage(): string;
  getOwnerId(): any | undefined;
  getCode(): number;
}
export class DataTriggerActionInvalidResultError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getDocumentTransitionId(): any;
  getOwnerId(): any | undefined;
  getCode(): number;
}
export class DataTriggerConditionError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getDocumentId(): any;
  getMessage(): string;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataTriggerExecutionError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getDocumentId(): any;
  getMessage(): string;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DataTriggerInvalidResultError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getDocumentId(): any;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DecimalsOverLimitError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DestinationIdentityForTokenMintingNotSetError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DisablingKeyIdAlsoBeingAddedInSameTransitionError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class Document {
  free(): void;
  constructor(js_raw_document: any, js_data_contract: DataContract, js_document_type_name: any);
  getId(): any;
  setId(js_id: any): void;
  setOwnerId(owner_id: any): void;
  getOwnerId(): any;
  setRevision(revision?: bigint | null): void;
  getRevision(): bigint | undefined;
  setData(d: any): void;
  getData(): any;
  set(path: string, js_value_to_set: any): void;
  get(path: string): any;
  setCreatedAt(created_at?: Date | null): void;
  setUpdatedAt(updated_at?: Date | null): void;
  getCreatedAt(): Date | undefined;
  getUpdatedAt(): Date | undefined;
  hash(data_contract: DataContract, document_type_name: string): any;
  clone(): Document;
}
export class DocumentAlreadyExistsError {
  private constructor();
  free(): void;
}
export class DocumentAlreadyPresentError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getCode(): number;
  readonly message: string;
}
export class DocumentContestCurrentlyLockedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentContestDocumentWithSameIdAlreadyPresentError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentContestIdentityAlreadyContestantError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentContestNotJoinableError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentContestNotPaidForError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentCreateTransition {
  private constructor();
  free(): void;
  getRevision(): bigint;
  getEntropy(): Uint8Array;
  getIdentityContractNonce(): bigint;
  setIdentityContractNonce(identity_contract_nonce: bigint): void;
  getPrefundedVotingBalance(): any;
  static readonly INITIAL_REVISION: bigint;
}
export class DocumentCreationNotAllowedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentFacade {
  free(): void;
  constructor(document_factory: DocumentFactory);
  create(data_contract: DataContract, js_owner_id: any, document_type: string, data: any): ExtendedDocument;
  createExtendedDocumentFromDocumentBuffer(buffer: Uint8Array, document_type: string, data_contract: DataContract): ExtendedDocument;
  /**
   * Creates Documents State Transition
   */
  createStateTransition(documents: any, nonce_counter_value: object): BatchTransition;
}
export class DocumentFactory {
  free(): void;
  constructor(protocol_version: number, external_entropy_generator_arg?: any | null);
  create(data_contract: DataContract, js_owner_id: any, document_type: string, data: any): ExtendedDocument;
  createStateTransition(documents: any, nonce_counter_value: object): BatchTransition;
  createExtendedDocumentFromDocumentBuffer(buffer: Uint8Array, document_type: string, data_contract: DataContract): ExtendedDocument;
}
export class DocumentFieldMaxSizeExceededError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentIncorrectPurchasePriceError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentNoRevisionError {
  free(): void;
  constructor(document: Document);
  getDocument(): Document;
}
export class DocumentNotForSaleError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DocumentNotFoundError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getCode(): number;
  readonly message: string;
}
export class DocumentNotProvidedError {
  private constructor();
  free(): void;
}
export class DocumentOwnerIdMismatchError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getDocumentOwnerId(): any;
  getExistingDocumentOwnerId(): any;
  getCode(): number;
  readonly message: string;
}
export class DocumentTimestampWindowViolationError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getTimestampName(): string;
  getTimestamp(): Date;
  getTimeWindowStart(): Date;
  getTimeWindowEnd(): Date;
  getCode(): number;
  readonly message: string;
}
export class DocumentTimestampsAreEqualError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getCode(): number;
  readonly message: string;
}
export class DocumentTimestampsMismatchError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getCode(): number;
  readonly message: string;
}
export class DocumentTransition {
  private constructor();
  free(): void;
  getId(): any;
  getType(): string;
  getData(): any;
  getAction(): number;
  getDataContractId(): any;
  setDataContractId(js_data_contract_id: any): void;
  getIdentityContractNonce(): any;
  getRevision(): bigint | undefined;
  getEntropy(): Uint8Array | undefined;
  get_price(): bigint | undefined;
  getReceiverId(): any | undefined;
  setRevision(revision: bigint): void;
  hasPrefundedBalance(): boolean;
  getPrefundedVotingBalance(): any;
}
export class DocumentTransitions {
  free(): void;
  constructor();
  addTransitionCreate(transition: ExtendedDocument): void;
  addTransitionReplace(transition: ExtendedDocument): void;
  addTransitionDelete(transition: ExtendedDocument): void;
}
export class DocumentTransitionsAreAbsentError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class DocumentTypeUpdateError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DuplicateDocumentTransitionsWithIdsError {
  private constructor();
  free(): void;
  getDocumentTransitionReferences(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class DuplicateDocumentTransitionsWithIndicesError {
  private constructor();
  free(): void;
  getDocumentTransitionReferences(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class DuplicateIndexError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getCode(): number;
  readonly message: string;
}
export class DuplicateIndexNameError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getDuplicateIndexName(): string;
  getCode(): number;
  readonly message: string;
}
export class DuplicateKeywordsError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class DuplicateUniqueIndexError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getDuplicatingProperties(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class DuplicatedIdentityPublicKeyError {
  private constructor();
  free(): void;
  getDuplicatedPublicKeysIds(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class DuplicatedIdentityPublicKeyIdError {
  private constructor();
  free(): void;
  getDuplicatedIds(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class DuplicatedIdentityPublicKeyIdStateError {
  private constructor();
  free(): void;
  getDuplicatedIds(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class DuplicatedIdentityPublicKeyStateError {
  private constructor();
  free(): void;
  getDuplicatedPublicKeysIds(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class ExtendedDocument {
  free(): void;
  constructor(js_raw_document: any, js_data_contract: DataContract);
  getFeatureVersion(): number;
  getId(): any;
  setId(js_id: any): void;
  getType(): string;
  setType(document_type_name: string): void;
  getDataContractId(): any;
  getDataContract(): DataContract;
  setDataContractId(js_data_contract_id: any): void;
  getDocument(): Document;
  setOwnerId(owner_id: any): void;
  getOwnerId(): any;
  setRevision(rev?: bigint | null): void;
  getRevision(): bigint | undefined;
  setEntropy(e: Uint8Array): void;
  getEntropy(): any;
  setData(d: any): void;
  getData(): any;
  set(path: string, js_value_to_set: any): void;
  get(path: string): any;
  setCreatedAt(ts?: Date | null): void;
  setUpdatedAt(ts?: Date | null): void;
  getCreatedAt(): Date | undefined;
  getUpdatedAt(): Date | undefined;
  getMetadata(): Metadata | undefined;
  setMetadata(metadata: any): void;
  toObject(options: any): any;
  toJSON(): any;
  toBuffer(): any;
  hash(): any;
  clone(): ExtendedDocument;
  validate(platform_version: number): ValidationResult;
}
export class GroupActionAlreadyCompletedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupActionAlreadySignedByIdentityError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupActionDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupActionNotAllowedOnTransitionError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupExceedsMaxMembersError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupHasTooFewMembersError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupMemberHasPowerOfZeroError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupMemberHasPowerOverLimitError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupNonUnilateralMemberPowerHasLessThanRequiredPowerError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupPositionDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupRequiredPowerIsInvalidError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class GroupTotalPowerLessThanRequiredError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class Identity {
  free(): void;
  constructor(platform_version: number);
  getId(): any;
  setId(id: any): void;
  setPublicKeys(public_keys: Array<any>): number;
  getPublicKeys(): any[];
  getPublicKeyById(key_id: number): IdentityPublicKey | undefined;
  getBalance(): bigint;
  setBalance(balance: bigint): void;
  increaseBalance(amount: bigint): bigint;
  reduceBalance(amount: bigint): bigint;
  setRevision(revision: bigint): void;
  getRevision(): bigint;
  setMetadata(metadata: any): void;
  getMetadata(): Metadata | undefined;
  static from(object: any): Identity;
  toJSON(): any;
  toObject(): any;
  toBuffer(): any;
  hash(): Uint8Array;
  addPublicKey(public_key: IdentityPublicKey): void;
  addPublicKeys(public_keys: Array<any>): void;
  getPublicKeyMaxId(): number;
  static fromBuffer(buffer: Uint8Array): Identity;
  readonly balance: bigint;
}
export class IdentityAlreadyExistsError {
  private constructor();
  free(): void;
  getIdentityId(): any;
  getCode(): number;
  readonly message: string;
}
export class IdentityAssetLockProofLockedTransactionMismatchError {
  private constructor();
  free(): void;
  getInstantLockTransactionId(): any;
  getAssetLockTransactionId(): any;
  getCode(): number;
  readonly message: string;
}
export class IdentityAssetLockTransactionIsNotFoundError {
  private constructor();
  free(): void;
  getTransactionId(): any;
  getCode(): number;
  readonly message: string;
}
export class IdentityAssetLockTransactionOutPointAlreadyExistsError {
  private constructor();
  free(): void;
  getOutputIndex(): number;
  getTransactionId(): any;
  getCode(): number;
  readonly message: string;
}
export class IdentityAssetLockTransactionOutPointNotEnoughBalanceError {
  private constructor();
  free(): void;
  getTransactionId(): any;
  getOutputIndex(): number;
  getInitialAssetLockCredits(): bigint;
  getCreditsLeft(): bigint;
  getCreditsRequired(): bigint;
  getCode(): number;
  readonly message: string;
}
export class IdentityAssetLockTransactionOutputNotFoundError {
  private constructor();
  free(): void;
  getOutputIndex(): number;
  getCode(): number;
  readonly message: string;
}
export class IdentityAssetLockTransactionReplayError {
  private constructor();
  free(): void;
  getTransactionId(): any;
  getCode(): number;
  getStateTransitionId(): any;
  getOutputIndex(): number;
}
export class IdentityContractNonceOutOfBoundsError {
  private constructor();
  free(): void;
  getIdentityContractNonce(): bigint;
  getCode(): number;
  readonly message: string;
}
export class IdentityCreateTransition {
  free(): void;
  constructor(platform_version: number);
  setAssetLockProof(asset_lock_proof: any): void;
  getAssetLockProof(): any;
  setPublicKeys(public_keys: any[]): void;
  addPublicKeys(public_keys: any[]): void;
  getPublicKeys(): any[];
  getType(): number;
  getIdentityId(): any;
  getOwnerId(): any;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  toObject(options: any): any;
  toBuffer(): any;
  toJSON(): any;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any | null): void;
  getSignature(): any;
  setSignature(signature?: Uint8Array | null): void;
  readonly assetLockProof: any;
  readonly publicKeys: any[];
  readonly identityId: any;
}
export class IdentityCreditTransferToSelfError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class IdentityCreditTransferTransition {
  free(): void;
  constructor(platform_version: number);
  getType(): number;
  getIdentityId(): any;
  getRecipientId(): any;
  setIdentityId(identity_id: any): void;
  setRecipientId(recipient_id: any): void;
  getAmount(): bigint;
  setAmount(amount: bigint): void;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  getNonce(): bigint;
  setNonce(nonce: bigint): void;
  toObject(options: any): any;
  toBuffer(): any;
  toJSON(): any;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any | null): void;
  getSignature(): any;
  setSignature(signature?: Uint8Array | null): void;
  getSignaturePublicKeyId(): number;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
  readonly identityId: any;
  readonly recipientId: any;
  readonly amount: bigint;
}
export class IdentityCreditWithdrawalTransition {
  free(): void;
  constructor(platform_version: number);
  getType(): number;
  getIdentityId(): any;
  setIdentityId(identity_id: any): void;
  getAmount(): bigint;
  setAmount(amount: bigint): void;
  getCoreFeePerByte(): number;
  setCoreFeePerByte(core_fee_per_byte: number): void;
  getPooling(): number;
  setPooling(pooling: number): void;
  getOutputScript(): any | undefined;
  setOutputScript(output_script?: Uint8Array | null): void;
  getNonce(): bigint;
  setNonce(revision: bigint): void;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  toObject(options: any): any;
  toBuffer(): any;
  toJSON(): any;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any | null): void;
  getSignature(): any;
  setSignature(signature?: Uint8Array | null): void;
  getSignaturePublicKeyId(): number;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
  readonly identityId: any;
  readonly amount: bigint;
}
export class IdentityDoesNotHaveEnoughTokenBalanceError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityFacade {
  private constructor();
  free(): void;
  create(id: any, public_keys: Array<any>): Identity;
  createFromBuffer(buffer: Uint8Array, options?: object | null): Identity;
  createInstantAssetLockProof(instant_lock: Uint8Array, asset_lock_transaction: Uint8Array, output_index: number): InstantAssetLockProof;
  createChainAssetLockProof(core_chain_locked_height: number, out_point: Uint8Array): ChainAssetLockProof;
  createIdentityCreateTransition(identity: Identity, asset_lock_proof: any): IdentityCreateTransition;
  createIdentityTopUpTransition(identity_id: any, asset_lock_proof: any): IdentityTopUpTransition;
  createIdentityCreditWithdrawalTransition(identity_id: any, amount: bigint, core_fee_per_byte: number, pooling: number, output_script: Uint8Array | null | undefined, identity_nonce: bigint): IdentityCreditWithdrawalTransition;
  createIdentityCreditTransferTransition(identity: Identity, recipient_id: any, amount: bigint, identity_nonce: bigint): IdentityCreditTransferTransition;
  createIdentityUpdateTransition(identity: Identity, identity_nonce: bigint, public_keys: any): IdentityUpdateTransition;
}
export class IdentityFactory {
  free(): void;
  constructor(protocol_version: number);
  create(id: any, public_keys: Array<any>): Identity;
  createFromBuffer(buffer: Uint8Array, options: any): Identity;
  createInstantAssetLockProof(instant_lock: Uint8Array, asset_lock_transaction: Uint8Array, output_index: number): InstantAssetLockProof;
  createChainAssetLockProof(core_chain_locked_height: number, out_point: Uint8Array): ChainAssetLockProof;
  createIdentityCreateTransition(identity: Identity, asset_lock_proof: any): IdentityCreateTransition;
  createIdentityTopUpTransition(identity_id: any, asset_lock_proof: any): IdentityTopUpTransition;
  createIdentityCreditTransferTransition(identity: Identity, recipient_id: any, amount: bigint, identity_nonce: bigint): IdentityCreditTransferTransition;
  createIdentityCreditWithdrawalTransition(identity_id: any, amount: bigint, core_fee_per_byte: number, pooling: number, output_script: Uint8Array | null | undefined, identity_nonce: bigint): IdentityCreditWithdrawalTransition;
  createIdentityUpdateTransition(identity: Identity, identity_nonce: bigint, public_keys: any): IdentityUpdateTransition;
}
export class IdentityHasNotAgreedToPayRequiredTokenAmountError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityInTokenConfigurationNotFoundError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityInsufficientBalanceError {
  private constructor();
  free(): void;
  getIdentityId(): any;
  getBalance(): bigint;
  getCode(): number;
  readonly message: string;
}
export class IdentityMemberOfGroupNotFoundError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityNotFoundError {
  free(): void;
  constructor(identity_id: any);
  getIdentityId(): any;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityNotMemberOfGroupError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityPublicKey {
  free(): void;
  constructor(platform_version: number);
  getId(): number;
  setId(id: number): void;
  getType(): number;
  setType(key_type: number): void;
  setData(data: Uint8Array): void;
  getData(): any;
  setPurpose(purpose: number): void;
  getPurpose(): number;
  setSecurityLevel(security_level: number): void;
  getSecurityLevel(): number;
  setReadOnly(read_only: boolean): void;
  isReadOnly(): boolean;
  setDisabledAt(timestamp: Date): void;
  getDisabledAt(): Date | undefined;
  hash(): Uint8Array;
  isMaster(): boolean;
  toJSON(): any;
  toObject(): any;
  toBuffer(): any;
  static fromBuffer(buffer: Uint8Array): IdentityPublicKey;
}
export class IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityPublicKeyIsDisabledError {
  private constructor();
  free(): void;
  getPublicKeyIndex(): number;
  getCode(): number;
  readonly message: string;
}
export class IdentityPublicKeyIsReadOnlyError {
  private constructor();
  free(): void;
  getKeyId(): number;
  getPublicKeyIndex(): number;
  getCode(): number;
  readonly message: string;
}
export class IdentityPublicKeyWithWitness {
  free(): void;
  constructor(platform_version: number);
  getId(): number;
  setId(id: number): void;
  getType(): number;
  setType(key_type: number): void;
  setData(data: Uint8Array): void;
  getData(): any;
  setPurpose(purpose: number): void;
  getPurpose(): number;
  setSecurityLevel(security_level: number): void;
  setContractBounds(contract_id: any, document_type_name?: string | null): void;
  getSecurityLevel(): number;
  setReadOnly(read_only: boolean): void;
  isReadOnly(): boolean;
  setSignature(signature: Uint8Array): void;
  getSignature(): Uint8Array;
  hash(): Uint8Array;
  toJSON(): any;
  toObject(skip_signature: boolean): any;
}
export class IdentityToFreezeDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityTokenAccountAlreadyFrozenError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityTokenAccountFrozenError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityTokenAccountNotFrozenError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityTopUpTransition {
  free(): void;
  constructor(platform_version: number);
  setAssetLockProof(asset_lock_proof: any): void;
  getAssetLockProof(): any;
  getType(): number;
  getIdentityId(): any;
  setIdentityId(identity_id: any): void;
  getOwnerId(): any;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  toObject(options: any): any;
  toBuffer(): any;
  toJSON(): any;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any | null): void;
  getSignature(): any;
  setSignature(signature?: Uint8Array | null): void;
  readonly assetLockProof: any;
  readonly identityId: any;
}
export class IdentityTryingToPayWithWrongTokenError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class IdentityUpdateTransition {
  free(): void;
  constructor(platform_version: number);
  setPublicKeysToAdd(public_keys?: any[] | null): void;
  getPublicKeysToAdd(): any[];
  getPublicKeyIdsToDisable(): any[];
  setPublicKeyIdsToDisable(public_key_ids?: Uint32Array | null): void;
  getType(): number;
  getIdentityId(): any;
  setIdentityId(identity_id: any): void;
  getOwnerId(): any;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  getIdentityContractNonce(): bigint;
  setIdentityContractNonce(identity_nonce: bigint): void;
  toObject(options: any): any;
  toBuffer(): any;
  toJSON(): any;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any | null): void;
  setSignaturePublicKeyId(key_id?: number | null): void;
  getSignature(): any;
  getSignaturePublicKeyId(): number;
  setSignature(signature?: Uint8Array | null): void;
  getRevision(): bigint;
  setRevision(revision: bigint): void;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
  verifySignature(identity_public_key: IdentityPublicKey, bls: any): boolean;
  readonly addPublicKeys: any[];
  readonly identityId: any;
}
export class IncompatibleDataContractSchemaError {
  private constructor();
  free(): void;
  getDataContractId(): any;
  getOperation(): string;
  getFieldPath(): string;
  getCode(): number;
  readonly message: string;
}
export class IncompatibleDocumentTypeSchemaError {
  private constructor();
  free(): void;
  getOperation(): string;
  getPropertyPath(): string;
  getCode(): number;
  readonly message: string;
}
export class IncompatibleProtocolVersionError {
  private constructor();
  free(): void;
  getParsedProtocolVersion(): number;
  getMinimalProtocolVersion(): number;
  getCode(): number;
  readonly message: string;
}
export class IncompatibleRe2PatternError {
  private constructor();
  free(): void;
  getPattern(): string;
  getPath(): string;
  getMessage(): string;
  getCode(): number;
  readonly message: string;
}
export class InconsistentCompoundIndexDataError {
  private constructor();
  free(): void;
  getIndexedProperties(): Array<any>;
  getDocumentType(): string;
  getCode(): number;
  readonly message: string;
}
export class InstantAssetLockProof {
  free(): void;
  constructor(raw_parameters: any);
  getType(): number;
  getOutputIndex(): number;
  getOutPoint(): any | undefined;
  getOutput(): any;
  createIdentifier(): any;
  getInstantLock(): any;
  getTransaction(): any;
  toObject(): any;
  toJSON(): any;
}
export class InvalidActionError {
  private constructor();
  free(): void;
}
export class InvalidActionIdError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidActionNameError {
  free(): void;
  constructor(actions: any[]);
  getActions(): any[];
}
export class InvalidAssetLockProofCoreChainHeightError {
  private constructor();
  free(): void;
  getProofCoreChainLockedHeight(): number;
  getCurrentCoreChainLockedHeight(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidAssetLockProofTransactionHeightError {
  private constructor();
  free(): void;
  getProofCoreChainLockedHeight(): number;
  getTransactionHeight(): number | undefined;
  getCode(): number;
  readonly message: string;
}
export class InvalidAssetLockTransactionOutputReturnSizeError {
  private constructor();
  free(): void;
  getOutputIndex(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidCompoundIndexError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidDataContractError {
  private constructor();
  free(): void;
  getErrors(): any[];
  getRawDataContract(): any;
  getMessage(): string;
}
export class InvalidDataContractIdError {
  private constructor();
  free(): void;
  getExpectedId(): any;
  getInvalidId(): any;
  getCode(): number;
  readonly message: string;
}
export class InvalidDataContractVersionError {
  private constructor();
  free(): void;
  getExpectedVersion(): number;
  getVersion(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidDescriptionLengthError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidDocumentActionError {
  private constructor();
  free(): void;
}
export class InvalidDocumentError {
  free(): void;
  constructor(raw_document: any, errors: any[]);
  getErrors(): any[];
  getRawDocument(): any;
  getMessage(): string;
}
export class InvalidDocumentRevisionError {
  private constructor();
  free(): void;
  getDocumentId(): any;
  getPreviousRevision(): bigint | undefined;
  getDesiredRevision(): bigint;
  getCode(): number;
  readonly message: string;
}
export class InvalidDocumentTransitionActionError {
  private constructor();
  free(): void;
  getAction(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidDocumentTransitionIdError {
  private constructor();
  free(): void;
  getExpectedId(): any;
  getInvalidId(): any;
  getCode(): number;
  readonly message: string;
}
export class InvalidDocumentTypeError {
  private constructor();
  free(): void;
  getType(): string;
  getDataContractId(): any;
  getCode(): number;
  readonly message: string;
}
export class InvalidDocumentTypeInDataContractError {
  free(): void;
  constructor(doc_type: string, data_contract_id: any);
  getType(): string;
  getDataContractId(): any;
}
export class InvalidDocumentTypeNameError {
  private constructor();
  free(): void;
}
export class InvalidDocumentTypeRequiredSecurityLevelError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidGroupPositionError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidIdentifierError {
  private constructor();
  free(): void;
  getIdentifierName(): string;
  getIdentifierError(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityAssetLockProofChainLockValidationErrorWasm {
  private constructor();
  free(): void;
  getTransactionId(): any;
  getHeightReportedNotLocked(): number;
}
export class InvalidIdentityAssetLockTransactionError {
  private constructor();
  free(): void;
  getErrorMessage(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityAssetLockTransactionOutputError {
  private constructor();
  free(): void;
  getOutputIndex(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityCreditTransferAmountError {
  private constructor();
  free(): void;
  getAmount(): bigint;
  getMinAmount(): bigint;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityCreditWithdrawalTransitionAmountError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidIdentityCreditWithdrawalTransitionCoreFeeError {
  private constructor();
  free(): void;
  getCoreFee(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityCreditWithdrawalTransitionOutputScriptError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityError {
  private constructor();
  free(): void;
  getErrors(): any[];
  getRawIdentity(): any;
}
export class InvalidIdentityKeySignatureError {
  private constructor();
  free(): void;
  getPublicKeyId(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityNonceError {
  private constructor();
  free(): void;
  getIdentityId(): any;
  getCurrentIdentityContractNonce(): bigint | undefined;
  getSettingIdentityContractNonce(): bigint;
  getError(): Error;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityPublicKeyDataError {
  private constructor();
  free(): void;
  getPublicKeyId(): number;
  getValidationError(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityPublicKeyIdError {
  private constructor();
  free(): void;
  getId(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityPublicKeySecurityLevelError {
  private constructor();
  free(): void;
  getPublicKeyId(): number;
  getPublicKeyPurpose(): number;
  getPublicKeySecurityLevel(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityPublicKeyTypeError {
  free(): void;
  constructor(key_type: number);
  getPublicKeyType(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityRevisionError {
  private constructor();
  free(): void;
  getIdentityId(): any;
  getCurrentRevision(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidIdentityUpdateTransitionDisableKeysError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidIdentityUpdateTransitionEmptyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidIndexPropertyTypeError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getPropertyName(): string;
  getPropertyType(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidIndexedPropertyConstraintError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getPropertyName(): string;
  getConstraintName(): string;
  getReason(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidInitialRevisionError {
  free(): void;
  constructor(document: Document);
  getDocument(): Document;
}
export class InvalidInstantAssetLockProofError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class InvalidInstantAssetLockProofSignatureError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class InvalidJsonSchemaRefError {
  private constructor();
  free(): void;
  getRefError(): string;
  getCode(): number;
  readonly message: string;
}
export class InvalidKeywordCharacterError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidKeywordLengthError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidSignaturePublicKeyPurposeError {
  private constructor();
  free(): void;
  getPublicKeyPurpose(): number;
  getKeyPurposeRequirement(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class InvalidSignaturePublicKeySecurityLevelError {
  private constructor();
  free(): void;
  getPublicKeySecurityLevel(): number;
  getKeySecurityLevelRequirement(): Array<any>;
  getCode(): number;
  readonly message: string;
}
export class InvalidStateTransitionError {
  free(): void;
  constructor(error_buffers: any[], raw_state_transition: any);
  getErrors(): any[];
  getRawStateTransition(): any;
}
export class InvalidStateTransitionSignatureError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class InvalidStateTransitionTypeError {
  free(): void;
  constructor(transition_type: number);
  getType(): number;
  getCode(): number;
  readonly message: string;
}
export class InvalidTokenAmountError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenBaseSupplyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenClaimNoCurrentRewards {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenClaimPropertyMismatch {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenClaimWrongClaimant {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenConfigUpdateNoChangeError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionBlockIntervalTooShortError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionFunctionDivideByZeroError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionFunctionIncoherenceError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionFunctionInvalidParameterError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionFunctionInvalidParameterTupleError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionTimeIntervalNotMinuteAlignedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenDistributionTimeIntervalTooShortError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenIdError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenLanguageCodeError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenNameCharacterError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenNameLengthError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenNoteTooBigError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenPositionError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class InvalidTokenPositionStateError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class JsonSchemaCompilationError {
  private constructor();
  free(): void;
  getError(): string;
  getCode(): number;
  readonly message: string;
}
export class JsonSchemaError {
  private constructor();
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
  getKeyword(): string;
  getInstancePath(): string;
  getSchemaPath(): string;
  getPropertyName(): string;
  getParams(): any;
  getCode(): number;
  toString(): string;
  readonly message: string;
  readonly keyword: string;
  readonly instancePath: string;
  readonly schemaPath: string;
  readonly propertyName: string;
  readonly params: any;
  readonly code: number;
}
export class MainGroupIsNotDefinedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MasterPublicKeyUpdateError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MasternodeIncorrectVoterIdentityIdError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MasternodeIncorrectVotingAddressError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MasternodeNotFoundError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MasternodeVoteAlreadyPresentError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MasternodeVoteTransition {
  free(): void;
  constructor(platform_version: number);
  getOwnerId(): any;
  getType(): number;
  getProTxHash(): any;
  setProTxHash(pro_tx_hash: any): void;
  toObject(options: any): any;
  toBuffer(): any;
  toJSON(): any;
  getModifiedDataIds(): any[];
  isDataContractStateTransition(): boolean;
  isDocumentStateTransition(): boolean;
  isIdentityStateTransition(): boolean;
  isVotingStateTransition(): boolean;
  getUserFeeIncrease(): number;
  setUserFeeIncrease(user_fee_increase: number): void;
  getIdentityContractNonce(): bigint;
  getContestedDocumentResourceVotePoll(): object | undefined;
  signByPrivateKey(private_key: Uint8Array, key_type: number, bls?: any | null): void;
  getSignature(): any;
  setSignature(signature?: Uint8Array | null): void;
  sign(identity_public_key: IdentityPublicKey, private_key: Uint8Array, bls: any): void;
}
export class MasternodeVotedTooManyTimesError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MaxDocumentsTransitionsExceededError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MaxIdentityPublicKeyLimitReachedError {
  private constructor();
  free(): void;
  getMaxItems(): number;
  getCode(): number;
  readonly message: string;
}
export class Metadata {
  free(): void;
  constructor(block_height: bigint, core_chain_locked_height: number, time_ms: bigint, protocol_version: number);
  static from(object: any): Metadata;
  toJSON(): any;
  toObject(): any;
  getBlockHeight(): bigint;
  getCoreChainLockedHeight(): number;
  getTimeMs(): bigint;
  getProtocolVersion(): number;
}
export class MismatchOwnerIdsError {
  free(): void;
  constructor(documents: any[]);
  getDocuments(): any[];
}
export class MissingDataContractIdError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class MissingDefaultLocalizationError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MissingDocumentTransitionActionError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class MissingDocumentTransitionTypeError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class MissingDocumentTypeError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class MissingIdentityPublicKeyIdsError {
  private constructor();
  free(): void;
  getDuplicatedIds(): Array<any>;
}
export class MissingMasterPublicKeyError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class MissingPositionsInDocumentTypePropertiesError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class MissingPublicKeyError {
  private constructor();
  free(): void;
  getPublicKeyId(): number;
  getCode(): number;
  readonly message: string;
}
export class MissingStateTransitionTypeError {
  free(): void;
  constructor();
  getCode(): number;
  readonly message: string;
}
export class MissingTransferKeyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class ModificationOfGroupActionMainParametersNotPermittedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NewAuthorizedActionTakerGroupDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NewAuthorizedActionTakerIdentityDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NewAuthorizedActionTakerMainGroupNotSetError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NewTokensDestinationIdentityDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NewTokensDestinationIdentityOptionRequiredError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NoDocumentsSuppliedError {
  free(): void;
  constructor();
}
export class NoTransferKeyForCoreWithdrawalAvailableError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NonConsensusErrorWasm {
  private constructor();
  free(): void;
}
export class NonContiguousContractGroupPositionsError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NonContiguousContractTokenPositionsError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class NotImplementedIdentityCreditWithdrawalTransitionPoolingError {
  private constructor();
  free(): void;
  getPooling(): number;
  getCode(): number;
  readonly message: string;
}
export class OverflowError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class PlatformValueError {
  private constructor();
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
  getMessage(): string;
  toString(): string;
  valueOf(): string;
}
export class PreProgrammedDistributionTimestampInPastError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class PrefundedSpecializedBalanceInsufficientError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class PrefundedSpecializedBalanceNotFoundError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class ProtocolVersionParsingError {
  free(): void;
  constructor(parsing_error: string);
  getParsingError(): string;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class PublicKeyIsDisabledError {
  private constructor();
  free(): void;
  getPublicKeyId(): number;
  getCode(): number;
  readonly message: string;
}
export class PublicKeySecurityLevelNotMetError {
  private constructor();
  free(): void;
  getPublicKeySecurityLevel(): number;
  getKeySecurityLevelRequirement(): number;
  getCode(): number;
  readonly message: string;
}
export class RecipientIdentityDoesNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class RedundantDocumentPaidForByTokenWithContractId {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class RequiredTokenPaymentInfoNotSetError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class RevisionAbsentError {
  free(): void;
  constructor(document: Document);
  getDocument(): Document;
}
export class SerializedObjectParsingError {
  private constructor();
  free(): void;
  getParsingError(): string;
  getCode(): number;
  readonly message: string;
}
export class SignatureShouldNotBePresentError {
  private constructor();
  free(): void;
  getCode(): number;
  readonly message: string;
}
export class StateTransitionFactory {
  private constructor();
  free(): void;
  createFromBuffer(buffer: Uint8Array, _options: any): Promise<any>;
}
export class StateTransitionIsNotActiveError {
  private constructor();
  free(): void;
  getStateTransitionType(): string;
  getActiveVersionRangeStart(): number;
  getActiveVersionRangeEnd(): number;
  getCurrentProtocolVersion(): number;
  toObject(): any;
}
export class StateTransitionMaxSizeExceededError {
  private constructor();
  free(): void;
  getActualSizeBytes(): bigint;
  getMaxSizeBytes(): bigint;
  getCode(): number;
  readonly message: string;
}
export class SystemPropertyIndexAlreadyPresentError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getPropertyName(): string;
  getCode(): number;
  readonly message: string;
}
export class TokenAlreadyPausedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenAmountUnderMinimumSaleAmount {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenBurnTransition {
  private constructor();
  free(): void;
  getPublicNote(): string | undefined;
  getBurnAmount(): bigint;
}
export class TokenClaimTransition {
  private constructor();
  free(): void;
  getPublicNote(): string | undefined;
  getDistributionType(): number;
}
export class TokenConfigUpdateTransition {
  private constructor();
  free(): void;
  getPublicNote(): string | undefined;
}
export class TokenConfiguration {
  private constructor();
  free(): void;
  keepsHistory(): TokenKeepsHistoryRules;
}
export class TokenDestroyFrozenFundsTransition {
  private constructor();
  free(): void;
  getFrozenIdentityId(): any;
  getPublicNote(): string | undefined;
}
export class TokenDirectPurchaseTransition {
  private constructor();
  free(): void;
  getCount(): bigint;
  getTotalAgreedPrice(): bigint;
}
export class TokenDirectPurchaseUserPriceTooLow {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenEmergencyActionTransition {
  private constructor();
  free(): void;
  getPublicNote(): string | undefined;
  getEmergencyAction(): number;
}
export class TokenFreezeTransition {
  private constructor();
  free(): void;
  getFrozenIdentityId(): any;
  getPublicNote(): string | undefined;
}
export class TokenIsPausedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenKeepsHistoryRules {
  private constructor();
  free(): void;
  /**
   * Whether transfer history is recorded.
   */
  keepsTransferHistory(): boolean;
  /**
   * Whether freezing history is recorded.
   */
  keepsFreezingHistory(): boolean;
  /**
   * Whether minting history is recorded.
   */
  keepsMintingHistory(): boolean;
  /**
   * Whether burning history is recorded.
   */
  keepsBurningHistory(): boolean;
}
export class TokenMintPastMaxSupplyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenMintTransition {
  private constructor();
  free(): void;
  getRecipientId(token_configuration: TokenConfiguration): any;
  getIssuedToIdentityId(token_configuration: TokenConfiguration): any | undefined;
  getPublicNote(): string | undefined;
  getAmount(): bigint;
}
export class TokenNotForDirectSale {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenNotPausedError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenNoteOnlyAllowedWhenProposerError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenPaymentByBurningOnlyAllowedOnInternalTokenError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenSetPriceForDirectPurchaseTransition {
  private constructor();
  free(): void;
  getPublicNote(): string | undefined;
  getPrice(): bigint | undefined;
}
export class TokenSettingMaxSupplyToLessThanCurrentSupplyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenTransferRecipientIdentityNotExistError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenTransferToOurselfError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TokenTransferTransition {
  private constructor();
  free(): void;
  getRecipientId(): any;
  getPublicNote(): string | undefined;
  getAmount(): bigint;
}
export class TokenTransition {
  private constructor();
  free(): void;
  getTransitionType(): TokenTransitionType;
  getTokenId(): any;
  getTokenContractPosition(): number;
  getDataContractId(): any;
  getHistoricalDocumentTypeName(): string;
  getHistoricalDocumentId(owner_id: any): any;
  getIdentityContractNonce(): bigint;
  toTransition(): any;
}
export class TokenUnfreezeTransition {
  private constructor();
  free(): void;
  getFrozenIdentityId(): any;
  getPublicNote(): string | undefined;
}
export class TooManyKeywordsError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TooManyMasterPublicKeyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class TryingToDeleteImmutableDocumentError {
  free(): void;
  constructor(document: Document);
}
export class TryingToReplaceImmutableDocumentError {
  free(): void;
  constructor(document: Document);
}
export class UnauthorizedTokenActionError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UndefinedIndexPropertyError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexName(): string;
  getPropertyName(): string;
  getCode(): number;
  readonly message: string;
}
export class UniqueIndicesLimitReachedError {
  private constructor();
  free(): void;
  getDocumentType(): string;
  getIndexLimit(): number;
  getCode(): number;
  readonly message: string;
}
export class UnknownAssetLockProofTypeError {
  private constructor();
  free(): void;
  getType(): number | undefined;
}
export class UnknownDocumentActionTokenEffectError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnknownDocumentCreationRestrictionModeError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnknownGasFeesPaidByError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnknownSecurityLevelError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnknownStorageKeyRequirementsError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnknownTradeModeError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnknownTransferableTypeError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnsupportedFeatureError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class UnsupportedProtocolVersionError {
  private constructor();
  free(): void;
  getParsedProtocolVersion(): number;
  getLatestVersion(): number;
  getCode(): number;
  readonly message: string;
}
export class UnsupportedVersionError {
  private constructor();
  free(): void;
  getReceivedVersion(): number;
  getMinVersion(): number;
  getMaxVersion(): number;
  getCode(): number;
  readonly message: string;
}
export class ValidationResult {
  free(): void;
  constructor(errors_option?: any[] | null);
  /**
   * This is just a test method - doesn't need to be in the resulted binding. Please
   * remove before shipping
   */
  errorsText(): string[];
  isValid(): boolean;
  getErrors(): any[];
  getData(): any;
  getFirstError(): any;
  readonly errors: any[];
}
export class ValueError {
  private constructor();
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
  getMessage(): string;
  getCode(): number;
  readonly message: string;
}
export class VersionError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class VotePollNotAvailableForVotingError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class VotePollNotFoundError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError {
  private constructor();
  free(): void;
  getCode(): number;
  serialize(): any;
  readonly message: string;
}
export class WrongPublicKeyPurposeError {
  private constructor();
  free(): void;
  getPublicKeyPurpose(): number;
  getKeyPurposeRequirement(): Array<any>;
  getCode(): number;
  readonly message: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_incompatibledatacontractschemaerror_free: (a: number, b: number) => void;
  readonly incompatibledatacontractschemaerror_getDataContractId: (a: number) => any;
  readonly incompatibledatacontractschemaerror_getOperation: (a: number) => [number, number];
  readonly incompatibledatacontractschemaerror_getFieldPath: (a: number) => [number, number];
  readonly incompatibledatacontractschemaerror_getCode: (a: number) => number;
  readonly incompatibledatacontractschemaerror_message: (a: number) => [number, number];
  readonly __wbg_tokenemergencyactiontransition_free: (a: number, b: number) => void;
  readonly tokenemergencyactiontransition_getPublicNote: (a: number) => [number, number];
  readonly tokenemergencyactiontransition_getEmergencyAction: (a: number) => number;
  readonly __wbg_incompatibledocumenttypeschemaerror_free: (a: number, b: number) => void;
  readonly incompatibledocumenttypeschemaerror_getOperation: (a: number) => [number, number];
  readonly incompatibledocumenttypeschemaerror_getPropertyPath: (a: number) => [number, number];
  readonly incompatibledocumenttypeschemaerror_getCode: (a: number) => number;
  readonly incompatibledocumenttypeschemaerror_message: (a: number) => [number, number];
  readonly __wbg_invalidactionnameerror_free: (a: number, b: number) => void;
  readonly invalidactionnameerror_new: (a: number, b: number) => number;
  readonly invalidactionnameerror_getActions: (a: number) => [number, number];
  readonly __wbg_datacontractupdatepermissionerror_free: (a: number, b: number) => void;
  readonly datacontractupdatepermissionerror_new: (a: any, b: any) => number;
  readonly datacontractupdatepermissionerror_getDataContractId: (a: number) => any;
  readonly datacontractupdatepermissionerror_getIdentityId: (a: number) => any;
  readonly datacontractupdatepermissionerror_getCode: (a: number) => number;
  readonly datacontractupdatepermissionerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitykeysignatureerror_free: (a: number, b: number) => void;
  readonly invalididentitykeysignatureerror_getPublicKeyId: (a: number) => number;
  readonly invalididentitykeysignatureerror_getCode: (a: number) => number;
  readonly invalididentitykeysignatureerror_message: (a: number) => [number, number];
  readonly __wbg_statetransitionfactory_free: (a: number, b: number) => void;
  readonly statetransitionfactory_createFromBuffer: (a: number, b: number, c: number, d: any) => any;
  readonly __wbg_identityfacade_free: (a: number, b: number) => void;
  readonly identityfacade_create: (a: number, b: any, c: any) => [number, number, number];
  readonly identityfacade_createFromBuffer: (a: number, b: number, c: number, d: number) => [number, number, number];
  readonly identityfacade_createInstantAssetLockProof: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly identityfacade_createChainAssetLockProof: (a: number, b: number, c: number, d: number) => [number, number, number];
  readonly identityfacade_createIdentityCreateTransition: (a: number, b: number, c: any) => [number, number, number];
  readonly identityfacade_createIdentityTopUpTransition: (a: number, b: any, c: any) => [number, number, number];
  readonly identityfacade_createIdentityCreditWithdrawalTransition: (a: number, b: any, c: bigint, d: number, e: number, f: number, g: number, h: bigint) => [number, number, number];
  readonly identityfacade_createIdentityCreditTransferTransition: (a: number, b: number, c: any, d: bigint, e: bigint) => [number, number, number];
  readonly identityfacade_createIdentityUpdateTransition: (a: number, b: number, c: bigint, d: any) => [number, number, number];
  readonly __wbg_nonconsensuserrorwasm_free: (a: number, b: number) => void;
  readonly __wbg_identitycontractnonceoutofboundserror_free: (a: number, b: number) => void;
  readonly identitycontractnonceoutofboundserror_getIdentityContractNonce: (a: number) => bigint;
  readonly identitycontractnonceoutofboundserror_getCode: (a: number) => number;
  readonly identitycontractnonceoutofboundserror_message: (a: number) => [number, number];
  readonly __wbg_identityfactory_free: (a: number, b: number) => void;
  readonly identityfactory_new: (a: number) => [number, number, number];
  readonly identityfactory_create: (a: number, b: any, c: any) => [number, number, number];
  readonly identityfactory_createFromBuffer: (a: number, b: number, c: number, d: any) => [number, number, number];
  readonly identityfactory_createInstantAssetLockProof: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly identityfactory_createChainAssetLockProof: (a: number, b: number, c: number, d: number) => [number, number, number];
  readonly identityfactory_createIdentityCreateTransition: (a: number, b: number, c: any) => [number, number, number];
  readonly identityfactory_createIdentityTopUpTransition: (a: number, b: any, c: any) => [number, number, number];
  readonly identityfactory_createIdentityCreditTransferTransition: (a: number, b: number, c: any, d: bigint, e: bigint) => [number, number, number];
  readonly identityfactory_createIdentityCreditWithdrawalTransition: (a: number, b: any, c: bigint, d: number, e: number, f: number, g: number, h: bigint) => [number, number, number];
  readonly identityfactory_createIdentityUpdateTransition: (a: number, b: number, c: bigint, d: any) => [number, number, number];
  readonly __wbg_basicecdsaerror_free: (a: number, b: number) => void;
  readonly basicecdsaerror_getCode: (a: number) => number;
  readonly basicecdsaerror_message: (a: number) => [number, number];
  readonly __wbg_documentfacade_free: (a: number, b: number) => void;
  readonly documentfacade_new: (a: number) => number;
  readonly documentfacade_create: (a: number, b: number, c: any, d: number, e: number, f: any) => [number, number, number];
  readonly documentfacade_createExtendedDocumentFromDocumentBuffer: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly documentfacade_createStateTransition: (a: number, b: any, c: any) => [number, number, number];
  readonly __wbg_invaliddocumenttypeindatacontracterror_free: (a: number, b: number) => void;
  readonly invaliddocumenttypeindatacontracterror_new: (a: number, b: number, c: any) => number;
  readonly invaliddocumenttypeindatacontracterror_getType: (a: number) => [number, number];
  readonly invaliddocumenttypeindatacontracterror_getDataContractId: (a: number) => any;
  readonly __wbg_chainassetlockproof_free: (a: number, b: number) => void;
  readonly chainassetlockproof_new: (a: any) => [number, number, number];
  readonly chainassetlockproof_getType: (a: number) => number;
  readonly chainassetlockproof_getCoreChainLockedHeight: (a: number) => number;
  readonly chainassetlockproof_setCoreChainLockedHeight: (a: number, b: number) => void;
  readonly chainassetlockproof_getOutPoint: (a: number) => [number, number, number];
  readonly chainassetlockproof_setOutPoint: (a: number, b: number, c: number) => [number, number];
  readonly chainassetlockproof_toJSON: (a: number) => [number, number, number];
  readonly chainassetlockproof_toObject: (a: number) => [number, number, number];
  readonly chainassetlockproof_createIdentifier: (a: number) => any;
  readonly __wbg_duplicateindexerror_free: (a: number, b: number) => void;
  readonly duplicateindexerror_getDocumentType: (a: number) => [number, number];
  readonly duplicateindexerror_getIndexName: (a: number) => [number, number];
  readonly duplicateindexerror_getCode: (a: number) => number;
  readonly duplicateindexerror_message: (a: number) => [number, number];
  readonly __wbg_duplicatedocumenttransitionswithindiceserror_free: (a: number, b: number) => void;
  readonly duplicatedocumenttransitionswithindiceserror_getDocumentTransitionReferences: (a: number) => any;
  readonly duplicatedocumenttransitionswithindiceserror_getCode: (a: number) => number;
  readonly duplicatedocumenttransitionswithindiceserror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitycredittransferamounterror_free: (a: number, b: number) => void;
  readonly invalididentitycredittransferamounterror_getAmount: (a: number) => bigint;
  readonly invalididentitycredittransferamounterror_getMinAmount: (a: number) => bigint;
  readonly invalididentitycredittransferamounterror_getCode: (a: number) => number;
  readonly invalididentitycredittransferamounterror_message: (a: number) => [number, number];
  readonly __wbg_datacontractfactory_free: (a: number, b: number) => void;
  readonly datacontractfactory_new: (a: number) => number;
  readonly datacontractfactory_create: (a: number, b: number, c: number, d: bigint, e: any, f: any) => [number, number, number];
  readonly datacontractfactory_createFromBuffer: (a: number, b: number, c: number, d: number) => any;
  readonly datacontractfactory_createDataContractCreateTransition: (a: number, b: number) => any;
  readonly __wbg_invaliddatacontractiderror_free: (a: number, b: number) => void;
  readonly invaliddatacontractiderror_getExpectedId: (a: number) => any;
  readonly invaliddatacontractiderror_getInvalidId: (a: number) => any;
  readonly invaliddatacontractiderror_getCode: (a: number) => number;
  readonly invaliddatacontractiderror_message: (a: number) => [number, number];
  readonly __wbg_identitynotfounderror_free: (a: number, b: number) => void;
  readonly identitynotfounderror_new: (a: any) => number;
  readonly identitynotfounderror_getIdentityId: (a: number) => any;
  readonly identitynotfounderror_getCode: (a: number) => number;
  readonly identitynotfounderror_message: (a: number) => [number, number];
  readonly identitynotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datacontractisreadonlyerror_free: (a: number, b: number) => void;
  readonly datacontractisreadonlyerror_new: (a: any) => number;
  readonly datacontractisreadonlyerror_getDataContractId: (a: number) => any;
  readonly datacontractisreadonlyerror_getCode: (a: number) => number;
  readonly datacontractisreadonlyerror_message: (a: number) => [number, number];
  readonly __wbg_incompatibleprotocolversionerror_free: (a: number, b: number) => void;
  readonly incompatibleprotocolversionerror_getParsedProtocolVersion: (a: number) => number;
  readonly incompatibleprotocolversionerror_getMinimalProtocolVersion: (a: number) => number;
  readonly incompatibleprotocolversionerror_getCode: (a: number) => number;
  readonly incompatibleprotocolversionerror_message: (a: number) => [number, number];
  readonly __wbg_documentcreatetransition_free: (a: number, b: number) => void;
  readonly documentcreatetransition_getRevision: (a: number) => bigint;
  readonly documentcreatetransition_INITIAL_REVISION: () => bigint;
  readonly documentcreatetransition_getEntropy: (a: number) => [number, number];
  readonly documentcreatetransition_getIdentityContractNonce: (a: number) => bigint;
  readonly documentcreatetransition_setIdentityContractNonce: (a: number, b: bigint) => void;
  readonly documentcreatetransition_getPrefundedVotingBalance: (a: number) => [number, number, number];
  readonly __wbg_uniqueindiceslimitreachederror_free: (a: number, b: number) => void;
  readonly uniqueindiceslimitreachederror_getDocumentType: (a: number) => [number, number];
  readonly uniqueindiceslimitreachederror_getIndexLimit: (a: number) => number;
  readonly uniqueindiceslimitreachederror_getCode: (a: number) => number;
  readonly uniqueindiceslimitreachederror_message: (a: number) => [number, number];
  readonly __wbg_missingidentitypublickeyidserror_free: (a: number, b: number) => void;
  readonly missingidentitypublickeyidserror_getDuplicatedIds: (a: number) => any;
  readonly __wbg_documentalreadyexistserror_free: (a: number, b: number) => void;
  readonly __wbg_documentnotfounderror_free: (a: number, b: number) => void;
  readonly documentnotfounderror_getDocumentId: (a: number) => any;
  readonly documentnotfounderror_getCode: (a: number) => number;
  readonly documentnotfounderror_message: (a: number) => [number, number];
  readonly __wbg_batchedtransition_free: (a: number, b: number) => void;
  readonly __wbg_datacontracterror_free: (a: number, b: number) => void;
  readonly datacontracterror_getCode: (a: number) => number;
  readonly datacontracterror_message: (a: number) => [number, number];
  readonly __wbg_tokenconfiguration_free: (a: number, b: number) => void;
  readonly tokenconfiguration_keepsHistory: (a: number) => number;
  readonly __wbg_tokenkeepshistoryrules_free: (a: number, b: number) => void;
  readonly tokenkeepshistoryrules_keepsTransferHistory: (a: number) => number;
  readonly tokenkeepshistoryrules_keepsFreezingHistory: (a: number) => number;
  readonly tokenkeepshistoryrules_keepsMintingHistory: (a: number) => number;
  readonly tokenkeepshistoryrules_keepsBurningHistory: (a: number) => number;
  readonly __wbg_documenttransitionsareabsenterror_free: (a: number, b: number) => void;
  readonly documenttransitionsareabsenterror_getCode: (a: number) => number;
  readonly documenttransitionsareabsenterror_message: (a: number) => [number, number];
  readonly __wbg_documenttransitions_free: (a: number, b: number) => void;
  readonly documenttransitions_new: () => number;
  readonly documenttransitions_addTransitionCreate: (a: number, b: number) => void;
  readonly documenttransitions_addTransitionReplace: (a: number, b: number) => void;
  readonly documenttransitions_addTransitionDelete: (a: number, b: number) => void;
  readonly __wbg_documentfactory_free: (a: number, b: number) => void;
  readonly documentfactory_new: (a: number, b: number) => [number, number, number];
  readonly documentfactory_create: (a: number, b: number, c: any, d: number, e: number, f: any) => [number, number, number];
  readonly documentfactory_createStateTransition: (a: number, b: any, c: any) => [number, number, number];
  readonly documentfactory_createExtendedDocumentFromDocumentBuffer: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly __wbg_identitycreditwithdrawaltransition_free: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_new: (a: number) => [number, number, number];
  readonly identitycreditwithdrawaltransition_getType: (a: number) => number;
  readonly identitycreditwithdrawaltransition_identityId: (a: number) => any;
  readonly identitycreditwithdrawaltransition_amount: (a: number) => bigint;
  readonly identitycreditwithdrawaltransition_getIdentityId: (a: number) => any;
  readonly identitycreditwithdrawaltransition_setIdentityId: (a: number, b: any) => void;
  readonly identitycreditwithdrawaltransition_getAmount: (a: number) => bigint;
  readonly identitycreditwithdrawaltransition_setAmount: (a: number, b: bigint) => void;
  readonly identitycreditwithdrawaltransition_getCoreFeePerByte: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setCoreFeePerByte: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_getPooling: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setPooling: (a: number, b: number) => [number, number];
  readonly identitycreditwithdrawaltransition_getOutputScript: (a: number) => any;
  readonly identitycreditwithdrawaltransition_setOutputScript: (a: number, b: number, c: number) => void;
  readonly identitycreditwithdrawaltransition_getNonce: (a: number) => bigint;
  readonly identitycreditwithdrawaltransition_setNonce: (a: number, b: bigint) => void;
  readonly identitycreditwithdrawaltransition_getUserFeeIncrease: (a: number) => number;
  readonly identitycreditwithdrawaltransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitycreditwithdrawaltransition_toObject: (a: number, b: any) => [number, number, number];
  readonly identitycreditwithdrawaltransition_toBuffer: (a: number) => [number, number, number];
  readonly identitycreditwithdrawaltransition_toJSON: (a: number) => [number, number, number];
  readonly identitycreditwithdrawaltransition_getModifiedDataIds: (a: number) => [number, number];
  readonly identitycreditwithdrawaltransition_isDataContractStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_isDocumentStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_isIdentityStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_isVotingStateTransition: (a: number) => number;
  readonly identitycreditwithdrawaltransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly identitycreditwithdrawaltransition_getSignature: (a: number) => any;
  readonly identitycreditwithdrawaltransition_setSignature: (a: number, b: number, c: number) => void;
  readonly identitycreditwithdrawaltransition_getSignaturePublicKeyId: (a: number) => number;
  readonly identitycreditwithdrawaltransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly __wbg_identityassetlocktransactionreplayerror_free: (a: number, b: number) => void;
  readonly identityassetlocktransactionreplayerror_getTransactionId: (a: number) => any;
  readonly identityassetlocktransactionreplayerror_getCode: (a: number) => number;
  readonly identityassetlocktransactionreplayerror_getStateTransitionId: (a: number) => any;
  readonly identityassetlocktransactionreplayerror_getOutputIndex: (a: number) => number;
  readonly __wbg_invalidstatetransitionerror_free: (a: number, b: number) => void;
  readonly invalidstatetransitionerror_new_wasm: (a: number, b: number, c: any) => [number, number, number];
  readonly invalidstatetransitionerror_getErrors: (a: number) => [number, number];
  readonly invalidstatetransitionerror_getRawStateTransition: (a: number) => any;
  readonly __wbg_tryingtoreplaceimmutabledocumenterror_free: (a: number, b: number) => void;
  readonly tryingtoreplaceimmutabledocumenterror_new: (a: number) => number;
  readonly __wbg_documentnotprovidederror_free: (a: number, b: number) => void;
  readonly __wbg_basicblserror_free: (a: number, b: number) => void;
  readonly basicblserror_getCode: (a: number) => number;
  readonly basicblserror_message: (a: number) => [number, number];
  readonly __wbg_invalidinitialrevisionerror_free: (a: number, b: number) => void;
  readonly invalidinitialrevisionerror_new: (a: number) => number;
  readonly invalidinitialrevisionerror_getDocument: (a: number) => number;
  readonly __wbg_tokenconfigupdatetransition_free: (a: number, b: number) => void;
  readonly tokenconfigupdatetransition_getPublicNote: (a: number) => [number, number];
  readonly __wbg_incompatiblere2patternerror_free: (a: number, b: number) => void;
  readonly incompatiblere2patternerror_getPattern: (a: number) => [number, number];
  readonly incompatiblere2patternerror_getPath: (a: number) => [number, number];
  readonly incompatiblere2patternerror_getMessage: (a: number) => [number, number];
  readonly incompatiblere2patternerror_getCode: (a: number) => number;
  readonly incompatiblere2patternerror_message: (a: number) => [number, number];
  readonly __wbg_datacontractcreatetransition_free: (a: number, b: number) => void;
  readonly datacontractcreatetransition_new: (a: any) => [number, number, number];
  readonly datacontractcreatetransition_getDataContract: (a: number) => number;
  readonly datacontractcreatetransition_getIdentityNonce: (a: number) => bigint;
  readonly datacontractcreatetransition_getOwnerId: (a: number) => any;
  readonly datacontractcreatetransition_getType: (a: number) => number;
  readonly datacontractcreatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly datacontractcreatetransition_getUserFeeIncrease: (a: number) => number;
  readonly datacontractcreatetransition_getSignature: (a: number) => any;
  readonly datacontractcreatetransition_getSignaturePublicKeyId: (a: number) => number;
  readonly datacontractcreatetransition_toBuffer: (a: number) => [number, number, number];
  readonly datacontractcreatetransition_fromBuffer: (a: number, b: number) => [number, number, number];
  readonly datacontractcreatetransition_getModifiedDataIds: (a: number) => [number, number];
  readonly datacontractcreatetransition_isDataContractStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_isDocumentStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_isIdentityStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_isVotingStateTransition: (a: number) => number;
  readonly datacontractcreatetransition_toObject: (a: number, b: number) => [number, number, number];
  readonly datacontractcreatetransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly datacontractcreatetransition_verifySignature: (a: number, b: number, c: any) => [number, number, number];
  readonly __wbg_tokentransition_free: (a: number, b: number) => void;
  readonly tokentransition_getTransitionType: (a: number) => number;
  readonly tokentransition_getTokenId: (a: number) => any;
  readonly tokentransition_getTokenContractPosition: (a: number) => any;
  readonly tokentransition_getDataContractId: (a: number) => any;
  readonly tokentransition_getHistoricalDocumentTypeName: (a: number) => [number, number];
  readonly tokentransition_getHistoricalDocumentId: (a: number, b: any) => any;
  readonly tokentransition_getIdentityContractNonce: (a: number) => bigint;
  readonly tokentransition_toTransition: (a: number) => any;
  readonly __wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_free: (a: number, b: number) => void;
  readonly notimplementedidentitycreditwithdrawaltransitionpoolingerror_getPooling: (a: number) => number;
  readonly notimplementedidentitycreditwithdrawaltransitionpoolingerror_getCode: (a: number) => number;
  readonly notimplementedidentitycreditwithdrawaltransitionpoolingerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentityerror_free: (a: number, b: number) => void;
  readonly invalididentityerror_getErrors: (a: number) => [number, number];
  readonly invalididentityerror_getRawIdentity: (a: number) => any;
  readonly __wbg_missingdocumenttypeerror_free: (a: number, b: number) => void;
  readonly missingdocumenttypeerror_getCode: (a: number) => number;
  readonly missingdocumenttypeerror_message: (a: number) => [number, number];
  readonly __wbg_identityassetlocktransactionisnotfounderror_free: (a: number, b: number) => void;
  readonly identityassetlocktransactionisnotfounderror_getTransactionId: (a: number) => any;
  readonly identityassetlocktransactionisnotfounderror_getCode: (a: number) => number;
  readonly identityassetlocktransactionisnotfounderror_message: (a: number) => [number, number];
  readonly __wbg_valueerror_free: (a: number, b: number) => void;
  readonly valueerror_getMessage: (a: number) => [number, number];
  readonly valueerror_getCode: (a: number) => number;
  readonly valueerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_free: (a: number, b: number) => void;
  readonly invalididentityassetlockproofchainlockvalidationerrorwasm_getTransactionId: (a: number) => any;
  readonly invalididentityassetlockproofchainlockvalidationerrorwasm_getHeightReportedNotLocked: (a: number) => number;
  readonly __wbg_invalididentityassetlocktransactionerror_free: (a: number, b: number) => void;
  readonly invalididentityassetlocktransactionerror_getErrorMessage: (a: number) => [number, number];
  readonly invalididentityassetlocktransactionerror_getCode: (a: number) => number;
  readonly invalididentityassetlocktransactionerror_message: (a: number) => [number, number];
  readonly __wbg_undefinedindexpropertyerror_free: (a: number, b: number) => void;
  readonly undefinedindexpropertyerror_getDocumentType: (a: number) => [number, number];
  readonly undefinedindexpropertyerror_getIndexName: (a: number) => [number, number];
  readonly undefinedindexpropertyerror_getPropertyName: (a: number) => [number, number];
  readonly undefinedindexpropertyerror_getCode: (a: number) => number;
  readonly undefinedindexpropertyerror_message: (a: number) => [number, number];
  readonly __wbg_balanceisnotenougherror_free: (a: number, b: number) => void;
  readonly balanceisnotenougherror_new: (a: bigint, b: bigint) => number;
  readonly balanceisnotenougherror_getBalance: (a: number) => bigint;
  readonly balanceisnotenougherror_getFee: (a: number) => bigint;
  readonly balanceisnotenougherror_getCode: (a: number) => number;
  readonly balanceisnotenougherror_message: (a: number) => [number, number];
  readonly balanceisnotenougherror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identityassetlockprooflockedtransactionmismatcherror_free: (a: number, b: number) => void;
  readonly identityassetlockprooflockedtransactionmismatcherror_getInstantLockTransactionId: (a: number) => any;
  readonly identityassetlockprooflockedtransactionmismatcherror_getAssetLockTransactionId: (a: number) => any;
  readonly identityassetlockprooflockedtransactionmismatcherror_getCode: (a: number) => number;
  readonly identityassetlockprooflockedtransactionmismatcherror_message: (a: number) => [number, number];
  readonly __wbg_tokenfreezetransition_free: (a: number, b: number) => void;
  readonly tokenfreezetransition_getFrozenIdentityId: (a: number) => any;
  readonly tokenfreezetransition_getPublicNote: (a: number) => [number, number];
  readonly getLatestProtocolVersion: () => number;
  readonly __wbg_identityalreadyexistserror_free: (a: number, b: number) => void;
  readonly identityalreadyexistserror_getIdentityId: (a: number) => any;
  readonly identityalreadyexistserror_getCode: (a: number) => number;
  readonly identityalreadyexistserror_message: (a: number) => [number, number];
  readonly __wbg_missingdatacontractiderror_free: (a: number, b: number) => void;
  readonly missingdatacontractiderror_getCode: (a: number) => number;
  readonly missingdatacontractiderror_message: (a: number) => [number, number];
  readonly __wbg_datacontractgenericerror_free: (a: number, b: number) => void;
  readonly datacontractgenericerror_getMessage: (a: number) => [number, number];
  readonly __wbg_invalidactionerror_free: (a: number, b: number) => void;
  readonly invalidactionterror_new: (a: any) => number;
  readonly __wbg_invalididentitypublickeydataerror_free: (a: number, b: number) => void;
  readonly invalididentitypublickeydataerror_getPublicKeyId: (a: number) => number;
  readonly invalididentitypublickeydataerror_getValidationError: (a: number) => [number, number];
  readonly invalididentitypublickeydataerror_getCode: (a: number) => number;
  readonly invalididentitypublickeydataerror_message: (a: number) => [number, number];
  readonly __wbg_identityinsufficientbalanceerror_free: (a: number, b: number) => void;
  readonly identityinsufficientbalanceerror_getIdentityId: (a: number) => any;
  readonly identityinsufficientbalanceerror_getBalance: (a: number) => bigint;
  readonly identityinsufficientbalanceerror_getCode: (a: number) => number;
  readonly identityinsufficientbalanceerror_message: (a: number) => [number, number];
  readonly __wbg_documenttransition_free: (a: number, b: number) => void;
  readonly documenttransition_getId: (a: number) => any;
  readonly documenttransition_getType: (a: number) => [number, number];
  readonly documenttransition_getData: (a: number) => any;
  readonly documenttransition_getAction: (a: number) => number;
  readonly documenttransition_getDataContractId: (a: number) => any;
  readonly documenttransition_setDataContractId: (a: number, b: any) => [number, number];
  readonly documenttransition_getIdentityContractNonce: (a: number) => any;
  readonly documenttransition_getRevision: (a: number) => [number, bigint];
  readonly documenttransition_getEntropy: (a: number) => [number, number];
  readonly documenttransition_get_price: (a: number) => [number, bigint];
  readonly documenttransition_getReceiverId: (a: number) => any;
  readonly documenttransition_setRevision: (a: number, b: bigint) => void;
  readonly documenttransition_hasPrefundedBalance: (a: number) => number;
  readonly documenttransition_getPrefundedVotingBalance: (a: number) => [number, number, number];
  readonly __wbg_protocolversionparsingerror_free: (a: number, b: number) => void;
  readonly protocolversionparsingerror_new: (a: number, b: number) => number;
  readonly protocolversionparsingerror_getParsingError: (a: number) => [number, number];
  readonly protocolversionparsingerror_getCode: (a: number) => number;
  readonly protocolversionparsingerror_message: (a: number) => [number, number];
  readonly protocolversionparsingerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidindexpropertytypeerror_free: (a: number, b: number) => void;
  readonly invalidindexpropertytypeerror_getDocumentType: (a: number) => [number, number];
  readonly invalidindexpropertytypeerror_getIndexName: (a: number) => [number, number];
  readonly invalidindexpropertytypeerror_getPropertyName: (a: number) => [number, number];
  readonly invalidindexpropertytypeerror_getPropertyType: (a: number) => [number, number];
  readonly invalidindexpropertytypeerror_getCode: (a: number) => number;
  readonly invalidindexpropertytypeerror_message: (a: number) => [number, number];
  readonly __wbg_identityupdatetransition_free: (a: number, b: number) => void;
  readonly identityupdatetransition_new: (a: number) => [number, number, number];
  readonly identityupdatetransition_setPublicKeysToAdd: (a: number, b: number, c: number) => [number, number];
  readonly identityupdatetransition_getPublicKeysToAdd: (a: number) => [number, number];
  readonly identityupdatetransition_addPublicKeys: (a: number) => [number, number];
  readonly identityupdatetransition_getPublicKeyIdsToDisable: (a: number) => [number, number];
  readonly identityupdatetransition_setPublicKeyIdsToDisable: (a: number, b: number, c: number) => void;
  readonly identityupdatetransition_getType: (a: number) => number;
  readonly identityupdatetransition_identityId: (a: number) => any;
  readonly identityupdatetransition_getIdentityId: (a: number) => any;
  readonly identityupdatetransition_setIdentityId: (a: number, b: any) => void;
  readonly identityupdatetransition_getOwnerId: (a: number) => any;
  readonly identityupdatetransition_getUserFeeIncrease: (a: number) => number;
  readonly identityupdatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identityupdatetransition_getIdentityContractNonce: (a: number) => bigint;
  readonly identityupdatetransition_setIdentityContractNonce: (a: number, b: bigint) => void;
  readonly identityupdatetransition_toObject: (a: number, b: any) => [number, number, number];
  readonly identityupdatetransition_toBuffer: (a: number) => [number, number, number];
  readonly identityupdatetransition_toJSON: (a: number) => [number, number, number];
  readonly identityupdatetransition_getModifiedDataIds: (a: number) => [number, number];
  readonly identityupdatetransition_isDataContractStateTransition: (a: number) => number;
  readonly identityupdatetransition_isDocumentStateTransition: (a: number) => number;
  readonly identityupdatetransition_isIdentityStateTransition: (a: number) => number;
  readonly identityupdatetransition_isVotingStateTransition: (a: number) => number;
  readonly identityupdatetransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly identityupdatetransition_setSignaturePublicKeyId: (a: number, b: number) => void;
  readonly identityupdatetransition_getSignature: (a: number) => any;
  readonly identityupdatetransition_getSignaturePublicKeyId: (a: number) => number;
  readonly identityupdatetransition_setSignature: (a: number, b: number, c: number) => void;
  readonly identityupdatetransition_getRevision: (a: number) => bigint;
  readonly identityupdatetransition_setRevision: (a: number, b: bigint) => void;
  readonly identityupdatetransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly identityupdatetransition_verifySignature: (a: number, b: number, c: any) => [number, number, number];
  readonly __wbg_identitypublickeyisdisablederror_free: (a: number, b: number) => void;
  readonly identitypublickeyisdisablederror_getPublicKeyIndex: (a: number) => number;
  readonly identitypublickeyisdisablederror_getCode: (a: number) => number;
  readonly identitypublickeyisdisablederror_message: (a: number) => [number, number];
  readonly __wbg_identity_free: (a: number, b: number) => void;
  readonly identity_new: (a: number) => [number, number, number];
  readonly identity_getId: (a: number) => any;
  readonly identity_setId: (a: number, b: any) => void;
  readonly identity_setPublicKeys: (a: number, b: any) => [number, number, number];
  readonly identity_getPublicKeys: (a: number) => [number, number];
  readonly identity_getPublicKeyById: (a: number, b: number) => number;
  readonly identity_balance: (a: number) => bigint;
  readonly identity_getBalance: (a: number) => bigint;
  readonly identity_setBalance: (a: number, b: bigint) => void;
  readonly identity_increaseBalance: (a: number, b: bigint) => bigint;
  readonly identity_reduceBalance: (a: number, b: bigint) => bigint;
  readonly identity_setRevision: (a: number, b: bigint) => void;
  readonly identity_getRevision: (a: number) => bigint;
  readonly identity_setMetadata: (a: number, b: any) => [number, number];
  readonly identity_getMetadata: (a: number) => number;
  readonly identity_from: (a: any) => number;
  readonly identity_toJSON: (a: number) => [number, number, number];
  readonly identity_toObject: (a: number) => [number, number, number];
  readonly identity_toBuffer: (a: number) => [number, number, number];
  readonly identity_hash: (a: number) => [number, number, number, number];
  readonly identity_addPublicKey: (a: number, b: number) => void;
  readonly identity_addPublicKeys: (a: number, b: any) => [number, number];
  readonly identity_getPublicKeyMaxId: (a: number) => number;
  readonly identity_fromBuffer: (a: number, b: number) => [number, number, number];
  readonly __wbg_invalidassetlockproofcorechainheighterror_free: (a: number, b: number) => void;
  readonly invalidassetlockproofcorechainheighterror_getProofCoreChainLockedHeight: (a: number) => number;
  readonly invalidassetlockproofcorechainheighterror_getCurrentCoreChainLockedHeight: (a: number) => number;
  readonly invalidassetlockproofcorechainheighterror_getCode: (a: number) => number;
  readonly invalidassetlockproofcorechainheighterror_message: (a: number) => [number, number];
  readonly __wbg_invalidsignaturepublickeypurposeerror_free: (a: number, b: number) => void;
  readonly invalidsignaturepublickeypurposeerror_getPublicKeyPurpose: (a: number) => number;
  readonly invalidsignaturepublickeypurposeerror_getKeyPurposeRequirement: (a: number) => any;
  readonly invalidsignaturepublickeypurposeerror_getCode: (a: number) => number;
  readonly invalidsignaturepublickeypurposeerror_message: (a: number) => [number, number];
  readonly __wbg_identitycreatetransition_free: (a: number, b: number) => void;
  readonly identitycreatetransition_new: (a: number) => [number, number, number];
  readonly identitycreatetransition_setAssetLockProof: (a: number, b: any) => [number, number];
  readonly identitycreatetransition_assetLockProof: (a: number) => any;
  readonly identitycreatetransition_getAssetLockProof: (a: number) => any;
  readonly identitycreatetransition_setPublicKeys: (a: number, b: number, c: number) => [number, number];
  readonly identitycreatetransition_addPublicKeys: (a: number, b: number, c: number) => [number, number];
  readonly identitycreatetransition_getPublicKeys: (a: number) => [number, number];
  readonly identitycreatetransition_publicKeys: (a: number) => [number, number];
  readonly identitycreatetransition_getType: (a: number) => number;
  readonly identitycreatetransition_identityId: (a: number) => any;
  readonly identitycreatetransition_getIdentityId: (a: number) => any;
  readonly identitycreatetransition_getOwnerId: (a: number) => any;
  readonly identitycreatetransition_getUserFeeIncrease: (a: number) => number;
  readonly identitycreatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitycreatetransition_toObject: (a: number, b: any) => [number, number, number];
  readonly identitycreatetransition_toBuffer: (a: number) => [number, number, number];
  readonly identitycreatetransition_toJSON: (a: number) => [number, number, number];
  readonly identitycreatetransition_getModifiedDataIds: (a: number) => [number, number];
  readonly identitycreatetransition_isDataContractStateTransition: (a: number) => number;
  readonly identitycreatetransition_isDocumentStateTransition: (a: number) => number;
  readonly identitycreatetransition_isIdentityStateTransition: (a: number) => number;
  readonly identitycreatetransition_isVotingStateTransition: (a: number) => number;
  readonly identitycreatetransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly identitycreatetransition_getSignature: (a: number) => any;
  readonly identitycreatetransition_setSignature: (a: number, b: number, c: number) => void;
  readonly __wbg_masternodevotetransition_free: (a: number, b: number) => void;
  readonly masternodevotetransition_new: (a: number) => [number, number, number];
  readonly masternodevotetransition_getOwnerId: (a: number) => any;
  readonly masternodevotetransition_getType: (a: number) => number;
  readonly masternodevotetransition_getProTxHash: (a: number) => any;
  readonly masternodevotetransition_setProTxHash: (a: number, b: any) => void;
  readonly masternodevotetransition_toObject: (a: number, b: any) => [number, number, number];
  readonly masternodevotetransition_toBuffer: (a: number) => [number, number, number];
  readonly masternodevotetransition_toJSON: (a: number) => [number, number, number];
  readonly masternodevotetransition_getModifiedDataIds: (a: number) => [number, number];
  readonly masternodevotetransition_isDataContractStateTransition: (a: number) => number;
  readonly masternodevotetransition_isDocumentStateTransition: (a: number) => number;
  readonly masternodevotetransition_isIdentityStateTransition: (a: number) => number;
  readonly masternodevotetransition_isVotingStateTransition: (a: number) => number;
  readonly masternodevotetransition_getUserFeeIncrease: (a: number) => number;
  readonly masternodevotetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly masternodevotetransition_getIdentityContractNonce: (a: number) => bigint;
  readonly masternodevotetransition_getContestedDocumentResourceVotePoll: (a: number) => any;
  readonly masternodevotetransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly masternodevotetransition_getSignature: (a: number) => any;
  readonly masternodevotetransition_setSignature: (a: number, b: number, c: number) => void;
  readonly masternodevotetransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly __wbg_datacontractnotpresentnotconsensuserror_free: (a: number, b: number) => void;
  readonly datacontractnotpresentnotconsensuserror_getDataContractId: (a: number) => any;
  readonly __wbg_invaliddocumenttransitioniderror_free: (a: number, b: number) => void;
  readonly invaliddocumenttransitioniderror_getExpectedId: (a: number) => any;
  readonly invaliddocumenttransitioniderror_getInvalidId: (a: number) => any;
  readonly invaliddocumenttransitioniderror_getCode: (a: number) => number;
  readonly invaliddocumenttransitioniderror_message: (a: number) => [number, number];
  readonly __wbg_unknownassetlockprooftypeerror_free: (a: number, b: number) => void;
  readonly unknownassetlockprooftypeerror_getType: (a: number) => number;
  readonly __wbg_invaliddatacontracterror_free: (a: number, b: number) => void;
  readonly invaliddatacontracterror_getErrors: (a: number) => [number, number];
  readonly invaliddatacontracterror_getRawDataContract: (a: number) => any;
  readonly invaliddatacontracterror_getMessage: (a: number) => [number, number];
  readonly __wbg_publickeysecuritylevelnotmeterror_free: (a: number, b: number) => void;
  readonly publickeysecuritylevelnotmeterror_getPublicKeySecurityLevel: (a: number) => number;
  readonly publickeysecuritylevelnotmeterror_getKeySecurityLevelRequirement: (a: number) => number;
  readonly publickeysecuritylevelnotmeterror_getCode: (a: number) => number;
  readonly publickeysecuritylevelnotmeterror_message: (a: number) => [number, number];
  readonly __wbg_datatriggerinvalidresulterror_free: (a: number, b: number) => void;
  readonly datatriggerinvalidresulterror_getDataContractId: (a: number) => any;
  readonly datatriggerinvalidresulterror_getDocumentId: (a: number) => any;
  readonly datatriggerinvalidresulterror_getCode: (a: number) => number;
  readonly datatriggerinvalidresulterror_message: (a: number) => [number, number];
  readonly datatriggerinvalidresulterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datatriggeractioninvalidresulterror_free: (a: number, b: number) => void;
  readonly datatriggeractioninvalidresulterror_getDataContractId: (a: number) => any;
  readonly datatriggeractioninvalidresulterror_getDocumentTransitionId: (a: number) => any;
  readonly datatriggeractioninvalidresulterror_getOwnerId: (a: number) => any;
  readonly datatriggeractioninvalidresulterror_getCode: (a: number) => number;
  readonly __wbg_invaliddocumentactionerror_free: (a: number, b: number) => void;
  readonly __wbg_nodocumentssuppliederror_free: (a: number, b: number) => void;
  readonly nodocumentssuppliederror_new: () => number;
  readonly __wbg_duplicateindexnameerror_free: (a: number, b: number) => void;
  readonly duplicateindexnameerror_getDocumentType: (a: number) => [number, number];
  readonly duplicateindexnameerror_getDuplicateIndexName: (a: number) => [number, number];
  readonly duplicateindexnameerror_getCode: (a: number) => number;
  readonly duplicateindexnameerror_message: (a: number) => [number, number];
  readonly __wbg_statetransitionmaxsizeexceedederror_free: (a: number, b: number) => void;
  readonly statetransitionmaxsizeexceedederror_getActualSizeBytes: (a: number) => bigint;
  readonly statetransitionmaxsizeexceedederror_getMaxSizeBytes: (a: number) => bigint;
  readonly statetransitionmaxsizeexceedederror_getCode: (a: number) => number;
  readonly statetransitionmaxsizeexceedederror_message: (a: number) => [number, number];
  readonly __wbg_invaliddocumentrevisionerror_free: (a: number, b: number) => void;
  readonly invaliddocumentrevisionerror_getDocumentId: (a: number) => any;
  readonly invaliddocumentrevisionerror_getPreviousRevision: (a: number) => [number, bigint];
  readonly invaliddocumentrevisionerror_getDesiredRevision: (a: number) => bigint;
  readonly invaliddocumentrevisionerror_getCode: (a: number) => number;
  readonly invaliddocumentrevisionerror_message: (a: number) => [number, number];
  readonly __wbg_invalidstatetransitionsignatureerror_free: (a: number, b: number) => void;
  readonly invalidstatetransitionsignatureerror_getCode: (a: number) => number;
  readonly invalidstatetransitionsignatureerror_message: (a: number) => [number, number];
  readonly __wbg_identitypublickeyisreadonlyerror_free: (a: number, b: number) => void;
  readonly identitypublickeyisreadonlyerror_getKeyId: (a: number) => number;
  readonly identitypublickeyisreadonlyerror_getPublicKeyIndex: (a: number) => number;
  readonly identitypublickeyisreadonlyerror_getCode: (a: number) => number;
  readonly identitypublickeyisreadonlyerror_message: (a: number) => [number, number];
  readonly __wbg_dashplatformprotocol_free: (a: number, b: number) => void;
  readonly dashplatformprotocol_new: (a: any, b: number) => [number, number, number];
  readonly dashplatformprotocol_data_contract: (a: number) => number;
  readonly dashplatformprotocol_document: (a: number) => number;
  readonly dashplatformprotocol_identity: (a: number) => number;
  readonly dashplatformprotocol_state_transition: (a: number) => number;
  readonly dashplatformprotocol_protocol_version: (a: number) => number;
  readonly __wbg_assetlocktransactionisnotfounderror_free: (a: number, b: number) => void;
  readonly assetlocktransactionisnotfounderror_getTransactionId: (a: number) => any;
  readonly __wbg_invaliddocumenttransitionactionerror_free: (a: number, b: number) => void;
  readonly invaliddocumenttransitionactionerror_getAction: (a: number) => [number, number];
  readonly invaliddocumenttransitionactionerror_getCode: (a: number) => number;
  readonly invaliddocumenttransitionactionerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitypublickeyiderror_free: (a: number, b: number) => void;
  readonly invalididentitypublickeyiderror_getId: (a: number) => number;
  readonly invalididentitypublickeyiderror_getCode: (a: number) => number;
  readonly invalididentitypublickeyiderror_message: (a: number) => [number, number];
  readonly __wbg_invalidcompoundindexerror_free: (a: number, b: number) => void;
  readonly invalidcompoundindexerror_getDocumentType: (a: number) => [number, number];
  readonly invalidcompoundindexerror_getIndexName: (a: number) => [number, number];
  readonly invalidcompoundindexerror_getCode: (a: number) => number;
  readonly invalidcompoundindexerror_message: (a: number) => [number, number];
  readonly __wbg_identitypublickeywithwitness_free: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_new: (a: number) => [number, number, number];
  readonly identitypublickeywithwitness_getId: (a: number) => number;
  readonly identitypublickeywithwitness_setId: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_getType: (a: number) => number;
  readonly identitypublickeywithwitness_setType: (a: number, b: number) => [number, number];
  readonly identitypublickeywithwitness_setData: (a: number, b: number, c: number) => [number, number];
  readonly identitypublickeywithwitness_getData: (a: number) => any;
  readonly identitypublickeywithwitness_setPurpose: (a: number, b: number) => [number, number];
  readonly identitypublickeywithwitness_getPurpose: (a: number) => number;
  readonly identitypublickeywithwitness_setSecurityLevel: (a: number, b: number) => [number, number];
  readonly identitypublickeywithwitness_setContractBounds: (a: number, b: any, c: number, d: number) => void;
  readonly identitypublickeywithwitness_getSecurityLevel: (a: number) => number;
  readonly identitypublickeywithwitness_setReadOnly: (a: number, b: number) => void;
  readonly identitypublickeywithwitness_isReadOnly: (a: number) => number;
  readonly identitypublickeywithwitness_setSignature: (a: number, b: number, c: number) => void;
  readonly identitypublickeywithwitness_getSignature: (a: number) => [number, number];
  readonly identitypublickeywithwitness_hash: (a: number) => [number, number, number, number];
  readonly identitypublickeywithwitness_toJSON: (a: number) => [number, number, number];
  readonly identitypublickeywithwitness_toObject: (a: number, b: number) => [number, number, number];
  readonly __wbg_invalididentitynonceerror_free: (a: number, b: number) => void;
  readonly invalididentitynonceerror_getIdentityId: (a: number) => any;
  readonly invalididentitynonceerror_getCurrentIdentityContractNonce: (a: number) => [number, bigint];
  readonly invalididentitynonceerror_getSettingIdentityContractNonce: (a: number) => bigint;
  readonly invalididentitynonceerror_getError: (a: number) => any;
  readonly invalididentitynonceerror_getCode: (a: number) => number;
  readonly invalididentitynonceerror_message: (a: number) => [number, number];
  readonly __wbg_duplicatedidentitypublickeystateerror_free: (a: number, b: number) => void;
  readonly duplicatedidentitypublickeystateerror_getDuplicatedPublicKeysIds: (a: number) => any;
  readonly duplicatedidentitypublickeystateerror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeystateerror_message: (a: number) => [number, number];
  readonly __wbg_datatriggerexecutionerror_free: (a: number, b: number) => void;
  readonly datatriggerexecutionerror_getDataContractId: (a: number) => any;
  readonly datatriggerexecutionerror_getDocumentId: (a: number) => any;
  readonly datatriggerexecutionerror_getMessage: (a: number) => [number, number];
  readonly datatriggerexecutionerror_getCode: (a: number) => number;
  readonly datatriggerexecutionerror_message: (a: number) => [number, number];
  readonly datatriggerexecutionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datatriggeractionexecutionerror_free: (a: number, b: number) => void;
  readonly datatriggeractionexecutionerror_getDataContractId: (a: number) => any;
  readonly datatriggeractionexecutionerror_getExecutionError: (a: number) => any;
  readonly datatriggeractionexecutionerror_getDocumentTransitionId: (a: number) => any;
  readonly datatriggeractionexecutionerror_getMessage: (a: number) => [number, number];
  readonly datatriggeractionexecutionerror_getOwnerId: (a: number) => any;
  readonly datatriggeractionexecutionerror_getCode: (a: number) => number;
  readonly __wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_free: (a: number, b: number) => void;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getTransactionId: (a: number) => any;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getOutputIndex: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getInitialAssetLockCredits: (a: number) => bigint;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getCreditsLeft: (a: number) => bigint;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getCreditsRequired: (a: number) => bigint;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_getCode: (a: number) => number;
  readonly identityassetlocktransactionoutpointnotenoughbalanceerror_message: (a: number) => [number, number];
  readonly __wbg_documentnorevisionerror_free: (a: number, b: number) => void;
  readonly documentnorevisionerror_new: (a: number) => number;
  readonly documentnorevisionerror_getDocument: (a: number) => number;
  readonly __wbg_unsupportedprotocolversionerror_free: (a: number, b: number) => void;
  readonly unsupportedprotocolversionerror_getParsedProtocolVersion: (a: number) => number;
  readonly unsupportedprotocolversionerror_getLatestVersion: (a: number) => number;
  readonly unsupportedprotocolversionerror_getCode: (a: number) => number;
  readonly unsupportedprotocolversionerror_message: (a: number) => [number, number];
  readonly __wbg_invalidinstantassetlockproofsignatureerror_free: (a: number, b: number) => void;
  readonly invalidinstantassetlockproofsignatureerror_getCode: (a: number) => number;
  readonly invalidinstantassetlockproofsignatureerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitypublickeytypeerror_free: (a: number, b: number) => void;
  readonly invalididentitypublickeytypeerror_new: (a: number) => [number, number, number];
  readonly invalididentitypublickeytypeerror_getPublicKeyType: (a: number) => number;
  readonly invalididentitypublickeytypeerror_getCode: (a: number) => number;
  readonly invalididentitypublickeytypeerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_free: (a: number, b: number) => void;
  readonly invalididentitycreditwithdrawaltransitionoutputscripterror_getCode: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitionoutputscripterror_message: (a: number) => [number, number];
  readonly __wbg_datacontractfacade_free: (a: number, b: number) => void;
  readonly datacontractfacade_create: (a: number, b: number, c: number, d: bigint, e: any, f: number) => [number, number, number];
  readonly datacontractfacade_createFromObject: (a: number, b: any, c: number) => any;
  readonly datacontractfacade_createFromBuffer: (a: number, b: number, c: number, d: number) => any;
  readonly datacontractfacade_createDataContractCreateTransition: (a: number, b: number) => [number, number, number];
  readonly datacontractfacade_createDataContractUpdateTransition: (a: number, b: number, c: bigint) => [number, number, number];
  readonly __wbg_tokensetpricefordirectpurchasetransition_free: (a: number, b: number) => void;
  readonly tokensetpricefordirectpurchasetransition_getPublicNote: (a: number) => [number, number];
  readonly tokensetpricefordirectpurchasetransition_getPrice: (a: number) => [number, bigint];
  readonly __wbg_platformvalueerror_free: (a: number, b: number) => void;
  readonly platformvalueerror_getMessage: (a: number) => [number, number];
  readonly platformvalueerror_toString: (a: number) => [number, number];
  readonly platformvalueerror_valueOf: (a: number) => [number, number];
  readonly __wbg_duplicateuniqueindexerror_free: (a: number, b: number) => void;
  readonly duplicateuniqueindexerror_getDocumentId: (a: number) => any;
  readonly duplicateuniqueindexerror_getDuplicatingProperties: (a: number) => any;
  readonly duplicateuniqueindexerror_getCode: (a: number) => number;
  readonly duplicateuniqueindexerror_message: (a: number) => [number, number];
  readonly __wbg_tryingtodeleteimmutabledocumenterror_free: (a: number, b: number) => void;
  readonly tryingtodeleteimmutabledocumenterror_new: (a: number) => number;
  readonly __wbg_missingdocumenttransitiontypeerror_free: (a: number, b: number) => void;
  readonly missingdocumenttransitiontypeerror_getCode: (a: number) => number;
  readonly missingdocumenttransitiontypeerror_message: (a: number) => [number, number];
  readonly __wbg_maxidentitypublickeylimitreachederror_free: (a: number, b: number) => void;
  readonly maxidentitypublickeylimitreachederror_getMaxItems: (a: number) => number;
  readonly maxidentitypublickeylimitreachederror_getCode: (a: number) => number;
  readonly maxidentitypublickeylimitreachederror_message: (a: number) => [number, number];
  readonly __wbg_duplicatedidentitypublickeyidstateerror_free: (a: number, b: number) => void;
  readonly duplicatedidentitypublickeyidstateerror_getDuplicatedIds: (a: number) => any;
  readonly duplicatedidentitypublickeyidstateerror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeyidstateerror_message: (a: number) => [number, number];
  readonly __wbg_assetlockproof_free: (a: number, b: number) => void;
  readonly assetlockproof_new: (a: any) => [number, number, number];
  readonly assetlockproof_createIdentifier: (a: number) => [number, number, number];
  readonly assetlockproof_toObject: (a: number) => [number, number, number];
  readonly createAssetLockProofInstance: (a: any) => [number, number, number];
  readonly __wbg_signatureshouldnotbepresenterror_free: (a: number, b: number) => void;
  readonly signatureshouldnotbepresenterror_getCode: (a: number) => number;
  readonly signatureshouldnotbepresenterror_message: (a: number) => [number, number];
  readonly __wbg_datacontractnotpresenterror_free: (a: number, b: number) => void;
  readonly datacontractnotpresenterror_getDataContractId: (a: number) => any;
  readonly datacontractnotpresenterror_getCode: (a: number) => number;
  readonly datacontractnotpresenterror_message: (a: number) => [number, number];
  readonly __wbg_documentowneridmismatcherror_free: (a: number, b: number) => void;
  readonly documentowneridmismatcherror_getDocumentId: (a: number) => any;
  readonly documentowneridmismatcherror_getDocumentOwnerId: (a: number) => any;
  readonly documentowneridmismatcherror_getExistingDocumentOwnerId: (a: number) => any;
  readonly documentowneridmismatcherror_getCode: (a: number) => number;
  readonly documentowneridmismatcherror_message: (a: number) => [number, number];
  readonly __wbg_invalidassetlockprooftransactionheighterror_free: (a: number, b: number) => void;
  readonly invalidassetlockprooftransactionheighterror_getProofCoreChainLockedHeight: (a: number) => number;
  readonly invalidassetlockprooftransactionheighterror_getTransactionHeight: (a: number) => number;
  readonly invalidassetlockprooftransactionheighterror_getCode: (a: number) => number;
  readonly invalidassetlockprooftransactionheighterror_message: (a: number) => [number, number];
  readonly __wbg_missingdocumenttransitionactionerror_free: (a: number, b: number) => void;
  readonly missingdocumenttransitionactionerror_getCode: (a: number) => number;
  readonly missingdocumenttransitionactionerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitypublickeysecuritylevelerror_free: (a: number, b: number) => void;
  readonly invalididentitypublickeysecuritylevelerror_getPublicKeyId: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_getPublicKeyPurpose: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_getPublicKeySecurityLevel: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_getCode: (a: number) => number;
  readonly invalididentitypublickeysecuritylevelerror_message: (a: number) => [number, number];
  readonly __wbg_invalidjsonschemareferror_free: (a: number, b: number) => void;
  readonly invalidjsonschemareferror_getRefError: (a: number) => [number, number];
  readonly invalidjsonschemareferror_getCode: (a: number) => number;
  readonly invalidjsonschemareferror_message: (a: number) => [number, number];
  readonly __wbg_identityassetlocktransactionoutputnotfounderror_free: (a: number, b: number) => void;
  readonly identityassetlocktransactionoutputnotfounderror_getOutputIndex: (a: number) => number;
  readonly identityassetlocktransactionoutputnotfounderror_getCode: (a: number) => number;
  readonly identityassetlocktransactionoutputnotfounderror_message: (a: number) => [number, number];
  readonly __wbg_inconsistentcompoundindexdataerror_free: (a: number, b: number) => void;
  readonly inconsistentcompoundindexdataerror_getIndexedProperties: (a: number) => any;
  readonly inconsistentcompoundindexdataerror_getDocumentType: (a: number) => [number, number];
  readonly inconsistentcompoundindexdataerror_getCode: (a: number) => number;
  readonly inconsistentcompoundindexdataerror_message: (a: number) => [number, number];
  readonly __wbg_datacontractinvalidindexdefinitionupdateerror_free: (a: number, b: number) => void;
  readonly datacontractinvalidindexdefinitionupdateerror_getDocumentType: (a: number) => [number, number];
  readonly datacontractinvalidindexdefinitionupdateerror_getIndexName: (a: number) => [number, number];
  readonly datacontractinvalidindexdefinitionupdateerror_getCode: (a: number) => number;
  readonly datacontractinvalidindexdefinitionupdateerror_message: (a: number) => [number, number];
  readonly __wbg_invaliddocumenttypeerror_free: (a: number, b: number) => void;
  readonly invaliddocumenttypeerror_getType: (a: number) => [number, number];
  readonly invaliddocumenttypeerror_getDataContractId: (a: number) => any;
  readonly invaliddocumenttypeerror_getCode: (a: number) => number;
  readonly invaliddocumenttypeerror_message: (a: number) => [number, number];
  readonly __wbg_duplicatedocumenttransitionswithidserror_free: (a: number, b: number) => void;
  readonly duplicatedocumenttransitionswithidserror_getDocumentTransitionReferences: (a: number) => any;
  readonly duplicatedocumenttransitionswithidserror_getCode: (a: number) => number;
  readonly duplicatedocumenttransitionswithidserror_message: (a: number) => [number, number];
  readonly __wbg_systempropertyindexalreadypresenterror_free: (a: number, b: number) => void;
  readonly systempropertyindexalreadypresenterror_getDocumentType: (a: number) => [number, number];
  readonly systempropertyindexalreadypresenterror_getIndexName: (a: number) => [number, number];
  readonly systempropertyindexalreadypresenterror_getPropertyName: (a: number) => [number, number];
  readonly systempropertyindexalreadypresenterror_getCode: (a: number) => number;
  readonly systempropertyindexalreadypresenterror_message: (a: number) => [number, number];
  readonly __wbg_tokendirectpurchasetransition_free: (a: number, b: number) => void;
  readonly tokendirectpurchasetransition_getCount: (a: number) => bigint;
  readonly tokendirectpurchasetransition_getTotalAgreedPrice: (a: number) => bigint;
  readonly __wbg_documenttimestampsareequalerror_free: (a: number, b: number) => void;
  readonly documenttimestampsareequalerror_getDocumentId: (a: number) => any;
  readonly documenttimestampsareequalerror_getCode: (a: number) => number;
  readonly documenttimestampsareequalerror_message: (a: number) => [number, number];
  readonly __wbg_metadata_free: (a: number, b: number) => void;
  readonly metadata_new: (a: bigint, b: number, c: bigint, d: number) => [number, number, number];
  readonly metadata_from: (a: any) => [number, number, number];
  readonly metadata_toJSON: (a: number) => any;
  readonly metadata_toObject: (a: number) => any;
  readonly metadata_getBlockHeight: (a: number) => bigint;
  readonly metadata_getCoreChainLockedHeight: (a: number) => number;
  readonly metadata_getTimeMs: (a: number) => bigint;
  readonly metadata_getProtocolVersion: (a: number) => number;
  readonly __wbg_invaliddocumenterror_free: (a: number, b: number) => void;
  readonly invaliddocumenterror_new: (a: any, b: number, c: number) => number;
  readonly invaliddocumenterror_getErrors: (a: number) => [number, number];
  readonly invaliddocumenterror_getRawDocument: (a: number) => any;
  readonly invaliddocumenterror_getMessage: (a: number) => [number, number];
  readonly __wbg_missingmasterpublickeyerror_free: (a: number, b: number) => void;
  readonly missingmasterpublickeyerror_getCode: (a: number) => number;
  readonly missingmasterpublickeyerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentifiererror_free: (a: number, b: number) => void;
  readonly invalididentifiererror_getIdentifierName: (a: number) => [number, number];
  readonly invalididentifiererror_getIdentifierError: (a: number) => [number, number];
  readonly invalididentifiererror_getCode: (a: number) => number;
  readonly invalididentifiererror_message: (a: number) => [number, number];
  readonly __wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_free: (a: number, b: number) => void;
  readonly invalididentitycreditwithdrawaltransitioncorefeeerror_getCoreFee: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitioncorefeeerror_getCode: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitioncorefeeerror_message: (a: number) => [number, number];
  readonly __wbg_extendeddocument_free: (a: number, b: number) => void;
  readonly extendeddocument_new: (a: any, b: number) => [number, number, number];
  readonly extendeddocument_getFeatureVersion: (a: number) => number;
  readonly extendeddocument_getId: (a: number) => any;
  readonly extendeddocument_setId: (a: number, b: any) => void;
  readonly extendeddocument_getType: (a: number) => [number, number];
  readonly extendeddocument_setType: (a: number, b: number, c: number) => void;
  readonly extendeddocument_getDataContractId: (a: number) => any;
  readonly extendeddocument_getDataContract: (a: number) => number;
  readonly extendeddocument_setDataContractId: (a: number, b: any) => [number, number];
  readonly extendeddocument_getDocument: (a: number) => number;
  readonly extendeddocument_setOwnerId: (a: number, b: any) => void;
  readonly extendeddocument_getOwnerId: (a: number) => any;
  readonly extendeddocument_setRevision: (a: number, b: number, c: bigint) => void;
  readonly extendeddocument_getRevision: (a: number) => [number, bigint];
  readonly extendeddocument_setEntropy: (a: number, b: number, c: number) => [number, number];
  readonly extendeddocument_getEntropy: (a: number) => any;
  readonly extendeddocument_setData: (a: number, b: any) => [number, number];
  readonly extendeddocument_getData: (a: number) => [number, number, number];
  readonly extendeddocument_set: (a: number, b: number, c: number, d: any) => [number, number];
  readonly extendeddocument_get: (a: number, b: number, c: number) => any;
  readonly extendeddocument_setCreatedAt: (a: number, b: number) => void;
  readonly extendeddocument_setUpdatedAt: (a: number, b: number) => void;
  readonly extendeddocument_getCreatedAt: (a: number) => any;
  readonly extendeddocument_getUpdatedAt: (a: number) => any;
  readonly extendeddocument_getMetadata: (a: number) => number;
  readonly extendeddocument_setMetadata: (a: number, b: any) => [number, number];
  readonly extendeddocument_toObject: (a: number, b: any) => [number, number, number];
  readonly extendeddocument_toJSON: (a: number) => [number, number, number];
  readonly extendeddocument_toBuffer: (a: number) => [number, number, number];
  readonly extendeddocument_hash: (a: number) => [number, number, number];
  readonly extendeddocument_clone: (a: number) => number;
  readonly extendeddocument_validate: (a: number, b: number) => [number, number, number];
  readonly __wbg_instantassetlockproof_free: (a: number, b: number) => void;
  readonly instantassetlockproof_new: (a: any) => [number, number, number];
  readonly instantassetlockproof_getType: (a: number) => number;
  readonly instantassetlockproof_getOutputIndex: (a: number) => number;
  readonly instantassetlockproof_getOutPoint: (a: number) => [number, number, number];
  readonly instantassetlockproof_getOutput: (a: number) => [number, number, number];
  readonly instantassetlockproof_createIdentifier: (a: number) => [number, number, number];
  readonly instantassetlockproof_getInstantLock: (a: number) => any;
  readonly instantassetlockproof_getTransaction: (a: number) => any;
  readonly instantassetlockproof_toObject: (a: number) => [number, number, number];
  readonly instantassetlockproof_toJSON: (a: number) => [number, number, number];
  readonly __wbg_tokendestroyfrozenfundstransition_free: (a: number, b: number) => void;
  readonly tokendestroyfrozenfundstransition_getFrozenIdentityId: (a: number) => any;
  readonly tokendestroyfrozenfundstransition_getPublicNote: (a: number) => [number, number];
  readonly __wbg_invaliddocumenttypenameerror_free: (a: number, b: number) => void;
  readonly invaliddocumenttypenameerrorwasm_getName: (a: number) => [number, number];
  readonly invaliddocumenttypenameerrorwasm_getCode: (a: number) => number;
  readonly invaliddocumenttypenameerrorwasm_message: (a: number) => [number, number];
  readonly __wbg_documenttimestampsmismatcherror_free: (a: number, b: number) => void;
  readonly documenttimestampsmismatcherror_getDocumentId: (a: number) => any;
  readonly documenttimestampsmismatcherror_getCode: (a: number) => number;
  readonly documenttimestampsmismatcherror_message: (a: number) => [number, number];
  readonly __wbg_invalidinstantassetlockprooferror_free: (a: number, b: number) => void;
  readonly invalidinstantassetlockprooferror_getCode: (a: number) => number;
  readonly invalidinstantassetlockprooferror_message: (a: number) => [number, number];
  readonly __wbg_mismatchowneridserror_free: (a: number, b: number) => void;
  readonly mismatchowneridserror_new: (a: number, b: number) => number;
  readonly mismatchowneridserror_getDocuments: (a: number) => [number, number];
  readonly __wbg_identitycredittransfertoselferror_free: (a: number, b: number) => void;
  readonly identitycredittransfertoselferror_getCode: (a: number) => number;
  readonly identitycredittransfertoselferror_message: (a: number) => [number, number];
  readonly __wbg_identitycredittransfertransition_free: (a: number, b: number) => void;
  readonly identitycredittransfertransition_new: (a: number) => [number, number, number];
  readonly identitycredittransfertransition_getType: (a: number) => number;
  readonly identitycredittransfertransition_identityId: (a: number) => any;
  readonly identitycredittransfertransition_recipientId: (a: number) => any;
  readonly identitycredittransfertransition_amount: (a: number) => bigint;
  readonly identitycredittransfertransition_getIdentityId: (a: number) => any;
  readonly identitycredittransfertransition_getRecipientId: (a: number) => any;
  readonly identitycredittransfertransition_setIdentityId: (a: number, b: any) => void;
  readonly identitycredittransfertransition_setRecipientId: (a: number, b: any) => void;
  readonly identitycredittransfertransition_getAmount: (a: number) => bigint;
  readonly identitycredittransfertransition_setAmount: (a: number, b: bigint) => void;
  readonly identitycredittransfertransition_getUserFeeIncrease: (a: number) => number;
  readonly identitycredittransfertransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitycredittransfertransition_getNonce: (a: number) => bigint;
  readonly identitycredittransfertransition_setNonce: (a: number, b: bigint) => void;
  readonly identitycredittransfertransition_toObject: (a: number, b: any) => [number, number, number];
  readonly identitycredittransfertransition_toBuffer: (a: number) => [number, number, number];
  readonly identitycredittransfertransition_toJSON: (a: number) => [number, number, number];
  readonly identitycredittransfertransition_getModifiedDataIds: (a: number) => [number, number];
  readonly identitycredittransfertransition_isDataContractStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_isDocumentStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_isIdentityStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_isVotingStateTransition: (a: number) => number;
  readonly identitycredittransfertransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly identitycredittransfertransition_getSignature: (a: number) => any;
  readonly identitycredittransfertransition_setSignature: (a: number, b: number, c: number) => void;
  readonly identitycredittransfertransition_getSignaturePublicKeyId: (a: number) => number;
  readonly identitycredittransfertransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly __wbg_revisionabsenterror_free: (a: number, b: number) => void;
  readonly revisionabsenterror_new: (a: number) => number;
  readonly revisionabsenterror_getDocument: (a: number) => number;
  readonly __wbg_invalidindexedpropertyconstrainterror_free: (a: number, b: number) => void;
  readonly invalidindexedpropertyconstrainterror_getDocumentType: (a: number) => [number, number];
  readonly invalidindexedpropertyconstrainterror_getIndexName: (a: number) => [number, number];
  readonly invalidindexedpropertyconstrainterror_getPropertyName: (a: number) => [number, number];
  readonly invalidindexedpropertyconstrainterror_getConstraintName: (a: number) => [number, number];
  readonly invalidindexedpropertyconstrainterror_getReason: (a: number) => [number, number];
  readonly invalidindexedpropertyconstrainterror_getCode: (a: number) => number;
  readonly invalidindexedpropertyconstrainterror_message: (a: number) => [number, number];
  readonly __wbg_tokentransfertransition_free: (a: number, b: number) => void;
  readonly tokentransfertransition_getRecipientId: (a: number) => any;
  readonly tokentransfertransition_getPublicNote: (a: number) => [number, number];
  readonly tokentransfertransition_getAmount: (a: number) => bigint;
  readonly __wbg_invalidstatetransitiontypeerror_free: (a: number, b: number) => void;
  readonly invalidstatetransitiontypeerror_new: (a: number) => number;
  readonly invalidstatetransitiontypeerror_getType: (a: number) => number;
  readonly invalidstatetransitiontypeerror_getCode: (a: number) => number;
  readonly invalidstatetransitiontypeerror_message: (a: number) => [number, number];
  readonly __wbg_duplicatedidentitypublickeyerror_free: (a: number, b: number) => void;
  readonly duplicatedidentitypublickeyerror_getDuplicatedPublicKeysIds: (a: number) => any;
  readonly duplicatedidentitypublickeyerror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeyerror_message: (a: number) => [number, number];
  readonly __wbg_identitypublickey_free: (a: number, b: number) => void;
  readonly identitypublickey_new: (a: number) => [number, number, number];
  readonly identitypublickey_getId: (a: number) => number;
  readonly identitypublickey_setId: (a: number, b: number) => void;
  readonly identitypublickey_getType: (a: number) => number;
  readonly identitypublickey_setType: (a: number, b: number) => [number, number];
  readonly identitypublickey_setData: (a: number, b: number, c: number) => [number, number];
  readonly identitypublickey_getData: (a: number) => any;
  readonly identitypublickey_setPurpose: (a: number, b: number) => [number, number];
  readonly identitypublickey_getPurpose: (a: number) => number;
  readonly identitypublickey_setSecurityLevel: (a: number, b: number) => [number, number];
  readonly identitypublickey_getSecurityLevel: (a: number) => number;
  readonly identitypublickey_setReadOnly: (a: number, b: number) => void;
  readonly identitypublickey_isReadOnly: (a: number) => number;
  readonly identitypublickey_setDisabledAt: (a: number, b: any) => void;
  readonly identitypublickey_getDisabledAt: (a: number) => any;
  readonly identitypublickey_hash: (a: number) => [number, number, number, number];
  readonly identitypublickey_isMaster: (a: number) => number;
  readonly identitypublickey_toJSON: (a: number) => [number, number, number];
  readonly identitypublickey_toObject: (a: number) => [number, number, number];
  readonly identitypublickey_toBuffer: (a: number) => [number, number, number];
  readonly identitypublickey_fromBuffer: (a: number, b: number) => [number, number, number];
  readonly __wbg_documentalreadypresenterror_free: (a: number, b: number) => void;
  readonly documentalreadypresenterror_getDocumentId: (a: number) => any;
  readonly documentalreadypresenterror_getCode: (a: number) => number;
  readonly documentalreadypresenterror_message: (a: number) => [number, number];
  readonly __wbg_tokenclaimtransition_free: (a: number, b: number) => void;
  readonly tokenclaimtransition_getPublicNote: (a: number) => [number, number];
  readonly tokenclaimtransition_getDistributionType: (a: number) => number;
  readonly deserializeConsensusError: (a: number, b: number) => [number, number, number];
  readonly __wbg_identitytopuptransition_free: (a: number, b: number) => void;
  readonly identitytopuptransition_new: (a: number) => [number, number, number];
  readonly identitytopuptransition_setAssetLockProof: (a: number, b: any) => [number, number];
  readonly identitytopuptransition_assetLockProof: (a: number) => any;
  readonly identitytopuptransition_getAssetLockProof: (a: number) => any;
  readonly identitytopuptransition_getType: (a: number) => number;
  readonly identitytopuptransition_identityId: (a: number) => any;
  readonly identitytopuptransition_getIdentityId: (a: number) => any;
  readonly identitytopuptransition_setIdentityId: (a: number, b: any) => void;
  readonly identitytopuptransition_getOwnerId: (a: number) => any;
  readonly identitytopuptransition_getUserFeeIncrease: (a: number) => number;
  readonly identitytopuptransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly identitytopuptransition_toObject: (a: number, b: any) => [number, number, number];
  readonly identitytopuptransition_toBuffer: (a: number) => [number, number, number];
  readonly identitytopuptransition_toJSON: (a: number) => [number, number, number];
  readonly identitytopuptransition_getModifiedDataIds: (a: number) => [number, number];
  readonly identitytopuptransition_isDataContractStateTransition: (a: number) => number;
  readonly identitytopuptransition_isDocumentStateTransition: (a: number) => number;
  readonly identitytopuptransition_isIdentityStateTransition: (a: number) => number;
  readonly identitytopuptransition_isVotingStateTransition: (a: number) => number;
  readonly identitytopuptransition_signByPrivateKey: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly identitytopuptransition_getSignature: (a: number) => any;
  readonly identitytopuptransition_setSignature: (a: number, b: number, c: number) => void;
  readonly __wbg_batchtransition_free: (a: number, b: number) => void;
  readonly batchtransition_getType: (a: number) => number;
  readonly batchtransition_getOwnerId: (a: number) => any;
  readonly batchtransition_getUserFeeIncrease: (a: number) => number;
  readonly batchtransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly batchtransition_getTransitions: (a: number) => any;
  readonly batchtransition_setTransitions: (a: number, b: any) => [number, number];
  readonly batchtransition_setIdentityContractNonce: (a: number, b: bigint) => void;
  readonly batchtransition_getModifiedDataIds: (a: number) => any;
  readonly batchtransition_getSignaturePublicKeyId: (a: number) => number;
  readonly batchtransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly batchtransition_verifySignature: (a: number, b: number, c: any) => [number, number, number];
  readonly batchtransition_setSignaturePublicKeyId: (a: number, b: number) => void;
  readonly batchtransition_getKeySecurityLevelRequirement: (a: number, b: number) => [number, number, number];
  readonly batchtransition_getSignature: (a: number) => [number, number];
  readonly batchtransition_setSignature: (a: number, b: number, c: number) => void;
  readonly batchtransition_isDocumentStateTransition: (a: number) => number;
  readonly batchtransition_isDataContractStateTransition: (a: number) => number;
  readonly batchtransition_isIdentityStateTransition: (a: number) => number;
  readonly batchtransition_isVotingStateTransition: (a: number) => number;
  readonly batchtransition_toBuffer: (a: number) => [number, number, number];
  readonly __wbg_missingpublickeyerror_free: (a: number, b: number) => void;
  readonly missingpublickeyerror_getPublicKeyId: (a: number) => number;
  readonly missingpublickeyerror_getCode: (a: number) => number;
  readonly missingpublickeyerror_message: (a: number) => [number, number];
  readonly __wbg_document_free: (a: number, b: number) => void;
  readonly document_new: (a: any, b: number, c: any) => [number, number, number];
  readonly document_getId: (a: number) => any;
  readonly document_setId: (a: number, b: any) => void;
  readonly document_setOwnerId: (a: number, b: any) => void;
  readonly document_getOwnerId: (a: number) => any;
  readonly document_setRevision: (a: number, b: number, c: bigint) => void;
  readonly document_getRevision: (a: number) => [number, bigint];
  readonly document_setData: (a: number, b: any) => [number, number];
  readonly document_getData: (a: number) => [number, number, number];
  readonly document_set: (a: number, b: number, c: number, d: any) => [number, number];
  readonly document_get: (a: number, b: number, c: number) => [number, number, number];
  readonly document_setCreatedAt: (a: number, b: number) => void;
  readonly document_setUpdatedAt: (a: number, b: number) => void;
  readonly document_getCreatedAt: (a: number) => any;
  readonly document_getUpdatedAt: (a: number) => any;
  readonly document_hash: (a: number, b: number, c: number, d: number) => [number, number, number];
  readonly document_clone: (a: number) => number;
  readonly __wbg_invalidsignaturepublickeysecuritylevelerror_free: (a: number, b: number) => void;
  readonly invalidsignaturepublickeysecuritylevelerror_getPublicKeySecurityLevel: (a: number) => number;
  readonly invalidsignaturepublickeysecuritylevelerror_getKeySecurityLevelRequirement: (a: number) => any;
  readonly invalidsignaturepublickeysecuritylevelerror_getCode: (a: number) => number;
  readonly invalidsignaturepublickeysecuritylevelerror_message: (a: number) => [number, number];
  readonly __wbg_documenttimestampwindowviolationerror_free: (a: number, b: number) => void;
  readonly documenttimestampwindowviolationerror_getDocumentId: (a: number) => any;
  readonly documenttimestampwindowviolationerror_getTimestampName: (a: number) => [number, number];
  readonly documenttimestampwindowviolationerror_getTimestamp: (a: number) => any;
  readonly documenttimestampwindowviolationerror_getTimeWindowStart: (a: number) => any;
  readonly documenttimestampwindowviolationerror_getTimeWindowEnd: (a: number) => any;
  readonly documenttimestampwindowviolationerror_getCode: (a: number) => number;
  readonly documenttimestampwindowviolationerror_message: (a: number) => [number, number];
  readonly __wbg_jsonschemacompilationerror_free: (a: number, b: number) => void;
  readonly jsonschemacompilationerror_getError: (a: number) => [number, number];
  readonly jsonschemacompilationerror_getCode: (a: number) => number;
  readonly jsonschemacompilationerror_message: (a: number) => [number, number];
  readonly __wbg_invaliddatacontractversionerror_free: (a: number, b: number) => void;
  readonly invaliddatacontractversionerror_getExpectedVersion: (a: number) => number;
  readonly invaliddatacontractversionerror_getVersion: (a: number) => number;
  readonly invaliddatacontractversionerror_getCode: (a: number) => number;
  readonly invaliddatacontractversionerror_message: (a: number) => [number, number];
  readonly __wbg_invalididentityrevisionerror_free: (a: number, b: number) => void;
  readonly invalididentityrevisionerror_getIdentityId: (a: number) => any;
  readonly invalididentityrevisionerror_getCurrentRevision: (a: number) => any;
  readonly invalididentityrevisionerror_getCode: (a: number) => number;
  readonly invalididentityrevisionerror_message: (a: number) => [number, number];
  readonly __wbg_datacontractmaxdepthexceederror_free: (a: number, b: number) => void;
  readonly datacontractmaxdeptherror_getMaxDepth: (a: number) => number;
  readonly datacontractmaxdeptherror_getCode: (a: number) => number;
  readonly datacontractmaxdeptherror_message: (a: number) => [number, number];
  readonly __wbg_datacontract_free: (a: number, b: number) => void;
  readonly datacontract_new: (a: any, b: number) => [number, number, number];
  readonly datacontract_getId: (a: number) => any;
  readonly datacontract_setId: (a: number, b: any) => [number, number];
  readonly datacontract_getOwnerId: (a: number) => any;
  readonly datacontract_getVersion: (a: number) => number;
  readonly datacontract_setVersion: (a: number, b: number) => void;
  readonly datacontract_incrementVersion: (a: number) => void;
  readonly datacontract_getBinaryProperties: (a: number, b: number, c: number) => [number, number, number];
  readonly datacontract_setDocumentSchemas: (a: number, b: any, c: number) => [number, number];
  readonly datacontract_setDocumentSchema: (a: number, b: number, c: number, d: any, e: number) => [number, number];
  readonly datacontract_getDocumentSchema: (a: number, b: number, c: number) => [number, number, number];
  readonly datacontract_getDocumentSchemas: (a: number) => any;
  readonly datacontract_getSchemaDefs: (a: number) => any;
  readonly datacontract_setSchemaDefs: (a: number, b: number, c: number) => [number, number];
  readonly datacontract_hasDocumentType: (a: number, b: number, c: number) => number;
  readonly datacontract_setIdentityNonce: (a: number, b: bigint) => [number, number];
  readonly datacontract_getIdentityNonce: (a: number) => bigint;
  readonly datacontract_toObject: (a: number) => [number, number, number];
  readonly datacontract_getConfig: (a: number) => [number, number, number];
  readonly datacontract_setConfig: (a: number, b: any) => [number, number];
  readonly datacontract_toJSON: (a: number) => [number, number, number];
  readonly datacontract_toBuffer: (a: number) => [number, number, number];
  readonly datacontract_hash: (a: number) => [number, number, number, number];
  readonly datacontract_clone: (a: number) => number;
  readonly datacontract_getTokenConfiguration: (a: number, b: number) => [number, number, number];
  readonly __wbg_grouphastoofewmemberserror_free: (a: number, b: number) => void;
  readonly grouphastoofewmemberserror_getCode: (a: number) => number;
  readonly grouphastoofewmemberserror_message: (a: number) => [number, number];
  readonly grouphastoofewmemberserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_redundantdocumentpaidforbytokenwithcontractid_free: (a: number, b: number) => void;
  readonly redundantdocumentpaidforbytokenwithcontractid_getCode: (a: number) => number;
  readonly redundantdocumentpaidforbytokenwithcontractid_message: (a: number) => [number, number];
  readonly redundantdocumentpaidforbytokenwithcontractid_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributiontimeintervalnotminutealignederror_free: (a: number, b: number) => void;
  readonly invalidtokendistributiontimeintervalnotminutealignederror_getCode: (a: number) => number;
  readonly invalidtokendistributiontimeintervalnotminutealignederror_message: (a: number) => [number, number];
  readonly invalidtokendistributiontimeintervalnotminutealignederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributiontimeintervaltooshorterror_free: (a: number, b: number) => void;
  readonly invalidtokendistributiontimeintervaltooshorterror_getCode: (a: number) => number;
  readonly invalidtokendistributiontimeintervaltooshorterror_message: (a: number) => [number, number];
  readonly invalidtokendistributiontimeintervaltooshorterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributionblockintervaltooshorterror_free: (a: number, b: number) => void;
  readonly invalidtokendistributionblockintervaltooshorterror_getCode: (a: number) => number;
  readonly invalidtokendistributionblockintervaltooshorterror_message: (a: number) => [number, number];
  readonly invalidtokendistributionblockintervaltooshorterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokennoteonlyallowedwhenproposererror_free: (a: number, b: number) => void;
  readonly tokennoteonlyallowedwhenproposererror_getCode: (a: number) => number;
  readonly tokennoteonlyallowedwhenproposererror_message: (a: number) => [number, number];
  readonly tokennoteonlyallowedwhenproposererror_serialize: (a: number) => [number, number, number];
  readonly __wbg_grouprequiredpowerisinvaliderror_free: (a: number, b: number) => void;
  readonly grouprequiredpowerisinvaliderror_getCode: (a: number) => number;
  readonly grouprequiredpowerisinvaliderror_message: (a: number) => [number, number];
  readonly grouprequiredpowerisinvaliderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_maingroupisnotdefinederror_free: (a: number, b: number) => void;
  readonly maingroupisnotdefinederror_getCode: (a: number) => number;
  readonly maingroupisnotdefinederror_message: (a: number) => [number, number];
  readonly maingroupisnotdefinederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenlanguagecodeerror_free: (a: number, b: number) => void;
  readonly invalidtokenlanguagecodeerror_getCode: (a: number) => number;
  readonly invalidtokenlanguagecodeerror_message: (a: number) => [number, number];
  readonly invalidtokenlanguagecodeerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokennamelengtherror_free: (a: number, b: number) => void;
  readonly invalidtokennamelengtherror_getCode: (a: number) => number;
  readonly invalidtokennamelengtherror_message: (a: number) => [number, number];
  readonly invalidtokennamelengtherror_serialize: (a: number) => [number, number, number];
  readonly __wbg_decimalsoverlimiterror_free: (a: number, b: number) => void;
  readonly decimalsoverlimiterror_getCode: (a: number) => number;
  readonly decimalsoverlimiterror_message: (a: number) => [number, number];
  readonly decimalsoverlimiterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokennamecharactererror_free: (a: number, b: number) => void;
  readonly invalidtokennamecharactererror_getCode: (a: number) => number;
  readonly invalidtokennamecharactererror_message: (a: number) => [number, number];
  readonly invalidtokennamecharactererror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidkeywordcharactererror_free: (a: number, b: number) => void;
  readonly invalidkeywordcharactererror_getCode: (a: number) => number;
  readonly invalidkeywordcharactererror_message: (a: number) => [number, number];
  readonly invalidkeywordcharactererror_serialize: (a: number) => [number, number, number];
  readonly __wbg_newtokensdestinationidentityoptionrequirederror_free: (a: number, b: number) => void;
  readonly newtokensdestinationidentityoptionrequirederror_getCode: (a: number) => number;
  readonly newtokensdestinationidentityoptionrequirederror_message: (a: number) => [number, number];
  readonly newtokensdestinationidentityoptionrequirederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invaliddescriptionlengtherror_free: (a: number, b: number) => void;
  readonly invaliddescriptionlengtherror_getCode: (a: number) => number;
  readonly invaliddescriptionlengtherror_message: (a: number) => [number, number];
  readonly invaliddescriptionlengtherror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidkeywordlengtherror_free: (a: number, b: number) => void;
  readonly invalidkeywordlengtherror_getCode: (a: number) => number;
  readonly invalidkeywordlengtherror_message: (a: number) => [number, number];
  readonly invalidkeywordlengtherror_serialize: (a: number) => [number, number, number];
  readonly __wbg_duplicatekeywordserror_free: (a: number, b: number) => void;
  readonly duplicatekeywordserror_getCode: (a: number) => number;
  readonly duplicatekeywordserror_message: (a: number) => [number, number];
  readonly duplicatekeywordserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_toomanykeywordserror_free: (a: number, b: number) => void;
  readonly toomanykeywordserror_getCode: (a: number) => number;
  readonly toomanykeywordserror_message: (a: number) => [number, number];
  readonly toomanykeywordserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokenpaymentbyburningonlyallowedoninternaltokenerror_free: (a: number, b: number) => void;
  readonly tokenpaymentbyburningonlyallowedoninternaltokenerror_getCode: (a: number) => number;
  readonly tokenpaymentbyburningonlyallowedoninternaltokenerror_message: (a: number) => [number, number];
  readonly tokenpaymentbyburningonlyallowedoninternaltokenerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknowndocumentactiontokeneffecterror_free: (a: number, b: number) => void;
  readonly unknowndocumentactiontokeneffecterror_getCode: (a: number) => number;
  readonly unknowndocumentactiontokeneffecterror_message: (a: number) => [number, number];
  readonly unknowndocumentactiontokeneffecterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknowngasfeespaidbyerror_free: (a: number, b: number) => void;
  readonly unknowngasfeespaidbyerror_getCode: (a: number) => number;
  readonly unknowngasfeespaidbyerror_message: (a: number) => [number, number];
  readonly unknowngasfeespaidbyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_missingdefaultlocalizationerror_free: (a: number, b: number) => void;
  readonly missingdefaultlocalizationerror_getCode: (a: number) => number;
  readonly missingdefaultlocalizationerror_message: (a: number) => [number, number];
  readonly missingdefaultlocalizationerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokennotetoobigerror_free: (a: number, b: number) => void;
  readonly invalidtokennotetoobigerror_getCode: (a: number) => number;
  readonly invalidtokennotetoobigerror_message: (a: number) => [number, number];
  readonly invalidtokennotetoobigerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributionfunctionincoherenceerror_free: (a: number, b: number) => void;
  readonly invalidtokendistributionfunctionincoherenceerror_getCode: (a: number) => number;
  readonly invalidtokendistributionfunctionincoherenceerror_message: (a: number) => [number, number];
  readonly invalidtokendistributionfunctionincoherenceerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributionfunctioninvalidparametertupleerror_free: (a: number, b: number) => void;
  readonly invalidtokendistributionfunctioninvalidparametertupleerror_getCode: (a: number) => number;
  readonly invalidtokendistributionfunctioninvalidparametertupleerror_message: (a: number) => [number, number];
  readonly invalidtokendistributionfunctioninvalidparametertupleerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributionfunctioninvalidparametererror_free: (a: number, b: number) => void;
  readonly invalidtokendistributionfunctioninvalidparametererror_getCode: (a: number) => number;
  readonly invalidtokendistributionfunctioninvalidparametererror_message: (a: number) => [number, number];
  readonly invalidtokendistributionfunctioninvalidparametererror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokendistributionfunctiondividebyzeroerror_free: (a: number, b: number) => void;
  readonly invalidtokendistributionfunctiondividebyzeroerror_getCode: (a: number) => number;
  readonly invalidtokendistributionfunctiondividebyzeroerror_message: (a: number) => [number, number];
  readonly invalidtokendistributionfunctiondividebyzeroerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenconfigupdatenochangeerror_free: (a: number, b: number) => void;
  readonly invalidtokenconfigupdatenochangeerror_getCode: (a: number) => number;
  readonly invalidtokenconfigupdatenochangeerror_message: (a: number) => [number, number];
  readonly invalidtokenconfigupdatenochangeerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenamounterror_free: (a: number, b: number) => void;
  readonly invalidtokenamounterror_getCode: (a: number) => number;
  readonly invalidtokenamounterror_message: (a: number) => [number, number];
  readonly invalidtokenamounterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupnonunilateralmemberpowerhaslessthanrequiredpowererror_free: (a: number, b: number) => void;
  readonly groupnonunilateralmemberpowerhaslessthanrequiredpowererror_getCode: (a: number) => number;
  readonly groupnonunilateralmemberpowerhaslessthanrequiredpowererror_message: (a: number) => [number, number];
  readonly groupnonunilateralmemberpowerhaslessthanrequiredpowererror_serialize: (a: number) => [number, number, number];
  readonly __wbg_grouptotalpowerlessthanrequirederror_free: (a: number, b: number) => void;
  readonly grouptotalpowerlessthanrequirederror_getCode: (a: number) => number;
  readonly grouptotalpowerlessthanrequirederror_message: (a: number) => [number, number];
  readonly grouptotalpowerlessthanrequirederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupmemberhaspoweroverlimiterror_free: (a: number, b: number) => void;
  readonly groupmemberhaspoweroverlimiterror_getCode: (a: number) => number;
  readonly groupmemberhaspoweroverlimiterror_message: (a: number) => [number, number];
  readonly groupmemberhaspoweroverlimiterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupmemberhaspowerofzeroerror_free: (a: number, b: number) => void;
  readonly groupmemberhaspowerofzeroerror_getCode: (a: number) => number;
  readonly groupmemberhaspowerofzeroerror_message: (a: number) => [number, number];
  readonly groupmemberhaspowerofzeroerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupexceedsmaxmemberserror_free: (a: number, b: number) => void;
  readonly groupexceedsmaxmemberserror_getCode: (a: number) => number;
  readonly groupexceedsmaxmemberserror_message: (a: number) => [number, number];
  readonly groupexceedsmaxmemberserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_grouppositiondoesnotexisterror_free: (a: number, b: number) => void;
  readonly grouppositiondoesnotexisterror_getCode: (a: number) => number;
  readonly grouppositiondoesnotexisterror_message: (a: number) => [number, number];
  readonly grouppositiondoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupactionnotallowedontransitionerror_free: (a: number, b: number) => void;
  readonly groupactionnotallowedontransitionerror_getCode: (a: number) => number;
  readonly groupactionnotallowedontransitionerror_message: (a: number) => [number, number];
  readonly groupactionnotallowedontransitionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_choosingtokenmintrecipientnotallowederror_free: (a: number, b: number) => void;
  readonly choosingtokenmintrecipientnotallowederror_getCode: (a: number) => number;
  readonly choosingtokenmintrecipientnotallowederror_message: (a: number) => [number, number];
  readonly choosingtokenmintrecipientnotallowederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_destinationidentityfortokenmintingnotseterror_free: (a: number, b: number) => void;
  readonly destinationidentityfortokenmintingnotseterror_getCode: (a: number) => number;
  readonly destinationidentityfortokenmintingnotseterror_message: (a: number) => [number, number];
  readonly destinationidentityfortokenmintingnotseterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokentransfertoourselferror_free: (a: number, b: number) => void;
  readonly tokentransfertoourselferror_getCode: (a: number) => number;
  readonly tokentransfertoourselferror_message: (a: number) => [number, number];
  readonly tokentransfertoourselferror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenbasesupplyerror_free: (a: number, b: number) => void;
  readonly invalidtokenbasesupplyerror_getCode: (a: number) => number;
  readonly invalidtokenbasesupplyerror_message: (a: number) => [number, number];
  readonly invalidtokenbasesupplyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_noncontiguouscontractgrouppositionserror_free: (a: number, b: number) => void;
  readonly noncontiguouscontractgrouppositionserror_getCode: (a: number) => number;
  readonly noncontiguouscontractgrouppositionserror_message: (a: number) => [number, number];
  readonly noncontiguouscontractgrouppositionserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_noncontiguouscontracttokenpositionserror_free: (a: number, b: number) => void;
  readonly noncontiguouscontracttokenpositionserror_getCode: (a: number) => number;
  readonly noncontiguouscontracttokenpositionserror_message: (a: number) => [number, number];
  readonly noncontiguouscontracttokenpositionserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidactioniderror_free: (a: number, b: number) => void;
  readonly invalidactioniderror_getCode: (a: number) => number;
  readonly invalidactioniderror_message: (a: number) => [number, number];
  readonly invalidactioniderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_contracthasnotokenserror_free: (a: number, b: number) => void;
  readonly contracthasnotokenserror_getCode: (a: number) => number;
  readonly contracthasnotokenserror_message: (a: number) => [number, number];
  readonly contracthasnotokenserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenpositionerror_free: (a: number, b: number) => void;
  readonly invalidtokenpositionerror_getCode: (a: number) => number;
  readonly invalidtokenpositionerror_message: (a: number) => [number, number];
  readonly invalidtokenpositionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokeniderror_free: (a: number, b: number) => void;
  readonly invalidtokeniderror_getCode: (a: number) => number;
  readonly invalidtokeniderror_message: (a: number) => [number, number];
  readonly invalidtokeniderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datacontracttokenconfigurationupdateerror_free: (a: number, b: number) => void;
  readonly datacontracttokenconfigurationupdateerror_getCode: (a: number) => number;
  readonly datacontracttokenconfigurationupdateerror_message: (a: number) => [number, number];
  readonly datacontracttokenconfigurationupdateerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_free: (a: number, b: number) => void;
  readonly withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_getCode: (a: number) => number;
  readonly withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_message: (a: number) => [number, number];
  readonly withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_contesteddocumentstemporarilynotallowederror_free: (a: number, b: number) => void;
  readonly contesteddocumentstemporarilynotallowederror_getCode: (a: number) => number;
  readonly contesteddocumentstemporarilynotallowederror_message: (a: number) => [number, number];
  readonly contesteddocumentstemporarilynotallowederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_contesteduniqueindexwithuniqueindexerror_free: (a: number, b: number) => void;
  readonly contesteduniqueindexwithuniqueindexerror_getCode: (a: number) => number;
  readonly contesteduniqueindexwithuniqueindexerror_message: (a: number) => [number, number];
  readonly contesteduniqueindexwithuniqueindexerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentfieldmaxsizeexceedederror_free: (a: number, b: number) => void;
  readonly documentfieldmaxsizeexceedederror_getCode: (a: number) => number;
  readonly documentfieldmaxsizeexceedederror_message: (a: number) => [number, number];
  readonly documentfieldmaxsizeexceedederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unsupportedfeatureerror_free: (a: number, b: number) => void;
  readonly unsupportedfeatureerror_getCode: (a: number) => number;
  readonly unsupportedfeatureerror_message: (a: number) => [number, number];
  readonly unsupportedfeatureerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_contesteduniqueindexonmutabledocumenttypeerror_free: (a: number, b: number) => void;
  readonly contesteduniqueindexonmutabledocumenttypeerror_getCode: (a: number) => number;
  readonly contesteduniqueindexonmutabledocumenttypeerror_message: (a: number) => [number, number];
  readonly contesteduniqueindexonmutabledocumenttypeerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_overflowerror_free: (a: number, b: number) => void;
  readonly overflowerror_getCode: (a: number) => number;
  readonly overflowerror_message: (a: number) => [number, number];
  readonly overflowerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentcreationnotallowederror_free: (a: number, b: number) => void;
  readonly documentcreationnotallowederror_getCode: (a: number) => number;
  readonly documentcreationnotallowederror_message: (a: number) => [number, number];
  readonly documentcreationnotallowederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknowndocumentcreationrestrictionmodeerror_free: (a: number, b: number) => void;
  readonly unknowndocumentcreationrestrictionmodeerror_getCode: (a: number) => number;
  readonly unknowndocumentcreationrestrictionmodeerror_message: (a: number) => [number, number];
  readonly unknowndocumentcreationrestrictionmodeerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknowntrademodeerror_free: (a: number, b: number) => void;
  readonly unknowntrademodeerror_getCode: (a: number) => number;
  readonly unknowntrademodeerror_message: (a: number) => [number, number];
  readonly unknowntrademodeerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknowntransferabletypeerror_free: (a: number, b: number) => void;
  readonly unknowntransferabletypeerror_getCode: (a: number) => number;
  readonly unknowntransferabletypeerror_message: (a: number) => [number, number];
  readonly unknowntransferabletypeerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalididentityupdatetransitiondisablekeyserror_free: (a: number, b: number) => void;
  readonly invalididentityupdatetransitiondisablekeyserror_getCode: (a: number) => number;
  readonly invalididentityupdatetransitiondisablekeyserror_message: (a: number) => [number, number];
  readonly invalididentityupdatetransitiondisablekeyserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalididentityupdatetransitionemptyerror_free: (a: number, b: number) => void;
  readonly invalididentityupdatetransitionemptyerror_getCode: (a: number) => number;
  readonly invalididentityupdatetransitionemptyerror_message: (a: number) => [number, number];
  readonly invalididentityupdatetransitionemptyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalididentitycreditwithdrawaltransitionamounterror_free: (a: number, b: number) => void;
  readonly invalididentitycreditwithdrawaltransitionamounterror_getCode: (a: number) => number;
  readonly invalididentitycreditwithdrawaltransitionamounterror_message: (a: number) => [number, number];
  readonly invalididentitycreditwithdrawaltransitionamounterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invaliddocumenttyperequiredsecuritylevelerror_free: (a: number, b: number) => void;
  readonly invaliddocumenttyperequiredsecuritylevelerror_getCode: (a: number) => number;
  readonly invaliddocumenttyperequiredsecuritylevelerror_message: (a: number) => [number, number];
  readonly invaliddocumenttyperequiredsecuritylevelerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_masterpublickeyupdateerror_free: (a: number, b: number) => void;
  readonly masterpublickeyupdateerror_getCode: (a: number) => number;
  readonly masterpublickeyupdateerror_message: (a: number) => [number, number];
  readonly masterpublickeyupdateerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_toomanymasterpublickeyerror_free: (a: number, b: number) => void;
  readonly toomanymasterpublickeyerror_getCode: (a: number) => number;
  readonly toomanymasterpublickeyerror_message: (a: number) => [number, number];
  readonly toomanymasterpublickeyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_disablingkeyidalsobeingaddedinsametransitionerror_free: (a: number, b: number) => void;
  readonly disablingkeyidalsobeingaddedinsametransitionerror_getCode: (a: number) => number;
  readonly disablingkeyidalsobeingaddedinsametransitionerror_message: (a: number) => [number, number];
  readonly disablingkeyidalsobeingaddedinsametransitionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_maxdocumentstransitionsexceedederror_free: (a: number, b: number) => void;
  readonly maxdocumentstransitionsexceedederror_getCode: (a: number) => number;
  readonly maxdocumentstransitionsexceedederror_message: (a: number) => [number, number];
  readonly maxdocumentstransitionsexceedederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_missingpositionsindocumenttypepropertieserror_free: (a: number, b: number) => void;
  readonly missingpositionsindocumenttypepropertieserror_getCode: (a: number) => number;
  readonly missingpositionsindocumenttypepropertieserror_message: (a: number) => [number, number];
  readonly missingpositionsindocumenttypepropertieserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datacontractboundsnotpresenterror_free: (a: number, b: number) => void;
  readonly datacontractboundsnotpresenterror_getCode: (a: number) => number;
  readonly datacontractboundsnotpresenterror_message: (a: number) => [number, number];
  readonly datacontractboundsnotpresenterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknownstoragekeyrequirementserror_free: (a: number, b: number) => void;
  readonly unknownstoragekeyrequirementserror_getCode: (a: number) => number;
  readonly unknownstoragekeyrequirementserror_message: (a: number) => [number, number];
  readonly unknownstoragekeyrequirementserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unknownsecuritylevelerror_free: (a: number, b: number) => void;
  readonly unknownsecuritylevelerror_getCode: (a: number) => number;
  readonly unknownsecuritylevelerror_message: (a: number) => [number, number];
  readonly unknownsecuritylevelerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_versionerror_free: (a: number, b: number) => void;
  readonly versionerror_getCode: (a: number) => number;
  readonly versionerror_message: (a: number) => [number, number];
  readonly versionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenpositionstateerror_free: (a: number, b: number) => void;
  readonly invalidtokenpositionstateerror_getCode: (a: number) => number;
  readonly invalidtokenpositionstateerror_message: (a: number) => [number, number];
  readonly invalidtokenpositionstateerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datacontractnotfounderror_free: (a: number, b: number) => void;
  readonly datacontractnotfounderror_getCode: (a: number) => number;
  readonly datacontractnotfounderror_message: (a: number) => [number, number];
  readonly datacontractnotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitytofreezedoesnotexisterror_free: (a: number, b: number) => void;
  readonly identitytofreezedoesnotexisterror_getCode: (a: number) => number;
  readonly identitytofreezedoesnotexisterror_message: (a: number) => [number, number];
  readonly identitytofreezedoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_modificationofgroupactionmainparametersnotpermittederror_free: (a: number, b: number) => void;
  readonly modificationofgroupactionmainparametersnotpermittederror_getCode: (a: number) => number;
  readonly modificationofgroupactionmainparametersnotpermittederror_message: (a: number) => [number, number];
  readonly modificationofgroupactionmainparametersnotpermittederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitymemberofgroupnotfounderror_free: (a: number, b: number) => void;
  readonly identitymemberofgroupnotfounderror_getCode: (a: number) => number;
  readonly identitymemberofgroupnotfounderror_message: (a: number) => [number, number];
  readonly identitymemberofgroupnotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identityintokenconfigurationnotfounderror_free: (a: number, b: number) => void;
  readonly identityintokenconfigurationnotfounderror_getCode: (a: number) => number;
  readonly identityintokenconfigurationnotfounderror_message: (a: number) => [number, number];
  readonly identityintokenconfigurationnotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokennotfordirectsale_free: (a: number, b: number) => void;
  readonly tokennotfordirectsale_getCode: (a: number) => number;
  readonly tokennotfordirectsale_message: (a: number) => [number, number];
  readonly tokennotfordirectsale_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokenamountunderminimumsaleamount_free: (a: number, b: number) => void;
  readonly tokenamountunderminimumsaleamount_getCode: (a: number) => number;
  readonly tokenamountunderminimumsaleamount_message: (a: number) => [number, number];
  readonly tokenamountunderminimumsaleamount_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokendirectpurchaseuserpricetoolow_free: (a: number, b: number) => void;
  readonly tokendirectpurchaseuserpricetoolow_getCode: (a: number) => number;
  readonly tokendirectpurchaseuserpricetoolow_message: (a: number) => [number, number];
  readonly tokendirectpurchaseuserpricetoolow_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitytryingtopaywithwrongtokenerror_free: (a: number, b: number) => void;
  readonly identitytryingtopaywithwrongtokenerror_getCode: (a: number) => number;
  readonly identitytryingtopaywithwrongtokenerror_message: (a: number) => [number, number];
  readonly identitytryingtopaywithwrongtokenerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_requiredtokenpaymentinfonotseterror_free: (a: number, b: number) => void;
  readonly requiredtokenpaymentinfonotseterror_getCode: (a: number) => number;
  readonly requiredtokenpaymentinfonotseterror_message: (a: number) => [number, number];
  readonly requiredtokenpaymentinfonotseterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identityhasnotagreedtopayrequiredtokenamounterror_free: (a: number, b: number) => void;
  readonly identityhasnotagreedtopayrequiredtokenamounterror_getCode: (a: number) => number;
  readonly identityhasnotagreedtopayrequiredtokenamounterror_message: (a: number) => [number, number];
  readonly identityhasnotagreedtopayrequiredtokenamounterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_preprogrammeddistributiontimestampinpasterror_free: (a: number, b: number) => void;
  readonly preprogrammeddistributiontimestampinpasterror_getCode: (a: number) => number;
  readonly preprogrammeddistributiontimestampinpasterror_message: (a: number) => [number, number];
  readonly preprogrammeddistributiontimestampinpasterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokentransferrecipientidentitynotexisterror_free: (a: number, b: number) => void;
  readonly tokentransferrecipientidentitynotexisterror_getCode: (a: number) => number;
  readonly tokentransferrecipientidentitynotexisterror_message: (a: number) => [number, number];
  readonly tokentransferrecipientidentitynotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenclaimwrongclaimant_free: (a: number, b: number) => void;
  readonly invalidtokenclaimwrongclaimant_getCode: (a: number) => number;
  readonly invalidtokenclaimwrongclaimant_message: (a: number) => [number, number];
  readonly invalidtokenclaimwrongclaimant_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenclaimnocurrentrewards_free: (a: number, b: number) => void;
  readonly invalidtokenclaimnocurrentrewards_getCode: (a: number) => number;
  readonly invalidtokenclaimnocurrentrewards_message: (a: number) => [number, number];
  readonly invalidtokenclaimnocurrentrewards_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidtokenclaimpropertymismatch_free: (a: number, b: number) => void;
  readonly invalidtokenclaimpropertymismatch_getCode: (a: number) => number;
  readonly invalidtokenclaimpropertymismatch_message: (a: number) => [number, number];
  readonly invalidtokenclaimpropertymismatch_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalidgrouppositionerror_free: (a: number, b: number) => void;
  readonly invalidgrouppositionerror_getCode: (a: number) => number;
  readonly invalidgrouppositionerror_message: (a: number) => [number, number];
  readonly invalidgrouppositionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_newauthorizedactiontakermaingroupnotseterror_free: (a: number, b: number) => void;
  readonly newauthorizedactiontakermaingroupnotseterror_getCode: (a: number) => number;
  readonly newauthorizedactiontakermaingroupnotseterror_message: (a: number) => [number, number];
  readonly newauthorizedactiontakermaingroupnotseterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_newauthorizedactiontakergroupdoesnotexisterror_free: (a: number, b: number) => void;
  readonly newauthorizedactiontakergroupdoesnotexisterror_getCode: (a: number) => number;
  readonly newauthorizedactiontakergroupdoesnotexisterror_message: (a: number) => [number, number];
  readonly newauthorizedactiontakergroupdoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_newauthorizedactiontakeridentitydoesnotexisterror_free: (a: number, b: number) => void;
  readonly newauthorizedactiontakeridentitydoesnotexisterror_getCode: (a: number) => number;
  readonly newauthorizedactiontakeridentitydoesnotexisterror_message: (a: number) => [number, number];
  readonly newauthorizedactiontakeridentitydoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_newtokensdestinationidentitydoesnotexisterror_free: (a: number, b: number) => void;
  readonly newtokensdestinationidentitydoesnotexisterror_getCode: (a: number) => number;
  readonly newtokensdestinationidentitydoesnotexisterror_message: (a: number) => [number, number];
  readonly newtokensdestinationidentitydoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokenmintpastmaxsupplyerror_free: (a: number, b: number) => void;
  readonly tokenmintpastmaxsupplyerror_getCode: (a: number) => number;
  readonly tokenmintpastmaxsupplyerror_message: (a: number) => [number, number];
  readonly tokenmintpastmaxsupplyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokensettingmaxsupplytolessthancurrentsupplyerror_free: (a: number, b: number) => void;
  readonly tokensettingmaxsupplytolessthancurrentsupplyerror_getCode: (a: number) => number;
  readonly tokensettingmaxsupplytolessthancurrentsupplyerror_message: (a: number) => [number, number];
  readonly tokensettingmaxsupplytolessthancurrentsupplyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datacontractupdateactionnotallowederror_free: (a: number, b: number) => void;
  readonly datacontractupdateactionnotallowederror_getCode: (a: number) => number;
  readonly datacontractupdateactionnotallowederror_message: (a: number) => [number, number];
  readonly datacontractupdateactionnotallowederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitytokenaccountnotfrozenerror_free: (a: number, b: number) => void;
  readonly identitytokenaccountnotfrozenerror_getCode: (a: number) => number;
  readonly identitytokenaccountnotfrozenerror_message: (a: number) => [number, number];
  readonly identitytokenaccountnotfrozenerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupactionalreadysignedbyidentityerror_free: (a: number, b: number) => void;
  readonly groupactionalreadysignedbyidentityerror_getCode: (a: number) => number;
  readonly groupactionalreadysignedbyidentityerror_message: (a: number) => [number, number];
  readonly groupactionalreadysignedbyidentityerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupactionalreadycompletederror_free: (a: number, b: number) => void;
  readonly groupactionalreadycompletederror_getCode: (a: number) => number;
  readonly groupactionalreadycompletederror_message: (a: number) => [number, number];
  readonly groupactionalreadycompletederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_groupactiondoesnotexisterror_free: (a: number, b: number) => void;
  readonly groupactiondoesnotexisterror_getCode: (a: number) => number;
  readonly groupactiondoesnotexisterror_message: (a: number) => [number, number];
  readonly groupactiondoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitynotmemberofgrouperror_free: (a: number, b: number) => void;
  readonly identitynotmemberofgrouperror_getCode: (a: number) => number;
  readonly identitynotmemberofgrouperror_message: (a: number) => [number, number];
  readonly identitynotmemberofgrouperror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokennotpausederror_free: (a: number, b: number) => void;
  readonly tokennotpausederror_getCode: (a: number) => number;
  readonly tokennotpausederror_message: (a: number) => [number, number];
  readonly tokennotpausederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokenalreadypausederror_free: (a: number, b: number) => void;
  readonly tokenalreadypausederror_getCode: (a: number) => number;
  readonly tokenalreadypausederror_message: (a: number) => [number, number];
  readonly tokenalreadypausederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitytokenaccountalreadyfrozenerror_free: (a: number, b: number) => void;
  readonly identitytokenaccountalreadyfrozenerror_getCode: (a: number) => number;
  readonly identitytokenaccountalreadyfrozenerror_message: (a: number) => [number, number];
  readonly identitytokenaccountalreadyfrozenerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_tokenispausederror_free: (a: number, b: number) => void;
  readonly tokenispausederror_getCode: (a: number) => number;
  readonly tokenispausederror_message: (a: number) => [number, number];
  readonly tokenispausederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitytokenaccountfrozenerror_free: (a: number, b: number) => void;
  readonly identitytokenaccountfrozenerror_getCode: (a: number) => number;
  readonly identitytokenaccountfrozenerror_message: (a: number) => [number, number];
  readonly identitytokenaccountfrozenerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_unauthorizedtokenactionerror_free: (a: number, b: number) => void;
  readonly unauthorizedtokenactionerror_getCode: (a: number) => number;
  readonly unauthorizedtokenactionerror_message: (a: number) => [number, number];
  readonly unauthorizedtokenactionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitydoesnothaveenoughtokenbalanceerror_free: (a: number, b: number) => void;
  readonly identitydoesnothaveenoughtokenbalanceerror_getCode: (a: number) => number;
  readonly identitydoesnothaveenoughtokenbalanceerror_message: (a: number) => [number, number];
  readonly identitydoesnothaveenoughtokenbalanceerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_recipientidentitydoesnotexisterror_free: (a: number, b: number) => void;
  readonly recipientidentitydoesnotexisterror_getCode: (a: number) => number;
  readonly recipientidentitydoesnotexisterror_message: (a: number) => [number, number];
  readonly recipientidentitydoesnotexisterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentcontestnotpaidforerror_free: (a: number, b: number) => void;
  readonly documentcontestnotpaidforerror_getCode: (a: number) => number;
  readonly documentcontestnotpaidforerror_message: (a: number) => [number, number];
  readonly documentcontestnotpaidforerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_notransferkeyforcorewithdrawalavailableerror_free: (a: number, b: number) => void;
  readonly notransferkeyforcorewithdrawalavailableerror_getCode: (a: number) => number;
  readonly notransferkeyforcorewithdrawalavailableerror_message: (a: number) => [number, number];
  readonly notransferkeyforcorewithdrawalavailableerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_missingtransferkeyerror_free: (a: number, b: number) => void;
  readonly missingtransferkeyerror_getCode: (a: number) => number;
  readonly missingtransferkeyerror_message: (a: number) => [number, number];
  readonly missingtransferkeyerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentcontestdocumentwithsameidalreadypresenterror_free: (a: number, b: number) => void;
  readonly documentcontestdocumentwithsameidalreadypresenterror_getCode: (a: number) => number;
  readonly documentcontestdocumentwithsameidalreadypresenterror_message: (a: number) => [number, number];
  readonly documentcontestdocumentwithsameidalreadypresenterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_masternodeincorrectvoteridentityiderror_free: (a: number, b: number) => void;
  readonly masternodeincorrectvoteridentityiderror_getCode: (a: number) => number;
  readonly masternodeincorrectvoteridentityiderror_message: (a: number) => [number, number];
  readonly masternodeincorrectvoteridentityiderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_masternodeincorrectvotingaddresserror_free: (a: number, b: number) => void;
  readonly masternodeincorrectvotingaddresserror_getCode: (a: number) => number;
  readonly masternodeincorrectvotingaddresserror_message: (a: number) => [number, number];
  readonly masternodeincorrectvotingaddresserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_masternodevotealreadypresenterror_free: (a: number, b: number) => void;
  readonly masternodevotealreadypresenterror_getCode: (a: number) => number;
  readonly masternodevotealreadypresenterror_message: (a: number) => [number, number];
  readonly masternodevotealreadypresenterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_masternodevotedtoomanytimeserror_free: (a: number, b: number) => void;
  readonly masternodevotedtoomanytimeserror_getCode: (a: number) => number;
  readonly masternodevotedtoomanytimeserror_message: (a: number) => [number, number];
  readonly masternodevotedtoomanytimeserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_votepollnotavailableforvotingerror_free: (a: number, b: number) => void;
  readonly votepollnotavailableforvotingerror_getCode: (a: number) => number;
  readonly votepollnotavailableforvotingerror_message: (a: number) => [number, number];
  readonly votepollnotavailableforvotingerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_votepollnotfounderror_free: (a: number, b: number) => void;
  readonly votepollnotfounderror_getCode: (a: number) => number;
  readonly votepollnotfounderror_message: (a: number) => [number, number];
  readonly votepollnotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentcontestidentityalreadycontestanterror_free: (a: number, b: number) => void;
  readonly documentcontestidentityalreadycontestanterror_getCode: (a: number) => number;
  readonly documentcontestidentityalreadycontestanterror_message: (a: number) => [number, number];
  readonly documentcontestidentityalreadycontestanterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentcontestnotjoinableerror_free: (a: number, b: number) => void;
  readonly documentcontestnotjoinableerror_getCode: (a: number) => number;
  readonly documentcontestnotjoinableerror_message: (a: number) => [number, number];
  readonly documentcontestnotjoinableerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentcontestcurrentlylockederror_free: (a: number, b: number) => void;
  readonly documentcontestcurrentlylockederror_getCode: (a: number) => number;
  readonly documentcontestcurrentlylockederror_message: (a: number) => [number, number];
  readonly documentcontestcurrentlylockederror_serialize: (a: number) => [number, number, number];
  readonly __wbg_masternodenotfounderror_free: (a: number, b: number) => void;
  readonly masternodenotfounderror_getCode: (a: number) => number;
  readonly masternodenotfounderror_message: (a: number) => [number, number];
  readonly masternodenotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_prefundedspecializedbalancenotfounderror_free: (a: number, b: number) => void;
  readonly prefundedspecializedbalancenotfounderror_getCode: (a: number) => number;
  readonly prefundedspecializedbalancenotfounderror_message: (a: number) => [number, number];
  readonly prefundedspecializedbalancenotfounderror_serialize: (a: number) => [number, number, number];
  readonly __wbg_prefundedspecializedbalanceinsufficienterror_free: (a: number, b: number) => void;
  readonly prefundedspecializedbalanceinsufficienterror_getCode: (a: number) => number;
  readonly prefundedspecializedbalanceinsufficienterror_message: (a: number) => [number, number];
  readonly prefundedspecializedbalanceinsufficienterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentincorrectpurchasepriceerror_free: (a: number, b: number) => void;
  readonly documentincorrectpurchasepriceerror_getCode: (a: number) => number;
  readonly documentincorrectpurchasepriceerror_message: (a: number) => [number, number];
  readonly documentincorrectpurchasepriceerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documentnotforsaleerror_free: (a: number, b: number) => void;
  readonly documentnotforsaleerror_getCode: (a: number) => number;
  readonly documentnotforsaleerror_message: (a: number) => [number, number];
  readonly documentnotforsaleerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_documenttypeupdateerror_free: (a: number, b: number) => void;
  readonly documenttypeupdateerror_getCode: (a: number) => number;
  readonly documenttypeupdateerror_message: (a: number) => [number, number];
  readonly documenttypeupdateerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_free: (a: number, b: number) => void;
  readonly identitypublickeyalreadyexistsforuniquecontractboundserror_getCode: (a: number) => number;
  readonly identitypublickeyalreadyexistsforuniquecontractboundserror_message: (a: number) => [number, number];
  readonly identitypublickeyalreadyexistsforuniquecontractboundserror_serialize: (a: number) => [number, number, number];
  readonly __wbg_invalididentityassetlocktransactionoutputerror_free: (a: number, b: number) => void;
  readonly invalididentityassetlocktransactionoutputerror_getOutputIndex: (a: number) => number;
  readonly invalididentityassetlocktransactionoutputerror_getCode: (a: number) => number;
  readonly invalididentityassetlocktransactionoutputerror_message: (a: number) => [number, number];
  readonly __wbg_datacontractuniqueindiceschangederror_free: (a: number, b: number) => void;
  readonly datacontractuniqueindiceschangederror_getDocumentType: (a: number) => [number, number];
  readonly datacontractuniqueindiceschangederror_getIndexName: (a: number) => [number, number];
  readonly datacontractuniqueindiceschangederror_getCode: (a: number) => number;
  readonly datacontractuniqueindiceschangederror_message: (a: number) => [number, number];
  readonly __wbg_datacontracthavenewuniqueindexerror_free: (a: number, b: number) => void;
  readonly datacontracthavenewuniqueindexerror_getDocumentType: (a: number) => [number, number];
  readonly datacontracthavenewuniqueindexerror_getIndexName: (a: number) => [number, number];
  readonly datacontracthavenewuniqueindexerror_getCode: (a: number) => number;
  readonly datacontracthavenewuniqueindexerror_message: (a: number) => [number, number];
  readonly __wbg_tokenunfreezetransition_free: (a: number, b: number) => void;
  readonly tokenunfreezetransition_getFrozenIdentityId: (a: number) => any;
  readonly tokenunfreezetransition_getPublicNote: (a: number) => [number, number];
  readonly __wbg_identityassetlocktransactionoutpointalreadyexistserror_free: (a: number, b: number) => void;
  readonly identityassetlocktransactionoutpointalreadyexistserror_getOutputIndex: (a: number) => number;
  readonly identityassetlocktransactionoutpointalreadyexistserror_getTransactionId: (a: number) => any;
  readonly identityassetlocktransactionoutpointalreadyexistserror_getCode: (a: number) => number;
  readonly identityassetlocktransactionoutpointalreadyexistserror_message: (a: number) => [number, number];
  readonly __wbg_datatriggerconditionerror_free: (a: number, b: number) => void;
  readonly datatriggerconditionerror_getDataContractId: (a: number) => any;
  readonly datatriggerconditionerror_getDocumentId: (a: number) => any;
  readonly datatriggerconditionerror_getMessage: (a: number) => [number, number];
  readonly datatriggerconditionerror_getCode: (a: number) => number;
  readonly datatriggerconditionerror_message: (a: number) => [number, number];
  readonly datatriggerconditionerror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datatriggeractionconditionerror_free: (a: number, b: number) => void;
  readonly datatriggeractionconditionerror_getDataContractId: (a: number) => any;
  readonly datatriggeractionconditionerror_getDocumentTransitionId: (a: number) => any;
  readonly datatriggeractionconditionerror_getMessage: (a: number) => [number, number];
  readonly datatriggeractionconditionerror_getOwnerId: (a: number) => any;
  readonly datatriggeractionconditionerror_getCode: (a: number) => number;
  readonly __wbg_jsonschemaerror_free: (a: number, b: number) => void;
  readonly jsonschemaerror_getKeyword: (a: number) => [number, number];
  readonly jsonschemaerror_getInstancePath: (a: number) => [number, number];
  readonly jsonschemaerror_getSchemaPath: (a: number) => [number, number];
  readonly jsonschemaerror_getPropertyName: (a: number) => [number, number];
  readonly jsonschemaerror_getParams: (a: number) => [number, number, number];
  readonly jsonschemaerror_getCode: (a: number) => number;
  readonly jsonschemaerror_toString: (a: number) => [number, number];
  readonly jsonschemaerror_message: (a: number) => [number, number];
  readonly jsonschemaerror_keyword: (a: number) => [number, number];
  readonly jsonschemaerror_instancePath: (a: number) => [number, number];
  readonly jsonschemaerror_schemaPath: (a: number) => [number, number];
  readonly jsonschemaerror_propertyName: (a: number) => [number, number];
  readonly jsonschemaerror_params: (a: number) => [number, number, number];
  readonly jsonschemaerror_code: (a: number) => number;
  readonly __wbg_tokenminttransition_free: (a: number, b: number) => void;
  readonly tokenminttransition_getRecipientId: (a: number, b: number) => [number, number, number];
  readonly tokenminttransition_getIssuedToIdentityId: (a: number, b: number) => any;
  readonly tokenminttransition_getPublicNote: (a: number) => [number, number];
  readonly tokenminttransition_getAmount: (a: number) => bigint;
  readonly __wbg_publickeyisdisablederror_free: (a: number, b: number) => void;
  readonly publickeyisdisablederror_getPublicKeyId: (a: number) => number;
  readonly publickeyisdisablederror_getCode: (a: number) => number;
  readonly publickeyisdisablederror_message: (a: number) => [number, number];
  readonly __wbg_datacontractalreadypresenterror_free: (a: number, b: number) => void;
  readonly datacontractalreadypresenterror_new: (a: any) => number;
  readonly datacontractalreadypresenterror_getDataContractId: (a: number) => any;
  readonly datacontractalreadypresenterror_getCode: (a: number) => number;
  readonly datacontractalreadypresenterror_message: (a: number) => [number, number];
  readonly datacontractalreadypresenterror_serialize: (a: number) => [number, number, number];
  readonly __wbg_datacontractimmutablepropertiesupdateerror_free: (a: number, b: number) => void;
  readonly datacontractimmutablepropertiesupdateerror_getOperation: (a: number) => [number, number];
  readonly datacontractimmutablepropertiesupdateerror_getFieldPath: (a: number) => [number, number];
  readonly datacontractimmutablepropertiesupdateerror_getCode: (a: number) => number;
  readonly datacontractimmutablepropertiesupdateerror_message: (a: number) => [number, number];
  readonly __wbg_datacontractupdatetransition_free: (a: number, b: number) => void;
  readonly datacontractupdatetransition_new: (a: any) => [number, number, number];
  readonly datacontractupdatetransition_getDataContract: (a: number) => number;
  readonly datacontractupdatetransition_getOwnerId: (a: number) => any;
  readonly datacontractupdatetransition_getIdentityContractNonce: (a: number) => bigint;
  readonly datacontractupdatetransition_getType: (a: number) => number;
  readonly datacontractupdatetransition_getUserFeeIncrease: (a: number) => number;
  readonly datacontractupdatetransition_setUserFeeIncrease: (a: number, b: number) => void;
  readonly datacontractupdatetransition_getSignature: (a: number) => any;
  readonly datacontractupdatetransition_getSignaturePublicKeyId: (a: number) => number;
  readonly datacontractupdatetransition_toBuffer: (a: number) => [number, number, number];
  readonly datacontractupdatetransition_fromBuffer: (a: number, b: number) => [number, number, number];
  readonly datacontractupdatetransition_getModifiedDataIds: (a: number) => [number, number];
  readonly datacontractupdatetransition_isDataContractStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_isDocumentStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_isIdentityStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_isVotingStateTransition: (a: number) => number;
  readonly datacontractupdatetransition_toObject: (a: number, b: number) => [number, number, number];
  readonly datacontractupdatetransition_sign: (a: number, b: number, c: number, d: number, e: any) => [number, number];
  readonly datacontractupdatetransition_verifySignature: (a: number, b: number, c: any) => [number, number, number];
  readonly __wbg_statetransitionisnotactiveerror_free: (a: number, b: number) => void;
  readonly statetransitionisnotactiveerror_getStateTransitionType: (a: number) => [number, number];
  readonly statetransitionisnotactiveerror_getActiveVersionRangeStart: (a: number) => number;
  readonly statetransitionisnotactiveerror_getActiveVersionRangeEnd: (a: number) => number;
  readonly statetransitionisnotactiveerror_getCurrentProtocolVersion: (a: number) => number;
  readonly statetransitionisnotactiveerror_toObject: (a: number) => any;
  readonly __wbg_validationresult_free: (a: number, b: number) => void;
  readonly validationresult_new: (a: number, b: number) => [number, number, number];
  readonly validationresult_errorsText: (a: number) => [number, number];
  readonly validationresult_isValid: (a: number) => number;
  readonly validationresult_getErrors: (a: number) => [number, number];
  readonly validationresult_errors: (a: number) => [number, number];
  readonly validationresult_getData: (a: number) => any;
  readonly validationresult_getFirstError: (a: number) => any;
  readonly __wbg_serializedobjectparsingerror_free: (a: number, b: number) => void;
  readonly serializedobjectparsingerror_getParsingError: (a: number) => [number, number];
  readonly serializedobjectparsingerror_getCode: (a: number) => number;
  readonly serializedobjectparsingerror_message: (a: number) => [number, number];
  readonly __wbg_unsupportedversionerror_free: (a: number, b: number) => void;
  readonly unsupportedversionerror_getReceivedVersion: (a: number) => number;
  readonly unsupportedversionerror_getMinVersion: (a: number) => number;
  readonly unsupportedversionerror_getMaxVersion: (a: number) => number;
  readonly unsupportedversionerror_getCode: (a: number) => number;
  readonly unsupportedversionerror_message: (a: number) => [number, number];
  readonly __wbg_wrongpublickeypurposeerror_free: (a: number, b: number) => void;
  readonly wrongpublickeypurposeerror_getPublicKeyPurpose: (a: number) => number;
  readonly wrongpublickeypurposeerror_getKeyPurposeRequirement: (a: number) => any;
  readonly wrongpublickeypurposeerror_getCode: (a: number) => number;
  readonly wrongpublickeypurposeerror_message: (a: number) => [number, number];
  readonly generateDocumentId: (a: any, b: any, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly __wbg_tokenburntransition_free: (a: number, b: number) => void;
  readonly tokenburntransition_getPublicNote: (a: number) => [number, number];
  readonly tokenburntransition_getBurnAmount: (a: number) => bigint;
  readonly __wbg_duplicatedidentitypublickeyiderror_free: (a: number, b: number) => void;
  readonly duplicatedidentitypublickeyiderror_getDuplicatedIds: (a: number) => any;
  readonly duplicatedidentitypublickeyiderror_getCode: (a: number) => number;
  readonly duplicatedidentitypublickeyiderror_message: (a: number) => [number, number];
  readonly __wbg_datacontractemptyschemaerror_free: (a: number, b: number) => void;
  readonly datacontractemptyschemaerror_getDataContractId: (a: number) => any;
  readonly datacontractemptyschemaerror_getCode: (a: number) => number;
  readonly datacontractemptyschemaerror_message: (a: number) => [number, number];
  readonly __wbg_assetlockoutputnotfounderror_free: (a: number, b: number) => void;
  readonly __wbg_missingstatetransitiontypeerror_free: (a: number, b: number) => void;
  readonly missingstatetransitiontypeerror_new: () => number;
  readonly missingstatetransitiontypeerror_getCode: (a: number) => number;
  readonly missingstatetransitiontypeerror_message: (a: number) => [number, number];
  readonly __wbg_datacontractconfigupdateerror_free: (a: number, b: number) => void;
  readonly datacontractconfigupdateerror_new: (a: any, b: number, c: number) => number;
  readonly datacontractconfigupdateerror_getDataContractId: (a: number) => any;
  readonly datacontractconfigupdateerror_getCode: (a: number) => number;
  readonly datacontractconfigupdateerror_message: (a: number) => [number, number];
  readonly __wbg_invalidassetlocktransactionoutputreturnsizeerror_free: (a: number, b: number) => void;
  readonly invalidassetlocktransactionoutputreturnsizeerror_getOutputIndex: (a: number) => number;
  readonly invalidassetlocktransactionoutputreturnsizeerror_getCode: (a: number) => number;
  readonly invalidassetlocktransactionoutputreturnsizeerror_message: (a: number) => [number, number];
  readonly rustsecp256k1_v0_10_0_context_create: (a: number) => number;
  readonly rustsecp256k1_v0_10_0_context_destroy: (a: number) => void;
  readonly rustsecp256k1_v0_10_0_default_illegal_callback_fn: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_10_0_default_error_callback_fn: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_4: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_6: WebAssembly.Table;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly closure181_externref_shim: (a: number, b: number, c: any) => void;
  readonly closure2964_externref_shim: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

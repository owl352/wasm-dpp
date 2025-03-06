"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.IdentityUpdateTransition=exports.IdentityTopUpTransition=exports.IdentityPublicKeyWithWitness=exports.IdentityPublicKeyIsReadOnlyError=exports.IdentityPublicKeyIsDisabledError=exports.IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError=exports.IdentityPublicKey=exports.IdentityNotFoundError=exports.IdentityInsufficientBalanceError=exports.IdentityFactory=exports.IdentityFacade=exports.IdentityCreditWithdrawalTransition=exports.IdentityCreditTransferTransition=exports.IdentityCreditTransferToSelfError=exports.IdentityCreateTransition=exports.IdentityContractNonceOutOfBoundsError=exports.IdentityAssetLockTransactionReplayError=exports.IdentityAssetLockTransactionOutputNotFoundError=exports.IdentityAssetLockTransactionOutPointNotEnoughBalanceError=exports.IdentityAssetLockTransactionOutPointAlreadyExistsError=exports.IdentityAssetLockTransactionIsNotFoundError=exports.IdentityAssetLockProofLockedTransactionMismatchError=exports.IdentityAlreadyExistsError=exports.Identity=exports.ExtendedDocument=exports.DuplicatedIdentityPublicKeyStateError=exports.DuplicatedIdentityPublicKeyIdStateError=exports.DuplicatedIdentityPublicKeyIdError=exports.DuplicatedIdentityPublicKeyError=exports.DuplicateUniqueIndexError=exports.DuplicateIndexNameError=exports.DuplicateIndexError=exports.DuplicateDocumentTransitionsWithIndicesError=exports.DuplicateDocumentTransitionsWithIdsError=exports.DocumentsBatchTransition=exports.DocumentTypeUpdateError=exports.DocumentTransitionsAreAbsentError=exports.DocumentTransitions=exports.DocumentTransition=exports.DocumentTimestampsMismatchError=exports.DocumentTimestampsAreEqualError=exports.DocumentTimestampWindowViolationError=exports.DocumentOwnerIdMismatchError=exports.DocumentNotProvidedError=exports.DocumentNotFoundError=exports.DocumentNotForSaleError=exports.DocumentNoRevisionError=exports.DocumentIncorrectPurchasePriceError=exports.DocumentFieldMaxSizeExceededError=exports.DocumentFactory=exports.DocumentFacade=exports.DocumentCreationNotAllowedError=exports.DocumentCreateTransition=exports.DocumentContestNotPaidForError=exports.DocumentContestNotJoinableError=exports.DocumentContestIdentityAlreadyContestantError=exports.DocumentContestDocumentWithSameIdAlreadyPresentError=exports.DocumentContestCurrentlyLockedError=exports.DocumentAlreadyPresentError=exports.DocumentAlreadyExistsError=exports.Document=exports.DisablingKeyIdAlsoBeingAddedInSameTransitionError=exports.DataTriggerInvalidResultError=exports.DataTriggerExecutionError=exports.DataTriggerConditionError=exports.DataTriggerActionInvalidResultError=exports.DataTriggerActionExecutionError=exports.DataTriggerActionConditionError=exports.DataContractUpdateTransition=exports.DataContractUpdatePermissionError=exports.DataContractUniqueIndicesChangedError=exports.DataContractNotPresentNotConsensusError=exports.DataContractNotPresentError=exports.DataContractMaxDepthExceedError=exports.DataContractMaxDepthError=exports.DataContractIsReadonlyError=exports.DataContractInvalidIndexDefinitionUpdateError=exports.DataContractImmutablePropertiesUpdateError=exports.DataContractHaveNewUniqueIndexError=exports.DataContractGenericError=exports.DataContractFactory=exports.DataContractFacade=exports.DataContractError=exports.DataContractEmptySchemaError=exports.DataContractCreateTransition=exports.DataContractConfigUpdateError=exports.DataContractBoundsNotPresentError=exports.DataContractAlreadyPresentError=exports.DataContract=exports.DashPlatformProtocol=exports.ContestedUniqueIndexWithUniqueIndexError=exports.ContestedUniqueIndexOnMutableDocumentTypeError=exports.ContestedDocumentsTemporarilyNotAllowedError=exports.ChainAssetLockProof=exports.BasicECDSAError=exports.BasicBLSError=exports.BalanceIsNotEnoughError=exports.AssetLockTransactionIsNotFoundError=exports.AssetLockProof=exports.AssetLockOutputNotFoundError=void 0;exports.TooManyMasterPublicKeyError=exports.SystemPropertyIndexAlreadyPresentError=exports.StateTransitionTypes=exports.StateTransitionMaxSizeExceededError=exports.StateTransitionFactory=exports.SignatureShouldNotBePresentError=exports.SerializedObjectParsingError=exports.RevisionAbsentError=exports.PublicKeySecurityLevelNotMetError=exports.PublicKeyIsDisabledError=exports.ProtocolVersionParsingError=exports.PrefundedSpecializedBalanceNotFoundError=exports.PrefundedSpecializedBalanceInsufficientError=exports.PlatformValueError=exports.OverflowError=exports.NotImplementedIdentityCreditWithdrawalTransitionPoolingError=exports.NonConsensusErrorWasm=exports.NoTransferKeyForCoreWithdrawalAvailableError=exports.NoDocumentsSuppliedError=exports.MissingTransferKeyError=exports.MissingStateTransitionTypeError=exports.MissingPublicKeyError=exports.MissingPositionsInDocumentTypePropertiesError=exports.MissingMasterPublicKeyError=exports.MissingIdentityPublicKeyIdsError=exports.MissingDocumentTypeError=exports.MissingDocumentTransitionTypeError=exports.MissingDocumentTransitionActionError=exports.MissingDataContractIdError=exports.MismatchOwnerIdsError=exports.Metadata=exports.MaxIdentityPublicKeyLimitReachedError=exports.MaxDocumentsTransitionsExceededError=exports.MasternodeVotedTooManyTimesError=exports.MasternodeVoteTransition=exports.MasternodeVoteAlreadyPresentError=exports.MasternodeNotFoundError=exports.MasternodeIncorrectVotingAddressError=exports.MasternodeIncorrectVoterIdentityIdError=exports.MasterPublicKeyUpdateError=exports.KeyType=exports.KeySecurityLevel=exports.KeyPurpose=exports.JsonSchemaError=exports.JsonSchemaCompilationError=exports.InvalidStateTransitionTypeError=exports.InvalidStateTransitionSignatureError=exports.InvalidStateTransitionError=exports.InvalidSignaturePublicKeySecurityLevelError=exports.InvalidSignaturePublicKeyPurposeError=exports.InvalidJsonSchemaRefError=exports.InvalidInstantAssetLockProofSignatureError=exports.InvalidInstantAssetLockProofError=exports.InvalidInitialRevisionError=exports.InvalidIndexedPropertyConstraintError=exports.InvalidIndexPropertyTypeError=exports.InvalidIdentityUpdateTransitionEmptyError=exports.InvalidIdentityUpdateTransitionDisableKeysError=exports.InvalidIdentityRevisionError=exports.InvalidIdentityPublicKeyTypeError=exports.InvalidIdentityPublicKeySecurityLevelError=exports.InvalidIdentityPublicKeyIdError=exports.InvalidIdentityPublicKeyDataError=exports.InvalidIdentityNonceError=exports.InvalidIdentityKeySignatureError=exports.InvalidIdentityError=exports.InvalidIdentityCreditWithdrawalTransitionOutputScriptError=exports.InvalidIdentityCreditWithdrawalTransitionCoreFeeError=exports.InvalidIdentityCreditWithdrawalTransitionAmountError=exports.InvalidIdentityCreditTransferAmountError=exports.InvalidIdentityAssetLockTransactionOutputError=exports.InvalidIdentityAssetLockTransactionError=exports.InvalidIdentityAssetLockProofChainLockValidationErrorWasm=exports.InvalidIdentifierError=exports.InvalidDocumentTypeRequiredSecurityLevelError=exports.InvalidDocumentTypeNameErrorWasm=exports.InvalidDocumentTypeNameError=exports.InvalidDocumentTypeInDataContractError=exports.InvalidDocumentTypeError=exports.InvalidDocumentTransitionIdError=exports.InvalidDocumentTransitionActionError=exports.InvalidDocumentRevisionError=exports.InvalidDocumentError=exports.InvalidDocumentActionError=exports.InvalidDataContractVersionError=exports.InvalidDataContractIdError=exports.InvalidDataContractError=exports.InvalidCompoundIndexError=exports.InvalidAssetLockTransactionOutputReturnSizeError=exports.InvalidAssetLockProofTransactionHeightError=exports.InvalidAssetLockProofCoreChainHeightError=exports.InvalidActiontError=exports.InvalidActionNameError=exports.InvalidActionError=exports.InstantAssetLockProof=exports.InconsistentCompoundIndexDataError=exports.IncompatibleRe2PatternError=exports.IncompatibleProtocolVersionError=exports.IncompatibleDocumentTypeSchemaError=exports.IncompatibleDataContractSchemaError=void 0;exports.WrongPublicKeyPurposeError=exports.WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError=exports.VotePollNotFoundError=exports.VotePollNotAvailableForVotingError=exports.VersionError=exports.ValueError=exports.ValidationResult=exports.UnsupportedVersionError=exports.UnsupportedProtocolVersionError=exports.UnsupportedFeatureError=exports.UnknownTransferableTypeError=exports.UnknownTradeModeError=exports.UnknownStorageKeyRequirementsError=exports.UnknownSecurityLevelError=exports.UnknownDocumentCreationRestrictionModeError=exports.UnknownAssetLockProofTypeError=exports.UniqueIndicesLimitReachedError=exports.UndefinedIndexPropertyError=exports.TryingToReplaceImmutableDocumentError=exports.TryingToDeleteImmutableDocumentError=void 0;exports.createAssetLockProofInstance=createAssetLockProofInstance;exports.default=void 0;exports.deserializeConsensusError=deserializeConsensusError;exports.generateDocumentId=generateDocumentId;exports.getLatestProtocolVersion=getLatestProtocolVersion;exports.initSync=initSync;var _Identifier=_interopRequireDefault(require("../identifier/Identifier.js"));var _lodash=require("lodash");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e};}let wasm;let WASM_VECTOR_LEN=0;let cachedUint8ArrayMemory0=null;function getUint8ArrayMemory0(){if(cachedUint8ArrayMemory0===null||cachedUint8ArrayMemory0.byteLength===0){cachedUint8ArrayMemory0=new Uint8Array(wasm.memory.buffer);}return cachedUint8ArrayMemory0;}const cachedTextEncoder=typeof TextEncoder!=='undefined'?new TextEncoder('utf-8'):{encode:()=>{throw Error('TextEncoder not available');}};const encodeString=typeof cachedTextEncoder.encodeInto==='function'?function(arg,view){return cachedTextEncoder.encodeInto(arg,view);}:function(arg,view){const buf=cachedTextEncoder.encode(arg);view.set(buf);return{read:arg.length,written:buf.length};};function passStringToWasm0(arg,malloc,realloc){if(realloc===undefined){const buf=cachedTextEncoder.encode(arg);const ptr=malloc(buf.length,1)>>>0;getUint8ArrayMemory0().subarray(ptr,ptr+buf.length).set(buf);WASM_VECTOR_LEN=buf.length;return ptr;}let len=arg.length;let ptr=malloc(len,1)>>>0;const mem=getUint8ArrayMemory0();let offset=0;for(;offset<len;offset++){const code=arg.charCodeAt(offset);if(code>0x7F)break;mem[ptr+offset]=code;}if(offset!==len){if(offset!==0){arg=arg.slice(offset);}ptr=realloc(ptr,len,len=offset+arg.length*3,1)>>>0;const view=getUint8ArrayMemory0().subarray(ptr+offset,ptr+len);const ret=encodeString(arg,view);offset+=ret.written;ptr=realloc(ptr,len,offset,1)>>>0;}WASM_VECTOR_LEN=offset;return ptr;}let cachedDataViewMemory0=null;function getDataViewMemory0(){if(cachedDataViewMemory0===null||cachedDataViewMemory0.buffer.detached===true||cachedDataViewMemory0.buffer.detached===undefined&&cachedDataViewMemory0.buffer!==wasm.memory.buffer){cachedDataViewMemory0=new DataView(wasm.memory.buffer);}return cachedDataViewMemory0;}function addToExternrefTable0(obj){const idx=wasm.__externref_table_alloc();wasm.__wbindgen_export_4.set(idx,obj);return idx;}function handleError(f,args){try{return f.apply(this,args);}catch(e){const idx=addToExternrefTable0(e);wasm.__wbindgen_exn_store(idx);}}function getArrayU8FromWasm0(ptr,len){ptr=ptr>>>0;return getUint8ArrayMemory0().subarray(ptr/1,ptr/1+len);}const cachedTextDecoder=typeof TextDecoder!=='undefined'?new TextDecoder('utf-8',{ignoreBOM:true,fatal:true}):{decode:()=>{throw Error('TextDecoder not available');}};if(typeof TextDecoder!=='undefined'){cachedTextDecoder.decode();};function getStringFromWasm0(ptr,len){ptr=ptr>>>0;return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr,ptr+len));}function isLikeNone(x){return x===undefined||x===null;}function passArray8ToWasm0(arg,malloc){const ptr=malloc(arg.length*1,1)>>>0;getUint8ArrayMemory0().set(arg,ptr/1);WASM_VECTOR_LEN=arg.length;return ptr;}const CLOSURE_DTORS=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(state=>{wasm.__wbindgen_export_6.get(state.dtor)(state.a,state.b);});function makeMutClosure(arg0,arg1,dtor,f){const state={a:arg0,b:arg1,cnt:1,dtor};const real=function real(){// First up with a closure we increment the internal reference
// count. This ensures that the Rust closure environment won't
// be deallocated while we're invoking it.
state.cnt++;const a=state.a;state.a=0;try{for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return f(a,state.b,...args);}finally{if(--state.cnt===0){wasm.__wbindgen_export_6.get(state.dtor)(a,state.b);CLOSURE_DTORS.unregister(state);}else{state.a=a;}}};real.original=state;CLOSURE_DTORS.register(real,state,state);return real;}function debugString(val){// primitive types
const type=typeof val;if(type=='number'||type=='boolean'||val==null){return"".concat(val);}if(type=='string'){return"\"".concat(val,"\"");}if(type=='symbol'){const description=val.description;if(description==null){return'Symbol';}else{return"Symbol(".concat(description,")");}}if(type=='function'){const name=val.name;if(typeof name=='string'&&name.length>0){return"Function(".concat(name,")");}else{return'Function';}}// objects
if(Array.isArray(val)){const length=val.length;let debug='[';if(length>0){debug+=debugString(val[0]);}for(let i=1;i<length;i++){debug+=', '+debugString(val[i]);}debug+=']';return debug;}// Test for built-in
const builtInMatches=/\[object ([^\]]+)\]/.exec(toString.call(val));let className;if(builtInMatches&&builtInMatches.length>1){className=builtInMatches[1];}else{// Failed to match the standard '[object ClassName]'
return toString.call(val);}if(className=='Object'){// we're a user defined class or Object
// JSON.stringify avoids problems with cycles, and is generally much
// easier than looping through ownProperties of `val`.
try{return'Object('+JSON.stringify(val)+')';}catch(_){return'Object';}}// errors
if(val instanceof Error){return"".concat(val.name,": ").concat(val.message,"\n").concat(val.stack);}// TODO we could test for more things here, like `Set`s and `Map`s.
return className;}function takeFromExternrefTable0(idx){const value=wasm.__wbindgen_export_4.get(idx);wasm.__externref_table_dealloc(idx);return value;}function getArrayJsValueFromWasm0(ptr,len){ptr=ptr>>>0;const mem=getDataViewMemory0();const result=[];for(let i=ptr;i<ptr+4*len;i+=4){result.push(wasm.__wbindgen_export_4.get(mem.getUint32(i,true)));}wasm.__externref_drop_slice(ptr,len);return result;}function _assertClass(instance,klass){if(!(instance instanceof klass)){throw new Error("expected instance of ".concat(klass.name));}}function passArrayJsValueToWasm0(array,malloc){const ptr=malloc(array.length*4,4)>>>0;const mem=getDataViewMemory0();for(let i=0;i<array.length;i++){mem.setUint32(ptr+4*i,addToExternrefTable0(array[i]),true);}WASM_VECTOR_LEN=array.length;return ptr;}/**
 * @param {any} contract_id
 * @param {any} owner_id
 * @param {string} document_type
 * @param {Uint8Array} entropy
 * @returns {any}
 */function generateDocumentId(contract_id,owner_id,document_type,entropy){const ptr0=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(entropy,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.generateDocumentId(contract_id,owner_id,ptr0,len0,ptr1,len1);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
 * @param {any} raw_parameters
 * @returns {any}
 */function createAssetLockProofInstance(raw_parameters){const ret=wasm.createAssetLockProofInstance(raw_parameters);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
 * @returns {number}
 */function getLatestProtocolVersion(){const ret=wasm.getLatestProtocolVersion();return ret>>>0;}/**
 * @param {Uint8Array} bytes
 * @returns {any}
 */function deserializeConsensusError(bytes){const ptr0=passArray8ToWasm0(bytes,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.deserializeConsensusError(ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}let cachedUint32ArrayMemory0=null;function getUint32ArrayMemory0(){if(cachedUint32ArrayMemory0===null||cachedUint32ArrayMemory0.byteLength===0){cachedUint32ArrayMemory0=new Uint32Array(wasm.memory.buffer);}return cachedUint32ArrayMemory0;}function passArray32ToWasm0(arg,malloc){const ptr=malloc(arg.length*4,4)>>>0;getUint32ArrayMemory0().set(arg,ptr/4);WASM_VECTOR_LEN=arg.length;return ptr;}function __wbg_adapter_60(arg0,arg1,arg2){wasm.closure182_externref_shim(arg0,arg1,arg2);}function __wbg_adapter_1636(arg0,arg1,arg2,arg3){wasm.closure2665_externref_shim(arg0,arg1,arg2,arg3);}/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6}
 */const KeyPurpose=exports.KeyPurpose=Object.freeze({/**
     * at least one authentication key must be registered for all security levels
     */AUTHENTICATION:0,"0":"AUTHENTICATION",/**
     * this key cannot be used for signing documents
     */ENCRYPTION:1,"1":"ENCRYPTION",/**
     * this key cannot be used for signing documents
     */DECRYPTION:2,"2":"DECRYPTION",/**
     * this key cannot be used for signing documents
     */TRANSFER:3,"3":"TRANSFER",/**
     * this key cannot be used for signing documents
     */SYSTEM:4,"4":"SYSTEM",/**
     * this key cannot be used for signing documents
     */VOTING:5,"5":"VOTING",/**
     * this key is only for masternode owners
     */OWNER:6,"6":"OWNER"});/**
 * @enum {0 | 1 | 2 | 3}
 */const KeySecurityLevel=exports.KeySecurityLevel=Object.freeze({MASTER:0,"0":"MASTER",CRITICAL:1,"1":"CRITICAL",HIGH:2,"2":"HIGH",MEDIUM:3,"3":"MEDIUM"});/**
 * @enum {0 | 1 | 2 | 3 | 4}
 */const KeyType=exports.KeyType=Object.freeze({ECDSA_SECP256K1:0,"0":"ECDSA_SECP256K1",BLS12_381:1,"1":"BLS12_381",ECDSA_HASH160:2,"2":"ECDSA_HASH160",BIP13_SCRIPT_HASH:3,"3":"BIP13_SCRIPT_HASH",EDDSA_25519_HASH160:4,"4":"EDDSA_25519_HASH160"});/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}
 */const StateTransitionTypes=exports.StateTransitionTypes=Object.freeze({DataContractCreate:0,"0":"DataContractCreate",DocumentsBatch:1,"1":"DocumentsBatch",IdentityCreate:2,"2":"IdentityCreate",IdentityTopUp:3,"3":"IdentityTopUp",DataContractUpdate:4,"4":"DataContractUpdate",IdentityUpdate:5,"5":"IdentityUpdate",IdentityCreditWithdrawal:6,"6":"IdentityCreditWithdrawal",IdentityCreditTransfer:7,"7":"IdentityCreditTransfer",MasternodeVote:8,"8":"MasternodeVote"});const AssetLockOutputNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_assetlockoutputnotfounderror_free(ptr>>>0,1));class AssetLockOutputNotFoundError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AssetLockOutputNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_assetlockoutputnotfounderror_free(ptr,0);}}exports.AssetLockOutputNotFoundError=AssetLockOutputNotFoundError;const AssetLockProofFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_assetlockproof_free(ptr>>>0,1));class AssetLockProof{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AssetLockProofFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_assetlockproof_free(ptr,0);}/**
     * @param {any} raw_asset_lock_proof
     */constructor(raw_asset_lock_proof){const ret=wasm.assetlockproof_new(raw_asset_lock_proof);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;AssetLockProofFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */createIdentifier(){const ret=wasm.assetlockproof_createIdentifier(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toObject(){const ret=wasm.assetlockproof_toObject(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.AssetLockProof=AssetLockProof;const AssetLockTransactionIsNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_assetlocktransactionisnotfounderror_free(ptr>>>0,1));class AssetLockTransactionIsNotFoundError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AssetLockTransactionIsNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_assetlocktransactionisnotfounderror_free(ptr,0);}/**
     * @returns {any}
     */getTransactionId(){const ret=wasm.assetlocktransactionisnotfounderror_getTransactionId(this.__wbg_ptr);return ret;}}exports.AssetLockTransactionIsNotFoundError=AssetLockTransactionIsNotFoundError;const BalanceIsNotEnoughErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_balanceisnotenougherror_free(ptr>>>0,1));class BalanceIsNotEnoughError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(BalanceIsNotEnoughError.prototype);obj.__wbg_ptr=ptr;BalanceIsNotEnoughErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;BalanceIsNotEnoughErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_balanceisnotenougherror_free(ptr,0);}/**
     * @param {bigint} balance
     * @param {bigint} fee
     */constructor(balance,fee){const ret=wasm.balanceisnotenougherror_new(balance,fee);this.__wbg_ptr=ret>>>0;BalanceIsNotEnoughErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {bigint}
     */getBalance(){const ret=wasm.balanceisnotenougherror_getBalance(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */getFee(){const ret=wasm.balanceisnotenougherror_getFee(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.balanceisnotenougherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.balanceisnotenougherror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.balanceisnotenougherror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.BalanceIsNotEnoughError=BalanceIsNotEnoughError;const BasicBLSErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_basicblserror_free(ptr>>>0,1));class BasicBLSError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(BasicBLSError.prototype);obj.__wbg_ptr=ptr;BasicBLSErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;BasicBLSErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_basicblserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.basicblserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.basicblserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.BasicBLSError=BasicBLSError;const BasicECDSAErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_basicecdsaerror_free(ptr>>>0,1));class BasicECDSAError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(BasicECDSAError.prototype);obj.__wbg_ptr=ptr;BasicECDSAErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;BasicECDSAErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_basicecdsaerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.basicecdsaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.basicecdsaerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.BasicECDSAError=BasicECDSAError;const ChainAssetLockProofFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_chainassetlockproof_free(ptr>>>0,1));class ChainAssetLockProof{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ChainAssetLockProof.prototype);obj.__wbg_ptr=ptr;ChainAssetLockProofFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ChainAssetLockProofFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_chainassetlockproof_free(ptr,0);}/**
     * @param {any} raw_parameters
     */constructor(raw_parameters){const ret=wasm.chainassetlockproof_new(raw_parameters);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;ChainAssetLockProofFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getType(){const ret=wasm.chainassetlockproof_getType(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCoreChainLockedHeight(){const ret=wasm.chainassetlockproof_getCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
     * @param {number} value
     */setCoreChainLockedHeight(value){wasm.chainassetlockproof_setCoreChainLockedHeight(this.__wbg_ptr,value);}/**
     * @returns {any}
     */getOutPoint(){const ret=wasm.chainassetlockproof_getOutPoint(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {Uint8Array} out_point
     */setOutPoint(out_point){const ptr0=passArray8ToWasm0(out_point,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.chainassetlockproof_setOutPoint(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */toJSON(){const ret=wasm.chainassetlockproof_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toObject(){const ret=wasm.chainassetlockproof_toObject(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */createIdentifier(){const ret=wasm.chainassetlockproof_createIdentifier(this.__wbg_ptr);return ret;}}exports.ChainAssetLockProof=ChainAssetLockProof;const ContestedDocumentsTemporarilyNotAllowedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_contesteddocumentstemporarilynotallowederror_free(ptr>>>0,1));class ContestedDocumentsTemporarilyNotAllowedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ContestedDocumentsTemporarilyNotAllowedError.prototype);obj.__wbg_ptr=ptr;ContestedDocumentsTemporarilyNotAllowedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ContestedDocumentsTemporarilyNotAllowedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_contesteddocumentstemporarilynotallowederror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.contesteddocumentstemporarilynotallowederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.contesteddocumentstemporarilynotallowederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.contesteddocumentstemporarilynotallowederror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.ContestedDocumentsTemporarilyNotAllowedError=ContestedDocumentsTemporarilyNotAllowedError;const ContestedUniqueIndexOnMutableDocumentTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_contesteduniqueindexonmutabledocumenttypeerror_free(ptr>>>0,1));class ContestedUniqueIndexOnMutableDocumentTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ContestedUniqueIndexOnMutableDocumentTypeError.prototype);obj.__wbg_ptr=ptr;ContestedUniqueIndexOnMutableDocumentTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ContestedUniqueIndexOnMutableDocumentTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_contesteduniqueindexonmutabledocumenttypeerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.contesteduniqueindexonmutabledocumenttypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.contesteduniqueindexonmutabledocumenttypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.contesteduniqueindexonmutabledocumenttypeerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.ContestedUniqueIndexOnMutableDocumentTypeError=ContestedUniqueIndexOnMutableDocumentTypeError;const ContestedUniqueIndexWithUniqueIndexErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_contesteduniqueindexwithuniqueindexerror_free(ptr>>>0,1));class ContestedUniqueIndexWithUniqueIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ContestedUniqueIndexWithUniqueIndexError.prototype);obj.__wbg_ptr=ptr;ContestedUniqueIndexWithUniqueIndexErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ContestedUniqueIndexWithUniqueIndexErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_contesteduniqueindexwithuniqueindexerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.contesteduniqueindexwithuniqueindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.contesteduniqueindexwithuniqueindexerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.contesteduniqueindexwithuniqueindexerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.ContestedUniqueIndexWithUniqueIndexError=ContestedUniqueIndexWithUniqueIndexError;const DashPlatformProtocolFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_dashplatformprotocol_free(ptr>>>0,1));class DashPlatformProtocol{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DashPlatformProtocolFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_dashplatformprotocol_free(ptr,0);}/**
     * @param {any} entropy_generator
     * @param {number | undefined} [maybe_protocol_version]
     */constructor(entropy_generator,maybe_protocol_version){const ret=wasm.dashplatformprotocol_new(entropy_generator,isLikeNone(maybe_protocol_version)?0x100000001:maybe_protocol_version>>>0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;DashPlatformProtocolFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {DataContractFacade}
     */get dataContract(){const ret=wasm.dashplatformprotocol_data_contract(this.__wbg_ptr);return DataContractFacade.__wrap(ret);}/**
     * @returns {DocumentFacade}
     */get document(){const ret=wasm.dashplatformprotocol_document(this.__wbg_ptr);return DocumentFacade.__wrap(ret);}/**
     * @returns {IdentityFacade}
     */get identity(){const ret=wasm.dashplatformprotocol_identity(this.__wbg_ptr);return IdentityFacade.__wrap(ret);}/**
     * @returns {StateTransitionFactory}
     */get stateTransition(){const ret=wasm.dashplatformprotocol_state_transition(this.__wbg_ptr);return StateTransitionFactory.__wrap(ret);}/**
     * @returns {number}
     */get protocolVersion(){const ret=wasm.dashplatformprotocol_protocol_version(this.__wbg_ptr);return ret>>>0;}}exports.DashPlatformProtocol=DashPlatformProtocol;const DataContractFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontract_free(ptr>>>0,1));class DataContract{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContract.prototype);obj.__wbg_ptr=ptr;DataContractFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontract_free(ptr,0);}/**
     * @param {any} raw_parameters
     * @param {object | undefined} [options]
     */constructor(raw_parameters,options){const ret=wasm.datacontract_new(raw_parameters,isLikeNone(options)?0:addToExternrefTable0(options));if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;DataContractFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getId(){const ret=wasm.datacontract_getId(this.__wbg_ptr);return ret;}/**
     * @param {any} id
     */setId(id){const ret=wasm.datacontract_setId(this.__wbg_ptr,id);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.datacontract_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getVersion(){const ret=wasm.datacontract_getVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @param {number} v
     */setVersion(v){wasm.datacontract_setVersion(this.__wbg_ptr,v);}incrementVersion(){wasm.datacontract_incrementVersion(this.__wbg_ptr);}/**
     * @param {string} doc_type
     * @returns {any}
     */getBinaryProperties(doc_type){const ptr0=passStringToWasm0(doc_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontract_getBinaryProperties(this.__wbg_ptr,ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {any} schemas
     * @param {object | undefined} [options]
     */setDocumentSchemas(schemas,options){const ret=wasm.datacontract_setDocumentSchemas(this.__wbg_ptr,schemas,isLikeNone(options)?0:addToExternrefTable0(options));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {string} name
     * @param {any} schema
     * @param {object | undefined} [options]
     */setDocumentSchema(name,schema,options){const ptr0=passStringToWasm0(name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontract_setDocumentSchema(this.__wbg_ptr,ptr0,len0,schema,isLikeNone(options)?0:addToExternrefTable0(options));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {string} name
     * @returns {any}
     */getDocumentSchema(name){const ptr0=passStringToWasm0(name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontract_getDocumentSchema(this.__wbg_ptr,ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */getDocumentSchemas(){const ret=wasm.datacontract_getDocumentSchemas(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getSchemaDefs(){const ret=wasm.datacontract_getSchemaDefs(this.__wbg_ptr);return ret;}/**
     * @param {object | undefined} [defs]
     * @param {object | undefined} [options]
     */setSchemaDefs(defs,options){const ret=wasm.datacontract_setSchemaDefs(this.__wbg_ptr,isLikeNone(defs)?0:addToExternrefTable0(defs),isLikeNone(options)?0:addToExternrefTable0(options));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {string} doc_type
     * @returns {boolean}
     */hasDocumentType(doc_type){const ptr0=passStringToWasm0(doc_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontract_hasDocumentType(this.__wbg_ptr,ptr0,len0);return ret!==0;}/**
     * @param {bigint} nonce
     */setIdentityNonce(nonce){const ret=wasm.datacontract_setIdentityNonce(this.__wbg_ptr,nonce);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {bigint}
     */getIdentityNonce(){const ret=wasm.datacontract_getIdentityNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {Metadata | undefined}
     */getMetadata(){const ret=wasm.datacontract_getMetadata(this.__wbg_ptr);return ret===0?undefined:Metadata.__wrap(ret);}/**
     * @param {any} metadata
     */setMetadata(metadata){const ret=wasm.datacontract_setMetadata(this.__wbg_ptr,metadata);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */toObject(){const ret=wasm.datacontract_toObject(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */getConfig(){const ret=wasm.datacontract_getConfig(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {any} config
     */setConfig(config){const ret=wasm.datacontract_setConfig(this.__wbg_ptr,config);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */toJSON(){const ret=wasm.datacontract_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.datacontract_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {Uint8Array}
     */hash(){const ret=wasm.datacontract_hash(this.__wbg_ptr);if(ret[3]){throw takeFromExternrefTable0(ret[2]);}var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @returns {DataContract}
     */clone(){const ret=wasm.datacontract_clone(this.__wbg_ptr);return DataContract.__wrap(ret);}}exports.DataContract=DataContract;const DataContractAlreadyPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractalreadypresenterror_free(ptr>>>0,1));class DataContractAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;DataContractAlreadyPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractAlreadyPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractalreadypresenterror_free(ptr,0);}/**
     * @param {any} data_contract_id
     */constructor(data_contract_id){const ret=wasm.datacontractalreadypresenterror_new(data_contract_id);this.__wbg_ptr=ret>>>0;DataContractAlreadyPresentErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractalreadypresenterror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractalreadypresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.datacontractalreadypresenterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DataContractAlreadyPresentError=DataContractAlreadyPresentError;const DataContractBoundsNotPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractboundsnotpresenterror_free(ptr>>>0,1));class DataContractBoundsNotPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractBoundsNotPresentError.prototype);obj.__wbg_ptr=ptr;DataContractBoundsNotPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractBoundsNotPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractboundsnotpresenterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractboundsnotpresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractboundsnotpresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.datacontractboundsnotpresenterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DataContractBoundsNotPresentError=DataContractBoundsNotPresentError;const DataContractConfigUpdateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractconfigupdateerror_free(ptr>>>0,1));class DataContractConfigUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractConfigUpdateError.prototype);obj.__wbg_ptr=ptr;DataContractConfigUpdateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractConfigUpdateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractconfigupdateerror_free(ptr,0);}/**
     * @param {any} data_contract_id
     * @param {string} message
     */constructor(data_contract_id,message){const ptr0=passStringToWasm0(message,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractconfigupdateerror_new(data_contract_id,ptr0,len0);this.__wbg_ptr=ret>>>0;DataContractConfigUpdateErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractconfigupdateerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractconfigupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractconfigupdateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractConfigUpdateError=DataContractConfigUpdateError;const DataContractCreateTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractcreatetransition_free(ptr>>>0,1));class DataContractCreateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractCreateTransition.prototype);obj.__wbg_ptr=ptr;DataContractCreateTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractCreateTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractcreatetransition_free(ptr,0);}/**
     * @param {any} value
     */constructor(value){const ret=wasm.datacontractcreatetransition_new(value);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;DataContractCreateTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {DataContract}
     */getDataContract(){const ret=wasm.datacontractcreatetransition_getDataContract(this.__wbg_ptr);return DataContract.__wrap(ret);}/**
     * @returns {bigint}
     */getIdentityNonce(){const ret=wasm.datacontractcreatetransition_getIdentityNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.datacontractcreatetransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getType(){const ret=wasm.datacontractcreatetransition_getType(this.__wbg_ptr);return ret>>>0;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.datacontractcreatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.datacontractcreatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getSignature(){const ret=wasm.datacontractcreatetransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getSignaturePublicKeyId(){const ret=wasm.datacontractcreatetransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.datacontractcreatetransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @returns {DataContractCreateTransition}
     */static fromBuffer(buffer){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractcreatetransition_fromBuffer(ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DataContractCreateTransition.__wrap(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.datacontractcreatetransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.datacontractcreatetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.datacontractcreatetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.datacontractcreatetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.datacontractcreatetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {boolean | undefined} [skip_signature]
     * @returns {any}
     */toObject(skip_signature){const ret=wasm.datacontractcreatetransition_toObject(this.__wbg_ptr,isLikeNone(skip_signature)?0xFFFFFF:skip_signature?1:0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractcreatetransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {any} bls
     * @returns {boolean}
     */verifySignature(identity_public_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ret=wasm.datacontractcreatetransition_verifySignature(this.__wbg_ptr,identity_public_key.__wbg_ptr,bls);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ret[0]!==0;}}exports.DataContractCreateTransition=DataContractCreateTransition;const DataContractEmptySchemaErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractemptyschemaerror_free(ptr>>>0,1));class DataContractEmptySchemaError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractEmptySchemaErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractemptyschemaerror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractemptyschemaerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractemptyschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractemptyschemaerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractEmptySchemaError=DataContractEmptySchemaError;const DataContractErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontracterror_free(ptr>>>0,1));class DataContractError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractError.prototype);obj.__wbg_ptr=ptr;DataContractErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontracterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontracterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontracterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractError=DataContractError;const DataContractFacadeFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractfacade_free(ptr>>>0,1));class DataContractFacade{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractFacade.prototype);obj.__wbg_ptr=ptr;DataContractFacadeFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractFacadeFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractfacade_free(ptr,0);}/**
     * Create Data Contract
     * @param {Uint8Array} owner_id
     * @param {bigint} identity_nonce
     * @param {any} documents
     * @param {object | undefined} [definitions]
     * @returns {DataContract}
     */create(owner_id,identity_nonce,documents,definitions){const ptr0=passArray8ToWasm0(owner_id,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractfacade_create(this.__wbg_ptr,ptr0,len0,identity_nonce,documents,isLikeNone(definitions)?0:addToExternrefTable0(definitions));if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DataContract.__wrap(ret[0]);}/**
     * Create Data Contract from plain object
     * @param {any} js_raw_data_contract
     * @param {object | undefined} [options]
     * @returns {Promise<DataContract>}
     */createFromObject(js_raw_data_contract,options){const ret=wasm.datacontractfacade_createFromObject(this.__wbg_ptr,js_raw_data_contract,isLikeNone(options)?0:addToExternrefTable0(options));return ret;}/**
     * Create Data Contract from buffer
     * @param {Uint8Array} buffer
     * @param {object | undefined} [options]
     * @returns {Promise<DataContract>}
     */createFromBuffer(buffer,options){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractfacade_createFromBuffer(this.__wbg_ptr,ptr0,len0,isLikeNone(options)?0:addToExternrefTable0(options));return ret;}/**
     * Create Data Contract Create State Transition
     * @param {DataContract} data_contract
     * @returns {DataContractCreateTransition}
     */createDataContractCreateTransition(data_contract){_assertClass(data_contract,DataContract);const ret=wasm.datacontractfacade_createDataContractCreateTransition(this.__wbg_ptr,data_contract.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DataContractCreateTransition.__wrap(ret[0]);}/**
     * Create Data Contract Update State Transition
     * @param {DataContract} data_contract
     * @param {bigint} identity_contract_nonce
     * @returns {DataContractUpdateTransition}
     */createDataContractUpdateTransition(data_contract,identity_contract_nonce){_assertClass(data_contract,DataContract);const ret=wasm.datacontractfacade_createDataContractUpdateTransition(this.__wbg_ptr,data_contract.__wbg_ptr,identity_contract_nonce);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DataContractUpdateTransition.__wrap(ret[0]);}}exports.DataContractFacade=DataContractFacade;const DataContractFactoryFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractfactory_free(ptr>>>0,1));class DataContractFactory{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractFactoryFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractfactory_free(ptr,0);}/**
     * @param {number} protocol_version
     */constructor(protocol_version){const ret=wasm.datacontractfactory_new(protocol_version);this.__wbg_ptr=ret>>>0;DataContractFactoryFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {Uint8Array} owner_id
     * @param {bigint} identity_nonce
     * @param {any} documents
     * @param {any} config
     * @returns {DataContract}
     */create(owner_id,identity_nonce,documents,config){const ptr0=passArray8ToWasm0(owner_id,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractfactory_create(this.__wbg_ptr,ptr0,len0,identity_nonce,documents,config);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DataContract.__wrap(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @param {boolean | undefined} [skip_validation]
     * @returns {Promise<DataContract>}
     */createFromBuffer(buffer,skip_validation){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractfactory_createFromBuffer(this.__wbg_ptr,ptr0,len0,isLikeNone(skip_validation)?0xFFFFFF:skip_validation?1:0);return ret;}/**
     * @param {DataContract} data_contract
     * @returns {Promise<DataContractCreateTransition>}
     */createDataContractCreateTransition(data_contract){_assertClass(data_contract,DataContract);const ret=wasm.datacontractfactory_createDataContractCreateTransition(this.__wbg_ptr,data_contract.__wbg_ptr);return ret;}}exports.DataContractFactory=DataContractFactory;const DataContractGenericErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractgenericerror_free(ptr>>>0,1));class DataContractGenericError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractGenericError.prototype);obj.__wbg_ptr=ptr;DataContractGenericErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractGenericErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractgenericerror_free(ptr,0);}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractgenericerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractGenericError=DataContractGenericError;const DataContractHaveNewUniqueIndexErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontracthavenewuniqueindexerror_free(ptr>>>0,1));class DataContractHaveNewUniqueIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractHaveNewUniqueIndexError.prototype);obj.__wbg_ptr=ptr;DataContractHaveNewUniqueIndexErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractHaveNewUniqueIndexErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontracthavenewuniqueindexerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontracthavenewuniqueindexerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontracthavenewuniqueindexerror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontracthavenewuniqueindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontracthavenewuniqueindexerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractHaveNewUniqueIndexError=DataContractHaveNewUniqueIndexError;const DataContractImmutablePropertiesUpdateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractimmutablepropertiesupdateerror_free(ptr>>>0,1));class DataContractImmutablePropertiesUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractImmutablePropertiesUpdateError.prototype);obj.__wbg_ptr=ptr;DataContractImmutablePropertiesUpdateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractImmutablePropertiesUpdateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractimmutablepropertiesupdateerror_free(ptr,0);}/**
     * @returns {string}
     */getOperation(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractimmutablepropertiesupdateerror_getOperation(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getFieldPath(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractimmutablepropertiesupdateerror_getFieldPath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractimmutablepropertiesupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractimmutablepropertiesupdateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractImmutablePropertiesUpdateError=DataContractImmutablePropertiesUpdateError;const DataContractInvalidIndexDefinitionUpdateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractinvalidindexdefinitionupdateerror_free(ptr>>>0,1));class DataContractInvalidIndexDefinitionUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractInvalidIndexDefinitionUpdateError.prototype);obj.__wbg_ptr=ptr;DataContractInvalidIndexDefinitionUpdateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractInvalidIndexDefinitionUpdateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractinvalidindexdefinitionupdateerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractinvalidindexdefinitionupdateerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractinvalidindexdefinitionupdateerror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractinvalidindexdefinitionupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractinvalidindexdefinitionupdateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractInvalidIndexDefinitionUpdateError=DataContractInvalidIndexDefinitionUpdateError;const DataContractIsReadonlyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractisreadonlyerror_free(ptr>>>0,1));class DataContractIsReadonlyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractIsReadonlyError.prototype);obj.__wbg_ptr=ptr;DataContractIsReadonlyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractIsReadonlyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractisreadonlyerror_free(ptr,0);}/**
     * @param {any} data_contract_id
     */constructor(data_contract_id){const ret=wasm.datacontractisreadonlyerror_new(data_contract_id);this.__wbg_ptr=ret>>>0;DataContractIsReadonlyErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractisreadonlyerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractisreadonlyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractisreadonlyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractIsReadonlyError=DataContractIsReadonlyError;const DataContractMaxDepthErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractmaxdeptherror_free(ptr>>>0,1));class DataContractMaxDepthError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractMaxDepthErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractmaxdeptherror_free(ptr,0);}/**
     * @returns {number}
     */getMaxDepth(){const ret=wasm.datacontractmaxdeptherror_getMaxDepth(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractmaxdeptherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractmaxdeptherror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractMaxDepthError=DataContractMaxDepthError;const DataContractMaxDepthExceedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractmaxdepthexceederror_free(ptr>>>0,1));class DataContractMaxDepthExceedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractMaxDepthExceedError.prototype);obj.__wbg_ptr=ptr;DataContractMaxDepthExceedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractMaxDepthExceedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractmaxdepthexceederror_free(ptr,0);}}exports.DataContractMaxDepthExceedError=DataContractMaxDepthExceedError;const DataContractNotPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractnotpresenterror_free(ptr>>>0,1));class DataContractNotPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractNotPresentError.prototype);obj.__wbg_ptr=ptr;DataContractNotPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractNotPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractnotpresenterror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractnotpresenterror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractnotpresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractnotpresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractNotPresentError=DataContractNotPresentError;const DataContractNotPresentNotConsensusErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractnotpresentnotconsensuserror_free(ptr>>>0,1));class DataContractNotPresentNotConsensusError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractNotPresentNotConsensusError.prototype);obj.__wbg_ptr=ptr;DataContractNotPresentNotConsensusErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractNotPresentNotConsensusErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractnotpresentnotconsensuserror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractnotpresentnotconsensuserror_getDataContractId(this.__wbg_ptr);return ret;}}exports.DataContractNotPresentNotConsensusError=DataContractNotPresentNotConsensusError;const DataContractUniqueIndicesChangedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractuniqueindiceschangederror_free(ptr>>>0,1));class DataContractUniqueIndicesChangedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractUniqueIndicesChangedError.prototype);obj.__wbg_ptr=ptr;DataContractUniqueIndicesChangedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractUniqueIndicesChangedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractuniqueindiceschangederror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractuniqueindiceschangederror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractuniqueindiceschangederror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractuniqueindiceschangederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractuniqueindiceschangederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractUniqueIndicesChangedError=DataContractUniqueIndicesChangedError;const DataContractUpdatePermissionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractupdatepermissionerror_free(ptr>>>0,1));class DataContractUpdatePermissionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractUpdatePermissionError.prototype);obj.__wbg_ptr=ptr;DataContractUpdatePermissionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractUpdatePermissionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractupdatepermissionerror_free(ptr,0);}/**
     * @param {any} data_contract_id
     * @param {any} identity_id
     */constructor(data_contract_id,identity_id){const ret=wasm.datacontractupdatepermissionerror_new(data_contract_id,identity_id);this.__wbg_ptr=ret>>>0;DataContractUpdatePermissionErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datacontractupdatepermissionerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.datacontractupdatepermissionerror_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datacontractupdatepermissionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datacontractupdatepermissionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DataContractUpdatePermissionError=DataContractUpdatePermissionError;const DataContractUpdateTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datacontractupdatetransition_free(ptr>>>0,1));class DataContractUpdateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractUpdateTransition.prototype);obj.__wbg_ptr=ptr;DataContractUpdateTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataContractUpdateTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractupdatetransition_free(ptr,0);}/**
     * @param {any} raw_parameters
     */constructor(raw_parameters){const ret=wasm.datacontractupdatetransition_new(raw_parameters);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;DataContractUpdateTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {DataContract}
     */getDataContract(){const ret=wasm.datacontractupdatetransition_getDataContract(this.__wbg_ptr);return DataContract.__wrap(ret);}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.datacontractupdatetransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {bigint}
     */getIdentityContractNonce(){const ret=wasm.datacontractupdatetransition_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getType(){const ret=wasm.datacontractupdatetransition_getType(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.datacontractupdatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.datacontractupdatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @returns {any}
     */getSignature(){const ret=wasm.datacontractupdatetransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getSignaturePublicKeyId(){const ret=wasm.datacontractupdatetransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.datacontractupdatetransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @returns {DataContractUpdateTransition}
     */static fromBuffer(buffer){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractupdatetransition_fromBuffer(ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DataContractUpdateTransition.__wrap(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.datacontractupdatetransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.datacontractupdatetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.datacontractupdatetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.datacontractupdatetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.datacontractupdatetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {boolean | undefined} [skip_signature]
     * @returns {any}
     */toObject(skip_signature){const ret=wasm.datacontractupdatetransition_toObject(this.__wbg_ptr,isLikeNone(skip_signature)?0xFFFFFF:skip_signature?1:0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractupdatetransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {any} bls
     * @returns {boolean}
     */verifySignature(identity_public_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ret=wasm.datacontractupdatetransition_verifySignature(this.__wbg_ptr,identity_public_key.__wbg_ptr,bls);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ret[0]!==0;}}exports.DataContractUpdateTransition=DataContractUpdateTransition;const DataTriggerActionConditionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datatriggeractionconditionerror_free(ptr>>>0,1));class DataTriggerActionConditionError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataTriggerActionConditionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggeractionconditionerror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datatriggeractionconditionerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentTransitionId(){const ret=wasm.datatriggeractionconditionerror_getDocumentTransitionId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggeractionconditionerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any | undefined}
     */getOwnerId(){const ret=wasm.datatriggeractionconditionerror_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datatriggeractionconditionerror_getCode(this.__wbg_ptr);return ret>>>0;}}exports.DataTriggerActionConditionError=DataTriggerActionConditionError;const DataTriggerActionExecutionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datatriggeractionexecutionerror_free(ptr>>>0,1));class DataTriggerActionExecutionError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataTriggerActionExecutionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggeractionexecutionerror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datatriggeractionexecutionerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getExecutionError(){const ret=wasm.datatriggeractionexecutionerror_getExecutionError(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentTransitionId(){const ret=wasm.datatriggeractionexecutionerror_getDocumentTransitionId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggeractionexecutionerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any | undefined}
     */getOwnerId(){const ret=wasm.datatriggeractionexecutionerror_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datatriggeractionexecutionerror_getCode(this.__wbg_ptr);return ret>>>0;}}exports.DataTriggerActionExecutionError=DataTriggerActionExecutionError;const DataTriggerActionInvalidResultErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datatriggeractioninvalidresulterror_free(ptr>>>0,1));class DataTriggerActionInvalidResultError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataTriggerActionInvalidResultErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggeractioninvalidresulterror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datatriggeractioninvalidresulterror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentTransitionId(){const ret=wasm.datatriggeractioninvalidresulterror_getDocumentTransitionId(this.__wbg_ptr);return ret;}/**
     * @returns {any | undefined}
     */getOwnerId(){const ret=wasm.datatriggeractioninvalidresulterror_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datatriggeractioninvalidresulterror_getCode(this.__wbg_ptr);return ret>>>0;}}exports.DataTriggerActionInvalidResultError=DataTriggerActionInvalidResultError;const DataTriggerConditionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datatriggerconditionerror_free(ptr>>>0,1));class DataTriggerConditionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataTriggerConditionError.prototype);obj.__wbg_ptr=ptr;DataTriggerConditionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataTriggerConditionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggerconditionerror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datatriggerconditionerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.datatriggerconditionerror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggerconditionerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.datatriggerconditionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggerconditionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.datatriggerconditionerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DataTriggerConditionError=DataTriggerConditionError;const DataTriggerExecutionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datatriggerexecutionerror_free(ptr>>>0,1));class DataTriggerExecutionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataTriggerExecutionError.prototype);obj.__wbg_ptr=ptr;DataTriggerExecutionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataTriggerExecutionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggerexecutionerror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datatriggerexecutionerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.datatriggerexecutionerror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggerexecutionerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.datatriggerexecutionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggerexecutionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.datatriggerexecutionerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DataTriggerExecutionError=DataTriggerExecutionError;const DataTriggerInvalidResultErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_datatriggerinvalidresulterror_free(ptr>>>0,1));class DataTriggerInvalidResultError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataTriggerInvalidResultError.prototype);obj.__wbg_ptr=ptr;DataTriggerInvalidResultErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DataTriggerInvalidResultErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggerinvalidresulterror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.datatriggerinvalidresulterror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.datatriggerinvalidresulterror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.datatriggerinvalidresulterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.datatriggerinvalidresulterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.datatriggerinvalidresulterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DataTriggerInvalidResultError=DataTriggerInvalidResultError;const DisablingKeyIdAlsoBeingAddedInSameTransitionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_disablingkeyidalsobeingaddedinsametransitionerror_free(ptr>>>0,1));class DisablingKeyIdAlsoBeingAddedInSameTransitionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DisablingKeyIdAlsoBeingAddedInSameTransitionError.prototype);obj.__wbg_ptr=ptr;DisablingKeyIdAlsoBeingAddedInSameTransitionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DisablingKeyIdAlsoBeingAddedInSameTransitionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_disablingkeyidalsobeingaddedinsametransitionerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.disablingkeyidalsobeingaddedinsametransitionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.disablingkeyidalsobeingaddedinsametransitionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.disablingkeyidalsobeingaddedinsametransitionerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DisablingKeyIdAlsoBeingAddedInSameTransitionError=DisablingKeyIdAlsoBeingAddedInSameTransitionError;const DocumentFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_document_free(ptr>>>0,1));class Document{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(Document.prototype);obj.__wbg_ptr=ptr;DocumentFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_document_free(ptr,0);}/**
     * @param {any} js_raw_document
     * @param {DataContract} js_data_contract
     * @param {any} js_document_type_name
     */constructor(js_raw_document,js_data_contract,js_document_type_name){_assertClass(js_data_contract,DataContract);const ret=wasm.document_new(js_raw_document,js_data_contract.__wbg_ptr,js_document_type_name);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;DocumentFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getId(){const ret=wasm.document_getId(this.__wbg_ptr);return ret;}/**
     * @param {any} js_id
     */setId(js_id){wasm.document_setId(this.__wbg_ptr,js_id);}/**
     * @param {any} owner_id
     */setOwnerId(owner_id){wasm.document_setOwnerId(this.__wbg_ptr,owner_id);}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.document_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @param {bigint | undefined} [revision]
     */setRevision(revision){wasm.document_setRevision(this.__wbg_ptr,!isLikeNone(revision),isLikeNone(revision)?BigInt(0):revision);}/**
     * @returns {bigint | undefined}
     */getRevision(){const ret=wasm.document_getRevision(this.__wbg_ptr);return ret[0]===0?undefined:BigInt.asUintN(64,ret[1]);}/**
     * @param {any} d
     */setData(d){const ret=wasm.document_setData(this.__wbg_ptr,d);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getData(){const ret=wasm.document_getData(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {string} path
     * @param {any} js_value_to_set
     */set(path,js_value_to_set){const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.document_set(this.__wbg_ptr,ptr0,len0,js_value_to_set);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {string} path
     * @returns {any}
     */get(path){const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.document_get(this.__wbg_ptr,ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {Date | undefined} [created_at]
     */setCreatedAt(created_at){wasm.document_setCreatedAt(this.__wbg_ptr,isLikeNone(created_at)?0:addToExternrefTable0(created_at));}/**
     * @param {Date | undefined} [updated_at]
     */setUpdatedAt(updated_at){wasm.document_setUpdatedAt(this.__wbg_ptr,isLikeNone(updated_at)?0:addToExternrefTable0(updated_at));}/**
     * @returns {Date | undefined}
     */getCreatedAt(){const ret=wasm.document_getCreatedAt(this.__wbg_ptr);return ret;}/**
     * @returns {Date | undefined}
     */getUpdatedAt(){const ret=wasm.document_getUpdatedAt(this.__wbg_ptr);return ret;}/**
     * @param {DataContract} data_contract
     * @param {string} document_type_name
     * @returns {any}
     */hash(data_contract,document_type_name){_assertClass(data_contract,DataContract);var ptr0=data_contract.__destroy_into_raw();const ptr1=passStringToWasm0(document_type_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ret=wasm.document_hash(this.__wbg_ptr,ptr0,ptr1,len1);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {Document}
     */clone(){const ret=wasm.document_clone(this.__wbg_ptr);return Document.__wrap(ret);}}exports.Document=Document;const DocumentAlreadyExistsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentalreadyexistserror_free(ptr>>>0,1));class DocumentAlreadyExistsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentAlreadyExistsError.prototype);obj.__wbg_ptr=ptr;DocumentAlreadyExistsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentAlreadyExistsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentalreadyexistserror_free(ptr,0);}}exports.DocumentAlreadyExistsError=DocumentAlreadyExistsError;const DocumentAlreadyPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentalreadypresenterror_free(ptr>>>0,1));class DocumentAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;DocumentAlreadyPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentAlreadyPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentalreadypresenterror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.documentalreadypresenterror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentalreadypresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentAlreadyPresentError=DocumentAlreadyPresentError;const DocumentContestCurrentlyLockedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcontestcurrentlylockederror_free(ptr>>>0,1));class DocumentContestCurrentlyLockedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestCurrentlyLockedError.prototype);obj.__wbg_ptr=ptr;DocumentContestCurrentlyLockedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentContestCurrentlyLockedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestcurrentlylockederror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentcontestcurrentlylockederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentcontestcurrentlylockederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentcontestcurrentlylockederror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentContestCurrentlyLockedError=DocumentContestCurrentlyLockedError;const DocumentContestDocumentWithSameIdAlreadyPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcontestdocumentwithsameidalreadypresenterror_free(ptr>>>0,1));class DocumentContestDocumentWithSameIdAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestDocumentWithSameIdAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;DocumentContestDocumentWithSameIdAlreadyPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentContestDocumentWithSameIdAlreadyPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestdocumentwithsameidalreadypresenterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentcontestdocumentwithsameidalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentcontestdocumentwithsameidalreadypresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentcontestdocumentwithsameidalreadypresenterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentContestDocumentWithSameIdAlreadyPresentError=DocumentContestDocumentWithSameIdAlreadyPresentError;const DocumentContestIdentityAlreadyContestantErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcontestidentityalreadycontestanterror_free(ptr>>>0,1));class DocumentContestIdentityAlreadyContestantError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestIdentityAlreadyContestantError.prototype);obj.__wbg_ptr=ptr;DocumentContestIdentityAlreadyContestantErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentContestIdentityAlreadyContestantErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestidentityalreadycontestanterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentcontestidentityalreadycontestanterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentcontestidentityalreadycontestanterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentcontestidentityalreadycontestanterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentContestIdentityAlreadyContestantError=DocumentContestIdentityAlreadyContestantError;const DocumentContestNotJoinableErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcontestnotjoinableerror_free(ptr>>>0,1));class DocumentContestNotJoinableError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestNotJoinableError.prototype);obj.__wbg_ptr=ptr;DocumentContestNotJoinableErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentContestNotJoinableErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestnotjoinableerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentcontestnotjoinableerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentcontestnotjoinableerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentcontestnotjoinableerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentContestNotJoinableError=DocumentContestNotJoinableError;const DocumentContestNotPaidForErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcontestnotpaidforerror_free(ptr>>>0,1));class DocumentContestNotPaidForError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestNotPaidForError.prototype);obj.__wbg_ptr=ptr;DocumentContestNotPaidForErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentContestNotPaidForErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestnotpaidforerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentcontestnotpaidforerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentcontestnotpaidforerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentcontestnotpaidforerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentContestNotPaidForError=DocumentContestNotPaidForError;const DocumentCreateTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcreatetransition_free(ptr>>>0,1));class DocumentCreateTransition{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentCreateTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcreatetransition_free(ptr,0);}/**
     * @returns {bigint}
     */getRevision(){const ret=wasm.documentcreatetransition_getRevision(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */static get INITIAL_REVISION(){const ret=wasm.documentcreatetransition_INITIAL_REVISION();return BigInt.asUintN(64,ret);}/**
     * @returns {Uint8Array}
     */getEntropy(){const ret=wasm.documentcreatetransition_getEntropy(this.__wbg_ptr);var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @returns {bigint}
     */getIdentityContractNonce(){const ret=wasm.documentcreatetransition_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} identity_contract_nonce
     */setIdentityContractNonce(identity_contract_nonce){wasm.documentcreatetransition_setIdentityContractNonce(this.__wbg_ptr,identity_contract_nonce);}/**
     * @returns {any}
     */getPrefundedVotingBalance(){const ret=wasm.documentcreatetransition_getPrefundedVotingBalance(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentCreateTransition=DocumentCreateTransition;const DocumentCreationNotAllowedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentcreationnotallowederror_free(ptr>>>0,1));class DocumentCreationNotAllowedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentCreationNotAllowedError.prototype);obj.__wbg_ptr=ptr;DocumentCreationNotAllowedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentCreationNotAllowedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcreationnotallowederror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentcreationnotallowederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentcreationnotallowederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentcreationnotallowederror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentCreationNotAllowedError=DocumentCreationNotAllowedError;const DocumentFacadeFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentfacade_free(ptr>>>0,1));class DocumentFacade{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentFacade.prototype);obj.__wbg_ptr=ptr;DocumentFacadeFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentFacadeFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentfacade_free(ptr,0);}/**
     * @param {DocumentFactory} document_factory
     */constructor(document_factory){_assertClass(document_factory,DocumentFactory);var ptr0=document_factory.__destroy_into_raw();const ret=wasm.documentfacade_new(ptr0);this.__wbg_ptr=ret>>>0;DocumentFacadeFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {DataContract} data_contract
     * @param {any} js_owner_id
     * @param {string} document_type
     * @param {any} data
     * @returns {ExtendedDocument}
     */create(data_contract,js_owner_id,document_type,data){_assertClass(data_contract,DataContract);const ptr0=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.documentfacade_create(this.__wbg_ptr,data_contract.__wbg_ptr,js_owner_id,ptr0,len0,data);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ExtendedDocument.__wrap(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @param {string} document_type
     * @param {DataContract} data_contract
     * @returns {ExtendedDocument}
     */createExtendedDocumentFromDocumentBuffer(buffer,document_type,data_contract){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;_assertClass(data_contract,DataContract);const ret=wasm.documentfacade_createExtendedDocumentFromDocumentBuffer(this.__wbg_ptr,ptr0,len0,ptr1,len1,data_contract.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ExtendedDocument.__wrap(ret[0]);}/**
     * Creates Documents State Transition
     * @param {any} documents
     * @param {object} nonce_counter_value
     * @returns {DocumentsBatchTransition}
     */createStateTransition(documents,nonce_counter_value){const ret=wasm.documentfacade_createStateTransition(this.__wbg_ptr,documents,nonce_counter_value);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DocumentsBatchTransition.__wrap(ret[0]);}}exports.DocumentFacade=DocumentFacade;const DocumentFactoryFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentfactory_free(ptr>>>0,1));class DocumentFactory{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentFactoryFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentfactory_free(ptr,0);}/**
     * @param {number} protocol_version
     * @param {any | undefined} [external_entropy_generator_arg]
     */constructor(protocol_version,external_entropy_generator_arg){const ret=wasm.documentfactory_new(protocol_version,isLikeNone(external_entropy_generator_arg)?0:addToExternrefTable0(external_entropy_generator_arg));if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;DocumentFactoryFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {DataContract} data_contract
     * @param {any} js_owner_id
     * @param {string} document_type
     * @param {any} data
     * @returns {ExtendedDocument}
     */create(data_contract,js_owner_id,document_type,data){_assertClass(data_contract,DataContract);const ptr0=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.documentfactory_create(this.__wbg_ptr,data_contract.__wbg_ptr,js_owner_id,ptr0,len0,data);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ExtendedDocument.__wrap(ret[0]);}/**
     * @param {any} documents
     * @param {object} nonce_counter_value
     * @returns {DocumentsBatchTransition}
     */createStateTransition(documents,nonce_counter_value){const ret=wasm.documentfactory_createStateTransition(this.__wbg_ptr,documents,nonce_counter_value);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return DocumentsBatchTransition.__wrap(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @param {string} document_type
     * @param {DataContract} data_contract
     * @returns {ExtendedDocument}
     */createExtendedDocumentFromDocumentBuffer(buffer,document_type,data_contract){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;_assertClass(data_contract,DataContract);const ret=wasm.documentfactory_createExtendedDocumentFromDocumentBuffer(this.__wbg_ptr,ptr0,len0,ptr1,len1,data_contract.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ExtendedDocument.__wrap(ret[0]);}}exports.DocumentFactory=DocumentFactory;const DocumentFieldMaxSizeExceededErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentfieldmaxsizeexceedederror_free(ptr>>>0,1));class DocumentFieldMaxSizeExceededError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentFieldMaxSizeExceededError.prototype);obj.__wbg_ptr=ptr;DocumentFieldMaxSizeExceededErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentFieldMaxSizeExceededErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentfieldmaxsizeexceedederror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentfieldmaxsizeexceedederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentfieldmaxsizeexceedederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentfieldmaxsizeexceedederror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentFieldMaxSizeExceededError=DocumentFieldMaxSizeExceededError;const DocumentIncorrectPurchasePriceErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentincorrectpurchasepriceerror_free(ptr>>>0,1));class DocumentIncorrectPurchasePriceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentIncorrectPurchasePriceError.prototype);obj.__wbg_ptr=ptr;DocumentIncorrectPurchasePriceErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentIncorrectPurchasePriceErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentincorrectpurchasepriceerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentincorrectpurchasepriceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentincorrectpurchasepriceerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentincorrectpurchasepriceerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentIncorrectPurchasePriceError=DocumentIncorrectPurchasePriceError;const DocumentNoRevisionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentnorevisionerror_free(ptr>>>0,1));class DocumentNoRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNoRevisionError.prototype);obj.__wbg_ptr=ptr;DocumentNoRevisionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentNoRevisionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnorevisionerror_free(ptr,0);}/**
     * @param {Document} document
     */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.documentnorevisionerror_new(ptr0);this.__wbg_ptr=ret>>>0;DocumentNoRevisionErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {Document}
     */getDocument(){const ret=wasm.documentnorevisionerror_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}}exports.DocumentNoRevisionError=DocumentNoRevisionError;const DocumentNotForSaleErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentnotforsaleerror_free(ptr>>>0,1));class DocumentNotForSaleError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNotForSaleError.prototype);obj.__wbg_ptr=ptr;DocumentNotForSaleErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentNotForSaleErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnotforsaleerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentnotforsaleerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentnotforsaleerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documentnotforsaleerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentNotForSaleError=DocumentNotForSaleError;const DocumentNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentnotfounderror_free(ptr>>>0,1));class DocumentNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNotFoundError.prototype);obj.__wbg_ptr=ptr;DocumentNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnotfounderror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.documentnotfounderror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentnotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentNotFoundError=DocumentNotFoundError;const DocumentNotProvidedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentnotprovidederror_free(ptr>>>0,1));class DocumentNotProvidedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNotProvidedError.prototype);obj.__wbg_ptr=ptr;DocumentNotProvidedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentNotProvidedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnotprovidederror_free(ptr,0);}}exports.DocumentNotProvidedError=DocumentNotProvidedError;const DocumentOwnerIdMismatchErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentowneridmismatcherror_free(ptr>>>0,1));class DocumentOwnerIdMismatchError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentOwnerIdMismatchError.prototype);obj.__wbg_ptr=ptr;DocumentOwnerIdMismatchErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentOwnerIdMismatchErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentowneridmismatcherror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.documentowneridmismatcherror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDocumentOwnerId(){const ret=wasm.documentowneridmismatcherror_getDocumentOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getExistingDocumentOwnerId(){const ret=wasm.documentowneridmismatcherror_getExistingDocumentOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.documentowneridmismatcherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documentowneridmismatcherror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentOwnerIdMismatchError=DocumentOwnerIdMismatchError;const DocumentTimestampWindowViolationErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttimestampwindowviolationerror_free(ptr>>>0,1));class DocumentTimestampWindowViolationError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTimestampWindowViolationError.prototype);obj.__wbg_ptr=ptr;DocumentTimestampWindowViolationErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTimestampWindowViolationErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttimestampwindowviolationerror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.documenttimestampwindowviolationerror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getTimestampName(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttimestampwindowviolationerror_getTimestampName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {Date}
     */getTimestamp(){const ret=wasm.documenttimestampwindowviolationerror_getTimestamp(this.__wbg_ptr);return ret;}/**
     * @returns {Date}
     */getTimeWindowStart(){const ret=wasm.documenttimestampwindowviolationerror_getTimeWindowStart(this.__wbg_ptr);return ret;}/**
     * @returns {Date}
     */getTimeWindowEnd(){const ret=wasm.documenttimestampwindowviolationerror_getTimeWindowEnd(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.documenttimestampwindowviolationerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttimestampwindowviolationerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentTimestampWindowViolationError=DocumentTimestampWindowViolationError;const DocumentTimestampsAreEqualErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttimestampsareequalerror_free(ptr>>>0,1));class DocumentTimestampsAreEqualError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTimestampsAreEqualError.prototype);obj.__wbg_ptr=ptr;DocumentTimestampsAreEqualErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTimestampsAreEqualErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttimestampsareequalerror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.documenttimestampsareequalerror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.documenttimestampsareequalerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttimestampsareequalerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentTimestampsAreEqualError=DocumentTimestampsAreEqualError;const DocumentTimestampsMismatchErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttimestampsmismatcherror_free(ptr>>>0,1));class DocumentTimestampsMismatchError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTimestampsMismatchError.prototype);obj.__wbg_ptr=ptr;DocumentTimestampsMismatchErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTimestampsMismatchErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttimestampsmismatcherror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.documenttimestampsmismatcherror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.documenttimestampsmismatcherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttimestampsmismatcherror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentTimestampsMismatchError=DocumentTimestampsMismatchError;const DocumentTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttransition_free(ptr>>>0,1));class DocumentTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTransition.prototype);obj.__wbg_ptr=ptr;DocumentTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttransition_free(ptr,0);}/**
     * @returns {any}
     */getId(){const ret=wasm.documenttransition_getId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getType(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttransition_getType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */getData(){const ret=wasm.documenttransition_getData(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getAction(){const ret=wasm.documenttransition_getAction(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.documenttransition_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @param {any} js_data_contract_id
     */setDataContractId(js_data_contract_id){const ret=wasm.documenttransition_setDataContractId(this.__wbg_ptr,js_data_contract_id);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getIdentityContractNonce(){const ret=wasm.documenttransition_getIdentityContractNonce(this.__wbg_ptr);return ret;}/**
     * @returns {bigint | undefined}
     */getRevision(){const ret=wasm.documenttransition_getRevision(this.__wbg_ptr);return ret[0]===0?undefined:BigInt.asUintN(64,ret[1]);}/**
     * @returns {Uint8Array | undefined}
     */getEntropy(){const ret=wasm.documenttransition_getEntropy(this.__wbg_ptr);let v1;if(ret[0]!==0){v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);}return v1;}/**
     * @returns {bigint | undefined}
     */get_price(){const ret=wasm.documenttransition_get_price(this.__wbg_ptr);return ret[0]===0?undefined:BigInt.asUintN(64,ret[1]);}/**
     * @returns {any | undefined}
     */getReceiverId(){const ret=wasm.documenttransition_getReceiverId(this.__wbg_ptr);return ret;}/**
     * @param {bigint} revision
     */setRevision(revision){wasm.documenttransition_setRevision(this.__wbg_ptr,revision);}/**
     * @returns {boolean}
     */hasPrefundedBalance(){const ret=wasm.documenttransition_hasPrefundedBalance(this.__wbg_ptr);return ret!==0;}/**
     * @returns {any}
     */getPrefundedVotingBalance(){const ret=wasm.documenttransition_getPrefundedVotingBalance(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentTransition=DocumentTransition;const DocumentTransitionsFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttransitions_free(ptr>>>0,1));class DocumentTransitions{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTransitionsFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttransitions_free(ptr,0);}constructor(){const ret=wasm.documenttransitions_new();this.__wbg_ptr=ret>>>0;DocumentTransitionsFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {ExtendedDocument} transition
     */addTransitionCreate(transition){_assertClass(transition,ExtendedDocument);var ptr0=transition.__destroy_into_raw();wasm.documenttransitions_addTransitionCreate(this.__wbg_ptr,ptr0);}/**
     * @param {ExtendedDocument} transition
     */addTransitionReplace(transition){_assertClass(transition,ExtendedDocument);var ptr0=transition.__destroy_into_raw();wasm.documenttransitions_addTransitionReplace(this.__wbg_ptr,ptr0);}/**
     * @param {ExtendedDocument} transition
     */addTransitionDelete(transition){_assertClass(transition,ExtendedDocument);var ptr0=transition.__destroy_into_raw();wasm.documenttransitions_addTransitionDelete(this.__wbg_ptr,ptr0);}}exports.DocumentTransitions=DocumentTransitions;const DocumentTransitionsAreAbsentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttransitionsareabsenterror_free(ptr>>>0,1));class DocumentTransitionsAreAbsentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTransitionsAreAbsentError.prototype);obj.__wbg_ptr=ptr;DocumentTransitionsAreAbsentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTransitionsAreAbsentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttransitionsareabsenterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documenttransitionsareabsenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttransitionsareabsenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DocumentTransitionsAreAbsentError=DocumentTransitionsAreAbsentError;const DocumentTypeUpdateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documenttypeupdateerror_free(ptr>>>0,1));class DocumentTypeUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTypeUpdateError.prototype);obj.__wbg_ptr=ptr;DocumentTypeUpdateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentTypeUpdateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttypeupdateerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.documenttypeupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.documenttypeupdateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.documenttypeupdateerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentTypeUpdateError=DocumentTypeUpdateError;const DocumentsBatchTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_documentsbatchtransition_free(ptr>>>0,1));class DocumentsBatchTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentsBatchTransition.prototype);obj.__wbg_ptr=ptr;DocumentsBatchTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DocumentsBatchTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentsbatchtransition_free(ptr,0);}/**
     * @returns {number}
     */getType(){const ret=wasm.documentsbatchtransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.documentsbatchtransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.documentsbatchtransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.documentsbatchtransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @returns {Array<any>}
     */getTransitions(){const ret=wasm.documentsbatchtransition_getTransitions(this.__wbg_ptr);return ret;}/**
     * @param {Array<any>} js_transitions
     */setTransitions(js_transitions){const ret=wasm.documentsbatchtransition_setTransitions(this.__wbg_ptr,js_transitions);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {bigint} nonce
     */setIdentityContractNonce(nonce){wasm.documentsbatchtransition_setIdentityContractNonce(this.__wbg_ptr,nonce);}/**
     * @returns {Array<any>}
     */getModifiedDataIds(){const ret=wasm.documentsbatchtransition_getModifiedDataIds(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getSignaturePublicKeyId(){const ret=wasm.documentsbatchtransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.documentsbatchtransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {any} bls
     * @returns {boolean}
     */verifySignature(identity_public_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ret=wasm.documentsbatchtransition_verifySignature(this.__wbg_ptr,identity_public_key.__wbg_ptr,bls);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ret[0]!==0;}/**
     * @param {number} key_id
     */setSignaturePublicKeyId(key_id){wasm.documentsbatchtransition_setSignaturePublicKeyId(this.__wbg_ptr,key_id);}/**
     * @param {number} purpose
     * @returns {Array<any>}
     */getKeySecurityLevelRequirement(purpose){const ret=wasm.documentsbatchtransition_getKeySecurityLevelRequirement(this.__wbg_ptr,purpose);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {Uint8Array}
     */getSignature(){const ret=wasm.documentsbatchtransition_getSignature(this.__wbg_ptr);var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @param {Uint8Array} signature
     */setSignature(signature){const ptr0=passArray8ToWasm0(signature,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.documentsbatchtransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.documentsbatchtransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.documentsbatchtransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.documentsbatchtransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.documentsbatchtransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.documentsbatchtransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.DocumentsBatchTransition=DocumentsBatchTransition;const DuplicateDocumentTransitionsWithIdsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicatedocumenttransitionswithidserror_free(ptr>>>0,1));class DuplicateDocumentTransitionsWithIdsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateDocumentTransitionsWithIdsError.prototype);obj.__wbg_ptr=ptr;DuplicateDocumentTransitionsWithIdsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicateDocumentTransitionsWithIdsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedocumenttransitionswithidserror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDocumentTransitionReferences(){const ret=wasm.duplicatedocumenttransitionswithidserror_getDocumentTransitionReferences(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicatedocumenttransitionswithidserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicatedocumenttransitionswithidserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicateDocumentTransitionsWithIdsError=DuplicateDocumentTransitionsWithIdsError;const DuplicateDocumentTransitionsWithIndicesErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicatedocumenttransitionswithindiceserror_free(ptr>>>0,1));class DuplicateDocumentTransitionsWithIndicesError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateDocumentTransitionsWithIndicesError.prototype);obj.__wbg_ptr=ptr;DuplicateDocumentTransitionsWithIndicesErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicateDocumentTransitionsWithIndicesErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedocumenttransitionswithindiceserror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDocumentTransitionReferences(){const ret=wasm.duplicatedocumenttransitionswithindiceserror_getDocumentTransitionReferences(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicatedocumenttransitionswithindiceserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicatedocumenttransitionswithindiceserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicateDocumentTransitionsWithIndicesError=DuplicateDocumentTransitionsWithIndicesError;const DuplicateIndexErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicateindexerror_free(ptr>>>0,1));class DuplicateIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateIndexError.prototype);obj.__wbg_ptr=ptr;DuplicateIndexErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicateIndexErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicateindexerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateindexerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateindexerror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicateindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateindexerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicateIndexError=DuplicateIndexError;const DuplicateIndexNameErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicateindexnameerror_free(ptr>>>0,1));class DuplicateIndexNameError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateIndexNameError.prototype);obj.__wbg_ptr=ptr;DuplicateIndexNameErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicateIndexNameErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicateindexnameerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateindexnameerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getDuplicateIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateindexnameerror_getDuplicateIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicateindexnameerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateindexnameerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicateIndexNameError=DuplicateIndexNameError;const DuplicateUniqueIndexErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicateuniqueindexerror_free(ptr>>>0,1));class DuplicateUniqueIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateUniqueIndexError.prototype);obj.__wbg_ptr=ptr;DuplicateUniqueIndexErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicateUniqueIndexErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicateuniqueindexerror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.duplicateuniqueindexerror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {Array<any>}
     */getDuplicatingProperties(){const ret=wasm.duplicateuniqueindexerror_getDuplicatingProperties(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicateuniqueindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicateuniqueindexerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicateUniqueIndexError=DuplicateUniqueIndexError;const DuplicatedIdentityPublicKeyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicatedidentitypublickeyerror_free(ptr>>>0,1));class DuplicatedIdentityPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyError.prototype);obj.__wbg_ptr=ptr;DuplicatedIdentityPublicKeyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicatedIdentityPublicKeyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeyerror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDuplicatedPublicKeysIds(){const ret=wasm.duplicatedidentitypublickeyerror_getDuplicatedPublicKeysIds(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicatedidentitypublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicatedidentitypublickeyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicatedIdentityPublicKeyError=DuplicatedIdentityPublicKeyError;const DuplicatedIdentityPublicKeyIdErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicatedidentitypublickeyiderror_free(ptr>>>0,1));class DuplicatedIdentityPublicKeyIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyIdError.prototype);obj.__wbg_ptr=ptr;DuplicatedIdentityPublicKeyIdErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicatedIdentityPublicKeyIdErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeyiderror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDuplicatedIds(){const ret=wasm.duplicatedidentitypublickeyiderror_getDuplicatedIds(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicatedidentitypublickeyiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicatedidentitypublickeyiderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicatedIdentityPublicKeyIdError=DuplicatedIdentityPublicKeyIdError;const DuplicatedIdentityPublicKeyIdStateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicatedidentitypublickeyidstateerror_free(ptr>>>0,1));class DuplicatedIdentityPublicKeyIdStateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyIdStateError.prototype);obj.__wbg_ptr=ptr;DuplicatedIdentityPublicKeyIdStateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicatedIdentityPublicKeyIdStateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeyidstateerror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDuplicatedIds(){const ret=wasm.duplicatedidentitypublickeyidstateerror_getDuplicatedIds(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicatedidentitypublickeyidstateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicatedidentitypublickeyidstateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicatedIdentityPublicKeyIdStateError=DuplicatedIdentityPublicKeyIdStateError;const DuplicatedIdentityPublicKeyStateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_duplicatedidentitypublickeystateerror_free(ptr>>>0,1));class DuplicatedIdentityPublicKeyStateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyStateError.prototype);obj.__wbg_ptr=ptr;DuplicatedIdentityPublicKeyStateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;DuplicatedIdentityPublicKeyStateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeystateerror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDuplicatedPublicKeysIds(){const ret=wasm.duplicatedidentitypublickeystateerror_getDuplicatedPublicKeysIds(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.duplicatedidentitypublickeystateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.duplicatedidentitypublickeystateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.DuplicatedIdentityPublicKeyStateError=DuplicatedIdentityPublicKeyStateError;const ExtendedDocumentFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_extendeddocument_free(ptr>>>0,1));class ExtendedDocument{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ExtendedDocument.prototype);obj.__wbg_ptr=ptr;ExtendedDocumentFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ExtendedDocumentFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_extendeddocument_free(ptr,0);}/**
     * @param {any} js_raw_document
     * @param {DataContract} js_data_contract
     */constructor(js_raw_document,js_data_contract){_assertClass(js_data_contract,DataContract);const ret=wasm.extendeddocument_new(js_raw_document,js_data_contract.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;ExtendedDocumentFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getFeatureVersion(){const ret=wasm.extendeddocument_getFeatureVersion(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getId(){const ret=wasm.extendeddocument_getId(this.__wbg_ptr);return ret;}/**
     * @param {any} js_id
     */setId(js_id){wasm.extendeddocument_setId(this.__wbg_ptr,js_id);}/**
     * @returns {string}
     */getType(){let deferred1_0;let deferred1_1;try{const ret=wasm.extendeddocument_getType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @param {string} document_type_name
     */setType(document_type_name){const ptr0=passStringToWasm0(document_type_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.extendeddocument_setType(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.extendeddocument_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {DataContract}
     */getDataContract(){const ret=wasm.extendeddocument_getDataContract(this.__wbg_ptr);return DataContract.__wrap(ret);}/**
     * @param {any} js_data_contract_id
     */setDataContractId(js_data_contract_id){const ret=wasm.extendeddocument_setDataContractId(this.__wbg_ptr,js_data_contract_id);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {Document}
     */getDocument(){const ret=wasm.extendeddocument_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}/**
     * @param {any} owner_id
     */setOwnerId(owner_id){wasm.extendeddocument_setOwnerId(this.__wbg_ptr,owner_id);}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.extendeddocument_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @param {bigint | undefined} [rev]
     */setRevision(rev){wasm.extendeddocument_setRevision(this.__wbg_ptr,!isLikeNone(rev),isLikeNone(rev)?BigInt(0):rev);}/**
     * @returns {bigint | undefined}
     */getRevision(){const ret=wasm.extendeddocument_getRevision(this.__wbg_ptr);return ret[0]===0?undefined:BigInt.asUintN(64,ret[1]);}/**
     * @param {Uint8Array} e
     */setEntropy(e){const ptr0=passArray8ToWasm0(e,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.extendeddocument_setEntropy(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getEntropy(){const ret=wasm.extendeddocument_getEntropy(this.__wbg_ptr);return ret;}/**
     * @param {any} d
     */setData(d){const ret=wasm.extendeddocument_setData(this.__wbg_ptr,d);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getData(){const ret=wasm.extendeddocument_getData(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {string} path
     * @param {any} js_value_to_set
     */set(path,js_value_to_set){const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.extendeddocument_set(this.__wbg_ptr,ptr0,len0,js_value_to_set);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {string} path
     * @returns {any}
     */get(path){const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.extendeddocument_get(this.__wbg_ptr,ptr0,len0);return ret;}/**
     * @param {Date | undefined} [ts]
     */setCreatedAt(ts){wasm.extendeddocument_setCreatedAt(this.__wbg_ptr,isLikeNone(ts)?0:addToExternrefTable0(ts));}/**
     * @param {Date | undefined} [ts]
     */setUpdatedAt(ts){wasm.extendeddocument_setUpdatedAt(this.__wbg_ptr,isLikeNone(ts)?0:addToExternrefTable0(ts));}/**
     * @returns {Date | undefined}
     */getCreatedAt(){const ret=wasm.extendeddocument_getCreatedAt(this.__wbg_ptr);return ret;}/**
     * @returns {Date | undefined}
     */getUpdatedAt(){const ret=wasm.extendeddocument_getUpdatedAt(this.__wbg_ptr);return ret;}/**
     * @returns {Metadata | undefined}
     */getMetadata(){const ret=wasm.extendeddocument_getMetadata(this.__wbg_ptr);return ret===0?undefined:Metadata.__wrap(ret);}/**
     * @param {any} metadata
     */setMetadata(metadata){const ret=wasm.extendeddocument_setMetadata(this.__wbg_ptr,metadata);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.extendeddocument_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.extendeddocument_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.extendeddocument_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */hash(){const ret=wasm.extendeddocument_hash(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {ExtendedDocument}
     */clone(){const ret=wasm.extendeddocument_clone(this.__wbg_ptr);return ExtendedDocument.__wrap(ret);}/**
     * @param {number} platform_version
     * @returns {ValidationResult}
     */validate(platform_version){const ret=wasm.extendeddocument_validate(this.__wbg_ptr,platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ValidationResult.__wrap(ret[0]);}}exports.ExtendedDocument=ExtendedDocument;const IdentityFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identity_free(ptr>>>0,1));class Identity{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(Identity.prototype);obj.__wbg_ptr=ptr;IdentityFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identity_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identity_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getId(){const ret=wasm.identity_getId(this.__wbg_ptr);return ret;}/**
     * @param {any} id
     */setId(id){wasm.identity_setId(this.__wbg_ptr,id);}/**
     * @param {Array<any>} public_keys
     * @returns {number}
     */setPublicKeys(public_keys){const ret=wasm.identity_setPublicKeys(this.__wbg_ptr,public_keys);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ret[0]>>>0;}/**
     * @returns {any[]}
     */getPublicKeys(){const ret=wasm.identity_getPublicKeys(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @param {number} key_id
     * @returns {IdentityPublicKey | undefined}
     */getPublicKeyById(key_id){const ret=wasm.identity_getPublicKeyById(this.__wbg_ptr,key_id);return ret===0?undefined:IdentityPublicKey.__wrap(ret);}/**
     * @returns {bigint}
     */get balance(){const ret=wasm.identity_balance(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */getBalance(){const ret=wasm.identity_getBalance(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} balance
     */setBalance(balance){wasm.identity_setBalance(this.__wbg_ptr,balance);}/**
     * @param {bigint} amount
     * @returns {bigint}
     */increaseBalance(amount){const ret=wasm.identity_increaseBalance(this.__wbg_ptr,amount);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} amount
     * @returns {bigint}
     */reduceBalance(amount){const ret=wasm.identity_reduceBalance(this.__wbg_ptr,amount);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} revision
     */setRevision(revision){wasm.identity_setRevision(this.__wbg_ptr,revision);}/**
     * @returns {bigint}
     */getRevision(){const ret=wasm.identity_getRevision(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {any} metadata
     */setMetadata(metadata){const ret=wasm.identity_setMetadata(this.__wbg_ptr,metadata);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {Metadata | undefined}
     */getMetadata(){const ret=wasm.identity_getMetadata(this.__wbg_ptr);return ret===0?undefined:Metadata.__wrap(ret);}/**
     * @param {any} object
     * @returns {Identity}
     */static from(object){const ret=wasm.identity_from(object);return Identity.__wrap(ret);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identity_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toObject(){const ret=wasm.identity_toObject(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identity_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {Uint8Array}
     */hash(){const ret=wasm.identity_hash(this.__wbg_ptr);if(ret[3]){throw takeFromExternrefTable0(ret[2]);}var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @param {IdentityPublicKey} public_key
     */addPublicKey(public_key){_assertClass(public_key,IdentityPublicKey);var ptr0=public_key.__destroy_into_raw();wasm.identity_addPublicKey(this.__wbg_ptr,ptr0);}/**
     * @param {Array<any>} public_keys
     */addPublicKeys(public_keys){const ret=wasm.identity_addPublicKeys(this.__wbg_ptr,public_keys);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {number}
     */getPublicKeyMaxId(){const ret=wasm.identity_getPublicKeyMaxId(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array} buffer
     * @returns {Identity}
     */static fromBuffer(buffer){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identity_fromBuffer(ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return Identity.__wrap(ret[0]);}}exports.Identity=Identity;const IdentityAlreadyExistsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityalreadyexistserror_free(ptr>>>0,1));class IdentityAlreadyExistsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAlreadyExistsError.prototype);obj.__wbg_ptr=ptr;IdentityAlreadyExistsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAlreadyExistsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityalreadyexistserror_free(ptr,0);}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identityalreadyexistserror_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityalreadyexistserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityalreadyexistserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityAlreadyExistsError=IdentityAlreadyExistsError;const IdentityAssetLockProofLockedTransactionMismatchErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityassetlockprooflockedtransactionmismatcherror_free(ptr>>>0,1));class IdentityAssetLockProofLockedTransactionMismatchError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockProofLockedTransactionMismatchError.prototype);obj.__wbg_ptr=ptr;IdentityAssetLockProofLockedTransactionMismatchErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAssetLockProofLockedTransactionMismatchErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlockprooflockedtransactionmismatcherror_free(ptr,0);}/**
     * @returns {any}
     */getInstantLockTransactionId(){const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_getInstantLockTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getAssetLockTransactionId(){const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_getAssetLockTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityAssetLockProofLockedTransactionMismatchError=IdentityAssetLockProofLockedTransactionMismatchError;const IdentityAssetLockTransactionIsNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityassetlocktransactionisnotfounderror_free(ptr>>>0,1));class IdentityAssetLockTransactionIsNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionIsNotFoundError.prototype);obj.__wbg_ptr=ptr;IdentityAssetLockTransactionIsNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAssetLockTransactionIsNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionisnotfounderror_free(ptr,0);}/**
     * @returns {any}
     */getTransactionId(){const ret=wasm.identityassetlocktransactionisnotfounderror_getTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityassetlocktransactionisnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityassetlocktransactionisnotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityAssetLockTransactionIsNotFoundError=IdentityAssetLockTransactionIsNotFoundError;const IdentityAssetLockTransactionOutPointAlreadyExistsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityassetlocktransactionoutpointalreadyexistserror_free(ptr>>>0,1));class IdentityAssetLockTransactionOutPointAlreadyExistsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionOutPointAlreadyExistsError.prototype);obj.__wbg_ptr=ptr;IdentityAssetLockTransactionOutPointAlreadyExistsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAssetLockTransactionOutPointAlreadyExistsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionoutpointalreadyexistserror_free(ptr,0);}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {any}
     */getTransactionId(){const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_getTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityAssetLockTransactionOutPointAlreadyExistsError=IdentityAssetLockTransactionOutPointAlreadyExistsError;const IdentityAssetLockTransactionOutPointNotEnoughBalanceErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_free(ptr>>>0,1));class IdentityAssetLockTransactionOutPointNotEnoughBalanceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionOutPointNotEnoughBalanceError.prototype);obj.__wbg_ptr=ptr;IdentityAssetLockTransactionOutPointNotEnoughBalanceErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAssetLockTransactionOutPointNotEnoughBalanceErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_free(ptr,0);}/**
     * @returns {any}
     */getTransactionId(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {bigint}
     */getInitialAssetLockCredits(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getInitialAssetLockCredits(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */getCreditsLeft(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getCreditsLeft(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */getCreditsRequired(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getCreditsRequired(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityAssetLockTransactionOutPointNotEnoughBalanceError=IdentityAssetLockTransactionOutPointNotEnoughBalanceError;const IdentityAssetLockTransactionOutputNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityassetlocktransactionoutputnotfounderror_free(ptr>>>0,1));class IdentityAssetLockTransactionOutputNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionOutputNotFoundError.prototype);obj.__wbg_ptr=ptr;IdentityAssetLockTransactionOutputNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAssetLockTransactionOutputNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionoutputnotfounderror_free(ptr,0);}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.identityassetlocktransactionoutputnotfounderror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityassetlocktransactionoutputnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityassetlocktransactionoutputnotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityAssetLockTransactionOutputNotFoundError=IdentityAssetLockTransactionOutputNotFoundError;const IdentityAssetLockTransactionReplayErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityassetlocktransactionreplayerror_free(ptr>>>0,1));class IdentityAssetLockTransactionReplayError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionReplayError.prototype);obj.__wbg_ptr=ptr;IdentityAssetLockTransactionReplayErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityAssetLockTransactionReplayErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionreplayerror_free(ptr,0);}/**
     * @returns {any}
     */getTransactionId(){const ret=wasm.identityassetlocktransactionreplayerror_getTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityassetlocktransactionreplayerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {any}
     */getStateTransitionId(){const ret=wasm.identityassetlocktransactionreplayerror_getStateTransitionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.identityassetlocktransactionreplayerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}}exports.IdentityAssetLockTransactionReplayError=IdentityAssetLockTransactionReplayError;const IdentityContractNonceOutOfBoundsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitycontractnonceoutofboundserror_free(ptr>>>0,1));class IdentityContractNonceOutOfBoundsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityContractNonceOutOfBoundsError.prototype);obj.__wbg_ptr=ptr;IdentityContractNonceOutOfBoundsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityContractNonceOutOfBoundsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycontractnonceoutofboundserror_free(ptr,0);}/**
     * @returns {bigint}
     */getIdentityContractNonce(){const ret=wasm.identitycontractnonceoutofboundserror_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.identitycontractnonceoutofboundserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identitycontractnonceoutofboundserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityContractNonceOutOfBoundsError=IdentityContractNonceOutOfBoundsError;const IdentityCreateTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitycreatetransition_free(ptr>>>0,1));class IdentityCreateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreateTransition.prototype);obj.__wbg_ptr=ptr;IdentityCreateTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityCreateTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycreatetransition_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identitycreatetransition_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityCreateTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {any} asset_lock_proof
     */setAssetLockProof(asset_lock_proof){const ret=wasm.identitycreatetransition_setAssetLockProof(this.__wbg_ptr,asset_lock_proof);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */get assetLockProof(){const ret=wasm.identitycreatetransition_assetLockProof(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getAssetLockProof(){const ret=wasm.identitycreatetransition_getAssetLockProof(this.__wbg_ptr);return ret;}/**
     * @param {any[]} public_keys
     */setPublicKeys(public_keys){const ptr0=passArrayJsValueToWasm0(public_keys,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycreatetransition_setPublicKeys(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {any[]} public_keys
     */addPublicKeys(public_keys){const ptr0=passArrayJsValueToWasm0(public_keys,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycreatetransition_addPublicKeys(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any[]}
     */getPublicKeys(){const ret=wasm.identitycreatetransition_getPublicKeys(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any[]}
     */get publicKeys(){const ret=wasm.identitycreatetransition_publicKeys(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {number}
     */getType(){const ret=wasm.identitycreatetransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */get identityId(){const ret=wasm.identitycreatetransition_identityId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identitycreatetransition_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.identitycreatetransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.identitycreatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.identitycreatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.identitycreatetransition_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identitycreatetransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identitycreatetransition_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.identitycreatetransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.identitycreatetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.identitycreatetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.identitycreatetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.identitycreatetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {Uint8Array} private_key
     * @param {number} key_type
     * @param {any | undefined} [bls]
     */signByPrivateKey(private_key,key_type,bls){const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycreatetransition_signByPrivateKey(this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addToExternrefTable0(bls));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getSignature(){const ret=wasm.identitycreatetransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array | undefined} [signature]
     */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycreatetransition_setSignature(this.__wbg_ptr,ptr0,len0);}}exports.IdentityCreateTransition=IdentityCreateTransition;const IdentityCreditTransferToSelfErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitycredittransfertoselferror_free(ptr>>>0,1));class IdentityCreditTransferToSelfError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreditTransferToSelfError.prototype);obj.__wbg_ptr=ptr;IdentityCreditTransferToSelfErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityCreditTransferToSelfErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycredittransfertoselferror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.identitycredittransfertoselferror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identitycredittransfertoselferror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityCreditTransferToSelfError=IdentityCreditTransferToSelfError;const IdentityCreditTransferTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitycredittransfertransition_free(ptr>>>0,1));class IdentityCreditTransferTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreditTransferTransition.prototype);obj.__wbg_ptr=ptr;IdentityCreditTransferTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityCreditTransferTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycredittransfertransition_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identitycredittransfertransition_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityCreditTransferTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getType(){const ret=wasm.identitycredittransfertransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */get identityId(){const ret=wasm.identitycredittransfertransition_identityId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */get recipientId(){const ret=wasm.identitycredittransfertransition_recipientId(this.__wbg_ptr);return ret;}/**
     * @returns {bigint}
     */get amount(){const ret=wasm.identitycredittransfertransition_amount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identitycredittransfertransition_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getRecipientId(){const ret=wasm.identitycredittransfertransition_getRecipientId(this.__wbg_ptr);return ret;}/**
     * @param {any} identity_id
     */setIdentityId(identity_id){wasm.identitycredittransfertransition_setIdentityId(this.__wbg_ptr,identity_id);}/**
     * @param {any} recipient_id
     */setRecipientId(recipient_id){wasm.identitycredittransfertransition_setRecipientId(this.__wbg_ptr,recipient_id);}/**
     * @returns {bigint}
     */getAmount(){const ret=wasm.identitycredittransfertransition_getAmount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} amount
     */setAmount(amount){wasm.identitycredittransfertransition_setAmount(this.__wbg_ptr,amount);}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.identitycredittransfertransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.identitycredittransfertransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @returns {bigint}
     */getNonce(){const ret=wasm.identitycredittransfertransition_getNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} nonce
     */setNonce(nonce){wasm.identitycredittransfertransition_setNonce(this.__wbg_ptr,nonce);}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.identitycredittransfertransition_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identitycredittransfertransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identitycredittransfertransition_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.identitycredittransfertransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.identitycredittransfertransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.identitycredittransfertransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.identitycredittransfertransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.identitycredittransfertransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {Uint8Array} private_key
     * @param {number} key_type
     * @param {any | undefined} [bls]
     */signByPrivateKey(private_key,key_type,bls){const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycredittransfertransition_signByPrivateKey(this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addToExternrefTable0(bls));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getSignature(){const ret=wasm.identitycredittransfertransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array | undefined} [signature]
     */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycredittransfertransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {number}
     */getSignaturePublicKeyId(){const ret=wasm.identitycredittransfertransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycredittransfertransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}}exports.IdentityCreditTransferTransition=IdentityCreditTransferTransition;const IdentityCreditWithdrawalTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitycreditwithdrawaltransition_free(ptr>>>0,1));class IdentityCreditWithdrawalTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreditWithdrawalTransition.prototype);obj.__wbg_ptr=ptr;IdentityCreditWithdrawalTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityCreditWithdrawalTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycreditwithdrawaltransition_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identitycreditwithdrawaltransition_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityCreditWithdrawalTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getType(){const ret=wasm.identitycreditwithdrawaltransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */get identityId(){const ret=wasm.identitycreditwithdrawaltransition_identityId(this.__wbg_ptr);return ret;}/**
     * @returns {bigint}
     */get amount(){const ret=wasm.identitycreditwithdrawaltransition_amount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identitycreditwithdrawaltransition_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @param {any} identity_id
     */setIdentityId(identity_id){wasm.identitycreditwithdrawaltransition_setIdentityId(this.__wbg_ptr,identity_id);}/**
     * @returns {bigint}
     */getAmount(){const ret=wasm.identitycreditwithdrawaltransition_getAmount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} amount
     */setAmount(amount){wasm.identitycreditwithdrawaltransition_setAmount(this.__wbg_ptr,amount);}/**
     * @returns {number}
     */getCoreFeePerByte(){const ret=wasm.identitycreditwithdrawaltransition_getCoreFeePerByte(this.__wbg_ptr);return ret>>>0;}/**
     * @param {number} core_fee_per_byte
     */setCoreFeePerByte(core_fee_per_byte){wasm.identitycreditwithdrawaltransition_setCoreFeePerByte(this.__wbg_ptr,core_fee_per_byte);}/**
     * @returns {number}
     */getPooling(){const ret=wasm.identitycreditwithdrawaltransition_getPooling(this.__wbg_ptr);return ret;}/**
     * @param {number} pooling
     */setPooling(pooling){const ret=wasm.identitycreditwithdrawaltransition_setPooling(this.__wbg_ptr,pooling);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any | undefined}
     */getOutputScript(){const ret=wasm.identitycreditwithdrawaltransition_getOutputScript(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array | undefined} [output_script]
     */setOutputScript(output_script){var ptr0=isLikeNone(output_script)?0:passArray8ToWasm0(output_script,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycreditwithdrawaltransition_setOutputScript(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {bigint}
     */getNonce(){const ret=wasm.identitycreditwithdrawaltransition_getNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} revision
     */setNonce(revision){wasm.identitycreditwithdrawaltransition_setNonce(this.__wbg_ptr,revision);}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.identitycreditwithdrawaltransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.identitycreditwithdrawaltransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.identitycreditwithdrawaltransition_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identitycreditwithdrawaltransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identitycreditwithdrawaltransition_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.identitycreditwithdrawaltransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.identitycreditwithdrawaltransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.identitycreditwithdrawaltransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.identitycreditwithdrawaltransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.identitycreditwithdrawaltransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {Uint8Array} private_key
     * @param {number} key_type
     * @param {any | undefined} [bls]
     */signByPrivateKey(private_key,key_type,bls){const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycreditwithdrawaltransition_signByPrivateKey(this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addToExternrefTable0(bls));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getSignature(){const ret=wasm.identitycreditwithdrawaltransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array | undefined} [signature]
     */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycreditwithdrawaltransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {number}
     */getSignaturePublicKeyId(){const ret=wasm.identitycreditwithdrawaltransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitycreditwithdrawaltransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}}exports.IdentityCreditWithdrawalTransition=IdentityCreditWithdrawalTransition;const IdentityFacadeFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityfacade_free(ptr>>>0,1));class IdentityFacade{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityFacade.prototype);obj.__wbg_ptr=ptr;IdentityFacadeFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityFacadeFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityfacade_free(ptr,0);}/**
     * @param {any} id
     * @param {Array<any>} public_keys
     * @returns {Identity}
     */create(id,public_keys){const ret=wasm.identityfacade_create(this.__wbg_ptr,id,public_keys);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return Identity.__wrap(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @param {object | undefined} [options]
     * @returns {Identity}
     */createFromBuffer(buffer,options){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identityfacade_createFromBuffer(this.__wbg_ptr,ptr0,len0,isLikeNone(options)?0:addToExternrefTable0(options));if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return Identity.__wrap(ret[0]);}/**
     * @param {Uint8Array} instant_lock
     * @param {Uint8Array} asset_lock_transaction
     * @param {number} output_index
     * @returns {InstantAssetLockProof}
     */createInstantAssetLockProof(instant_lock,asset_lock_transaction,output_index){const ptr0=passArray8ToWasm0(instant_lock,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(asset_lock_transaction,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.identityfacade_createInstantAssetLockProof(this.__wbg_ptr,ptr0,len0,ptr1,len1,output_index);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return InstantAssetLockProof.__wrap(ret[0]);}/**
     * @param {number} core_chain_locked_height
     * @param {Uint8Array} out_point
     * @returns {ChainAssetLockProof}
     */createChainAssetLockProof(core_chain_locked_height,out_point){const ptr0=passArray8ToWasm0(out_point,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identityfacade_createChainAssetLockProof(this.__wbg_ptr,core_chain_locked_height,ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ChainAssetLockProof.__wrap(ret[0]);}/**
     * @param {Identity} identity
     * @param {any} asset_lock_proof
     * @returns {IdentityCreateTransition}
     */createIdentityCreateTransition(identity,asset_lock_proof){_assertClass(identity,Identity);const ret=wasm.identityfacade_createIdentityCreateTransition(this.__wbg_ptr,identity.__wbg_ptr,asset_lock_proof);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityCreateTransition.__wrap(ret[0]);}/**
     * @param {any} identity_id
     * @param {any} asset_lock_proof
     * @returns {IdentityTopUpTransition}
     */createIdentityTopUpTransition(identity_id,asset_lock_proof){const ret=wasm.identityfacade_createIdentityTopUpTransition(this.__wbg_ptr,identity_id,asset_lock_proof);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityTopUpTransition.__wrap(ret[0]);}/**
     * @param {any} identity_id
     * @param {bigint} amount
     * @param {number} core_fee_per_byte
     * @param {number} pooling
     * @param {Uint8Array | undefined} output_script
     * @param {bigint} identity_nonce
     * @returns {IdentityCreditWithdrawalTransition}
     */createIdentityCreditWithdrawalTransition(identity_id,amount,core_fee_per_byte,pooling,output_script,identity_nonce){var ptr0=isLikeNone(output_script)?0:passArray8ToWasm0(output_script,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;const ret=wasm.identityfacade_createIdentityCreditWithdrawalTransition(this.__wbg_ptr,identity_id,amount,core_fee_per_byte,pooling,ptr0,len0,identity_nonce);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityCreditWithdrawalTransition.__wrap(ret[0]);}/**
     * @param {Identity} identity
     * @param {any} recipient_id
     * @param {bigint} amount
     * @param {bigint} identity_nonce
     * @returns {IdentityCreditTransferTransition}
     */createIdentityCreditTransferTransition(identity,recipient_id,amount,identity_nonce){_assertClass(identity,Identity);const ret=wasm.identityfacade_createIdentityCreditTransferTransition(this.__wbg_ptr,identity.__wbg_ptr,recipient_id,amount,identity_nonce);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityCreditTransferTransition.__wrap(ret[0]);}/**
     * @param {Identity} identity
     * @param {bigint} identity_nonce
     * @param {any} public_keys
     * @returns {IdentityUpdateTransition}
     */createIdentityUpdateTransition(identity,identity_nonce,public_keys){_assertClass(identity,Identity);const ret=wasm.identityfacade_createIdentityUpdateTransition(this.__wbg_ptr,identity.__wbg_ptr,identity_nonce,public_keys);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityUpdateTransition.__wrap(ret[0]);}}exports.IdentityFacade=IdentityFacade;const IdentityFactoryFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityfactory_free(ptr>>>0,1));class IdentityFactory{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityFactoryFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityfactory_free(ptr,0);}/**
     * @param {number} protocol_version
     */constructor(protocol_version){const ret=wasm.identityfactory_new(protocol_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityFactoryFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {any} id
     * @param {Array<any>} public_keys
     * @returns {Identity}
     */create(id,public_keys){const ret=wasm.identityfactory_create(this.__wbg_ptr,id,public_keys);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return Identity.__wrap(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @param {any} options
     * @returns {Identity}
     */createFromBuffer(buffer,options){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identityfactory_createFromBuffer(this.__wbg_ptr,ptr0,len0,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return Identity.__wrap(ret[0]);}/**
     * @param {Uint8Array} instant_lock
     * @param {Uint8Array} asset_lock_transaction
     * @param {number} output_index
     * @returns {InstantAssetLockProof}
     */createInstantAssetLockProof(instant_lock,asset_lock_transaction,output_index){const ptr0=passArray8ToWasm0(instant_lock,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(asset_lock_transaction,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.identityfactory_createInstantAssetLockProof(this.__wbg_ptr,ptr0,len0,ptr1,len1,output_index);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return InstantAssetLockProof.__wrap(ret[0]);}/**
     * @param {number} core_chain_locked_height
     * @param {Uint8Array} out_point
     * @returns {ChainAssetLockProof}
     */createChainAssetLockProof(core_chain_locked_height,out_point){const ptr0=passArray8ToWasm0(out_point,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identityfactory_createChainAssetLockProof(this.__wbg_ptr,core_chain_locked_height,ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ChainAssetLockProof.__wrap(ret[0]);}/**
     * @param {Identity} identity
     * @param {any} asset_lock_proof
     * @returns {IdentityCreateTransition}
     */createIdentityCreateTransition(identity,asset_lock_proof){_assertClass(identity,Identity);const ret=wasm.identityfactory_createIdentityCreateTransition(this.__wbg_ptr,identity.__wbg_ptr,asset_lock_proof);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityCreateTransition.__wrap(ret[0]);}/**
     * @param {any} identity_id
     * @param {any} asset_lock_proof
     * @returns {IdentityTopUpTransition}
     */createIdentityTopUpTransition(identity_id,asset_lock_proof){const ret=wasm.identityfactory_createIdentityTopUpTransition(this.__wbg_ptr,identity_id,asset_lock_proof);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityTopUpTransition.__wrap(ret[0]);}/**
     * @param {Identity} identity
     * @param {any} recipient_id
     * @param {bigint} amount
     * @param {bigint} identity_nonce
     * @returns {IdentityCreditTransferTransition}
     */createIdentityCreditTransferTransition(identity,recipient_id,amount,identity_nonce){_assertClass(identity,Identity);const ret=wasm.identityfactory_createIdentityCreditTransferTransition(this.__wbg_ptr,identity.__wbg_ptr,recipient_id,amount,identity_nonce);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityCreditTransferTransition.__wrap(ret[0]);}/**
     * @param {any} identity_id
     * @param {bigint} amount
     * @param {number} core_fee_per_byte
     * @param {number} pooling
     * @param {Uint8Array | undefined} output_script
     * @param {bigint} identity_nonce
     * @returns {IdentityCreditWithdrawalTransition}
     */createIdentityCreditWithdrawalTransition(identity_id,amount,core_fee_per_byte,pooling,output_script,identity_nonce){var ptr0=isLikeNone(output_script)?0:passArray8ToWasm0(output_script,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;const ret=wasm.identityfactory_createIdentityCreditWithdrawalTransition(this.__wbg_ptr,identity_id,amount,core_fee_per_byte,pooling,ptr0,len0,identity_nonce);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityCreditWithdrawalTransition.__wrap(ret[0]);}/**
     * @param {Identity} identity
     * @param {bigint} identity_nonce
     * @param {any} public_keys
     * @returns {IdentityUpdateTransition}
     */createIdentityUpdateTransition(identity,identity_nonce,public_keys){_assertClass(identity,Identity);const ret=wasm.identityfactory_createIdentityUpdateTransition(this.__wbg_ptr,identity.__wbg_ptr,identity_nonce,public_keys);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityUpdateTransition.__wrap(ret[0]);}}exports.IdentityFactory=IdentityFactory;const IdentityInsufficientBalanceErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityinsufficientbalanceerror_free(ptr>>>0,1));class IdentityInsufficientBalanceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityInsufficientBalanceError.prototype);obj.__wbg_ptr=ptr;IdentityInsufficientBalanceErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityInsufficientBalanceErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityinsufficientbalanceerror_free(ptr,0);}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identityinsufficientbalanceerror_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {bigint}
     */getBalance(){const ret=wasm.identityinsufficientbalanceerror_getBalance(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.identityinsufficientbalanceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identityinsufficientbalanceerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityInsufficientBalanceError=IdentityInsufficientBalanceError;const IdentityNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitynotfounderror_free(ptr>>>0,1));class IdentityNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityNotFoundError.prototype);obj.__wbg_ptr=ptr;IdentityNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitynotfounderror_free(ptr,0);}/**
     * @param {any} identity_id
     */constructor(identity_id){const ret=wasm.identitynotfounderror_new(identity_id);this.__wbg_ptr=ret>>>0;IdentityNotFoundErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identitynotfounderror_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identitynotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identitynotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.identitynotfounderror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.IdentityNotFoundError=IdentityNotFoundError;const IdentityPublicKeyFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitypublickey_free(ptr>>>0,1));class IdentityPublicKey{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKey.prototype);obj.__wbg_ptr=ptr;IdentityPublicKeyFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityPublicKeyFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickey_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identitypublickey_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityPublicKeyFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getId(){const ret=wasm.identitypublickey_getId(this.__wbg_ptr);return ret>>>0;}/**
     * @param {number} id
     */setId(id){wasm.identitypublickey_setId(this.__wbg_ptr,id);}/**
     * @returns {number}
     */getType(){const ret=wasm.identitypublickey_getType(this.__wbg_ptr);return ret;}/**
     * @param {number} key_type
     */setType(key_type){const ret=wasm.identitypublickey_setType(this.__wbg_ptr,key_type);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {Uint8Array} data
     */setData(data){const ptr0=passArray8ToWasm0(data,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitypublickey_setData(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getData(){const ret=wasm.identitypublickey_getData(this.__wbg_ptr);return ret;}/**
     * @param {number} purpose
     */setPurpose(purpose){const ret=wasm.identitypublickey_setPurpose(this.__wbg_ptr,purpose);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {number}
     */getPurpose(){const ret=wasm.identitypublickey_getPurpose(this.__wbg_ptr);return ret;}/**
     * @param {number} security_level
     */setSecurityLevel(security_level){const ret=wasm.identitypublickey_setSecurityLevel(this.__wbg_ptr,security_level);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {number}
     */getSecurityLevel(){const ret=wasm.identitypublickey_getSecurityLevel(this.__wbg_ptr);return ret;}/**
     * @param {boolean} read_only
     */setReadOnly(read_only){wasm.identitypublickey_setReadOnly(this.__wbg_ptr,read_only);}/**
     * @returns {boolean}
     */isReadOnly(){const ret=wasm.identitypublickey_isReadOnly(this.__wbg_ptr);return ret!==0;}/**
     * @param {Date} timestamp
     */setDisabledAt(timestamp){wasm.identitypublickey_setDisabledAt(this.__wbg_ptr,timestamp);}/**
     * @returns {Date | undefined}
     */getDisabledAt(){const ret=wasm.identitypublickey_getDisabledAt(this.__wbg_ptr);return ret;}/**
     * @returns {Uint8Array}
     */hash(){const ret=wasm.identitypublickey_hash(this.__wbg_ptr);if(ret[3]){throw takeFromExternrefTable0(ret[2]);}var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @returns {boolean}
     */isMaster(){const ret=wasm.identitypublickey_isMaster(this.__wbg_ptr);return ret!==0;}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identitypublickey_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toObject(){const ret=wasm.identitypublickey_toObject(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identitypublickey_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {Uint8Array} buffer
     * @returns {IdentityPublicKey}
     */static fromBuffer(buffer){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitypublickey_fromBuffer(ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return IdentityPublicKey.__wrap(ret[0]);}}exports.IdentityPublicKey=IdentityPublicKey;const IdentityPublicKeyAlreadyExistsForUniqueContractBoundsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_free(ptr>>>0,1));class IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError.prototype);obj.__wbg_ptr=ptr;IdentityPublicKeyAlreadyExistsForUniqueContractBoundsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityPublicKeyAlreadyExistsForUniqueContractBoundsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.identitypublickeyalreadyexistsforuniquecontractboundserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identitypublickeyalreadyexistsforuniquecontractboundserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.identitypublickeyalreadyexistsforuniquecontractboundserror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError=IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError;const IdentityPublicKeyIsDisabledErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitypublickeyisdisablederror_free(ptr>>>0,1));class IdentityPublicKeyIsDisabledError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyIsDisabledError.prototype);obj.__wbg_ptr=ptr;IdentityPublicKeyIsDisabledErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityPublicKeyIsDisabledErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeyisdisablederror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyIndex(){const ret=wasm.identitypublickeyisdisablederror_getPublicKeyIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identitypublickeyisdisablederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identitypublickeyisdisablederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityPublicKeyIsDisabledError=IdentityPublicKeyIsDisabledError;const IdentityPublicKeyIsReadOnlyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitypublickeyisreadonlyerror_free(ptr>>>0,1));class IdentityPublicKeyIsReadOnlyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyIsReadOnlyError.prototype);obj.__wbg_ptr=ptr;IdentityPublicKeyIsReadOnlyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityPublicKeyIsReadOnlyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeyisreadonlyerror_free(ptr,0);}/**
     * @returns {number}
     */getKeyId(){const ret=wasm.identitypublickeyisreadonlyerror_getKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getPublicKeyIndex(){const ret=wasm.identitypublickeyisreadonlyerror_getPublicKeyIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.identitypublickeyisreadonlyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.identitypublickeyisreadonlyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IdentityPublicKeyIsReadOnlyError=IdentityPublicKeyIsReadOnlyError;const IdentityPublicKeyWithWitnessFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitypublickeywithwitness_free(ptr>>>0,1));class IdentityPublicKeyWithWitness{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyWithWitness.prototype);obj.__wbg_ptr=ptr;IdentityPublicKeyWithWitnessFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityPublicKeyWithWitnessFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeywithwitness_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identitypublickeywithwitness_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityPublicKeyWithWitnessFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getId(){const ret=wasm.identitypublickeywithwitness_getId(this.__wbg_ptr);return ret>>>0;}/**
     * @param {number} id
     */setId(id){wasm.identitypublickeywithwitness_setId(this.__wbg_ptr,id);}/**
     * @returns {number}
     */getType(){const ret=wasm.identitypublickeywithwitness_getType(this.__wbg_ptr);return ret;}/**
     * @param {number} key_type
     */setType(key_type){const ret=wasm.identitypublickeywithwitness_setType(this.__wbg_ptr,key_type);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {Uint8Array} data
     */setData(data){const ptr0=passArray8ToWasm0(data,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitypublickeywithwitness_setData(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getData(){const ret=wasm.identitypublickeywithwitness_getData(this.__wbg_ptr);return ret;}/**
     * @param {number} purpose
     */setPurpose(purpose){const ret=wasm.identitypublickeywithwitness_setPurpose(this.__wbg_ptr,purpose);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {number}
     */getPurpose(){const ret=wasm.identitypublickeywithwitness_getPurpose(this.__wbg_ptr);return ret;}/**
     * @param {number} security_level
     */setSecurityLevel(security_level){const ret=wasm.identitypublickeywithwitness_setSecurityLevel(this.__wbg_ptr,security_level);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {any} contract_id
     * @param {string | undefined} [document_type_name]
     */setContractBounds(contract_id,document_type_name){var ptr0=isLikeNone(document_type_name)?0:passStringToWasm0(document_type_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;wasm.identitypublickeywithwitness_setContractBounds(this.__wbg_ptr,contract_id,ptr0,len0);}/**
     * @returns {number}
     */getSecurityLevel(){const ret=wasm.identitypublickeywithwitness_getSecurityLevel(this.__wbg_ptr);return ret;}/**
     * @param {boolean} read_only
     */setReadOnly(read_only){wasm.identitypublickeywithwitness_setReadOnly(this.__wbg_ptr,read_only);}/**
     * @returns {boolean}
     */isReadOnly(){const ret=wasm.identitypublickeywithwitness_isReadOnly(this.__wbg_ptr);return ret!==0;}/**
     * @param {Uint8Array} signature
     */setSignature(signature){const ptr0=passArray8ToWasm0(signature,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitypublickeywithwitness_setSignature(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {Uint8Array}
     */getSignature(){const ret=wasm.identitypublickeywithwitness_getSignature(this.__wbg_ptr);var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @returns {Uint8Array}
     */hash(){const ret=wasm.identitypublickeywithwitness_hash(this.__wbg_ptr);if(ret[3]){throw takeFromExternrefTable0(ret[2]);}var v1=getArrayU8FromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*1,1);return v1;}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identitypublickeywithwitness_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @param {boolean} skip_signature
     * @returns {any}
     */toObject(skip_signature){const ret=wasm.identitypublickeywithwitness_toObject(this.__wbg_ptr,skip_signature);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.IdentityPublicKeyWithWitness=IdentityPublicKeyWithWitness;const IdentityTopUpTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identitytopuptransition_free(ptr>>>0,1));class IdentityTopUpTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityTopUpTransition.prototype);obj.__wbg_ptr=ptr;IdentityTopUpTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityTopUpTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitytopuptransition_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identitytopuptransition_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityTopUpTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {any} asset_lock_proof
     */setAssetLockProof(asset_lock_proof){const ret=wasm.identitytopuptransition_setAssetLockProof(this.__wbg_ptr,asset_lock_proof);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */get assetLockProof(){const ret=wasm.identitytopuptransition_assetLockProof(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getAssetLockProof(){const ret=wasm.identitytopuptransition_getAssetLockProof(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getType(){const ret=wasm.identitytopuptransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */get identityId(){const ret=wasm.identitytopuptransition_identityId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identitytopuptransition_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @param {any} identity_id
     */setIdentityId(identity_id){wasm.identitytopuptransition_setIdentityId(this.__wbg_ptr,identity_id);}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.identitytopuptransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.identitytopuptransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.identitytopuptransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.identitytopuptransition_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identitytopuptransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identitytopuptransition_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.identitytopuptransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.identitytopuptransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.identitytopuptransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.identitytopuptransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.identitytopuptransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {Uint8Array} private_key
     * @param {number} key_type
     * @param {any | undefined} [bls]
     */signByPrivateKey(private_key,key_type,bls){const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identitytopuptransition_signByPrivateKey(this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addToExternrefTable0(bls));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getSignature(){const ret=wasm.identitytopuptransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array | undefined} [signature]
     */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitytopuptransition_setSignature(this.__wbg_ptr,ptr0,len0);}}exports.IdentityTopUpTransition=IdentityTopUpTransition;const IdentityUpdateTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_identityupdatetransition_free(ptr>>>0,1));class IdentityUpdateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityUpdateTransition.prototype);obj.__wbg_ptr=ptr;IdentityUpdateTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IdentityUpdateTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityupdatetransition_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.identityupdatetransition_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;IdentityUpdateTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {any[] | undefined} [public_keys]
     */setPublicKeysToAdd(public_keys){var ptr0=isLikeNone(public_keys)?0:passArrayJsValueToWasm0(public_keys,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;const ret=wasm.identityupdatetransition_setPublicKeysToAdd(this.__wbg_ptr,ptr0,len0);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any[]}
     */getPublicKeysToAdd(){const ret=wasm.identityupdatetransition_getPublicKeysToAdd(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any[]}
     */get addPublicKeys(){const ret=wasm.identityupdatetransition_addPublicKeys(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any[]}
     */getPublicKeyIdsToDisable(){const ret=wasm.identityupdatetransition_getPublicKeyIdsToDisable(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @param {Uint32Array | undefined} [public_key_ids]
     */setPublicKeyIdsToDisable(public_key_ids){var ptr0=isLikeNone(public_key_ids)?0:passArray32ToWasm0(public_key_ids,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_setPublicKeyIdsToDisable(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {number}
     */getType(){const ret=wasm.identityupdatetransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */get identityId(){const ret=wasm.identityupdatetransition_identityId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.identityupdatetransition_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @param {any} identity_id
     */setIdentityId(identity_id){wasm.identityupdatetransition_setIdentityId(this.__wbg_ptr,identity_id);}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.identityupdatetransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.identityupdatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.identityupdatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @returns {bigint}
     */getIdentityContractNonce(){const ret=wasm.identityupdatetransition_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} identity_nonce
     */setIdentityContractNonce(identity_nonce){wasm.identityupdatetransition_setIdentityContractNonce(this.__wbg_ptr,identity_nonce);}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.identityupdatetransition_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.identityupdatetransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.identityupdatetransition_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.identityupdatetransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.identityupdatetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.identityupdatetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.identityupdatetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.identityupdatetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @param {Uint8Array} private_key
     * @param {number} key_type
     * @param {any | undefined} [bls]
     */signByPrivateKey(private_key,key_type,bls){const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identityupdatetransition_signByPrivateKey(this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addToExternrefTable0(bls));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {number | undefined} [key_id]
     */setSignaturePublicKeyId(key_id){wasm.identityupdatetransition_setSignaturePublicKeyId(this.__wbg_ptr,isLikeNone(key_id)?0x100000001:key_id>>>0);}/**
     * @returns {any}
     */getSignature(){const ret=wasm.identityupdatetransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getSignaturePublicKeyId(){const ret=wasm.identityupdatetransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @param {Uint8Array | undefined} [signature]
     */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
     * @returns {bigint}
     */getRevision(){const ret=wasm.identityupdatetransition_getRevision(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @param {bigint} revision
     */setRevision(revision){wasm.identityupdatetransition_setRevision(this.__wbg_ptr,revision);}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.identityupdatetransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {any} bls
     * @returns {boolean}
     */verifySignature(identity_public_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ret=wasm.identityupdatetransition_verifySignature(this.__wbg_ptr,identity_public_key.__wbg_ptr,bls);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return ret[0]!==0;}}exports.IdentityUpdateTransition=IdentityUpdateTransition;const IncompatibleDataContractSchemaErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_incompatibledatacontractschemaerror_free(ptr>>>0,1));class IncompatibleDataContractSchemaError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleDataContractSchemaError.prototype);obj.__wbg_ptr=ptr;IncompatibleDataContractSchemaErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IncompatibleDataContractSchemaErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatibledatacontractschemaerror_free(ptr,0);}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.incompatibledatacontractschemaerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getOperation(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibledatacontractschemaerror_getOperation(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getFieldPath(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibledatacontractschemaerror_getFieldPath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.incompatibledatacontractschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibledatacontractschemaerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IncompatibleDataContractSchemaError=IncompatibleDataContractSchemaError;const IncompatibleDocumentTypeSchemaErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_incompatibledocumenttypeschemaerror_free(ptr>>>0,1));class IncompatibleDocumentTypeSchemaError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleDocumentTypeSchemaError.prototype);obj.__wbg_ptr=ptr;IncompatibleDocumentTypeSchemaErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IncompatibleDocumentTypeSchemaErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatibledocumenttypeschemaerror_free(ptr,0);}/**
     * @returns {string}
     */getOperation(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibledocumenttypeschemaerror_getOperation(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyPath(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibledocumenttypeschemaerror_getPropertyPath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.incompatibledocumenttypeschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibledocumenttypeschemaerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IncompatibleDocumentTypeSchemaError=IncompatibleDocumentTypeSchemaError;const IncompatibleProtocolVersionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_incompatibleprotocolversionerror_free(ptr>>>0,1));class IncompatibleProtocolVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleProtocolVersionError.prototype);obj.__wbg_ptr=ptr;IncompatibleProtocolVersionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IncompatibleProtocolVersionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatibleprotocolversionerror_free(ptr,0);}/**
     * @returns {number}
     */getParsedProtocolVersion(){const ret=wasm.incompatibleprotocolversionerror_getParsedProtocolVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getMinimalProtocolVersion(){const ret=wasm.incompatibleprotocolversionerror_getMinimalProtocolVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.incompatibleprotocolversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatibleprotocolversionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IncompatibleProtocolVersionError=IncompatibleProtocolVersionError;const IncompatibleRe2PatternErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_incompatiblere2patternerror_free(ptr>>>0,1));class IncompatibleRe2PatternError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleRe2PatternError.prototype);obj.__wbg_ptr=ptr;IncompatibleRe2PatternErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IncompatibleRe2PatternErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatiblere2patternerror_free(ptr,0);}/**
     * @returns {string}
     */getPattern(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatiblere2patternerror_getPattern(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPath(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatiblere2patternerror_getPath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatiblere2patternerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.incompatiblere2patternerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.incompatiblere2patternerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.IncompatibleRe2PatternError=IncompatibleRe2PatternError;const InconsistentCompoundIndexDataErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_inconsistentcompoundindexdataerror_free(ptr>>>0,1));class InconsistentCompoundIndexDataError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InconsistentCompoundIndexDataError.prototype);obj.__wbg_ptr=ptr;InconsistentCompoundIndexDataErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InconsistentCompoundIndexDataErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_inconsistentcompoundindexdataerror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getIndexedProperties(){const ret=wasm.inconsistentcompoundindexdataerror_getIndexedProperties(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.inconsistentcompoundindexdataerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.inconsistentcompoundindexdataerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.inconsistentcompoundindexdataerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InconsistentCompoundIndexDataError=InconsistentCompoundIndexDataError;const InstantAssetLockProofFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_instantassetlockproof_free(ptr>>>0,1));class InstantAssetLockProof{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InstantAssetLockProof.prototype);obj.__wbg_ptr=ptr;InstantAssetLockProofFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InstantAssetLockProofFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_instantassetlockproof_free(ptr,0);}/**
     * @param {any} raw_parameters
     */constructor(raw_parameters){const ret=wasm.instantassetlockproof_new(raw_parameters);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;InstantAssetLockProofFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getType(){const ret=wasm.instantassetlockproof_getType(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.instantassetlockproof_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {any | undefined}
     */getOutPoint(){const ret=wasm.instantassetlockproof_getOutPoint(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */getOutput(){const ret=wasm.instantassetlockproof_getOutput(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */createIdentifier(){const ret=wasm.instantassetlockproof_createIdentifier(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */getInstantLock(){const ret=wasm.instantassetlockproof_getInstantLock(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getTransaction(){const ret=wasm.instantassetlockproof_getTransaction(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */toObject(){const ret=wasm.instantassetlockproof_toObject(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.instantassetlockproof_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.InstantAssetLockProof=InstantAssetLockProof;const InvalidActionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidactionerror_free(ptr>>>0,1));class InvalidActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidActionError.prototype);obj.__wbg_ptr=ptr;InvalidActionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidActionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidactionerror_free(ptr,0);}}exports.InvalidActionError=InvalidActionError;const InvalidActionNameErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidactionnameerror_free(ptr>>>0,1));class InvalidActionNameError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidActionNameError.prototype);obj.__wbg_ptr=ptr;InvalidActionNameErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidActionNameErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidactionnameerror_free(ptr,0);}/**
     * @param {any[]} actions
     */constructor(actions){const ptr0=passArrayJsValueToWasm0(actions,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invalidactionnameerror_new(ptr0,len0);this.__wbg_ptr=ret>>>0;InvalidActionNameErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any[]}
     */getActions(){const ret=wasm.invalidactionnameerror_getActions(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}}exports.InvalidActionNameError=InvalidActionNameError;const InvalidActiontErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidactionterror_free(ptr>>>0,1));class InvalidActiontError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidActiontErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidactionterror_free(ptr,0);}/**
     * @param {any} action
     */constructor(action){const ret=wasm.invalidactionterror_new(action);return InvalidActionError.__wrap(ret);}}exports.InvalidActiontError=InvalidActiontError;const InvalidAssetLockProofCoreChainHeightErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidassetlockproofcorechainheighterror_free(ptr>>>0,1));class InvalidAssetLockProofCoreChainHeightError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidAssetLockProofCoreChainHeightError.prototype);obj.__wbg_ptr=ptr;InvalidAssetLockProofCoreChainHeightErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidAssetLockProofCoreChainHeightErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidassetlockproofcorechainheighterror_free(ptr,0);}/**
     * @returns {number}
     */getProofCoreChainLockedHeight(){const ret=wasm.invalidassetlockproofcorechainheighterror_getProofCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCurrentCoreChainLockedHeight(){const ret=wasm.invalidassetlockproofcorechainheighterror_getCurrentCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidassetlockproofcorechainheighterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidassetlockproofcorechainheighterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidAssetLockProofCoreChainHeightError=InvalidAssetLockProofCoreChainHeightError;const InvalidAssetLockProofTransactionHeightErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidassetlockprooftransactionheighterror_free(ptr>>>0,1));class InvalidAssetLockProofTransactionHeightError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidAssetLockProofTransactionHeightError.prototype);obj.__wbg_ptr=ptr;InvalidAssetLockProofTransactionHeightErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidAssetLockProofTransactionHeightErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidassetlockprooftransactionheighterror_free(ptr,0);}/**
     * @returns {number}
     */getProofCoreChainLockedHeight(){const ret=wasm.invalidassetlockprooftransactionheighterror_getProofCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number | undefined}
     */getTransactionHeight(){const ret=wasm.invalidassetlockprooftransactionheighterror_getTransactionHeight(this.__wbg_ptr);return ret===0x100000001?undefined:ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidassetlockprooftransactionheighterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidassetlockprooftransactionheighterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidAssetLockProofTransactionHeightError=InvalidAssetLockProofTransactionHeightError;const InvalidAssetLockTransactionOutputReturnSizeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidassetlocktransactionoutputreturnsizeerror_free(ptr>>>0,1));class InvalidAssetLockTransactionOutputReturnSizeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidAssetLockTransactionOutputReturnSizeError.prototype);obj.__wbg_ptr=ptr;InvalidAssetLockTransactionOutputReturnSizeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidAssetLockTransactionOutputReturnSizeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidassetlocktransactionoutputreturnsizeerror_free(ptr,0);}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.invalidassetlocktransactionoutputreturnsizeerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidassetlocktransactionoutputreturnsizeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidassetlocktransactionoutputreturnsizeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidAssetLockTransactionOutputReturnSizeError=InvalidAssetLockTransactionOutputReturnSizeError;const InvalidCompoundIndexErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidcompoundindexerror_free(ptr>>>0,1));class InvalidCompoundIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidCompoundIndexError.prototype);obj.__wbg_ptr=ptr;InvalidCompoundIndexErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidCompoundIndexErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidcompoundindexerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidcompoundindexerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidcompoundindexerror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidcompoundindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidcompoundindexerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidCompoundIndexError=InvalidCompoundIndexError;const InvalidDataContractErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddatacontracterror_free(ptr>>>0,1));class InvalidDataContractError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDataContractErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddatacontracterror_free(ptr,0);}/**
     * @returns {any[]}
     */getErrors(){const ret=wasm.invaliddatacontracterror_getErrors(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any}
     */getRawDataContract(){const ret=wasm.invaliddatacontracterror_getRawDataContract(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddatacontracterror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDataContractError=InvalidDataContractError;const InvalidDataContractIdErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddatacontractiderror_free(ptr>>>0,1));class InvalidDataContractIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDataContractIdError.prototype);obj.__wbg_ptr=ptr;InvalidDataContractIdErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDataContractIdErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddatacontractiderror_free(ptr,0);}/**
     * @returns {any}
     */getExpectedId(){const ret=wasm.invaliddatacontractiderror_getExpectedId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getInvalidId(){const ret=wasm.invaliddatacontractiderror_getInvalidId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddatacontractiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddatacontractiderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDataContractIdError=InvalidDataContractIdError;const InvalidDataContractVersionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddatacontractversionerror_free(ptr>>>0,1));class InvalidDataContractVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDataContractVersionError.prototype);obj.__wbg_ptr=ptr;InvalidDataContractVersionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDataContractVersionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddatacontractversionerror_free(ptr,0);}/**
     * @returns {number}
     */getExpectedVersion(){const ret=wasm.invaliddatacontractversionerror_getExpectedVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getVersion(){const ret=wasm.invaliddatacontractversionerror_getVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddatacontractversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddatacontractversionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDataContractVersionError=InvalidDataContractVersionError;const InvalidDocumentActionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumentactionerror_free(ptr>>>0,1));class InvalidDocumentActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentActionError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentActionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentActionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumentactionerror_free(ptr,0);}}exports.InvalidDocumentActionError=InvalidDocumentActionError;const InvalidDocumentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenterror_free(ptr>>>0,1));class InvalidDocumentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenterror_free(ptr,0);}/**
     * @param {any} raw_document
     * @param {any[]} errors
     */constructor(raw_document,errors){const ptr0=passArrayJsValueToWasm0(errors,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invaliddocumenterror_new(raw_document,ptr0,len0);this.__wbg_ptr=ret>>>0;InvalidDocumentErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any[]}
     */getErrors(){const ret=wasm.invaliddocumenterror_getErrors(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any}
     */getRawDocument(){const ret=wasm.invaliddocumenterror_getRawDocument(this.__wbg_ptr);return ret;}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenterror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDocumentError=InvalidDocumentError;const InvalidDocumentRevisionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumentrevisionerror_free(ptr>>>0,1));class InvalidDocumentRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentRevisionError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentRevisionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentRevisionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumentrevisionerror_free(ptr,0);}/**
     * @returns {any}
     */getDocumentId(){const ret=wasm.invaliddocumentrevisionerror_getDocumentId(this.__wbg_ptr);return ret;}/**
     * @returns {bigint | undefined}
     */getPreviousRevision(){const ret=wasm.invaliddocumentrevisionerror_getPreviousRevision(this.__wbg_ptr);return ret[0]===0?undefined:BigInt.asUintN(64,ret[1]);}/**
     * @returns {bigint}
     */getDesiredRevision(){const ret=wasm.invaliddocumentrevisionerror_getDesiredRevision(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddocumentrevisionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumentrevisionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDocumentRevisionError=InvalidDocumentRevisionError;const InvalidDocumentTransitionActionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttransitionactionerror_free(ptr>>>0,1));class InvalidDocumentTransitionActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTransitionActionError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentTransitionActionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTransitionActionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttransitionactionerror_free(ptr,0);}/**
     * @returns {string}
     */getAction(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttransitionactionerror_getAction(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddocumenttransitionactionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttransitionactionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDocumentTransitionActionError=InvalidDocumentTransitionActionError;const InvalidDocumentTransitionIdErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttransitioniderror_free(ptr>>>0,1));class InvalidDocumentTransitionIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTransitionIdError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentTransitionIdErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTransitionIdErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttransitioniderror_free(ptr,0);}/**
     * @returns {any}
     */getExpectedId(){const ret=wasm.invaliddocumenttransitioniderror_getExpectedId(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getInvalidId(){const ret=wasm.invaliddocumenttransitioniderror_getInvalidId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddocumenttransitioniderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttransitioniderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDocumentTransitionIdError=InvalidDocumentTransitionIdError;const InvalidDocumentTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttypeerror_free(ptr>>>0,1));class InvalidDocumentTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypeerror_free(ptr,0);}/**
     * @returns {string}
     */getType(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttypeerror_getType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.invaliddocumenttypeerror_getDataContractId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddocumenttypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDocumentTypeError=InvalidDocumentTypeError;const InvalidDocumentTypeInDataContractErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttypeindatacontracterror_free(ptr>>>0,1));class InvalidDocumentTypeInDataContractError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeInDataContractError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentTypeInDataContractErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTypeInDataContractErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypeindatacontracterror_free(ptr,0);}/**
     * @param {string} doc_type
     * @param {any} data_contract_id
     */constructor(doc_type,data_contract_id){const ptr0=passStringToWasm0(doc_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invaliddocumenttypeindatacontracterror_new(ptr0,len0,data_contract_id);this.__wbg_ptr=ret>>>0;InvalidDocumentTypeInDataContractErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {string}
     */getType(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttypeindatacontracterror_getType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */getDataContractId(){const ret=wasm.invaliddocumenttypeindatacontracterror_getDataContractId(this.__wbg_ptr);return ret;}}exports.InvalidDocumentTypeInDataContractError=InvalidDocumentTypeInDataContractError;const InvalidDocumentTypeNameErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttypenameerror_free(ptr>>>0,1));class InvalidDocumentTypeNameError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeNameError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentTypeNameErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTypeNameErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypenameerror_free(ptr,0);}}exports.InvalidDocumentTypeNameError=InvalidDocumentTypeNameError;const InvalidDocumentTypeNameErrorWasmFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttypenameerrorwasm_free(ptr>>>0,1));class InvalidDocumentTypeNameErrorWasm{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTypeNameErrorWasmFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypenameerrorwasm_free(ptr,0);}/**
     * @returns {string}
     */getName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttypenameerrorwasm_getName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddocumenttypenameerrorwasm_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttypenameerrorwasm_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidDocumentTypeNameErrorWasm=InvalidDocumentTypeNameErrorWasm;const InvalidDocumentTypeRequiredSecurityLevelErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invaliddocumenttyperequiredsecuritylevelerror_free(ptr>>>0,1));class InvalidDocumentTypeRequiredSecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeRequiredSecurityLevelError.prototype);obj.__wbg_ptr=ptr;InvalidDocumentTypeRequiredSecurityLevelErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidDocumentTypeRequiredSecurityLevelErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttyperequiredsecuritylevelerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invaliddocumenttyperequiredsecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invaliddocumenttyperequiredsecuritylevelerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.invaliddocumenttyperequiredsecuritylevelerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.InvalidDocumentTypeRequiredSecurityLevelError=InvalidDocumentTypeRequiredSecurityLevelError;const InvalidIdentifierErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentifiererror_free(ptr>>>0,1));class InvalidIdentifierError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentifierError.prototype);obj.__wbg_ptr=ptr;InvalidIdentifierErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentifierErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentifiererror_free(ptr,0);}/**
     * @returns {string}
     */getIdentifierName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentifiererror_getIdentifierName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIdentifierError(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentifiererror_getIdentifierError(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentifiererror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentifiererror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentifierError=InvalidIdentifierError;const InvalidIdentityAssetLockProofChainLockValidationErrorWasmFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_free(ptr>>>0,1));class InvalidIdentityAssetLockProofChainLockValidationErrorWasm{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityAssetLockProofChainLockValidationErrorWasm.prototype);obj.__wbg_ptr=ptr;InvalidIdentityAssetLockProofChainLockValidationErrorWasmFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityAssetLockProofChainLockValidationErrorWasmFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_free(ptr,0);}/**
     * @returns {any}
     */getTransactionId(){const ret=wasm.invalididentityassetlockproofchainlockvalidationerrorwasm_getTransactionId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getHeightReportedNotLocked(){const ret=wasm.invalididentityassetlockproofchainlockvalidationerrorwasm_getHeightReportedNotLocked(this.__wbg_ptr);return ret>>>0;}}exports.InvalidIdentityAssetLockProofChainLockValidationErrorWasm=InvalidIdentityAssetLockProofChainLockValidationErrorWasm;const InvalidIdentityAssetLockTransactionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityassetlocktransactionerror_free(ptr>>>0,1));class InvalidIdentityAssetLockTransactionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityAssetLockTransactionError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityAssetLockTransactionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityAssetLockTransactionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityassetlocktransactionerror_free(ptr,0);}/**
     * @returns {string}
     */getErrorMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentityassetlocktransactionerror_getErrorMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentityassetlocktransactionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentityassetlocktransactionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityAssetLockTransactionError=InvalidIdentityAssetLockTransactionError;const InvalidIdentityAssetLockTransactionOutputErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityassetlocktransactionoutputerror_free(ptr>>>0,1));class InvalidIdentityAssetLockTransactionOutputError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityAssetLockTransactionOutputError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityAssetLockTransactionOutputErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityAssetLockTransactionOutputErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityassetlocktransactionoutputerror_free(ptr,0);}/**
     * @returns {number}
     */getOutputIndex(){const ret=wasm.invalididentityassetlocktransactionoutputerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentityassetlocktransactionoutputerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentityassetlocktransactionoutputerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityAssetLockTransactionOutputError=InvalidIdentityAssetLockTransactionOutputError;const InvalidIdentityCreditTransferAmountErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitycredittransferamounterror_free(ptr>>>0,1));class InvalidIdentityCreditTransferAmountError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditTransferAmountError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityCreditTransferAmountErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityCreditTransferAmountErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycredittransferamounterror_free(ptr,0);}/**
     * @returns {bigint}
     */getAmount(){const ret=wasm.invalididentitycredittransferamounterror_getAmount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */getMinAmount(){const ret=wasm.invalididentitycredittransferamounterror_getMinAmount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitycredittransferamounterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitycredittransferamounterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityCreditTransferAmountError=InvalidIdentityCreditTransferAmountError;const InvalidIdentityCreditWithdrawalTransitionAmountErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitycreditwithdrawaltransitionamounterror_free(ptr>>>0,1));class InvalidIdentityCreditWithdrawalTransitionAmountError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditWithdrawalTransitionAmountError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityCreditWithdrawalTransitionAmountErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityCreditWithdrawalTransitionAmountErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycreditwithdrawaltransitionamounterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitycreditwithdrawaltransitionamounterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitycreditwithdrawaltransitionamounterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.invalididentitycreditwithdrawaltransitionamounterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.InvalidIdentityCreditWithdrawalTransitionAmountError=InvalidIdentityCreditWithdrawalTransitionAmountError;const InvalidIdentityCreditWithdrawalTransitionCoreFeeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_free(ptr>>>0,1));class InvalidIdentityCreditWithdrawalTransitionCoreFeeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditWithdrawalTransitionCoreFeeError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityCreditWithdrawalTransitionCoreFeeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityCreditWithdrawalTransitionCoreFeeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_free(ptr,0);}/**
     * @returns {number}
     */getCoreFee(){const ret=wasm.invalididentitycreditwithdrawaltransitioncorefeeerror_getCoreFee(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitycreditwithdrawaltransitioncorefeeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitycreditwithdrawaltransitioncorefeeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityCreditWithdrawalTransitionCoreFeeError=InvalidIdentityCreditWithdrawalTransitionCoreFeeError;const InvalidIdentityCreditWithdrawalTransitionOutputScriptErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_free(ptr>>>0,1));class InvalidIdentityCreditWithdrawalTransitionOutputScriptError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditWithdrawalTransitionOutputScriptError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityCreditWithdrawalTransitionOutputScriptErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityCreditWithdrawalTransitionOutputScriptErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitycreditwithdrawaltransitionoutputscripterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitycreditwithdrawaltransitionoutputscripterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityCreditWithdrawalTransitionOutputScriptError=InvalidIdentityCreditWithdrawalTransitionOutputScriptError;const InvalidIdentityErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityerror_free(ptr>>>0,1));class InvalidIdentityError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityerror_free(ptr,0);}/**
     * @returns {any[]}
     */getErrors(){const ret=wasm.invalididentityerror_getErrors(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any}
     */getRawIdentity(){const ret=wasm.invalididentityerror_getRawIdentity(this.__wbg_ptr);return ret;}}exports.InvalidIdentityError=InvalidIdentityError;const InvalidIdentityKeySignatureErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitykeysignatureerror_free(ptr>>>0,1));class InvalidIdentityKeySignatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityKeySignatureError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityKeySignatureErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityKeySignatureErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitykeysignatureerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyId(){const ret=wasm.invalididentitykeysignatureerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitykeysignatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitykeysignatureerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityKeySignatureError=InvalidIdentityKeySignatureError;const InvalidIdentityNonceErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitynonceerror_free(ptr>>>0,1));class InvalidIdentityNonceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityNonceError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityNonceErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityNonceErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitynonceerror_free(ptr,0);}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.invalididentitynonceerror_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {bigint | undefined}
     */getCurrentIdentityContractNonce(){const ret=wasm.invalididentitynonceerror_getCurrentIdentityContractNonce(this.__wbg_ptr);return ret[0]===0?undefined:BigInt.asUintN(64,ret[1]);}/**
     * @returns {bigint}
     */getSettingIdentityContractNonce(){const ret=wasm.invalididentitynonceerror_getSettingIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {Error}
     */getError(){const ret=wasm.invalididentitynonceerror_getError(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitynonceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitynonceerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityNonceError=InvalidIdentityNonceError;const InvalidIdentityPublicKeyDataErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitypublickeydataerror_free(ptr>>>0,1));class InvalidIdentityPublicKeyDataError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeyDataError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityPublicKeyDataErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityPublicKeyDataErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeydataerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyId(){const ret=wasm.invalididentitypublickeydataerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */getValidationError(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitypublickeydataerror_getValidationError(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitypublickeydataerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitypublickeydataerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityPublicKeyDataError=InvalidIdentityPublicKeyDataError;const InvalidIdentityPublicKeyIdErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitypublickeyiderror_free(ptr>>>0,1));class InvalidIdentityPublicKeyIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeyIdError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityPublicKeyIdErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityPublicKeyIdErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeyiderror_free(ptr,0);}/**
     * @returns {number}
     */getId(){const ret=wasm.invalididentitypublickeyiderror_getId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitypublickeyiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitypublickeyiderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityPublicKeyIdError=InvalidIdentityPublicKeyIdError;const InvalidIdentityPublicKeySecurityLevelErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitypublickeysecuritylevelerror_free(ptr>>>0,1));class InvalidIdentityPublicKeySecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeySecurityLevelError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityPublicKeySecurityLevelErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityPublicKeySecurityLevelErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeysecuritylevelerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyId(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getPublicKeyPurpose(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getPublicKeyPurpose(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getPublicKeySecurityLevel(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getPublicKeySecurityLevel(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitypublickeysecuritylevelerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityPublicKeySecurityLevelError=InvalidIdentityPublicKeySecurityLevelError;const InvalidIdentityPublicKeyTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentitypublickeytypeerror_free(ptr>>>0,1));class InvalidIdentityPublicKeyTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeyTypeError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityPublicKeyTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityPublicKeyTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeytypeerror_free(ptr,0);}/**
     * @param {number} key_type
     */constructor(key_type){const ret=wasm.invalididentitypublickeytypeerror_new(key_type);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;InvalidIdentityPublicKeyTypeErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getPublicKeyType(){const ret=wasm.invalididentitypublickeytypeerror_getPublicKeyType(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentitypublickeytypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentitypublickeytypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityPublicKeyTypeError=InvalidIdentityPublicKeyTypeError;const InvalidIdentityRevisionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityrevisionerror_free(ptr>>>0,1));class InvalidIdentityRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityRevisionError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityRevisionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityRevisionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityrevisionerror_free(ptr,0);}/**
     * @returns {any}
     */getIdentityId(){const ret=wasm.invalididentityrevisionerror_getIdentityId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCurrentRevision(){const ret=wasm.invalididentityrevisionerror_getCurrentRevision(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentityrevisionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentityrevisionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIdentityRevisionError=InvalidIdentityRevisionError;const InvalidIdentityUpdateTransitionDisableKeysErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityupdatetransitiondisablekeyserror_free(ptr>>>0,1));class InvalidIdentityUpdateTransitionDisableKeysError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityUpdateTransitionDisableKeysError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityUpdateTransitionDisableKeysErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityUpdateTransitionDisableKeysErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityupdatetransitiondisablekeyserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentityupdatetransitiondisablekeyserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentityupdatetransitiondisablekeyserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.invalididentityupdatetransitiondisablekeyserror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.InvalidIdentityUpdateTransitionDisableKeysError=InvalidIdentityUpdateTransitionDisableKeysError;const InvalidIdentityUpdateTransitionEmptyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalididentityupdatetransitionemptyerror_free(ptr>>>0,1));class InvalidIdentityUpdateTransitionEmptyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityUpdateTransitionEmptyError.prototype);obj.__wbg_ptr=ptr;InvalidIdentityUpdateTransitionEmptyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIdentityUpdateTransitionEmptyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityupdatetransitionemptyerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalididentityupdatetransitionemptyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalididentityupdatetransitionemptyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.invalididentityupdatetransitionemptyerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.InvalidIdentityUpdateTransitionEmptyError=InvalidIdentityUpdateTransitionEmptyError;const InvalidIndexPropertyTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidindexpropertytypeerror_free(ptr>>>0,1));class InvalidIndexPropertyTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIndexPropertyTypeError.prototype);obj.__wbg_ptr=ptr;InvalidIndexPropertyTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIndexPropertyTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidindexpropertytypeerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexpropertytypeerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexpropertytypeerror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexpropertytypeerror_getPropertyName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyType(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexpropertytypeerror_getPropertyType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidindexpropertytypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexpropertytypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIndexPropertyTypeError=InvalidIndexPropertyTypeError;const InvalidIndexedPropertyConstraintErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidindexedpropertyconstrainterror_free(ptr>>>0,1));class InvalidIndexedPropertyConstraintError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIndexedPropertyConstraintError.prototype);obj.__wbg_ptr=ptr;InvalidIndexedPropertyConstraintErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidIndexedPropertyConstraintErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidindexedpropertyconstrainterror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexedpropertyconstrainterror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexedpropertyconstrainterror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexedpropertyconstrainterror_getPropertyName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getConstraintName(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexedpropertyconstrainterror_getConstraintName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getReason(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexedpropertyconstrainterror_getReason(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidindexedpropertyconstrainterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidindexedpropertyconstrainterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidIndexedPropertyConstraintError=InvalidIndexedPropertyConstraintError;const InvalidInitialRevisionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidinitialrevisionerror_free(ptr>>>0,1));class InvalidInitialRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidInitialRevisionError.prototype);obj.__wbg_ptr=ptr;InvalidInitialRevisionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidInitialRevisionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidinitialrevisionerror_free(ptr,0);}/**
     * @param {Document} document
     */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.invalidinitialrevisionerror_new(ptr0);this.__wbg_ptr=ret>>>0;InvalidInitialRevisionErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {Document}
     */getDocument(){const ret=wasm.invalidinitialrevisionerror_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}}exports.InvalidInitialRevisionError=InvalidInitialRevisionError;const InvalidInstantAssetLockProofErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidinstantassetlockprooferror_free(ptr>>>0,1));class InvalidInstantAssetLockProofError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidInstantAssetLockProofError.prototype);obj.__wbg_ptr=ptr;InvalidInstantAssetLockProofErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidInstantAssetLockProofErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidinstantassetlockprooferror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidinstantassetlockprooferror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidinstantassetlockprooferror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidInstantAssetLockProofError=InvalidInstantAssetLockProofError;const InvalidInstantAssetLockProofSignatureErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidinstantassetlockproofsignatureerror_free(ptr>>>0,1));class InvalidInstantAssetLockProofSignatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidInstantAssetLockProofSignatureError.prototype);obj.__wbg_ptr=ptr;InvalidInstantAssetLockProofSignatureErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidInstantAssetLockProofSignatureErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidinstantassetlockproofsignatureerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidinstantassetlockproofsignatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidinstantassetlockproofsignatureerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidInstantAssetLockProofSignatureError=InvalidInstantAssetLockProofSignatureError;const InvalidJsonSchemaRefErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidjsonschemareferror_free(ptr>>>0,1));class InvalidJsonSchemaRefError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidJsonSchemaRefError.prototype);obj.__wbg_ptr=ptr;InvalidJsonSchemaRefErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidJsonSchemaRefErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidjsonschemareferror_free(ptr,0);}/**
     * @returns {string}
     */getRefError(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidjsonschemareferror_getRefError(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidjsonschemareferror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidjsonschemareferror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidJsonSchemaRefError=InvalidJsonSchemaRefError;const InvalidSignaturePublicKeyPurposeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidsignaturepublickeypurposeerror_free(ptr>>>0,1));class InvalidSignaturePublicKeyPurposeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidSignaturePublicKeyPurposeError.prototype);obj.__wbg_ptr=ptr;InvalidSignaturePublicKeyPurposeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidSignaturePublicKeyPurposeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidsignaturepublickeypurposeerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyPurpose(){const ret=wasm.invalidsignaturepublickeypurposeerror_getPublicKeyPurpose(this.__wbg_ptr);return ret;}/**
     * @returns {Array<any>}
     */getKeyPurposeRequirement(){const ret=wasm.invalidsignaturepublickeypurposeerror_getKeyPurposeRequirement(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidsignaturepublickeypurposeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidsignaturepublickeypurposeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidSignaturePublicKeyPurposeError=InvalidSignaturePublicKeyPurposeError;const InvalidSignaturePublicKeySecurityLevelErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidsignaturepublickeysecuritylevelerror_free(ptr>>>0,1));class InvalidSignaturePublicKeySecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidSignaturePublicKeySecurityLevelError.prototype);obj.__wbg_ptr=ptr;InvalidSignaturePublicKeySecurityLevelErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidSignaturePublicKeySecurityLevelErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidsignaturepublickeysecuritylevelerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeySecurityLevel(){const ret=wasm.invalidsignaturepublickeysecuritylevelerror_getPublicKeySecurityLevel(this.__wbg_ptr);return ret;}/**
     * @returns {Array<any>}
     */getKeySecurityLevelRequirement(){const ret=wasm.invalidsignaturepublickeysecuritylevelerror_getKeySecurityLevelRequirement(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidsignaturepublickeysecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidsignaturepublickeysecuritylevelerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidSignaturePublicKeySecurityLevelError=InvalidSignaturePublicKeySecurityLevelError;const InvalidStateTransitionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidstatetransitionerror_free(ptr>>>0,1));class InvalidStateTransitionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidStateTransitionError.prototype);obj.__wbg_ptr=ptr;InvalidStateTransitionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidStateTransitionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidstatetransitionerror_free(ptr,0);}/**
     * @param {any[]} error_buffers
     * @param {any} raw_state_transition
     */constructor(error_buffers,raw_state_transition){const ptr0=passArrayJsValueToWasm0(error_buffers,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invalidstatetransitionerror_new_wasm(ptr0,len0,raw_state_transition);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;InvalidStateTransitionErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any[]}
     */getErrors(){const ret=wasm.invalidstatetransitionerror_getErrors(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any}
     */getRawStateTransition(){const ret=wasm.invalidstatetransitionerror_getRawStateTransition(this.__wbg_ptr);return ret;}}exports.InvalidStateTransitionError=InvalidStateTransitionError;const InvalidStateTransitionSignatureErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidstatetransitionsignatureerror_free(ptr>>>0,1));class InvalidStateTransitionSignatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidStateTransitionSignatureError.prototype);obj.__wbg_ptr=ptr;InvalidStateTransitionSignatureErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidStateTransitionSignatureErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidstatetransitionsignatureerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidstatetransitionsignatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidstatetransitionsignatureerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidStateTransitionSignatureError=InvalidStateTransitionSignatureError;const InvalidStateTransitionTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invalidstatetransitiontypeerror_free(ptr>>>0,1));class InvalidStateTransitionTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidStateTransitionTypeError.prototype);obj.__wbg_ptr=ptr;InvalidStateTransitionTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InvalidStateTransitionTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidstatetransitiontypeerror_free(ptr,0);}/**
     * @param {number} transition_type
     */constructor(transition_type){const ret=wasm.invalidstatetransitiontypeerror_new(transition_type);this.__wbg_ptr=ret>>>0;InvalidStateTransitionTypeErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getType(){const ret=wasm.invalidstatetransitiontypeerror_getType(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.invalidstatetransitiontypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.invalidstatetransitiontypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.InvalidStateTransitionTypeError=InvalidStateTransitionTypeError;const JsonSchemaCompilationErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_jsonschemacompilationerror_free(ptr>>>0,1));class JsonSchemaCompilationError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(JsonSchemaCompilationError.prototype);obj.__wbg_ptr=ptr;JsonSchemaCompilationErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;JsonSchemaCompilationErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_jsonschemacompilationerror_free(ptr,0);}/**
     * @returns {string}
     */getError(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemacompilationerror_getError(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.jsonschemacompilationerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemacompilationerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.JsonSchemaCompilationError=JsonSchemaCompilationError;const JsonSchemaErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_jsonschemaerror_free(ptr>>>0,1));class JsonSchemaError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(JsonSchemaError.prototype);obj.__wbg_ptr=ptr;JsonSchemaErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}toJSON(){return{message:this.message,keyword:this.keyword,instancePath:this.instancePath,schemaPath:this.schemaPath,propertyName:this.propertyName,params:this.params,code:this.code};}toString(){return JSON.stringify(this);}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;JsonSchemaErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_jsonschemaerror_free(ptr,0);}/**
     * @returns {string}
     */getKeyword(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_getKeyword(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getInstancePath(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_getInstancePath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getSchemaPath(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_getSchemaPath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyName(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_getPropertyName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */getParams(){const ret=wasm.jsonschemaerror_getParams(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {number}
     */getCode(){const ret=wasm.jsonschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */toString(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_toString(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */get keyword(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_keyword(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */get instancePath(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_instancePath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */get schemaPath(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_schemaPath(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */get propertyName(){let deferred1_0;let deferred1_1;try{const ret=wasm.jsonschemaerror_propertyName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */get params(){const ret=wasm.jsonschemaerror_params(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {number}
     */get code(){const ret=wasm.jsonschemaerror_code(this.__wbg_ptr);return ret>>>0;}}exports.JsonSchemaError=JsonSchemaError;const MasterPublicKeyUpdateErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masterpublickeyupdateerror_free(ptr>>>0,1));class MasterPublicKeyUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasterPublicKeyUpdateError.prototype);obj.__wbg_ptr=ptr;MasterPublicKeyUpdateErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasterPublicKeyUpdateErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masterpublickeyupdateerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.masterpublickeyupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.masterpublickeyupdateerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.masterpublickeyupdateerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MasterPublicKeyUpdateError=MasterPublicKeyUpdateError;const MasternodeIncorrectVoterIdentityIdErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masternodeincorrectvoteridentityiderror_free(ptr>>>0,1));class MasternodeIncorrectVoterIdentityIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeIncorrectVoterIdentityIdError.prototype);obj.__wbg_ptr=ptr;MasternodeIncorrectVoterIdentityIdErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasternodeIncorrectVoterIdentityIdErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodeincorrectvoteridentityiderror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.masternodeincorrectvoteridentityiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.masternodeincorrectvoteridentityiderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.masternodeincorrectvoteridentityiderror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MasternodeIncorrectVoterIdentityIdError=MasternodeIncorrectVoterIdentityIdError;const MasternodeIncorrectVotingAddressErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masternodeincorrectvotingaddresserror_free(ptr>>>0,1));class MasternodeIncorrectVotingAddressError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeIncorrectVotingAddressError.prototype);obj.__wbg_ptr=ptr;MasternodeIncorrectVotingAddressErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasternodeIncorrectVotingAddressErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodeincorrectvotingaddresserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.masternodeincorrectvotingaddresserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.masternodeincorrectvotingaddresserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.masternodeincorrectvotingaddresserror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MasternodeIncorrectVotingAddressError=MasternodeIncorrectVotingAddressError;const MasternodeNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masternodenotfounderror_free(ptr>>>0,1));class MasternodeNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeNotFoundError.prototype);obj.__wbg_ptr=ptr;MasternodeNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasternodeNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodenotfounderror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.masternodenotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.masternodenotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.masternodenotfounderror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MasternodeNotFoundError=MasternodeNotFoundError;const MasternodeVoteAlreadyPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masternodevotealreadypresenterror_free(ptr>>>0,1));class MasternodeVoteAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeVoteAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;MasternodeVoteAlreadyPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasternodeVoteAlreadyPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodevotealreadypresenterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.masternodevotealreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.masternodevotealreadypresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.masternodevotealreadypresenterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MasternodeVoteAlreadyPresentError=MasternodeVoteAlreadyPresentError;const MasternodeVoteTransitionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masternodevotetransition_free(ptr>>>0,1));class MasternodeVoteTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeVoteTransition.prototype);obj.__wbg_ptr=ptr;MasternodeVoteTransitionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasternodeVoteTransitionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodevotetransition_free(ptr,0);}/**
     * @param {number} platform_version
     */constructor(platform_version){const ret=wasm.masternodevotetransition_new(platform_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;MasternodeVoteTransitionFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any}
     */getOwnerId(){const ret=wasm.masternodevotetransition_getOwnerId(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getType(){const ret=wasm.masternodevotetransition_getType(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getProTxHash(){const ret=wasm.masternodevotetransition_getProTxHash(this.__wbg_ptr);return ret;}/**
     * @param {any} pro_tx_hash
     */setProTxHash(pro_tx_hash){wasm.masternodevotetransition_setProTxHash(this.__wbg_ptr,pro_tx_hash);}/**
     * @param {any} options
     * @returns {any}
     */toObject(options){const ret=wasm.masternodevotetransition_toObject(this.__wbg_ptr,options);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toBuffer(){const ret=wasm.masternodevotetransition_toBuffer(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.masternodevotetransition_toJSON(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}/**
     * @returns {any[]}
     */getModifiedDataIds(){const ret=wasm.masternodevotetransition_getModifiedDataIds(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isDataContractStateTransition(){const ret=wasm.masternodevotetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isDocumentStateTransition(){const ret=wasm.masternodevotetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isIdentityStateTransition(){const ret=wasm.masternodevotetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {boolean}
     */isVotingStateTransition(){const ret=wasm.masternodevotetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
     * @returns {number}
     */getUserFeeIncrease(){const ret=wasm.masternodevotetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
     * @param {number} user_fee_increase
     */setUserFeeIncrease(user_fee_increase){wasm.masternodevotetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
     * @returns {bigint}
     */getIdentityContractNonce(){const ret=wasm.masternodevotetransition_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {object | undefined}
     */getContestedDocumentResourceVotePoll(){const ret=wasm.masternodevotetransition_getContestedDocumentResourceVotePoll(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array} private_key
     * @param {number} key_type
     * @param {any | undefined} [bls]
     */signByPrivateKey(private_key,key_type,bls){const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.masternodevotetransition_signByPrivateKey(this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addToExternrefTable0(bls));if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}/**
     * @returns {any}
     */getSignature(){const ret=wasm.masternodevotetransition_getSignature(this.__wbg_ptr);return ret;}/**
     * @param {Uint8Array | undefined} [signature]
     */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.masternodevotetransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
     * @param {IdentityPublicKey} identity_public_key
     * @param {Uint8Array} private_key
     * @param {any} bls
     */sign(identity_public_key,private_key,bls){_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.masternodevotetransition_sign(this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,bls);if(ret[1]){throw takeFromExternrefTable0(ret[0]);}}}exports.MasternodeVoteTransition=MasternodeVoteTransition;const MasternodeVotedTooManyTimesErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_masternodevotedtoomanytimeserror_free(ptr>>>0,1));class MasternodeVotedTooManyTimesError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeVotedTooManyTimesError.prototype);obj.__wbg_ptr=ptr;MasternodeVotedTooManyTimesErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MasternodeVotedTooManyTimesErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodevotedtoomanytimeserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.masternodevotedtoomanytimeserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.masternodevotedtoomanytimeserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.masternodevotedtoomanytimeserror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MasternodeVotedTooManyTimesError=MasternodeVotedTooManyTimesError;const MaxDocumentsTransitionsExceededErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_maxdocumentstransitionsexceedederror_free(ptr>>>0,1));class MaxDocumentsTransitionsExceededError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MaxDocumentsTransitionsExceededError.prototype);obj.__wbg_ptr=ptr;MaxDocumentsTransitionsExceededErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MaxDocumentsTransitionsExceededErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_maxdocumentstransitionsexceedederror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.maxdocumentstransitionsexceedederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.maxdocumentstransitionsexceedederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.maxdocumentstransitionsexceedederror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MaxDocumentsTransitionsExceededError=MaxDocumentsTransitionsExceededError;const MaxIdentityPublicKeyLimitReachedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_maxidentitypublickeylimitreachederror_free(ptr>>>0,1));class MaxIdentityPublicKeyLimitReachedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MaxIdentityPublicKeyLimitReachedError.prototype);obj.__wbg_ptr=ptr;MaxIdentityPublicKeyLimitReachedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MaxIdentityPublicKeyLimitReachedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_maxidentitypublickeylimitreachederror_free(ptr,0);}/**
     * @returns {number}
     */getMaxItems(){const ret=wasm.maxidentitypublickeylimitreachederror_getMaxItems(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.maxidentitypublickeylimitreachederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.maxidentitypublickeylimitreachederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MaxIdentityPublicKeyLimitReachedError=MaxIdentityPublicKeyLimitReachedError;const MetadataFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_metadata_free(ptr>>>0,1));class Metadata{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(Metadata.prototype);obj.__wbg_ptr=ptr;MetadataFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MetadataFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_metadata_free(ptr,0);}/**
     * @param {bigint} block_height
     * @param {number} core_chain_locked_height
     * @param {bigint} time_ms
     * @param {number} protocol_version
     */constructor(block_height,core_chain_locked_height,time_ms,protocol_version){const ret=wasm.metadata_new(block_height,core_chain_locked_height,time_ms,protocol_version);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;MetadataFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @param {any} object
     * @returns {Metadata}
     */static from(object){const ret=wasm.metadata_from(object);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return Metadata.__wrap(ret[0]);}/**
     * @returns {any}
     */toJSON(){const ret=wasm.metadata_toJSON(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */toObject(){const ret=wasm.metadata_toObject(this.__wbg_ptr);return ret;}/**
     * @returns {bigint}
     */getBlockHeight(){const ret=wasm.metadata_getBlockHeight(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCoreChainLockedHeight(){const ret=wasm.metadata_getCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {bigint}
     */getTimeMs(){const ret=wasm.metadata_getTimeMs(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getProtocolVersion(){const ret=wasm.metadata_getProtocolVersion(this.__wbg_ptr);return ret>>>0;}}exports.Metadata=Metadata;const MismatchOwnerIdsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_mismatchowneridserror_free(ptr>>>0,1));class MismatchOwnerIdsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MismatchOwnerIdsError.prototype);obj.__wbg_ptr=ptr;MismatchOwnerIdsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MismatchOwnerIdsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_mismatchowneridserror_free(ptr,0);}/**
     * @param {any[]} documents
     */constructor(documents){const ptr0=passArrayJsValueToWasm0(documents,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.mismatchowneridserror_new(ptr0,len0);this.__wbg_ptr=ret>>>0;MismatchOwnerIdsErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {any[]}
     */getDocuments(){const ret=wasm.mismatchowneridserror_getDocuments(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}}exports.MismatchOwnerIdsError=MismatchOwnerIdsError;const MissingDataContractIdErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingdatacontractiderror_free(ptr>>>0,1));class MissingDataContractIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDataContractIdError.prototype);obj.__wbg_ptr=ptr;MissingDataContractIdErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingDataContractIdErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdatacontractiderror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingdatacontractiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingdatacontractiderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingDataContractIdError=MissingDataContractIdError;const MissingDocumentTransitionActionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingdocumenttransitionactionerror_free(ptr>>>0,1));class MissingDocumentTransitionActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDocumentTransitionActionError.prototype);obj.__wbg_ptr=ptr;MissingDocumentTransitionActionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingDocumentTransitionActionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdocumenttransitionactionerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingdocumenttransitionactionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingdocumenttransitionactionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingDocumentTransitionActionError=MissingDocumentTransitionActionError;const MissingDocumentTransitionTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingdocumenttransitiontypeerror_free(ptr>>>0,1));class MissingDocumentTransitionTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDocumentTransitionTypeError.prototype);obj.__wbg_ptr=ptr;MissingDocumentTransitionTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingDocumentTransitionTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdocumenttransitiontypeerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingdocumenttransitiontypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingdocumenttransitiontypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingDocumentTransitionTypeError=MissingDocumentTransitionTypeError;const MissingDocumentTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingdocumenttypeerror_free(ptr>>>0,1));class MissingDocumentTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDocumentTypeError.prototype);obj.__wbg_ptr=ptr;MissingDocumentTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingDocumentTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdocumenttypeerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingdocumenttypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingdocumenttypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingDocumentTypeError=MissingDocumentTypeError;const MissingIdentityPublicKeyIdsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingidentitypublickeyidserror_free(ptr>>>0,1));class MissingIdentityPublicKeyIdsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingIdentityPublicKeyIdsError.prototype);obj.__wbg_ptr=ptr;MissingIdentityPublicKeyIdsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingIdentityPublicKeyIdsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingidentitypublickeyidserror_free(ptr,0);}/**
     * @returns {Array<any>}
     */getDuplicatedIds(){const ret=wasm.missingidentitypublickeyidserror_getDuplicatedIds(this.__wbg_ptr);return ret;}}exports.MissingIdentityPublicKeyIdsError=MissingIdentityPublicKeyIdsError;const MissingMasterPublicKeyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingmasterpublickeyerror_free(ptr>>>0,1));class MissingMasterPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingMasterPublicKeyError.prototype);obj.__wbg_ptr=ptr;MissingMasterPublicKeyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingMasterPublicKeyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingmasterpublickeyerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingmasterpublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingmasterpublickeyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingMasterPublicKeyError=MissingMasterPublicKeyError;const MissingPositionsInDocumentTypePropertiesErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingpositionsindocumenttypepropertieserror_free(ptr>>>0,1));class MissingPositionsInDocumentTypePropertiesError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingPositionsInDocumentTypePropertiesError.prototype);obj.__wbg_ptr=ptr;MissingPositionsInDocumentTypePropertiesErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingPositionsInDocumentTypePropertiesErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingpositionsindocumenttypepropertieserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingpositionsindocumenttypepropertieserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingpositionsindocumenttypepropertieserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.missingpositionsindocumenttypepropertieserror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MissingPositionsInDocumentTypePropertiesError=MissingPositionsInDocumentTypePropertiesError;const MissingPublicKeyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingpublickeyerror_free(ptr>>>0,1));class MissingPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingPublicKeyError.prototype);obj.__wbg_ptr=ptr;MissingPublicKeyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingPublicKeyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingpublickeyerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyId(){const ret=wasm.missingpublickeyerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingpublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingpublickeyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingPublicKeyError=MissingPublicKeyError;const MissingStateTransitionTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingstatetransitiontypeerror_free(ptr>>>0,1));class MissingStateTransitionTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingStateTransitionTypeError.prototype);obj.__wbg_ptr=ptr;MissingStateTransitionTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingStateTransitionTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingstatetransitiontypeerror_free(ptr,0);}constructor(){const ret=wasm.missingstatetransitiontypeerror_new();this.__wbg_ptr=ret>>>0;MissingStateTransitionTypeErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingstatetransitiontypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingstatetransitiontypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.MissingStateTransitionTypeError=MissingStateTransitionTypeError;const MissingTransferKeyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_missingtransferkeyerror_free(ptr>>>0,1));class MissingTransferKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingTransferKeyError.prototype);obj.__wbg_ptr=ptr;MissingTransferKeyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;MissingTransferKeyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingtransferkeyerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.missingtransferkeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.missingtransferkeyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.missingtransferkeyerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.MissingTransferKeyError=MissingTransferKeyError;const NoDocumentsSuppliedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_nodocumentssuppliederror_free(ptr>>>0,1));class NoDocumentsSuppliedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(NoDocumentsSuppliedError.prototype);obj.__wbg_ptr=ptr;NoDocumentsSuppliedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;NoDocumentsSuppliedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_nodocumentssuppliederror_free(ptr,0);}constructor(){const ret=wasm.nodocumentssuppliederror_new();this.__wbg_ptr=ret>>>0;NoDocumentsSuppliedErrorFinalization.register(this,this.__wbg_ptr,this);return this;}}exports.NoDocumentsSuppliedError=NoDocumentsSuppliedError;const NoTransferKeyForCoreWithdrawalAvailableErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_notransferkeyforcorewithdrawalavailableerror_free(ptr>>>0,1));class NoTransferKeyForCoreWithdrawalAvailableError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(NoTransferKeyForCoreWithdrawalAvailableError.prototype);obj.__wbg_ptr=ptr;NoTransferKeyForCoreWithdrawalAvailableErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;NoTransferKeyForCoreWithdrawalAvailableErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_notransferkeyforcorewithdrawalavailableerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.notransferkeyforcorewithdrawalavailableerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.notransferkeyforcorewithdrawalavailableerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.notransferkeyforcorewithdrawalavailableerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.NoTransferKeyForCoreWithdrawalAvailableError=NoTransferKeyForCoreWithdrawalAvailableError;const NonConsensusErrorWasmFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_nonconsensuserrorwasm_free(ptr>>>0,1));class NonConsensusErrorWasm{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;NonConsensusErrorWasmFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_nonconsensuserrorwasm_free(ptr,0);}}exports.NonConsensusErrorWasm=NonConsensusErrorWasm;const NotImplementedIdentityCreditWithdrawalTransitionPoolingErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_free(ptr>>>0,1));class NotImplementedIdentityCreditWithdrawalTransitionPoolingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(NotImplementedIdentityCreditWithdrawalTransitionPoolingError.prototype);obj.__wbg_ptr=ptr;NotImplementedIdentityCreditWithdrawalTransitionPoolingErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;NotImplementedIdentityCreditWithdrawalTransitionPoolingErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_free(ptr,0);}/**
     * @returns {number}
     */getPooling(){const ret=wasm.notimplementedidentitycreditwithdrawaltransitionpoolingerror_getPooling(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.notimplementedidentitycreditwithdrawaltransitionpoolingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.notimplementedidentitycreditwithdrawaltransitionpoolingerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.NotImplementedIdentityCreditWithdrawalTransitionPoolingError=NotImplementedIdentityCreditWithdrawalTransitionPoolingError;const OverflowErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_overflowerror_free(ptr>>>0,1));class OverflowError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(OverflowError.prototype);obj.__wbg_ptr=ptr;OverflowErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;OverflowErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_overflowerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.overflowerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.overflowerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.overflowerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.OverflowError=OverflowError;const PlatformValueErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_platformvalueerror_free(ptr>>>0,1));class PlatformValueError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PlatformValueError.prototype);obj.__wbg_ptr=ptr;PlatformValueErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}toJSON(){return{};}toString(){return JSON.stringify(this);}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PlatformValueErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_platformvalueerror_free(ptr,0);}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.platformvalueerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */toString(){let deferred1_0;let deferred1_1;try{const ret=wasm.platformvalueerror_toString(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */valueOf(){let deferred1_0;let deferred1_1;try{const ret=wasm.platformvalueerror_valueOf(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.PlatformValueError=PlatformValueError;const PrefundedSpecializedBalanceInsufficientErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_prefundedspecializedbalanceinsufficienterror_free(ptr>>>0,1));class PrefundedSpecializedBalanceInsufficientError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PrefundedSpecializedBalanceInsufficientError.prototype);obj.__wbg_ptr=ptr;PrefundedSpecializedBalanceInsufficientErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PrefundedSpecializedBalanceInsufficientErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_prefundedspecializedbalanceinsufficienterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.prefundedspecializedbalanceinsufficienterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.prefundedspecializedbalanceinsufficienterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.prefundedspecializedbalanceinsufficienterror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.PrefundedSpecializedBalanceInsufficientError=PrefundedSpecializedBalanceInsufficientError;const PrefundedSpecializedBalanceNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_prefundedspecializedbalancenotfounderror_free(ptr>>>0,1));class PrefundedSpecializedBalanceNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PrefundedSpecializedBalanceNotFoundError.prototype);obj.__wbg_ptr=ptr;PrefundedSpecializedBalanceNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PrefundedSpecializedBalanceNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_prefundedspecializedbalancenotfounderror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.prefundedspecializedbalancenotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.prefundedspecializedbalancenotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.prefundedspecializedbalancenotfounderror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.PrefundedSpecializedBalanceNotFoundError=PrefundedSpecializedBalanceNotFoundError;const ProtocolVersionParsingErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_protocolversionparsingerror_free(ptr>>>0,1));class ProtocolVersionParsingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ProtocolVersionParsingError.prototype);obj.__wbg_ptr=ptr;ProtocolVersionParsingErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ProtocolVersionParsingErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_protocolversionparsingerror_free(ptr,0);}/**
     * @param {string} parsing_error
     */constructor(parsing_error){const ptr0=passStringToWasm0(parsing_error,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.protocolversionparsingerror_new(ptr0,len0);this.__wbg_ptr=ret>>>0;ProtocolVersionParsingErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {string}
     */getParsingError(){let deferred1_0;let deferred1_1;try{const ret=wasm.protocolversionparsingerror_getParsingError(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.protocolversionparsingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.protocolversionparsingerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.protocolversionparsingerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.ProtocolVersionParsingError=ProtocolVersionParsingError;const PublicKeyIsDisabledErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_publickeyisdisablederror_free(ptr>>>0,1));class PublicKeyIsDisabledError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PublicKeyIsDisabledError.prototype);obj.__wbg_ptr=ptr;PublicKeyIsDisabledErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PublicKeyIsDisabledErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_publickeyisdisablederror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyId(){const ret=wasm.publickeyisdisablederror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.publickeyisdisablederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.publickeyisdisablederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.PublicKeyIsDisabledError=PublicKeyIsDisabledError;const PublicKeySecurityLevelNotMetErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_publickeysecuritylevelnotmeterror_free(ptr>>>0,1));class PublicKeySecurityLevelNotMetError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PublicKeySecurityLevelNotMetError.prototype);obj.__wbg_ptr=ptr;PublicKeySecurityLevelNotMetErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PublicKeySecurityLevelNotMetErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_publickeysecuritylevelnotmeterror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeySecurityLevel(){const ret=wasm.publickeysecuritylevelnotmeterror_getPublicKeySecurityLevel(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getKeySecurityLevelRequirement(){const ret=wasm.publickeysecuritylevelnotmeterror_getKeySecurityLevelRequirement(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.publickeysecuritylevelnotmeterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.publickeysecuritylevelnotmeterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.PublicKeySecurityLevelNotMetError=PublicKeySecurityLevelNotMetError;const RevisionAbsentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_revisionabsenterror_free(ptr>>>0,1));class RevisionAbsentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(RevisionAbsentError.prototype);obj.__wbg_ptr=ptr;RevisionAbsentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;RevisionAbsentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_revisionabsenterror_free(ptr,0);}/**
     * @param {Document} document
     */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.revisionabsenterror_new(ptr0);this.__wbg_ptr=ret>>>0;RevisionAbsentErrorFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * @returns {Document}
     */getDocument(){const ret=wasm.revisionabsenterror_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}}exports.RevisionAbsentError=RevisionAbsentError;const SerializedObjectParsingErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_serializedobjectparsingerror_free(ptr>>>0,1));class SerializedObjectParsingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SerializedObjectParsingError.prototype);obj.__wbg_ptr=ptr;SerializedObjectParsingErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SerializedObjectParsingErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_serializedobjectparsingerror_free(ptr,0);}/**
     * @returns {string}
     */getParsingError(){let deferred1_0;let deferred1_1;try{const ret=wasm.serializedobjectparsingerror_getParsingError(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.serializedobjectparsingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.serializedobjectparsingerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.SerializedObjectParsingError=SerializedObjectParsingError;const SignatureShouldNotBePresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_signatureshouldnotbepresenterror_free(ptr>>>0,1));class SignatureShouldNotBePresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SignatureShouldNotBePresentError.prototype);obj.__wbg_ptr=ptr;SignatureShouldNotBePresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SignatureShouldNotBePresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_signatureshouldnotbepresenterror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.signatureshouldnotbepresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.signatureshouldnotbepresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.SignatureShouldNotBePresentError=SignatureShouldNotBePresentError;const StateTransitionFactoryFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_statetransitionfactory_free(ptr>>>0,1));class StateTransitionFactory{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(StateTransitionFactory.prototype);obj.__wbg_ptr=ptr;StateTransitionFactoryFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;StateTransitionFactoryFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_statetransitionfactory_free(ptr,0);}/**
     * @param {Uint8Array} buffer
     * @param {any} _options
     * @returns {Promise<any>}
     */createFromBuffer(buffer,_options){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.statetransitionfactory_createFromBuffer(this.__wbg_ptr,ptr0,len0,_options);return ret;}}exports.StateTransitionFactory=StateTransitionFactory;const StateTransitionMaxSizeExceededErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_statetransitionmaxsizeexceedederror_free(ptr>>>0,1));class StateTransitionMaxSizeExceededError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(StateTransitionMaxSizeExceededError.prototype);obj.__wbg_ptr=ptr;StateTransitionMaxSizeExceededErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;StateTransitionMaxSizeExceededErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_statetransitionmaxsizeexceedederror_free(ptr,0);}/**
     * @returns {bigint}
     */getActualSizeBytes(){const ret=wasm.statetransitionmaxsizeexceedederror_getActualSizeBytes(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {bigint}
     */getMaxSizeBytes(){const ret=wasm.statetransitionmaxsizeexceedederror_getMaxSizeBytes(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
     * @returns {number}
     */getCode(){const ret=wasm.statetransitionmaxsizeexceedederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.statetransitionmaxsizeexceedederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.StateTransitionMaxSizeExceededError=StateTransitionMaxSizeExceededError;const SystemPropertyIndexAlreadyPresentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_systempropertyindexalreadypresenterror_free(ptr>>>0,1));class SystemPropertyIndexAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SystemPropertyIndexAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;SystemPropertyIndexAlreadyPresentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SystemPropertyIndexAlreadyPresentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_systempropertyindexalreadypresenterror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.systempropertyindexalreadypresenterror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.systempropertyindexalreadypresenterror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyName(){let deferred1_0;let deferred1_1;try{const ret=wasm.systempropertyindexalreadypresenterror_getPropertyName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.systempropertyindexalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.systempropertyindexalreadypresenterror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.SystemPropertyIndexAlreadyPresentError=SystemPropertyIndexAlreadyPresentError;const TooManyMasterPublicKeyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_toomanymasterpublickeyerror_free(ptr>>>0,1));class TooManyMasterPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TooManyMasterPublicKeyError.prototype);obj.__wbg_ptr=ptr;TooManyMasterPublicKeyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;TooManyMasterPublicKeyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_toomanymasterpublickeyerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.toomanymasterpublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.toomanymasterpublickeyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.toomanymasterpublickeyerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.TooManyMasterPublicKeyError=TooManyMasterPublicKeyError;const TryingToDeleteImmutableDocumentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_tryingtodeleteimmutabledocumenterror_free(ptr>>>0,1));class TryingToDeleteImmutableDocumentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TryingToDeleteImmutableDocumentError.prototype);obj.__wbg_ptr=ptr;TryingToDeleteImmutableDocumentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;TryingToDeleteImmutableDocumentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_tryingtodeleteimmutabledocumenterror_free(ptr,0);}/**
     * @param {Document} document
     */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.tryingtodeleteimmutabledocumenterror_new(ptr0);this.__wbg_ptr=ret>>>0;TryingToDeleteImmutableDocumentErrorFinalization.register(this,this.__wbg_ptr,this);return this;}}exports.TryingToDeleteImmutableDocumentError=TryingToDeleteImmutableDocumentError;const TryingToReplaceImmutableDocumentErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_tryingtoreplaceimmutabledocumenterror_free(ptr>>>0,1));class TryingToReplaceImmutableDocumentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TryingToReplaceImmutableDocumentError.prototype);obj.__wbg_ptr=ptr;TryingToReplaceImmutableDocumentErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;TryingToReplaceImmutableDocumentErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_tryingtoreplaceimmutabledocumenterror_free(ptr,0);}/**
     * @param {Document} document
     */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.tryingtoreplaceimmutabledocumenterror_new(ptr0);this.__wbg_ptr=ret>>>0;TryingToReplaceImmutableDocumentErrorFinalization.register(this,this.__wbg_ptr,this);return this;}}exports.TryingToReplaceImmutableDocumentError=TryingToReplaceImmutableDocumentError;const UndefinedIndexPropertyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_undefinedindexpropertyerror_free(ptr>>>0,1));class UndefinedIndexPropertyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UndefinedIndexPropertyError.prototype);obj.__wbg_ptr=ptr;UndefinedIndexPropertyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UndefinedIndexPropertyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_undefinedindexpropertyerror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.undefinedindexpropertyerror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getIndexName(){let deferred1_0;let deferred1_1;try{const ret=wasm.undefinedindexpropertyerror_getIndexName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {string}
     */getPropertyName(){let deferred1_0;let deferred1_1;try{const ret=wasm.undefinedindexpropertyerror_getPropertyName(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.undefinedindexpropertyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.undefinedindexpropertyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.UndefinedIndexPropertyError=UndefinedIndexPropertyError;const UniqueIndicesLimitReachedErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_uniqueindiceslimitreachederror_free(ptr>>>0,1));class UniqueIndicesLimitReachedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UniqueIndicesLimitReachedError.prototype);obj.__wbg_ptr=ptr;UniqueIndicesLimitReachedErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UniqueIndicesLimitReachedErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_uniqueindiceslimitreachederror_free(ptr,0);}/**
     * @returns {string}
     */getDocumentType(){let deferred1_0;let deferred1_1;try{const ret=wasm.uniqueindiceslimitreachederror_getDocumentType(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getIndexLimit(){const ret=wasm.uniqueindiceslimitreachederror_getIndexLimit(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.uniqueindiceslimitreachederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.uniqueindiceslimitreachederror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.UniqueIndicesLimitReachedError=UniqueIndicesLimitReachedError;const UnknownAssetLockProofTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unknownassetlockprooftypeerror_free(ptr>>>0,1));class UnknownAssetLockProofTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownAssetLockProofTypeError.prototype);obj.__wbg_ptr=ptr;UnknownAssetLockProofTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnknownAssetLockProofTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknownassetlockprooftypeerror_free(ptr,0);}/**
     * @returns {number | undefined}
     */getType(){const ret=wasm.unknownassetlockprooftypeerror_getType(this.__wbg_ptr);return ret===0xFFFFFF?undefined:ret;}}exports.UnknownAssetLockProofTypeError=UnknownAssetLockProofTypeError;const UnknownDocumentCreationRestrictionModeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unknowndocumentcreationrestrictionmodeerror_free(ptr>>>0,1));class UnknownDocumentCreationRestrictionModeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownDocumentCreationRestrictionModeError.prototype);obj.__wbg_ptr=ptr;UnknownDocumentCreationRestrictionModeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnknownDocumentCreationRestrictionModeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknowndocumentcreationrestrictionmodeerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.unknowndocumentcreationrestrictionmodeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unknowndocumentcreationrestrictionmodeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.unknowndocumentcreationrestrictionmodeerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.UnknownDocumentCreationRestrictionModeError=UnknownDocumentCreationRestrictionModeError;const UnknownSecurityLevelErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unknownsecuritylevelerror_free(ptr>>>0,1));class UnknownSecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownSecurityLevelError.prototype);obj.__wbg_ptr=ptr;UnknownSecurityLevelErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnknownSecurityLevelErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknownsecuritylevelerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.unknownsecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unknownsecuritylevelerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.unknownsecuritylevelerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.UnknownSecurityLevelError=UnknownSecurityLevelError;const UnknownStorageKeyRequirementsErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unknownstoragekeyrequirementserror_free(ptr>>>0,1));class UnknownStorageKeyRequirementsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownStorageKeyRequirementsError.prototype);obj.__wbg_ptr=ptr;UnknownStorageKeyRequirementsErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnknownStorageKeyRequirementsErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknownstoragekeyrequirementserror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.unknownstoragekeyrequirementserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unknownstoragekeyrequirementserror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.unknownstoragekeyrequirementserror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.UnknownStorageKeyRequirementsError=UnknownStorageKeyRequirementsError;const UnknownTradeModeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unknowntrademodeerror_free(ptr>>>0,1));class UnknownTradeModeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownTradeModeError.prototype);obj.__wbg_ptr=ptr;UnknownTradeModeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnknownTradeModeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknowntrademodeerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.unknowntrademodeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unknowntrademodeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.unknowntrademodeerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.UnknownTradeModeError=UnknownTradeModeError;const UnknownTransferableTypeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unknowntransferabletypeerror_free(ptr>>>0,1));class UnknownTransferableTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownTransferableTypeError.prototype);obj.__wbg_ptr=ptr;UnknownTransferableTypeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnknownTransferableTypeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknowntransferabletypeerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.unknowntransferabletypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unknowntransferabletypeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.unknowntransferabletypeerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.UnknownTransferableTypeError=UnknownTransferableTypeError;const UnsupportedFeatureErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unsupportedfeatureerror_free(ptr>>>0,1));class UnsupportedFeatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnsupportedFeatureError.prototype);obj.__wbg_ptr=ptr;UnsupportedFeatureErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnsupportedFeatureErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unsupportedfeatureerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.unsupportedfeatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unsupportedfeatureerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.unsupportedfeatureerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.UnsupportedFeatureError=UnsupportedFeatureError;const UnsupportedProtocolVersionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unsupportedprotocolversionerror_free(ptr>>>0,1));class UnsupportedProtocolVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnsupportedProtocolVersionError.prototype);obj.__wbg_ptr=ptr;UnsupportedProtocolVersionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnsupportedProtocolVersionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unsupportedprotocolversionerror_free(ptr,0);}/**
     * @returns {number}
     */getParsedProtocolVersion(){const ret=wasm.unsupportedprotocolversionerror_getParsedProtocolVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getLatestVersion(){const ret=wasm.unsupportedprotocolversionerror_getLatestVersion(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {number}
     */getCode(){const ret=wasm.unsupportedprotocolversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unsupportedprotocolversionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.UnsupportedProtocolVersionError=UnsupportedProtocolVersionError;const UnsupportedVersionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unsupportedversionerror_free(ptr>>>0,1));class UnsupportedVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnsupportedVersionError.prototype);obj.__wbg_ptr=ptr;UnsupportedVersionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnsupportedVersionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unsupportedversionerror_free(ptr,0);}/**
     * @returns {number}
     */getReceivedVersion(){const ret=wasm.unsupportedversionerror_getReceivedVersion(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getMinVersion(){const ret=wasm.unsupportedversionerror_getMinVersion(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getMaxVersion(){const ret=wasm.unsupportedversionerror_getMaxVersion(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.unsupportedversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.unsupportedversionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.UnsupportedVersionError=UnsupportedVersionError;const ValidationResultFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_validationresult_free(ptr>>>0,1));class ValidationResult{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ValidationResult.prototype);obj.__wbg_ptr=ptr;ValidationResultFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ValidationResultFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_validationresult_free(ptr,0);}/**
     * @param {any[] | undefined} [errors_option]
     */constructor(errors_option){var ptr0=isLikeNone(errors_option)?0:passArrayJsValueToWasm0(errors_option,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;const ret=wasm.validationresult_new(ptr0,len0);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}this.__wbg_ptr=ret[0]>>>0;ValidationResultFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * This is just a test method - doesn't need to be in the resulted binding. Please
     * remove before shipping
     * @returns {(string)[]}
     */errorsText(){const ret=wasm.validationresult_errorsText(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {boolean}
     */isValid(){const ret=wasm.validationresult_isValid(this.__wbg_ptr);return ret!==0;}/**
     * @returns {any[]}
     */getErrors(){const ret=wasm.validationresult_getErrors(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any[]}
     */get errors(){const ret=wasm.validationresult_errors(this.__wbg_ptr);var v1=getArrayJsValueFromWasm0(ret[0],ret[1]).slice();wasm.__wbindgen_free(ret[0],ret[1]*4,4);return v1;}/**
     * @returns {any}
     */getData(){const ret=wasm.validationresult_getData(this.__wbg_ptr);return ret;}/**
     * @returns {any}
     */getFirstError(){const ret=wasm.validationresult_getFirstError(this.__wbg_ptr);return ret;}}exports.ValidationResult=ValidationResult;const ValueErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_valueerror_free(ptr>>>0,1));class ValueError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ValueError.prototype);obj.__wbg_ptr=ptr;ValueErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}toJSON(){return{message:this.message};}toString(){return JSON.stringify(this);}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ValueErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_valueerror_free(ptr,0);}/**
     * @returns {string}
     */getMessage(){let deferred1_0;let deferred1_1;try{const ret=wasm.valueerror_getMessage(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {number}
     */getCode(){const ret=wasm.valueerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.valueerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.ValueError=ValueError;const VersionErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_versionerror_free(ptr>>>0,1));class VersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VersionError.prototype);obj.__wbg_ptr=ptr;VersionErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;VersionErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_versionerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.versionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.versionerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.versionerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.VersionError=VersionError;const VotePollNotAvailableForVotingErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_votepollnotavailableforvotingerror_free(ptr>>>0,1));class VotePollNotAvailableForVotingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VotePollNotAvailableForVotingError.prototype);obj.__wbg_ptr=ptr;VotePollNotAvailableForVotingErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;VotePollNotAvailableForVotingErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_votepollnotavailableforvotingerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.votepollnotavailableforvotingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.votepollnotavailableforvotingerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.votepollnotavailableforvotingerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.VotePollNotAvailableForVotingError=VotePollNotAvailableForVotingError;const VotePollNotFoundErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_votepollnotfounderror_free(ptr>>>0,1));class VotePollNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VotePollNotFoundError.prototype);obj.__wbg_ptr=ptr;VotePollNotFoundErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;VotePollNotFoundErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_votepollnotfounderror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.votepollnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.votepollnotfounderror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.votepollnotfounderror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.VotePollNotFoundError=VotePollNotFoundError;const WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_free(ptr>>>0,1));class WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError.prototype);obj.__wbg_ptr=ptr;WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_free(ptr,0);}/**
     * @returns {number}
     */getCode(){const ret=wasm.withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {any}
     */serialize(){const ret=wasm.withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_serialize(this.__wbg_ptr);if(ret[2]){throw takeFromExternrefTable0(ret[1]);}return takeFromExternrefTable0(ret[0]);}}exports.WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError=WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError;const WrongPublicKeyPurposeErrorFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_wrongpublickeypurposeerror_free(ptr>>>0,1));class WrongPublicKeyPurposeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(WrongPublicKeyPurposeError.prototype);obj.__wbg_ptr=ptr;WrongPublicKeyPurposeErrorFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;WrongPublicKeyPurposeErrorFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_wrongpublickeypurposeerror_free(ptr,0);}/**
     * @returns {number}
     */getPublicKeyPurpose(){const ret=wasm.wrongpublickeypurposeerror_getPublicKeyPurpose(this.__wbg_ptr);return ret;}/**
     * @returns {Array<any>}
     */getKeyPurposeRequirement(){const ret=wasm.wrongpublickeypurposeerror_getKeyPurposeRequirement(this.__wbg_ptr);return ret;}/**
     * @returns {number}
     */getCode(){const ret=wasm.wrongpublickeypurposeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
     * @returns {string}
     */get message(){let deferred1_0;let deferred1_1;try{const ret=wasm.wrongpublickeypurposeerror_message(this.__wbg_ptr);deferred1_0=ret[0];deferred1_1=ret[1];return getStringFromWasm0(ret[0],ret[1]);}finally{wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}exports.WrongPublicKeyPurposeError=WrongPublicKeyPurposeError;async function __wbg_load(module,imports){if(typeof Response==='function'&&module instanceof Response){if(typeof WebAssembly.instantiateStreaming==='function'){try{return await WebAssembly.instantiateStreaming(module,imports);}catch(e){if(module.headers.get('Content-Type')!='application/wasm'){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e);}else{throw e;}}}const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports);}else{const instance=await WebAssembly.instantiate(module,imports);if(instance instanceof WebAssembly.Instance){return{instance,module};}else{return instance;}}}function __wbg_get_imports(){const imports={};imports.wbg={};imports.wbg.__wbg_String_eecc4a11987127d6=function(arg0,arg1){const ret=String(arg1);const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);};imports.wbg.__wbg_balanceisnotenougherror_new=function(arg0){const ret=BalanceIsNotEnoughError.__wrap(arg0);return ret;};imports.wbg.__wbg_basicblserror_new=function(arg0){const ret=BasicBLSError.__wrap(arg0);return ret;};imports.wbg.__wbg_basicecdsaerror_new=function(arg0){const ret=BasicECDSAError.__wrap(arg0);return ret;};imports.wbg.__wbg_buffer_3090767ff4eb96a9=function(arg0){const ret=arg0.buffer;return ret;};imports.wbg.__wbg_buffer_61b7ce01341d7f88=function(arg0){const ret=arg0.buffer;return ret;};imports.wbg.__wbg_byteOffset_22600b04bba87e45=function(arg0){const ret=arg0.byteOffset;return ret;};imports.wbg.__wbg_call_500db948e69c7330=function(){return handleError(function(arg0,arg1,arg2){const ret=arg0.call(arg1,arg2);return ret;},arguments);};imports.wbg.__wbg_call_b0d8e36992d9900d=function(){return handleError(function(arg0,arg1){const ret=arg0.call(arg1);return ret;},arguments);};imports.wbg.__wbg_chainassetlockproof_new=function(arg0){const ret=ChainAssetLockProof.__wrap(arg0);return ret;};imports.wbg.__wbg_constructor_dbc1fa8bf53335ed=function(arg0){const ret=arg0.constructor;return ret;};imports.wbg.__wbg_contesteddocumentstemporarilynotallowederror_new=function(arg0){const ret=ContestedDocumentsTemporarilyNotAllowedError.__wrap(arg0);return ret;};imports.wbg.__wbg_contesteduniqueindexonmutabledocumenttypeerror_new=function(arg0){const ret=ContestedUniqueIndexOnMutableDocumentTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_contesteduniqueindexwithuniqueindexerror_new=function(arg0){const ret=ContestedUniqueIndexWithUniqueIndexError.__wrap(arg0);return ret;};imports.wbg.__wbg_crypto_ed58b8e10a292839=function(arg0){const ret=arg0.crypto;return ret;};imports.wbg.__wbg_datacontract_new=function(arg0){const ret=DataContract.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractalreadypresenterror_new=function(arg0){const ret=DataContractAlreadyPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractboundsnotpresenterror_new=function(arg0){const ret=DataContractBoundsNotPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractconfigupdateerror_new=function(arg0){const ret=DataContractConfigUpdateError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractcreatetransition_new=function(arg0){const ret=DataContractCreateTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontracterror_new=function(arg0){const ret=DataContractError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractgenericerror_new=function(arg0){const ret=DataContractGenericError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontracthavenewuniqueindexerror_new=function(arg0){const ret=DataContractHaveNewUniqueIndexError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractimmutablepropertiesupdateerror_new=function(arg0){const ret=DataContractImmutablePropertiesUpdateError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractinvalidindexdefinitionupdateerror_new=function(arg0){const ret=DataContractInvalidIndexDefinitionUpdateError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractisreadonlyerror_new=function(arg0){const ret=DataContractIsReadonlyError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractmaxdepthexceederror_new=function(arg0){const ret=DataContractMaxDepthExceedError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractnotpresenterror_new=function(arg0){const ret=DataContractNotPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractnotpresentnotconsensuserror_new=function(arg0){const ret=DataContractNotPresentNotConsensusError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractuniqueindiceschangederror_new=function(arg0){const ret=DataContractUniqueIndicesChangedError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractupdatepermissionerror_new=function(arg0){const ret=DataContractUpdatePermissionError.__wrap(arg0);return ret;};imports.wbg.__wbg_datacontractupdatetransition_new=function(arg0){const ret=DataContractUpdateTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_datatriggerconditionerror_new=function(arg0){const ret=DataTriggerConditionError.__wrap(arg0);return ret;};imports.wbg.__wbg_datatriggerexecutionerror_new=function(arg0){const ret=DataTriggerExecutionError.__wrap(arg0);return ret;};imports.wbg.__wbg_datatriggerinvalidresulterror_new=function(arg0){const ret=DataTriggerInvalidResultError.__wrap(arg0);return ret;};imports.wbg.__wbg_debug_19114f11037e4658=function(arg0,arg1,arg2,arg3){console.debug(arg0,arg1,arg2,arg3);};imports.wbg.__wbg_deleteProperty_0ccc7fae163f60ac=function(){return handleError(function(arg0,arg1){const ret=Reflect.deleteProperty(arg0,arg1);return ret;},arguments);};imports.wbg.__wbg_disablingkeyidalsobeingaddedinsametransitionerror_new=function(arg0){const ret=DisablingKeyIdAlsoBeingAddedInSameTransitionError.__wrap(arg0);return ret;};imports.wbg.__wbg_document_new=function(arg0){const ret=Document.__wrap(arg0);return ret;};imports.wbg.__wbg_documentalreadyexistserror_new=function(arg0){const ret=DocumentAlreadyExistsError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentalreadypresenterror_new=function(arg0){const ret=DocumentAlreadyPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentcontestcurrentlylockederror_new=function(arg0){const ret=DocumentContestCurrentlyLockedError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentcontestdocumentwithsameidalreadypresenterror_new=function(arg0){const ret=DocumentContestDocumentWithSameIdAlreadyPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentcontestidentityalreadycontestanterror_new=function(arg0){const ret=DocumentContestIdentityAlreadyContestantError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentcontestnotjoinableerror_new=function(arg0){const ret=DocumentContestNotJoinableError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentcontestnotpaidforerror_new=function(arg0){const ret=DocumentContestNotPaidForError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentcreationnotallowederror_new=function(arg0){const ret=DocumentCreationNotAllowedError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentfieldmaxsizeexceedederror_new=function(arg0){const ret=DocumentFieldMaxSizeExceededError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentincorrectpurchasepriceerror_new=function(arg0){const ret=DocumentIncorrectPurchasePriceError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentnorevisionerror_new=function(arg0){const ret=DocumentNoRevisionError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentnotforsaleerror_new=function(arg0){const ret=DocumentNotForSaleError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentnotfounderror_new=function(arg0){const ret=DocumentNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentnotprovidederror_new=function(arg0){const ret=DocumentNotProvidedError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentowneridmismatcherror_new=function(arg0){const ret=DocumentOwnerIdMismatchError.__wrap(arg0);return ret;};imports.wbg.__wbg_documentsbatchtransition_new=function(arg0){const ret=DocumentsBatchTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_documenttimestampsareequalerror_new=function(arg0){const ret=DocumentTimestampsAreEqualError.__wrap(arg0);return ret;};imports.wbg.__wbg_documenttimestampsmismatcherror_new=function(arg0){const ret=DocumentTimestampsMismatchError.__wrap(arg0);return ret;};imports.wbg.__wbg_documenttimestampwindowviolationerror_new=function(arg0){const ret=DocumentTimestampWindowViolationError.__wrap(arg0);return ret;};imports.wbg.__wbg_documenttransition_new=function(arg0){const ret=DocumentTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_documenttransitionsareabsenterror_new=function(arg0){const ret=DocumentTransitionsAreAbsentError.__wrap(arg0);return ret;};imports.wbg.__wbg_documenttypeupdateerror_new=function(arg0){const ret=DocumentTypeUpdateError.__wrap(arg0);return ret;};imports.wbg.__wbg_done_f22c1561fa919baa=function(arg0){const ret=arg0.done;return ret;};imports.wbg.__wbg_duplicatedidentitypublickeyerror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicatedidentitypublickeyiderror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyIdError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicatedidentitypublickeyidstateerror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyIdStateError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicatedidentitypublickeystateerror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyStateError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicatedocumenttransitionswithidserror_new=function(arg0){const ret=DuplicateDocumentTransitionsWithIdsError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicatedocumenttransitionswithindiceserror_new=function(arg0){const ret=DuplicateDocumentTransitionsWithIndicesError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicateindexerror_new=function(arg0){const ret=DuplicateIndexError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicateindexnameerror_new=function(arg0){const ret=DuplicateIndexNameError.__wrap(arg0);return ret;};imports.wbg.__wbg_duplicateuniqueindexerror_new=function(arg0){const ret=DuplicateUniqueIndexError.__wrap(arg0);return ret;};imports.wbg.__wbg_entries_4f2bb9b0d701c0f6=function(arg0){const ret=Object.entries(arg0);return ret;};imports.wbg.__wbg_error_483d659117b6f3f6=function(arg0,arg1,arg2,arg3){console.error(arg0,arg1,arg2,arg3);};imports.wbg.__wbg_error_fab41a42d22bf2bc=function(arg0){console.error(arg0);};imports.wbg.__wbg_from_740386af8582e67e=function(arg0,arg1){var v0=getArrayU8FromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*1,1);const ret=Buffer.from(v0);return ret;};imports.wbg.__wbg_from_b23ef36533f937c2=function(arg0,arg1){const ret=Buffer.from(getArrayU8FromWasm0(arg0,arg1));return ret;};imports.wbg.__wbg_from_d68eaa96dba25449=function(arg0){const ret=Array.from(arg0);return ret;};imports.wbg.__wbg_generate_352f53b14867b823=function(){return handleError(function(arg0){const ret=arg0.generate();return ret;},arguments);};imports.wbg.__wbg_getPrototypeOf_474a3d39e7803d66=function(arg0){const ret=Object.getPrototypeOf(arg0);return ret;};imports.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return handleError(function(arg0,arg1){arg0.getRandomValues(arg1);},arguments);};imports.wbg.__wbg_getTime_ab8b72009983c537=function(arg0){const ret=arg0.getTime();return ret;};imports.wbg.__wbg_get_9aa3dff3f0266054=function(arg0,arg1){const ret=arg0[arg1>>>0];return ret;};imports.wbg.__wbg_get_bbccf8970793c087=function(){return handleError(function(arg0,arg1){const ret=Reflect.get(arg0,arg1);return ret;},arguments);};imports.wbg.__wbg_getwithrefkey_6550b2c093d2eb18=function(arg0,arg1){const ret=arg0[arg1];return ret;};imports.wbg.__wbg_has_94c2fc1d261bbfe9=function(){return handleError(function(arg0,arg1){const ret=Reflect.has(arg0,arg1);return ret;},arguments);};imports.wbg.__wbg_identityalreadyexistserror_new=function(arg0){const ret=IdentityAlreadyExistsError.__wrap(arg0);return ret;};imports.wbg.__wbg_identityassetlockprooflockedtransactionmismatcherror_new=function(arg0){const ret=IdentityAssetLockProofLockedTransactionMismatchError.__wrap(arg0);return ret;};imports.wbg.__wbg_identityassetlocktransactionisnotfounderror_new=function(arg0){const ret=IdentityAssetLockTransactionIsNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_identityassetlocktransactionoutpointalreadyexistserror_new=function(arg0){const ret=IdentityAssetLockTransactionOutPointAlreadyExistsError.__wrap(arg0);return ret;};imports.wbg.__wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_new=function(arg0){const ret=IdentityAssetLockTransactionOutPointNotEnoughBalanceError.__wrap(arg0);return ret;};imports.wbg.__wbg_identityassetlocktransactionoutputnotfounderror_new=function(arg0){const ret=IdentityAssetLockTransactionOutputNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_identityassetlocktransactionreplayerror_new=function(arg0){const ret=IdentityAssetLockTransactionReplayError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitycontractnonceoutofboundserror_new=function(arg0){const ret=IdentityContractNonceOutOfBoundsError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitycreatetransition_new=function(arg0){const ret=IdentityCreateTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_identitycredittransfertoselferror_new=function(arg0){const ret=IdentityCreditTransferToSelfError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitycredittransfertransition_new=function(arg0){const ret=IdentityCreditTransferTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_identitycreditwithdrawaltransition_new=function(arg0){const ret=IdentityCreditWithdrawalTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_identityinsufficientbalanceerror_new=function(arg0){const ret=IdentityInsufficientBalanceError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitynotfounderror_new=function(arg0){const ret=IdentityNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitypublickey_new=function(arg0){const ret=IdentityPublicKey.__wrap(arg0);return ret;};imports.wbg.__wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_new=function(arg0){const ret=IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitypublickeyisdisablederror_new=function(arg0){const ret=IdentityPublicKeyIsDisabledError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitypublickeyisreadonlyerror_new=function(arg0){const ret=IdentityPublicKeyIsReadOnlyError.__wrap(arg0);return ret;};imports.wbg.__wbg_identitypublickeywithwitness_new=function(arg0){const ret=IdentityPublicKeyWithWitness.__wrap(arg0);return ret;};imports.wbg.__wbg_identitytopuptransition_new=function(arg0){const ret=IdentityTopUpTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_identityupdatetransition_new=function(arg0){const ret=IdentityUpdateTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_incompatibledatacontractschemaerror_new=function(arg0){const ret=IncompatibleDataContractSchemaError.__wrap(arg0);return ret;};imports.wbg.__wbg_incompatibledocumenttypeschemaerror_new=function(arg0){const ret=IncompatibleDocumentTypeSchemaError.__wrap(arg0);return ret;};imports.wbg.__wbg_incompatibleprotocolversionerror_new=function(arg0){const ret=IncompatibleProtocolVersionError.__wrap(arg0);return ret;};imports.wbg.__wbg_incompatiblere2patternerror_new=function(arg0){const ret=IncompatibleRe2PatternError.__wrap(arg0);return ret;};imports.wbg.__wbg_inconsistentcompoundindexdataerror_new=function(arg0){const ret=InconsistentCompoundIndexDataError.__wrap(arg0);return ret;};imports.wbg.__wbg_info_18e75e6ce8a36a90=function(arg0,arg1,arg2,arg3){console.info(arg0,arg1,arg2,arg3);};imports.wbg.__wbg_instanceof_ArrayBuffer_670ddde44cdb2602=function(arg0){let result;try{result=arg0 instanceof ArrayBuffer;}catch(_){result=false;}const ret=result;return ret;};imports.wbg.__wbg_instanceof_Error_2b29c5b4afac4e22=function(arg0){let result;try{result=arg0 instanceof Error;}catch(_){result=false;}const ret=result;return ret;};imports.wbg.__wbg_instanceof_Uint8Array_28af5bc19d6acad8=function(arg0){let result;try{result=arg0 instanceof Uint8Array;}catch(_){result=false;}const ret=result;return ret;};imports.wbg.__wbg_instantassetlockproof_new=function(arg0){const ret=InstantAssetLockProof.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidactionerror_new=function(arg0){const ret=InvalidActionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidactionnameerror_new=function(arg0){const ret=InvalidActionNameError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidassetlockproofcorechainheighterror_new=function(arg0){const ret=InvalidAssetLockProofCoreChainHeightError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidassetlockprooftransactionheighterror_new=function(arg0){const ret=InvalidAssetLockProofTransactionHeightError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidassetlocktransactionoutputreturnsizeerror_new=function(arg0){const ret=InvalidAssetLockTransactionOutputReturnSizeError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidcompoundindexerror_new=function(arg0){const ret=InvalidCompoundIndexError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddatacontractiderror_new=function(arg0){const ret=InvalidDataContractIdError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddatacontractversionerror_new=function(arg0){const ret=InvalidDataContractVersionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumentactionerror_new=function(arg0){const ret=InvalidDocumentActionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenterror_new=function(arg0){const ret=InvalidDocumentError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumentrevisionerror_new=function(arg0){const ret=InvalidDocumentRevisionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenttransitionactionerror_new=function(arg0){const ret=InvalidDocumentTransitionActionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenttransitioniderror_new=function(arg0){const ret=InvalidDocumentTransitionIdError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenttypeerror_new=function(arg0){const ret=InvalidDocumentTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenttypeindatacontracterror_new=function(arg0){const ret=InvalidDocumentTypeInDataContractError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenttypenameerror_new=function(arg0){const ret=InvalidDocumentTypeNameError.__wrap(arg0);return ret;};imports.wbg.__wbg_invaliddocumenttyperequiredsecuritylevelerror_new=function(arg0){const ret=InvalidDocumentTypeRequiredSecurityLevelError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentifiererror_new=function(arg0){const ret=InvalidIdentifierError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_new=function(arg0){const ret=InvalidIdentityAssetLockProofChainLockValidationErrorWasm.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityassetlocktransactionerror_new=function(arg0){const ret=InvalidIdentityAssetLockTransactionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityassetlocktransactionoutputerror_new=function(arg0){const ret=InvalidIdentityAssetLockTransactionOutputError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitycredittransferamounterror_new=function(arg0){const ret=InvalidIdentityCreditTransferAmountError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitycreditwithdrawaltransitionamounterror_new=function(arg0){const ret=InvalidIdentityCreditWithdrawalTransitionAmountError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_new=function(arg0){const ret=InvalidIdentityCreditWithdrawalTransitionCoreFeeError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_new=function(arg0){const ret=InvalidIdentityCreditWithdrawalTransitionOutputScriptError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityerror_new=function(arg0){const ret=InvalidIdentityError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitykeysignatureerror_new=function(arg0){const ret=InvalidIdentityKeySignatureError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitynonceerror_new=function(arg0){const ret=InvalidIdentityNonceError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitypublickeydataerror_new=function(arg0){const ret=InvalidIdentityPublicKeyDataError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitypublickeyiderror_new=function(arg0){const ret=InvalidIdentityPublicKeyIdError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitypublickeysecuritylevelerror_new=function(arg0){const ret=InvalidIdentityPublicKeySecurityLevelError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentitypublickeytypeerror_new=function(arg0){const ret=InvalidIdentityPublicKeyTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityrevisionerror_new=function(arg0){const ret=InvalidIdentityRevisionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityupdatetransitiondisablekeyserror_new=function(arg0){const ret=InvalidIdentityUpdateTransitionDisableKeysError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalididentityupdatetransitionemptyerror_new=function(arg0){const ret=InvalidIdentityUpdateTransitionEmptyError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidindexedpropertyconstrainterror_new=function(arg0){const ret=InvalidIndexedPropertyConstraintError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidindexpropertytypeerror_new=function(arg0){const ret=InvalidIndexPropertyTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidinitialrevisionerror_new=function(arg0){const ret=InvalidInitialRevisionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidinstantassetlockprooferror_new=function(arg0){const ret=InvalidInstantAssetLockProofError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidinstantassetlockproofsignatureerror_new=function(arg0){const ret=InvalidInstantAssetLockProofSignatureError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidjsonschemareferror_new=function(arg0){const ret=InvalidJsonSchemaRefError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidsignaturepublickeypurposeerror_new=function(arg0){const ret=InvalidSignaturePublicKeyPurposeError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidsignaturepublickeysecuritylevelerror_new=function(arg0){const ret=InvalidSignaturePublicKeySecurityLevelError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidstatetransitionerror_new=function(arg0){const ret=InvalidStateTransitionError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidstatetransitionsignatureerror_new=function(arg0){const ret=InvalidStateTransitionSignatureError.__wrap(arg0);return ret;};imports.wbg.__wbg_invalidstatetransitiontypeerror_new=function(arg0){const ret=InvalidStateTransitionTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_isArray_1ba11a930108ec51=function(arg0){const ret=Array.isArray(arg0);return ret;};imports.wbg.__wbg_isSafeInteger_12f5549b2fca23f4=function(arg0){const ret=Number.isSafeInteger(arg0);return ret;};imports.wbg.__wbg_iterator_23604bb983791576=function(){const ret=Symbol.iterator;return ret;};imports.wbg.__wbg_jsonschemacompilationerror_new=function(arg0){const ret=JsonSchemaCompilationError.__wrap(arg0);return ret;};imports.wbg.__wbg_jsonschemaerror_new=function(arg0){const ret=JsonSchemaError.__wrap(arg0);return ret;};imports.wbg.__wbg_keys_72f37a5ac8f4f568=function(arg0){const ret=Object.keys(arg0);return ret;};imports.wbg.__wbg_length_65d1cd11729ced11=function(arg0){const ret=arg0.length;return ret;};imports.wbg.__wbg_length_d65cf0786bfc5739=function(arg0){const ret=arg0.length;return ret;};imports.wbg.__wbg_length_e9d70364925c6f01=function(arg0){const ret=arg0.length;return ret;};imports.wbg.__wbg_log_464d1b2190ca1e04=function(arg0){console.log(arg0);};imports.wbg.__wbg_log_bc77772961bf21bb=function(arg0,arg1,arg2,arg3){console.log(arg0,arg1,arg2,arg3);};imports.wbg.__wbg_masternodeincorrectvoteridentityiderror_new=function(arg0){const ret=MasternodeIncorrectVoterIdentityIdError.__wrap(arg0);return ret;};imports.wbg.__wbg_masternodeincorrectvotingaddresserror_new=function(arg0){const ret=MasternodeIncorrectVotingAddressError.__wrap(arg0);return ret;};imports.wbg.__wbg_masternodenotfounderror_new=function(arg0){const ret=MasternodeNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_masternodevotealreadypresenterror_new=function(arg0){const ret=MasternodeVoteAlreadyPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_masternodevotedtoomanytimeserror_new=function(arg0){const ret=MasternodeVotedTooManyTimesError.__wrap(arg0);return ret;};imports.wbg.__wbg_masternodevotetransition_new=function(arg0){const ret=MasternodeVoteTransition.__wrap(arg0);return ret;};imports.wbg.__wbg_masterpublickeyupdateerror_new=function(arg0){const ret=MasterPublicKeyUpdateError.__wrap(arg0);return ret;};imports.wbg.__wbg_maxdocumentstransitionsexceedederror_new=function(arg0){const ret=MaxDocumentsTransitionsExceededError.__wrap(arg0);return ret;};imports.wbg.__wbg_maxidentitypublickeylimitreachederror_new=function(arg0){const ret=MaxIdentityPublicKeyLimitReachedError.__wrap(arg0);return ret;};imports.wbg.__wbg_message_7bde112094278773=function(arg0){const ret=arg0.message;return ret;};imports.wbg.__wbg_mismatchowneridserror_new=function(arg0){const ret=MismatchOwnerIdsError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingdatacontractiderror_new=function(arg0){const ret=MissingDataContractIdError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingdocumenttransitionactionerror_new=function(arg0){const ret=MissingDocumentTransitionActionError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingdocumenttransitiontypeerror_new=function(arg0){const ret=MissingDocumentTransitionTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingdocumenttypeerror_new=function(arg0){const ret=MissingDocumentTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingidentitypublickeyidserror_new=function(arg0){const ret=MissingIdentityPublicKeyIdsError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingmasterpublickeyerror_new=function(arg0){const ret=MissingMasterPublicKeyError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingpositionsindocumenttypepropertieserror_new=function(arg0){const ret=MissingPositionsInDocumentTypePropertiesError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingpublickeyerror_new=function(arg0){const ret=MissingPublicKeyError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingstatetransitiontypeerror_new=function(arg0){const ret=MissingStateTransitionTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_missingtransferkeyerror_new=function(arg0){const ret=MissingTransferKeyError.__wrap(arg0);return ret;};imports.wbg.__wbg_msCrypto_0a36e2ec3a343d26=function(arg0){const ret=arg0.msCrypto;return ret;};imports.wbg.__wbg_name_655efe467bd1c31e=function(arg0){const ret=arg0.name;return ret;};imports.wbg.__wbg_new0_55477545727914d9=function(){const ret=new Date();return ret;};imports.wbg.__wbg_new_19b775d9df75f836=function(arg0){const ret=new _Identifier.default(arg0);return ret;};imports.wbg.__wbg_new_254fa9eac11932ae=function(){const ret=new Array();return ret;};imports.wbg.__wbg_new_3d446df9155128ef=function(arg0,arg1){try{var state0={a:arg0,b:arg1};var cb0=(arg0,arg1)=>{const a=state0.a;state0.a=0;try{return __wbg_adapter_1636(a,state0.b,arg0,arg1);}finally{state0.a=a;}};const ret=new Promise(cb0);return ret;}finally{state0.a=state0.b=0;}};imports.wbg.__wbg_new_3ff5b33b1ce712df=function(arg0){const ret=new Uint8Array(arg0);return ret;};imports.wbg.__wbg_new_41257536af60ed14=function(arg0){const ret=new Date(arg0);return ret;};imports.wbg.__wbg_new_6799ef630abee97c=function(arg0,arg1){const ret=new Error(getStringFromWasm0(arg0,arg1));return ret;};imports.wbg.__wbg_new_688846f374351c92=function(){const ret=new Object();return ret;};imports.wbg.__wbg_new_bc96c6a1c0786643=function(){const ret=new Map();return ret;};imports.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=function(arg0,arg1){const ret=new Function(getStringFromWasm0(arg0,arg1));return ret;};imports.wbg.__wbg_newwithargs_308e846d06f33aa0=function(arg0,arg1,arg2,arg3){const ret=new Function(getStringFromWasm0(arg0,arg1),getStringFromWasm0(arg2,arg3));return ret;};imports.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91=function(arg0,arg1,arg2){const ret=new Uint8Array(arg0,arg1>>>0,arg2>>>0);return ret;};imports.wbg.__wbg_newwithlength_34ce8f1051e74449=function(arg0){const ret=new Uint8Array(arg0>>>0);return ret;};imports.wbg.__wbg_next_01dd9234a5bf6d05=function(){return handleError(function(arg0){const ret=arg0.next();return ret;},arguments);};imports.wbg.__wbg_next_137428deb98342b0=function(arg0){const ret=arg0.next;return ret;};imports.wbg.__wbg_node_02999533c4ea02e3=function(arg0){const ret=arg0.node;return ret;};imports.wbg.__wbg_nodocumentssuppliederror_new=function(arg0){const ret=NoDocumentsSuppliedError.__wrap(arg0);return ret;};imports.wbg.__wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_new=function(arg0){const ret=NotImplementedIdentityCreditWithdrawalTransitionPoolingError.__wrap(arg0);return ret;};imports.wbg.__wbg_notransferkeyforcorewithdrawalavailableerror_new=function(arg0){const ret=NoTransferKeyForCoreWithdrawalAvailableError.__wrap(arg0);return ret;};imports.wbg.__wbg_overflowerror_new=function(arg0){const ret=OverflowError.__wrap(arg0);return ret;};imports.wbg.__wbg_parse_161c68378e086ae1=function(){return handleError(function(arg0,arg1){const ret=JSON.parse(getStringFromWasm0(arg0,arg1));return ret;},arguments);};imports.wbg.__wbg_platformvalueerror_new=function(arg0){const ret=PlatformValueError.__wrap(arg0);return ret;};imports.wbg.__wbg_prefundedspecializedbalanceinsufficienterror_new=function(arg0){const ret=PrefundedSpecializedBalanceInsufficientError.__wrap(arg0);return ret;};imports.wbg.__wbg_prefundedspecializedbalancenotfounderror_new=function(arg0){const ret=PrefundedSpecializedBalanceNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_privateKeyToPublicKey_8e64101a487990c0=function(){return handleError(function(arg0,arg1,arg2){const ret=arg0.privateKeyToPublicKey(getArrayU8FromWasm0(arg1,arg2));return ret;},arguments);};imports.wbg.__wbg_process_5c1d670bc53614b8=function(arg0){const ret=arg0.process;return ret;};imports.wbg.__wbg_protocolversionparsingerror_new=function(arg0){const ret=ProtocolVersionParsingError.__wrap(arg0);return ret;};imports.wbg.__wbg_publickeyisdisablederror_new=function(arg0){const ret=PublicKeyIsDisabledError.__wrap(arg0);return ret;};imports.wbg.__wbg_publickeysecuritylevelnotmeterror_new=function(arg0){const ret=PublicKeySecurityLevelNotMetError.__wrap(arg0);return ret;};imports.wbg.__wbg_push_6edad0df4b546b2c=function(arg0,arg1){const ret=arg0.push(arg1);return ret;};imports.wbg.__wbg_queueMicrotask_2181040e064c0dc8=function(arg0){queueMicrotask(arg0);};imports.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f=function(arg0){const ret=arg0.queueMicrotask;return ret;};imports.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return handleError(function(arg0,arg1){arg0.randomFillSync(arg1);},arguments);};imports.wbg.__wbg_require_79b1e9274cde3c87=function(){return handleError(function(){const ret=module.require;return ret;},arguments);};imports.wbg.__wbg_resolve_0bf7c44d641804f9=function(arg0){const ret=Promise.resolve(arg0);return ret;};imports.wbg.__wbg_revisionabsenterror_new=function(arg0){const ret=RevisionAbsentError.__wrap(arg0);return ret;};imports.wbg.__wbg_serializedobjectparsingerror_new=function(arg0){const ret=SerializedObjectParsingError.__wrap(arg0);return ret;};imports.wbg.__wbg_setTime_4f334adb2f18bbba=function(arg0,arg1){const ret=arg0.setTime(arg1);return ret;};imports.wbg.__wbg_set_1d80752d0d5f0b21=function(arg0,arg1,arg2){arg0[arg1>>>0]=arg2;};imports.wbg.__wbg_set_23d69db4e5c66a6e=function(arg0,arg1,arg2){arg0.set(arg1,arg2>>>0);};imports.wbg.__wbg_set_3807d5f0bfc24aa7=function(arg0,arg1,arg2){arg0[arg1]=arg2;};imports.wbg.__wbg_set_4e647025551483bd=function(){return handleError(function(arg0,arg1,arg2){const ret=Reflect.set(arg0,arg1,arg2);return ret;},arguments);};imports.wbg.__wbg_set_76818dc3c59a63d5=function(arg0,arg1,arg2){const ret=arg0.set(arg1,arg2);return ret;};imports.wbg.__wbg_set_778e07e0ac3221a4=function(arg0,arg1,arg2,arg3){(0,_lodash.set)(arg0,getStringFromWasm0(arg1,arg2),arg3);};imports.wbg.__wbg_sign_bcaefd5157d164f1=function(){return handleError(function(arg0,arg1,arg2,arg3,arg4){const ret=arg0.sign(getArrayU8FromWasm0(arg1,arg2),getArrayU8FromWasm0(arg3,arg4));return ret;},arguments);};imports.wbg.__wbg_signatureshouldnotbepresenterror_new=function(arg0){const ret=SignatureShouldNotBePresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_statetransitionmaxsizeexceedederror_new=function(arg0){const ret=StateTransitionMaxSizeExceededError.__wrap(arg0);return ret;};imports.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=function(){const ret=typeof global==='undefined'?null:global;return isLikeNone(ret)?0:addToExternrefTable0(ret);};imports.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=function(){const ret=typeof globalThis==='undefined'?null:globalThis;return isLikeNone(ret)?0:addToExternrefTable0(ret);};imports.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=function(){const ret=typeof self==='undefined'?null:self;return isLikeNone(ret)?0:addToExternrefTable0(ret);};imports.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=function(){const ret=typeof window==='undefined'?null:window;return isLikeNone(ret)?0:addToExternrefTable0(ret);};imports.wbg.__wbg_stringify_a8308e064240b26d=function(){return handleError(function(arg0,arg1){const ret=JSON.stringify(arg0,arg1);return ret;},arguments);};imports.wbg.__wbg_subarray_46adeb9b86949d12=function(arg0,arg1,arg2){const ret=arg0.subarray(arg1>>>0,arg2>>>0);return ret;};imports.wbg.__wbg_systempropertyindexalreadypresenterror_new=function(arg0){const ret=SystemPropertyIndexAlreadyPresentError.__wrap(arg0);return ret;};imports.wbg.__wbg_then_0438fad860fe38e1=function(arg0,arg1){const ret=arg0.then(arg1);return ret;};imports.wbg.__wbg_toBuffer_f4720860375e1b8a=function(arg0,arg1){const ret=arg1.toBuffer();const ptr1=passArray8ToWasm0(ret,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);};imports.wbg.__wbg_toString_4388a9b346ea85b2=function(arg0){const ret=arg0.toString();return ret;};imports.wbg.__wbg_toomanymasterpublickeyerror_new=function(arg0){const ret=TooManyMasterPublicKeyError.__wrap(arg0);return ret;};imports.wbg.__wbg_tryingtodeleteimmutabledocumenterror_new=function(arg0){const ret=TryingToDeleteImmutableDocumentError.__wrap(arg0);return ret;};imports.wbg.__wbg_tryingtoreplaceimmutabledocumenterror_new=function(arg0){const ret=TryingToReplaceImmutableDocumentError.__wrap(arg0);return ret;};imports.wbg.__wbg_undefinedindexpropertyerror_new=function(arg0){const ret=UndefinedIndexPropertyError.__wrap(arg0);return ret;};imports.wbg.__wbg_uniqueindiceslimitreachederror_new=function(arg0){const ret=UniqueIndicesLimitReachedError.__wrap(arg0);return ret;};imports.wbg.__wbg_unknownassetlockprooftypeerror_new=function(arg0){const ret=UnknownAssetLockProofTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_unknowndocumentcreationrestrictionmodeerror_new=function(arg0){const ret=UnknownDocumentCreationRestrictionModeError.__wrap(arg0);return ret;};imports.wbg.__wbg_unknownsecuritylevelerror_new=function(arg0){const ret=UnknownSecurityLevelError.__wrap(arg0);return ret;};imports.wbg.__wbg_unknownstoragekeyrequirementserror_new=function(arg0){const ret=UnknownStorageKeyRequirementsError.__wrap(arg0);return ret;};imports.wbg.__wbg_unknowntrademodeerror_new=function(arg0){const ret=UnknownTradeModeError.__wrap(arg0);return ret;};imports.wbg.__wbg_unknowntransferabletypeerror_new=function(arg0){const ret=UnknownTransferableTypeError.__wrap(arg0);return ret;};imports.wbg.__wbg_unsupportedfeatureerror_new=function(arg0){const ret=UnsupportedFeatureError.__wrap(arg0);return ret;};imports.wbg.__wbg_unsupportedprotocolversionerror_new=function(arg0){const ret=UnsupportedProtocolVersionError.__wrap(arg0);return ret;};imports.wbg.__wbg_unsupportedversionerror_new=function(arg0){const ret=UnsupportedVersionError.__wrap(arg0);return ret;};imports.wbg.__wbg_value_4c32fd138a88eee2=function(arg0){const ret=arg0.value;return ret;};imports.wbg.__wbg_valueerror_new=function(arg0){const ret=ValueError.__wrap(arg0);return ret;};imports.wbg.__wbg_verifySignature_22f2dc2a972e8c71=function(){return handleError(function(arg0,arg1,arg2,arg3,arg4,arg5,arg6){const ret=arg0.verifySignature(getArrayU8FromWasm0(arg1,arg2),getArrayU8FromWasm0(arg3,arg4),getArrayU8FromWasm0(arg5,arg6));return ret;},arguments);};imports.wbg.__wbg_versionerror_new=function(arg0){const ret=VersionError.__wrap(arg0);return ret;};imports.wbg.__wbg_versions_c71aa1626a93e0a1=function(arg0){const ret=arg0.versions;return ret;};imports.wbg.__wbg_votepollnotavailableforvotingerror_new=function(arg0){const ret=VotePollNotAvailableForVotingError.__wrap(arg0);return ret;};imports.wbg.__wbg_votepollnotfounderror_new=function(arg0){const ret=VotePollNotFoundError.__wrap(arg0);return ret;};imports.wbg.__wbg_warn_cb8be8bbf790a5d6=function(arg0,arg1,arg2,arg3){console.warn(arg0,arg1,arg2,arg3);};imports.wbg.__wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_new=function(arg0){const ret=WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError.__wrap(arg0);return ret;};imports.wbg.__wbg_wrongpublickeypurposeerror_new=function(arg0){const ret=WrongPublicKeyPurposeError.__wrap(arg0);return ret;};imports.wbg.__wbindgen_bigint_from_i128=function(arg0,arg1){const ret=arg0<<BigInt(64)|BigInt.asUintN(64,arg1);return ret;};imports.wbg.__wbindgen_bigint_from_i64=function(arg0){const ret=arg0;return ret;};imports.wbg.__wbindgen_bigint_from_str=function(arg0,arg1){const ret=BigInt(getStringFromWasm0(arg0,arg1));return ret;};imports.wbg.__wbindgen_bigint_from_u128=function(arg0,arg1){const ret=BigInt.asUintN(64,arg0)<<BigInt(64)|BigInt.asUintN(64,arg1);return ret;};imports.wbg.__wbindgen_bigint_from_u64=function(arg0){const ret=BigInt.asUintN(64,arg0);return ret;};imports.wbg.__wbindgen_bigint_get_as_i64=function(arg0,arg1){const v=arg1;const ret=typeof v==='bigint'?v:undefined;getDataViewMemory0().setBigInt64(arg0+8*1,isLikeNone(ret)?BigInt(0):ret,true);getDataViewMemory0().setInt32(arg0+4*0,!isLikeNone(ret),true);};imports.wbg.__wbindgen_boolean_get=function(arg0){const v=arg0;const ret=typeof v==='boolean'?v?1:0:2;return ret;};imports.wbg.__wbindgen_cb_drop=function(arg0){const obj=arg0.original;if(obj.cnt--==1){obj.a=0;return true;}const ret=false;return ret;};imports.wbg.__wbindgen_closure_wrapper17384=function(arg0,arg1,arg2){const ret=makeMutClosure(arg0,arg1,183,__wbg_adapter_60);return ret;};imports.wbg.__wbindgen_debug_string=function(arg0,arg1){const ret=debugString(arg1);const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);};imports.wbg.__wbindgen_error_new=function(arg0,arg1){const ret=new Error(getStringFromWasm0(arg0,arg1));return ret;};imports.wbg.__wbindgen_in=function(arg0,arg1){const ret=arg0 in arg1;return ret;};imports.wbg.__wbindgen_init_externref_table=function(){const table=wasm.__wbindgen_export_4;const offset=table.grow(4);table.set(0,undefined);table.set(offset+0,undefined);table.set(offset+1,null);table.set(offset+2,true);table.set(offset+3,false);;};imports.wbg.__wbindgen_is_bigint=function(arg0){const ret=typeof arg0==='bigint';return ret;};imports.wbg.__wbindgen_is_falsy=function(arg0){const ret=!arg0;return ret;};imports.wbg.__wbindgen_is_function=function(arg0){const ret=typeof arg0==='function';return ret;};imports.wbg.__wbindgen_is_null=function(arg0){const ret=arg0===null;return ret;};imports.wbg.__wbindgen_is_object=function(arg0){const val=arg0;const ret=typeof val==='object'&&val!==null;return ret;};imports.wbg.__wbindgen_is_string=function(arg0){const ret=typeof arg0==='string';return ret;};imports.wbg.__wbindgen_is_undefined=function(arg0){const ret=arg0===undefined;return ret;};imports.wbg.__wbindgen_jsval_eq=function(arg0,arg1){const ret=arg0===arg1;return ret;};imports.wbg.__wbindgen_jsval_loose_eq=function(arg0,arg1){const ret=arg0==arg1;return ret;};imports.wbg.__wbindgen_memory=function(){const ret=wasm.memory;return ret;};imports.wbg.__wbindgen_number_get=function(arg0,arg1){const obj=arg1;const ret=typeof obj==='number'?obj:undefined;getDataViewMemory0().setFloat64(arg0+8*1,isLikeNone(ret)?0:ret,true);getDataViewMemory0().setInt32(arg0+4*0,!isLikeNone(ret),true);};imports.wbg.__wbindgen_number_new=function(arg0){const ret=arg0;return ret;};imports.wbg.__wbindgen_string_get=function(arg0,arg1){const obj=arg1;const ret=typeof obj==='string'?obj:undefined;var ptr1=isLikeNone(ret)?0:passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);};imports.wbg.__wbindgen_string_new=function(arg0,arg1){const ret=getStringFromWasm0(arg0,arg1);return ret;};imports.wbg.__wbindgen_throw=function(arg0,arg1){throw new Error(getStringFromWasm0(arg0,arg1));};return imports;}function __wbg_init_memory(imports,memory){}function __wbg_finalize_init(instance,module){wasm=instance.exports;__wbg_init.__wbindgen_wasm_module=module;cachedDataViewMemory0=null;cachedUint32ArrayMemory0=null;cachedUint8ArrayMemory0=null;wasm.__wbindgen_start();return wasm;}function initSync(module){if(wasm!==undefined)return wasm;if(typeof module!=='undefined'){if(Object.getPrototypeOf(module)===Object.prototype){({module}=module);}else{console.warn('using deprecated parameters for `initSync()`; pass a single object instead');}}const imports=__wbg_get_imports();__wbg_init_memory(imports);if(!(module instanceof WebAssembly.Module)){module=new WebAssembly.Module(module);}const instance=new WebAssembly.Instance(module,imports);return __wbg_finalize_init(instance,module);}async function __wbg_init(module_or_path){if(wasm!==undefined)return wasm;if(typeof module_or_path!=='undefined'){if(Object.getPrototypeOf(module_or_path)===Object.prototype){({module_or_path}=module_or_path);}else{console.warn('using deprecated parameters for the initialization function; pass a single object instead');}}const imports=__wbg_get_imports();if(typeof module_or_path==='string'||typeof Request==='function'&&module_or_path instanceof Request||typeof URL==='function'&&module_or_path instanceof URL){module_or_path=fetch(module_or_path);}__wbg_init_memory(imports);const{instance,module}=await __wbg_load(await module_or_path,imports);return __wbg_finalize_init(instance,module);}var _default=exports.default=__wbg_init;
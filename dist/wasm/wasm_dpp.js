"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.IdentityUpdateTransition=exports.IdentityTopUpTransition=exports.IdentityPublicKeyWithWitness=exports.IdentityPublicKeyIsReadOnlyError=exports.IdentityPublicKeyIsDisabledError=exports.IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError=exports.IdentityPublicKey=exports.IdentityNotFoundError=exports.IdentityInsufficientBalanceError=exports.IdentityFactory=exports.IdentityFacade=exports.IdentityCreditWithdrawalTransition=exports.IdentityCreditTransferTransition=exports.IdentityCreditTransferToSelfError=exports.IdentityCreateTransition=exports.IdentityContractNonceOutOfBoundsError=exports.IdentityAssetLockTransactionReplayError=exports.IdentityAssetLockTransactionOutputNotFoundError=exports.IdentityAssetLockTransactionOutPointNotEnoughBalanceError=exports.IdentityAssetLockTransactionOutPointAlreadyExistsError=exports.IdentityAssetLockTransactionIsNotFoundError=exports.IdentityAssetLockProofLockedTransactionMismatchError=exports.IdentityAlreadyExistsError=exports.Identity=exports.ExtendedDocument=exports.DuplicatedIdentityPublicKeyStateError=exports.DuplicatedIdentityPublicKeyIdStateError=exports.DuplicatedIdentityPublicKeyIdError=exports.DuplicatedIdentityPublicKeyError=exports.DuplicateUniqueIndexError=exports.DuplicateIndexNameError=exports.DuplicateIndexError=exports.DuplicateDocumentTransitionsWithIndicesError=exports.DuplicateDocumentTransitionsWithIdsError=exports.DocumentsBatchTransition=exports.DocumentTypeUpdateError=exports.DocumentTransitionsAreAbsentError=exports.DocumentTransitions=exports.DocumentTransition=exports.DocumentTimestampsMismatchError=exports.DocumentTimestampsAreEqualError=exports.DocumentTimestampWindowViolationError=exports.DocumentOwnerIdMismatchError=exports.DocumentNotProvidedError=exports.DocumentNotFoundError=exports.DocumentNotForSaleError=exports.DocumentNoRevisionError=exports.DocumentIncorrectPurchasePriceError=exports.DocumentFieldMaxSizeExceededError=exports.DocumentFactory=exports.DocumentFacade=exports.DocumentCreationNotAllowedError=exports.DocumentCreateTransition=exports.DocumentContestNotPaidForError=exports.DocumentContestNotJoinableError=exports.DocumentContestIdentityAlreadyContestantError=exports.DocumentContestDocumentWithSameIdAlreadyPresentError=exports.DocumentContestCurrentlyLockedError=exports.DocumentAlreadyPresentError=exports.DocumentAlreadyExistsError=exports.Document=exports.DisablingKeyIdAlsoBeingAddedInSameTransitionError=exports.DataTriggerInvalidResultError=exports.DataTriggerExecutionError=exports.DataTriggerConditionError=exports.DataTriggerActionInvalidResultError=exports.DataTriggerActionExecutionError=exports.DataTriggerActionConditionError=exports.DataContractUpdateTransition=exports.DataContractUpdatePermissionError=exports.DataContractUniqueIndicesChangedError=exports.DataContractNotPresentNotConsensusError=exports.DataContractNotPresentError=exports.DataContractMaxDepthExceedError=exports.DataContractMaxDepthError=exports.DataContractIsReadonlyError=exports.DataContractInvalidIndexDefinitionUpdateError=exports.DataContractImmutablePropertiesUpdateError=exports.DataContractHaveNewUniqueIndexError=exports.DataContractGenericError=exports.DataContractFactory=exports.DataContractFacade=exports.DataContractError=exports.DataContractEmptySchemaError=exports.DataContractCreateTransition=exports.DataContractConfigUpdateError=exports.DataContractBoundsNotPresentError=exports.DataContractAlreadyPresentError=exports.DataContract=exports.DashPlatformProtocol=exports.ContestedUniqueIndexWithUniqueIndexError=exports.ContestedUniqueIndexOnMutableDocumentTypeError=exports.ContestedDocumentsTemporarilyNotAllowedError=exports.ChainAssetLockProof=exports.BasicECDSAError=exports.BasicBLSError=exports.BalanceIsNotEnoughError=exports.AssetLockTransactionIsNotFoundError=exports.AssetLockProof=exports.AssetLockOutputNotFoundError=void 0;exports.TooManyMasterPublicKeyError=exports.SystemPropertyIndexAlreadyPresentError=exports.StateTransitionTypes=exports.StateTransitionMaxSizeExceededError=exports.StateTransitionFactory=exports.SignatureShouldNotBePresentError=exports.SerializedObjectParsingError=exports.RevisionAbsentError=exports.PublicKeySecurityLevelNotMetError=exports.PublicKeyIsDisabledError=exports.ProtocolVersionParsingError=exports.PrefundedSpecializedBalanceNotFoundError=exports.PrefundedSpecializedBalanceInsufficientError=exports.PlatformValueError=exports.OverflowError=exports.NotImplementedIdentityCreditWithdrawalTransitionPoolingError=exports.NonConsensusErrorWasm=exports.NoTransferKeyForCoreWithdrawalAvailableError=exports.NoDocumentsSuppliedError=exports.MissingTransferKeyError=exports.MissingStateTransitionTypeError=exports.MissingPublicKeyError=exports.MissingPositionsInDocumentTypePropertiesError=exports.MissingMasterPublicKeyError=exports.MissingIdentityPublicKeyIdsError=exports.MissingDocumentTypeError=exports.MissingDocumentTransitionTypeError=exports.MissingDocumentTransitionActionError=exports.MissingDataContractIdError=exports.MismatchOwnerIdsError=exports.Metadata=exports.MaxIdentityPublicKeyLimitReachedError=exports.MaxDocumentsTransitionsExceededError=exports.MasternodeVotedTooManyTimesError=exports.MasternodeVoteTransition=exports.MasternodeVoteAlreadyPresentError=exports.MasternodeNotFoundError=exports.MasternodeIncorrectVotingAddressError=exports.MasternodeIncorrectVoterIdentityIdError=exports.MasterPublicKeyUpdateError=exports.KeyType=exports.KeySecurityLevel=exports.KeyPurpose=exports.JsonSchemaError=exports.JsonSchemaCompilationError=exports.InvalidStateTransitionTypeError=exports.InvalidStateTransitionSignatureError=exports.InvalidStateTransitionError=exports.InvalidSignaturePublicKeySecurityLevelError=exports.InvalidSignaturePublicKeyPurposeError=exports.InvalidJsonSchemaRefError=exports.InvalidInstantAssetLockProofSignatureError=exports.InvalidInstantAssetLockProofError=exports.InvalidInitialRevisionError=exports.InvalidIndexedPropertyConstraintError=exports.InvalidIndexPropertyTypeError=exports.InvalidIdentityUpdateTransitionEmptyError=exports.InvalidIdentityUpdateTransitionDisableKeysError=exports.InvalidIdentityRevisionError=exports.InvalidIdentityPublicKeyTypeError=exports.InvalidIdentityPublicKeySecurityLevelError=exports.InvalidIdentityPublicKeyIdError=exports.InvalidIdentityPublicKeyDataError=exports.InvalidIdentityNonceError=exports.InvalidIdentityKeySignatureError=exports.InvalidIdentityError=exports.InvalidIdentityCreditWithdrawalTransitionOutputScriptError=exports.InvalidIdentityCreditWithdrawalTransitionCoreFeeError=exports.InvalidIdentityCreditWithdrawalTransitionAmountError=exports.InvalidIdentityCreditTransferAmountError=exports.InvalidIdentityAssetLockTransactionOutputError=exports.InvalidIdentityAssetLockTransactionError=exports.InvalidIdentityAssetLockProofChainLockValidationErrorWasm=exports.InvalidIdentifierError=exports.InvalidDocumentTypeRequiredSecurityLevelError=exports.InvalidDocumentTypeNameErrorWasm=exports.InvalidDocumentTypeNameError=exports.InvalidDocumentTypeInDataContractError=exports.InvalidDocumentTypeError=exports.InvalidDocumentTransitionIdError=exports.InvalidDocumentTransitionActionError=exports.InvalidDocumentRevisionError=exports.InvalidDocumentError=exports.InvalidDocumentActionError=exports.InvalidDataContractVersionError=exports.InvalidDataContractIdError=exports.InvalidDataContractError=exports.InvalidCompoundIndexError=exports.InvalidAssetLockTransactionOutputReturnSizeError=exports.InvalidAssetLockProofTransactionHeightError=exports.InvalidAssetLockProofCoreChainHeightError=exports.InvalidActiontError=exports.InvalidActionNameError=exports.InvalidActionError=exports.InstantAssetLockProof=exports.InconsistentCompoundIndexDataError=exports.IncompatibleRe2PatternError=exports.IncompatibleProtocolVersionError=exports.IncompatibleDocumentTypeSchemaError=exports.IncompatibleDataContractSchemaError=void 0;exports.WrongPublicKeyPurposeError=exports.WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError=exports.VotePollNotFoundError=exports.VotePollNotAvailableForVotingError=exports.VersionError=exports.ValueError=exports.ValidationResult=exports.UnsupportedVersionError=exports.UnsupportedProtocolVersionError=exports.UnsupportedFeatureError=exports.UnknownTransferableTypeError=exports.UnknownTradeModeError=exports.UnknownStorageKeyRequirementsError=exports.UnknownSecurityLevelError=exports.UnknownDocumentCreationRestrictionModeError=exports.UnknownAssetLockProofTypeError=exports.UniqueIndicesLimitReachedError=exports.UndefinedIndexPropertyError=exports.TryingToReplaceImmutableDocumentError=exports.TryingToDeleteImmutableDocumentError=void 0;exports.createAssetLockProofInstance=createAssetLockProofInstance;exports.default=void 0;exports.deserializeConsensusError=deserializeConsensusError;exports.generateDocumentId=generateDocumentId;exports.getLatestProtocolVersion=getLatestProtocolVersion;exports.initSync=initSync;var _Identifier=_interopRequireDefault(require("../identifier/Identifier.js"));var _lodash=require("lodash");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}let wasm;const cachedTextDecoder=typeof TextDecoder!=='undefined'?new TextDecoder('utf-8',{ignoreBOM:true,fatal:true}):{decode:()=>{throw Error('TextDecoder not available');}};if(typeof TextDecoder!=='undefined'){cachedTextDecoder.decode();};let cachedUint8Memory0=null;function getUint8Memory0(){if(cachedUint8Memory0===null||cachedUint8Memory0.byteLength===0){cachedUint8Memory0=new Uint8Array(wasm.memory.buffer);}return cachedUint8Memory0;}function getStringFromWasm0(ptr,len){ptr=ptr>>>0;return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr,ptr+len));}const heap=new Array(128).fill(undefined);heap.push(undefined,null,true,false);let heap_next=heap.length;function addHeapObject(obj){if(heap_next===heap.length)heap.push(heap.length+1);const idx=heap_next;heap_next=heap[idx];heap[idx]=obj;return idx;}function getObject(idx){return heap[idx];}function isLikeNone(x){return x===undefined||x===null;}let cachedFloat64Memory0=null;function getFloat64Memory0(){if(cachedFloat64Memory0===null||cachedFloat64Memory0.byteLength===0){cachedFloat64Memory0=new Float64Array(wasm.memory.buffer);}return cachedFloat64Memory0;}let cachedInt32Memory0=null;function getInt32Memory0(){if(cachedInt32Memory0===null||cachedInt32Memory0.byteLength===0){cachedInt32Memory0=new Int32Array(wasm.memory.buffer);}return cachedInt32Memory0;}let WASM_VECTOR_LEN=0;const cachedTextEncoder=typeof TextEncoder!=='undefined'?new TextEncoder('utf-8'):{encode:()=>{throw Error('TextEncoder not available');}};const encodeString=typeof cachedTextEncoder.encodeInto==='function'?function(arg,view){return cachedTextEncoder.encodeInto(arg,view);}:function(arg,view){const buf=cachedTextEncoder.encode(arg);view.set(buf);return{read:arg.length,written:buf.length};};function passStringToWasm0(arg,malloc,realloc){if(realloc===undefined){const buf=cachedTextEncoder.encode(arg);const ptr=malloc(buf.length)>>>0;getUint8Memory0().subarray(ptr,ptr+buf.length).set(buf);WASM_VECTOR_LEN=buf.length;return ptr;}let len=arg.length;let ptr=malloc(len)>>>0;const mem=getUint8Memory0();let offset=0;for(;offset<len;offset++){const code=arg.charCodeAt(offset);if(code>0x7F)break;mem[ptr+offset]=code;}if(offset!==len){if(offset!==0){arg=arg.slice(offset);}ptr=realloc(ptr,len,len=offset+arg.length*3)>>>0;const view=getUint8Memory0().subarray(ptr+offset,ptr+len);const ret=encodeString(arg,view);offset+=ret.written;}WASM_VECTOR_LEN=offset;return ptr;}function dropObject(idx){if(idx<132)return;heap[idx]=heap_next;heap_next=idx;}function takeObject(idx){const ret=getObject(idx);dropObject(idx);return ret;}function debugString(val){// primitive types
const type=typeof val;if(type=='number'||type=='boolean'||val==null){return"".concat(val);}if(type=='string'){return"\"".concat(val,"\"");}if(type=='symbol'){const description=val.description;if(description==null){return'Symbol';}else{return"Symbol(".concat(description,")");}}if(type=='function'){const name=val.name;if(typeof name=='string'&&name.length>0){return"Function(".concat(name,")");}else{return'Function';}}// objects
if(Array.isArray(val)){const length=val.length;let debug='[';if(length>0){debug+=debugString(val[0]);}for(let i=1;i<length;i++){debug+=', '+debugString(val[i]);}debug+=']';return debug;}// Test for built-in
const builtInMatches=/\[object ([^\]]+)\]/.exec(toString.call(val));let className;if(builtInMatches.length>1){className=builtInMatches[1];}else{// Failed to match the standard '[object ClassName]'
return toString.call(val);}if(className=='Object'){// we're a user defined class or Object
// JSON.stringify avoids problems with cycles, and is generally much
// easier than looping through ownProperties of `val`.
try{return'Object('+JSON.stringify(val)+')';}catch(_){return'Object';}}// errors
if(val instanceof Error){return"".concat(val.name,": ").concat(val.message,"\n").concat(val.stack);}// TODO we could test for more things here, like `Set`s and `Map`s.
return className;}let cachedBigInt64Memory0=null;function getBigInt64Memory0(){if(cachedBigInt64Memory0===null||cachedBigInt64Memory0.byteLength===0){cachedBigInt64Memory0=new BigInt64Array(wasm.memory.buffer);}return cachedBigInt64Memory0;}function makeMutClosure(arg0,arg1,dtor,f){const state={a:arg0,b:arg1,cnt:1,dtor};const real=function real(){// First up with a closure we increment the internal reference
// count. This ensures that the Rust closure environment won't
// be deallocated while we're invoking it.
state.cnt++;const a=state.a;state.a=0;try{for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return f(a,state.b,...args);}finally{if(--state.cnt===0){wasm.__wbindgen_export_2.get(state.dtor)(a,state.b);}else{state.a=a;}}};real.original=state;return real;}function __wbg_adapter_56(arg0,arg1,arg2){wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfef537ee1a7c902f(arg0,arg1,addHeapObject(arg2));}let stack_pointer=128;function addBorrowedObject(obj){if(stack_pointer==1)throw new Error('out of js stack');heap[--stack_pointer]=obj;return stack_pointer;}let cachedUint32Memory0=null;function getUint32Memory0(){if(cachedUint32Memory0===null||cachedUint32Memory0.byteLength===0){cachedUint32Memory0=new Uint32Array(wasm.memory.buffer);}return cachedUint32Memory0;}function getArrayJsValueFromWasm0(ptr,len){ptr=ptr>>>0;const mem=getUint32Memory0();const slice=mem.subarray(ptr/4,ptr/4+len);const result=[];for(let i=0;i<slice.length;i++){result.push(takeObject(slice[i]));}return result;}function passArray8ToWasm0(arg,malloc){const ptr=malloc(arg.length*1)>>>0;getUint8Memory0().set(arg,ptr/1);WASM_VECTOR_LEN=arg.length;return ptr;}function _assertClass(instance,klass){if(!(instance instanceof klass)){throw new Error("expected instance of ".concat(klass.name));}return instance.ptr;}function getArrayU8FromWasm0(ptr,len){ptr=ptr>>>0;return getUint8Memory0().subarray(ptr/1,ptr/1+len);}/**
* @returns {number}
*/function getLatestProtocolVersion(){const ret=wasm.getLatestProtocolVersion();return ret>>>0;}function passArrayJsValueToWasm0(array,malloc){const ptr=malloc(array.length*4)>>>0;const mem=getUint32Memory0();for(let i=0;i<array.length;i++){mem[ptr/4+i]=addHeapObject(array[i]);}WASM_VECTOR_LEN=array.length;return ptr;}/**
* @param {any} raw_parameters
* @returns {any}
*/function createAssetLockProofInstance(raw_parameters){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.createAssetLockProofInstance(retptr,addHeapObject(raw_parameters));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}function handleError(f,args){try{return f.apply(this,args);}catch(e){wasm.__wbindgen_exn_store(addHeapObject(e));}}/**
* @param {Uint8Array} bytes
* @returns {any}
*/function deserializeConsensusError(bytes){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(bytes,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.deserializeConsensusError(retptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}function passArray32ToWasm0(arg,malloc){const ptr=malloc(arg.length*4)>>>0;getUint32Memory0().set(arg,ptr/4);WASM_VECTOR_LEN=arg.length;return ptr;}/**
* @param {any} contract_id
* @param {any} owner_id
* @param {string} document_type
* @param {Uint8Array} entropy
* @returns {any}
*/function generateDocumentId(contract_id,owner_id,document_type,entropy){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(entropy,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.generateDocumentId(retptr,addBorrowedObject(contract_id),addBorrowedObject(owner_id),ptr0,len0,ptr1,len1);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}function __wbg_adapter_1626(arg0,arg1,arg2,arg3){wasm.wasm_bindgen__convert__closures__invoke2_mut__h3989d5e62d306492(arg0,arg1,addHeapObject(arg2),addHeapObject(arg3));}/**
*/const StateTransitionTypes=exports.StateTransitionTypes=Object.freeze({DataContractCreate:0,"0":"DataContractCreate",DocumentsBatch:1,"1":"DocumentsBatch",IdentityCreate:2,"2":"IdentityCreate",IdentityTopUp:3,"3":"IdentityTopUp",DataContractUpdate:4,"4":"DataContractUpdate",IdentityUpdate:5,"5":"IdentityUpdate",IdentityCreditWithdrawal:6,"6":"IdentityCreditWithdrawal",IdentityCreditTransfer:7,"7":"IdentityCreditTransfer",MasternodeVote:8,"8":"MasternodeVote"});/**
*/const KeyType=exports.KeyType=Object.freeze({ECDSA_SECP256K1:0,"0":"ECDSA_SECP256K1",BLS12_381:1,"1":"BLS12_381",ECDSA_HASH160:2,"2":"ECDSA_HASH160",BIP13_SCRIPT_HASH:3,"3":"BIP13_SCRIPT_HASH",EDDSA_25519_HASH160:4,"4":"EDDSA_25519_HASH160"});/**
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
*/const KeySecurityLevel=exports.KeySecurityLevel=Object.freeze({MASTER:0,"0":"MASTER",CRITICAL:1,"1":"CRITICAL",HIGH:2,"2":"HIGH",MEDIUM:3,"3":"MEDIUM"});/**
*/class AssetLockOutputNotFoundError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_assetlockoutputnotfounderror_free(ptr);}}/**
*/exports.AssetLockOutputNotFoundError=AssetLockOutputNotFoundError;class AssetLockProof{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AssetLockProof.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_assetlockproof_free(ptr);}/**
    * @param {any} raw_asset_lock_proof
    */constructor(raw_asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.assetlockproof_new(retptr,addHeapObject(raw_asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return AssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */createIdentifier(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.assetlockproof_createIdentifier(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toObject(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.assetlockproof_toObject(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.AssetLockProof=AssetLockProof;class AssetLockTransactionIsNotFoundError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_assetlocktransactionisnotfounderror_free(ptr);}/**
    * @returns {any}
    */getTransactionId(){const ret=wasm.assetlocktransactionisnotfounderror_getTransactionId(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.AssetLockTransactionIsNotFoundError=AssetLockTransactionIsNotFoundError;class BalanceIsNotEnoughError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(BalanceIsNotEnoughError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_balanceisnotenougherror_free(ptr);}/**
    * @param {bigint} balance
    * @param {bigint} fee
    */constructor(balance,fee){const ret=wasm.balanceisnotenougherror_new(balance,fee);return BalanceIsNotEnoughError.__wrap(ret);}/**
    * @returns {number}
    */getBalance(){const ret=wasm.balanceisnotenougherror_getBalance(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getFee(){const ret=wasm.balanceisnotenougherror_getFee(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.balanceisnotenougherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.balanceisnotenougherror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.balanceisnotenougherror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.BalanceIsNotEnoughError=BalanceIsNotEnoughError;class BasicBLSError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(BasicBLSError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_basicblserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.basicblserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.basicblserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.BasicBLSError=BasicBLSError;class BasicECDSAError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(BasicECDSAError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_basicecdsaerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.basicecdsaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.basicecdsaerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.BasicECDSAError=BasicECDSAError;class ChainAssetLockProof{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ChainAssetLockProof.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_chainassetlockproof_free(ptr);}/**
    * @param {any} raw_parameters
    */constructor(raw_parameters){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.chainassetlockproof_new(retptr,addHeapObject(raw_parameters));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ChainAssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getType(){const ret=wasm.chainassetlockproof_getType(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCoreChainLockedHeight(){const ret=wasm.chainassetlockproof_getCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
    * @param {number} value
    */setCoreChainLockedHeight(value){wasm.chainassetlockproof_setCoreChainLockedHeight(this.__wbg_ptr,value);}/**
    * @returns {any}
    */getOutPoint(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.chainassetlockproof_getOutPoint(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} out_point
    */setOutPoint(out_point){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(out_point,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.chainassetlockproof_setOutPoint(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.chainassetlockproof_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toObject(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.chainassetlockproof_toObject(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */createIdentifier(){const ret=wasm.chainassetlockproof_createIdentifier(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.ChainAssetLockProof=ChainAssetLockProof;class ContestedDocumentsTemporarilyNotAllowedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ContestedDocumentsTemporarilyNotAllowedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_contesteddocumentstemporarilynotallowederror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.contesteddocumentstemporarilynotallowederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.contesteddocumentstemporarilynotallowederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.contesteddocumentstemporarilynotallowederror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.ContestedDocumentsTemporarilyNotAllowedError=ContestedDocumentsTemporarilyNotAllowedError;class ContestedUniqueIndexOnMutableDocumentTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ContestedUniqueIndexOnMutableDocumentTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_contesteduniqueindexonmutabledocumenttypeerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.contesteduniqueindexonmutabledocumenttypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.contesteduniqueindexonmutabledocumenttypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.contesteduniqueindexonmutabledocumenttypeerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.ContestedUniqueIndexOnMutableDocumentTypeError=ContestedUniqueIndexOnMutableDocumentTypeError;class ContestedUniqueIndexWithUniqueIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ContestedUniqueIndexWithUniqueIndexError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_contesteduniqueindexwithuniqueindexerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.contesteduniqueindexwithuniqueindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.contesteduniqueindexwithuniqueindexerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.contesteduniqueindexwithuniqueindexerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.ContestedUniqueIndexWithUniqueIndexError=ContestedUniqueIndexWithUniqueIndexError;class DashPlatformProtocol{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DashPlatformProtocol.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_dashplatformprotocol_free(ptr);}/**
    * @param {any} entropy_generator
    * @param {number | undefined} maybe_protocol_version
    */constructor(entropy_generator,maybe_protocol_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.dashplatformprotocol_new(retptr,addHeapObject(entropy_generator),!isLikeNone(maybe_protocol_version),isLikeNone(maybe_protocol_version)?0:maybe_protocol_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DashPlatformProtocol.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {DataContractFacade}
    */get dataContract(){const ret=wasm.dashplatformprotocol_data_contract(this.__wbg_ptr);return DataContractFacade.__wrap(ret);}/**
    * @returns {DocumentFacade}
    */get document(){const ret=wasm.dashplatformprotocol_document(this.__wbg_ptr);return DocumentFacade.__wrap(ret);}/**
    * @returns {IdentityFacade}
    */get identity(){const ret=wasm.dashplatformprotocol_identity(this.__wbg_ptr);return IdentityFacade.__wrap(ret);}/**
    * @returns {StateTransitionFactory}
    */get stateTransition(){const ret=wasm.dashplatformprotocol_state_transition(this.__wbg_ptr);return StateTransitionFactory.__wrap(ret);}/**
    * @returns {number}
    */get protocolVersion(){const ret=wasm.dashplatformprotocol_protocol_version(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.DashPlatformProtocol=DashPlatformProtocol;class DataContract{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContract.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontract_free(ptr);}/**
    * @param {any} raw_parameters
    * @param {object | undefined} options
    */constructor(raw_parameters,options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_new(retptr,addHeapObject(raw_parameters),isLikeNone(options)?0:addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContract.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getId(){const ret=wasm.datacontract_getId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} id
    */setId(id){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_setId(retptr,this.__wbg_ptr,addBorrowedObject(id));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.datacontract_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getVersion(){const ret=wasm.datacontract_getVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @param {number} v
    */setVersion(v){wasm.datacontract_setVersion(this.__wbg_ptr,v);}/**
    */incrementVersion(){wasm.datacontract_incrementVersion(this.__wbg_ptr);}/**
    * @param {string} doc_type
    * @returns {any}
    */getBinaryProperties(doc_type){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(doc_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.datacontract_getBinaryProperties(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} schemas
    * @param {object | undefined} options
    */setDocumentSchemas(schemas,options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_setDocumentSchemas(retptr,this.__wbg_ptr,addHeapObject(schemas),isLikeNone(options)?0:addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} name
    * @param {any} schema
    * @param {object | undefined} options
    */setDocumentSchema(name,schema,options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.datacontract_setDocumentSchema(retptr,this.__wbg_ptr,ptr0,len0,addHeapObject(schema),isLikeNone(options)?0:addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} name
    * @returns {any}
    */getDocumentSchema(name){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.datacontract_getDocumentSchema(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getDocumentSchemas(){const ret=wasm.datacontract_getDocumentSchemas(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getSchemaDefs(){const ret=wasm.datacontract_getSchemaDefs(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {object | undefined} defs
    * @param {object | undefined} options
    */setSchemaDefs(defs,options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_setSchemaDefs(retptr,this.__wbg_ptr,isLikeNone(defs)?0:addHeapObject(defs),isLikeNone(options)?0:addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} doc_type
    * @returns {boolean}
    */hasDocumentType(doc_type){const ptr0=passStringToWasm0(doc_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontract_hasDocumentType(this.__wbg_ptr,ptr0,len0);return ret!==0;}/**
    * @param {bigint} e
    */setIdentityNonce(e){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_setIdentityNonce(retptr,this.__wbg_ptr,e);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {bigint}
    */getIdentityNonce(){const ret=wasm.datacontract_getIdentityNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {Metadata | undefined}
    */getMetadata(){const ret=wasm.datacontract_getMetadata(this.__wbg_ptr);return ret===0?undefined:Metadata.__wrap(ret);}/**
    * @param {any} metadata
    */setMetadata(metadata){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_setMetadata(retptr,this.__wbg_ptr,addHeapObject(metadata));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toObject(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_toObject(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getConfig(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_getConfig(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} config
    */setConfig(config){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_setConfig(retptr,this.__wbg_ptr,addHeapObject(config));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {Uint8Array}
    */hash(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontract_hash(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];var r3=getInt32Memory0()[retptr/4+3];if(r3){throw takeObject(r2);}var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {DataContract}
    */clone(){const ret=wasm.datacontract_clone(this.__wbg_ptr);return DataContract.__wrap(ret);}}/**
*/exports.DataContract=DataContract;class DataContractAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractalreadypresenterror_free(ptr);}/**
    * @param {any} data_contract_id
    */constructor(data_contract_id){const ret=wasm.datacontractalreadypresenterror_new(addHeapObject(data_contract_id));return DataContractAlreadyPresentError.__wrap(ret);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractalreadypresenterror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractalreadypresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractalreadypresenterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataContractAlreadyPresentError=DataContractAlreadyPresentError;class DataContractBoundsNotPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractBoundsNotPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractboundsnotpresenterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractboundsnotpresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractboundsnotpresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractboundsnotpresenterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataContractBoundsNotPresentError=DataContractBoundsNotPresentError;class DataContractConfigUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractConfigUpdateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractconfigupdateerror_free(ptr);}/**
    * @param {any} data_contract_id
    * @param {string} message
    */constructor(data_contract_id,message){const ptr0=passStringToWasm0(message,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractconfigupdateerror_new(addHeapObject(data_contract_id),ptr0,len0);return DataContractConfigUpdateError.__wrap(ret);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractconfigupdateerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractconfigupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractconfigupdateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractConfigUpdateError=DataContractConfigUpdateError;class DataContractCreateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractCreateTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractcreatetransition_free(ptr);}/**
    * @param {any} value
    */constructor(value){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractcreatetransition_new(retptr,addHeapObject(value));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContractCreateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {DataContract}
    */getDataContract(){const ret=wasm.datacontractcreatetransition_getDataContract(this.__wbg_ptr);return DataContract.__wrap(ret);}/**
    * @returns {bigint}
    */getIdentityNonce(){const ret=wasm.datacontractcreatetransition_getIdentityNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.datacontractcreatetransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getType(){const ret=wasm.datacontractcreatetransition_getType(this.__wbg_ptr);return ret>>>0;}/**
    * @param {number} user_fee_increase
    */setUserFeeIncrease(user_fee_increase){wasm.datacontractcreatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
    * @returns {number}
    */getUserFeeIncrease(){const ret=wasm.datacontractcreatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */getSignature(){const ret=wasm.datacontractcreatetransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getSignaturePublicKeyId(){const ret=wasm.datacontractcreatetransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractcreatetransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} buffer
    * @returns {DataContractCreateTransition}
    */static fromBuffer(buffer){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.datacontractcreatetransition_fromBuffer(retptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContractCreateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractcreatetransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {boolean}
    */isDataContractStateTransition(){const ret=wasm.datacontractcreatetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @returns {boolean}
    */isDocumentStateTransition(){const ret=wasm.datacontractcreatetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @returns {boolean}
    */isIdentityStateTransition(){const ret=wasm.datacontractcreatetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @returns {boolean}
    */isVotingStateTransition(){const ret=wasm.datacontractcreatetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @param {boolean | undefined} skip_signature
    * @returns {any}
    */toObject(skip_signature){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractcreatetransition_toObject(retptr,this.__wbg_ptr,isLikeNone(skip_signature)?0xFFFFFF:skip_signature?1:0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.datacontractcreatetransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {any} bls
    * @returns {boolean}
    */verifySignature(identity_public_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);wasm.datacontractcreatetransition_verifySignature(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return r0!==0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataContractCreateTransition=DataContractCreateTransition;class DataContractEmptySchemaError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractemptyschemaerror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractemptyschemaerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractemptyschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractemptyschemaerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractEmptySchemaError=DataContractEmptySchemaError;class DataContractError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontracterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontracterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontracterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractError=DataContractError;class DataContractFacade{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractFacade.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractfacade_free(ptr);}/**
    * Create Data Contract
    * @param {Uint8Array} owner_id
    * @param {bigint} identity_nonce
    * @param {any} documents
    * @param {object | undefined} definitions
    * @returns {DataContract}
    */create(owner_id,identity_nonce,documents,definitions){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(owner_id,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.datacontractfacade_create(retptr,this.__wbg_ptr,ptr0,len0,identity_nonce,addHeapObject(documents),isLikeNone(definitions)?0:addHeapObject(definitions));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContract.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * Create Data Contract from plain object
    * @param {any} js_raw_data_contract
    * @param {object | undefined} options
    * @returns {Promise<DataContract>}
    */createFromObject(js_raw_data_contract,options){const ret=wasm.datacontractfacade_createFromObject(this.__wbg_ptr,addHeapObject(js_raw_data_contract),isLikeNone(options)?0:addHeapObject(options));return takeObject(ret);}/**
    * Create Data Contract from buffer
    * @param {Uint8Array} buffer
    * @param {object | undefined} options
    * @returns {Promise<DataContract>}
    */createFromBuffer(buffer,options){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractfacade_createFromBuffer(this.__wbg_ptr,ptr0,len0,isLikeNone(options)?0:addHeapObject(options));return takeObject(ret);}/**
    * Create Data Contract Create State Transition
    * @param {DataContract} data_contract
    * @returns {DataContractCreateTransition}
    */createDataContractCreateTransition(data_contract){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(data_contract,DataContract);wasm.datacontractfacade_createDataContractCreateTransition(retptr,this.__wbg_ptr,data_contract.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContractCreateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * Create Data Contract Update State Transition
    * @param {DataContract} data_contract
    * @param {bigint} identity_contract_nonce
    * @returns {DataContractUpdateTransition}
    */createDataContractUpdateTransition(data_contract,identity_contract_nonce){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(data_contract,DataContract);wasm.datacontractfacade_createDataContractUpdateTransition(retptr,this.__wbg_ptr,data_contract.__wbg_ptr,identity_contract_nonce);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContractUpdateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataContractFacade=DataContractFacade;class DataContractFactory{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractFactory.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractfactory_free(ptr);}/**
    * @param {number} protocol_version
    */constructor(protocol_version){const ret=wasm.datacontractfactory_new(protocol_version);return DataContractFactory.__wrap(ret);}/**
    * @param {Uint8Array} owner_id
    * @param {bigint} identity_nonce
    * @param {any} documents
    * @param {any} config
    * @returns {DataContract}
    */create(owner_id,identity_nonce,documents,config){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(owner_id,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.datacontractfactory_create(retptr,this.__wbg_ptr,ptr0,len0,identity_nonce,addHeapObject(documents),addHeapObject(config));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContract.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} buffer
    * @param {boolean | undefined} skip_validation
    * @returns {Promise<DataContract>}
    */createFromBuffer(buffer,skip_validation){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.datacontractfactory_createFromBuffer(this.__wbg_ptr,ptr0,len0,isLikeNone(skip_validation)?0xFFFFFF:skip_validation?1:0);return takeObject(ret);}/**
    * @param {DataContract} data_contract
    * @returns {Promise<DataContractCreateTransition>}
    */createDataContractCreateTransition(data_contract){_assertClass(data_contract,DataContract);const ret=wasm.datacontractfactory_createDataContractCreateTransition(this.__wbg_ptr,data_contract.__wbg_ptr);return takeObject(ret);}}/**
*/exports.DataContractFactory=DataContractFactory;class DataContractGenericError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractGenericError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractgenericerror_free(ptr);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractgenericerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractGenericError=DataContractGenericError;class DataContractHaveNewUniqueIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractHaveNewUniqueIndexError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontracthavenewuniqueindexerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontracthavenewuniqueindexerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontracthavenewuniqueindexerror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontracthavenewuniqueindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontracthavenewuniqueindexerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractHaveNewUniqueIndexError=DataContractHaveNewUniqueIndexError;class DataContractImmutablePropertiesUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractImmutablePropertiesUpdateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractimmutablepropertiesupdateerror_free(ptr);}/**
    * @returns {string}
    */getOperation(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractimmutablepropertiesupdateerror_getOperation(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getFieldPath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractimmutablepropertiesupdateerror_getFieldPath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractimmutablepropertiesupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractimmutablepropertiesupdateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractImmutablePropertiesUpdateError=DataContractImmutablePropertiesUpdateError;class DataContractInvalidIndexDefinitionUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractInvalidIndexDefinitionUpdateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractinvalidindexdefinitionupdateerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractinvalidindexdefinitionupdateerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractinvalidindexdefinitionupdateerror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractinvalidindexdefinitionupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractinvalidindexdefinitionupdateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractInvalidIndexDefinitionUpdateError=DataContractInvalidIndexDefinitionUpdateError;class DataContractIsReadonlyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractIsReadonlyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractisreadonlyerror_free(ptr);}/**
    * @param {any} data_contract_id
    */constructor(data_contract_id){const ret=wasm.datacontractisreadonlyerror_new(addHeapObject(data_contract_id));return DataContractIsReadonlyError.__wrap(ret);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractisreadonlyerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractisreadonlyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractisreadonlyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}exports.DataContractIsReadonlyError=DataContractIsReadonlyError;class DataContractMaxDepthError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractmaxdeptherror_free(ptr);}/**
    * @returns {number}
    */getMaxDepth(){const ret=wasm.datacontractmaxdeptherror_getMaxDepth(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractmaxdeptherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractmaxdeptherror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractMaxDepthError=DataContractMaxDepthError;class DataContractMaxDepthExceedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractMaxDepthExceedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractmaxdepthexceederror_free(ptr);}}/**
*/exports.DataContractMaxDepthExceedError=DataContractMaxDepthExceedError;class DataContractNotPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractNotPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractnotpresenterror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractnotpresenterror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractnotpresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractnotpresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractNotPresentError=DataContractNotPresentError;class DataContractNotPresentNotConsensusError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractNotPresentNotConsensusError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractnotpresentnotconsensuserror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractnotpresentnotconsensuserror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.DataContractNotPresentNotConsensusError=DataContractNotPresentNotConsensusError;class DataContractUniqueIndicesChangedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractUniqueIndicesChangedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractuniqueindiceschangederror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractuniqueindiceschangederror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractuniqueindiceschangederror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractuniqueindiceschangederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractuniqueindiceschangederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractUniqueIndicesChangedError=DataContractUniqueIndicesChangedError;class DataContractUpdatePermissionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractUpdatePermissionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractupdatepermissionerror_free(ptr);}/**
    * @param {any} data_contract_id
    * @param {any} identity_id
    */constructor(data_contract_id,identity_id){const ret=wasm.datacontractupdatepermissionerror_new(addHeapObject(data_contract_id),addHeapObject(identity_id));return DataContractUpdatePermissionError.__wrap(ret);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datacontractupdatepermissionerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.datacontractupdatepermissionerror_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datacontractupdatepermissionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractupdatepermissionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DataContractUpdatePermissionError=DataContractUpdatePermissionError;class DataContractUpdateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataContractUpdateTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datacontractupdatetransition_free(ptr);}/**
    * @param {any} raw_parameters
    */constructor(raw_parameters){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractupdatetransition_new(retptr,addHeapObject(raw_parameters));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContractUpdateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {DataContract}
    */getDataContract(){const ret=wasm.datacontractupdatetransition_getDataContract(this.__wbg_ptr);return DataContract.__wrap(ret);}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.datacontractupdatetransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {bigint}
    */getIdentityContractNonce(){const ret=wasm.datacontractupdatetransition_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {number}
    */getType(){const ret=wasm.datacontractupdatetransition_getType(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getUserFeeIncrease(){const ret=wasm.datacontractupdatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
    * @param {number} user_fee_increase
    */setUserFeeIncrease(user_fee_increase){wasm.datacontractupdatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
    * @returns {any}
    */getSignature(){const ret=wasm.datacontractupdatetransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getSignaturePublicKeyId(){const ret=wasm.datacontractupdatetransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractupdatetransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} buffer
    * @returns {DataContractUpdateTransition}
    */static fromBuffer(buffer){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.datacontractupdatetransition_fromBuffer(retptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DataContractUpdateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractupdatetransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {boolean}
    */isDataContractStateTransition(){const ret=wasm.datacontractupdatetransition_isDataContractStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @returns {boolean}
    */isDocumentStateTransition(){const ret=wasm.datacontractupdatetransition_isDocumentStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @returns {boolean}
    */isIdentityStateTransition(){const ret=wasm.datacontractupdatetransition_isIdentityStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @returns {boolean}
    */isVotingStateTransition(){const ret=wasm.datacontractupdatetransition_isVotingStateTransition(this.__wbg_ptr);return ret!==0;}/**
    * @param {boolean | undefined} skip_signature
    * @returns {any}
    */toObject(skip_signature){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datacontractupdatetransition_toObject(retptr,this.__wbg_ptr,isLikeNone(skip_signature)?0xFFFFFF:skip_signature?1:0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.datacontractupdatetransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {any} bls
    * @returns {boolean}
    */verifySignature(identity_public_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);wasm.datacontractupdatetransition_verifySignature(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return r0!==0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataContractUpdateTransition=DataContractUpdateTransition;class DataTriggerActionConditionError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggeractionconditionerror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datatriggeractionconditionerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentTransitionId(){const ret=wasm.datatriggeractionconditionerror_getDocumentTransitionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggeractionconditionerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any | undefined}
    */getOwnerId(){const ret=wasm.datatriggeractionconditionerror_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datatriggeractionconditionerror_getCode(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.DataTriggerActionConditionError=DataTriggerActionConditionError;class DataTriggerActionExecutionError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggeractionexecutionerror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datatriggeractionexecutionerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getExecutionError(){const ret=wasm.datatriggeractionexecutionerror_getExecutionError(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentTransitionId(){const ret=wasm.datatriggeractionexecutionerror_getDocumentTransitionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggeractionexecutionerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any | undefined}
    */getOwnerId(){const ret=wasm.datatriggeractionexecutionerror_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datatriggeractionexecutionerror_getCode(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.DataTriggerActionExecutionError=DataTriggerActionExecutionError;class DataTriggerActionInvalidResultError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggeractioninvalidresulterror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datatriggeractioninvalidresulterror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentTransitionId(){const ret=wasm.datatriggeractioninvalidresulterror_getDocumentTransitionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any | undefined}
    */getOwnerId(){const ret=wasm.datatriggeractioninvalidresulterror_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datatriggeractioninvalidresulterror_getCode(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.DataTriggerActionInvalidResultError=DataTriggerActionInvalidResultError;class DataTriggerConditionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataTriggerConditionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggerconditionerror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datatriggerconditionerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.datatriggerconditionerror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerconditionerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.datatriggerconditionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerconditionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerconditionerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataTriggerConditionError=DataTriggerConditionError;class DataTriggerExecutionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataTriggerExecutionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggerexecutionerror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datatriggerexecutionerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.datatriggerexecutionerror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerexecutionerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.datatriggerexecutionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerexecutionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerexecutionerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataTriggerExecutionError=DataTriggerExecutionError;class DataTriggerInvalidResultError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DataTriggerInvalidResultError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_datatriggerinvalidresulterror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.datatriggerinvalidresulterror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.datatriggerinvalidresulterror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.datatriggerinvalidresulterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerinvalidresulterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.datatriggerinvalidresulterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DataTriggerInvalidResultError=DataTriggerInvalidResultError;class DisablingKeyIdAlsoBeingAddedInSameTransitionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DisablingKeyIdAlsoBeingAddedInSameTransitionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_disablingkeyidalsobeingaddedinsametransitionerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.disablingkeyidalsobeingaddedinsametransitionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.disablingkeyidalsobeingaddedinsametransitionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.disablingkeyidalsobeingaddedinsametransitionerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DisablingKeyIdAlsoBeingAddedInSameTransitionError=DisablingKeyIdAlsoBeingAddedInSameTransitionError;class Document{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(Document.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_document_free(ptr);}/**
    * @param {any} js_raw_document
    * @param {DataContract} js_data_contract
    * @param {any} js_document_type_name
    */constructor(js_raw_document,js_data_contract,js_document_type_name){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(js_data_contract,DataContract);wasm.document_new(retptr,addHeapObject(js_raw_document),js_data_contract.__wbg_ptr,addHeapObject(js_document_type_name));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Document.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getId(){const ret=wasm.document_getId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} js_id
    */setId(js_id){wasm.document_setId(this.__wbg_ptr,addHeapObject(js_id));}/**
    * @param {any} owner_id
    */setOwnerId(owner_id){wasm.document_setOwnerId(this.__wbg_ptr,addHeapObject(owner_id));}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.document_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {number | undefined} revision
    */setRevision(revision){wasm.document_setRevision(this.__wbg_ptr,!isLikeNone(revision),isLikeNone(revision)?0:revision);}/**
    * @returns {number | undefined}
    */getRevision(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.document_getRevision(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];return r0===0?undefined:r1>>>0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} d
    */setData(d){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.document_setData(retptr,this.__wbg_ptr,addHeapObject(d));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getData(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.document_getData(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} path
    * @param {any} js_value_to_set
    */set(path,js_value_to_set){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.document_set(retptr,this.__wbg_ptr,ptr0,len0,addHeapObject(js_value_to_set));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} path
    * @returns {any}
    */get(path){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.document_get(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Date | undefined} created_at
    */setCreatedAt(created_at){wasm.document_setCreatedAt(this.__wbg_ptr,isLikeNone(created_at)?0:addHeapObject(created_at));}/**
    * @param {Date | undefined} updated_at
    */setUpdatedAt(updated_at){wasm.document_setUpdatedAt(this.__wbg_ptr,isLikeNone(updated_at)?0:addHeapObject(updated_at));}/**
    * @returns {Date | undefined}
    */getCreatedAt(){const ret=wasm.document_getCreatedAt(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Date | undefined}
    */getUpdatedAt(){const ret=wasm.document_getUpdatedAt(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {DataContract} data_contract
    * @param {string} document_type_name
    * @returns {any}
    */hash(data_contract,document_type_name){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(data_contract,DataContract);var ptr0=data_contract.__destroy_into_raw();const ptr1=passStringToWasm0(document_type_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;wasm.document_hash(retptr,this.__wbg_ptr,ptr0,ptr1,len1);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {Document}
    */clone(){const ret=wasm.document_clone(this.__wbg_ptr);return Document.__wrap(ret);}}/**
*/exports.Document=Document;class DocumentAlreadyExistsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentAlreadyExistsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentalreadyexistserror_free(ptr);}}/**
*/exports.DocumentAlreadyExistsError=DocumentAlreadyExistsError;class DocumentAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentalreadypresenterror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.documentalreadypresenterror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentalreadypresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentAlreadyPresentError=DocumentAlreadyPresentError;class DocumentContestCurrentlyLockedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestCurrentlyLockedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestcurrentlylockederror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentcontestcurrentlylockederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestcurrentlylockederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestcurrentlylockederror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentContestCurrentlyLockedError=DocumentContestCurrentlyLockedError;class DocumentContestDocumentWithSameIdAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestDocumentWithSameIdAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestdocumentwithsameidalreadypresenterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentcontestdocumentwithsameidalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestdocumentwithsameidalreadypresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestdocumentwithsameidalreadypresenterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentContestDocumentWithSameIdAlreadyPresentError=DocumentContestDocumentWithSameIdAlreadyPresentError;class DocumentContestIdentityAlreadyContestantError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestIdentityAlreadyContestantError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestidentityalreadycontestanterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentcontestidentityalreadycontestanterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestidentityalreadycontestanterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestidentityalreadycontestanterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentContestIdentityAlreadyContestantError=DocumentContestIdentityAlreadyContestantError;class DocumentContestNotJoinableError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestNotJoinableError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestnotjoinableerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentcontestnotjoinableerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestnotjoinableerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestnotjoinableerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentContestNotJoinableError=DocumentContestNotJoinableError;class DocumentContestNotPaidForError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentContestNotPaidForError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcontestnotpaidforerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentcontestnotpaidforerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestnotpaidforerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcontestnotpaidforerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentContestNotPaidForError=DocumentContestNotPaidForError;class DocumentCreateTransition{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcreatetransition_free(ptr);}/**
    * @returns {bigint}
    */getRevision(){const ret=wasm.documentcreatetransition_getRevision(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {number}
    */static get INITIAL_REVISION(){const ret=wasm.documentcreatetransition_INITIAL_REVISION();return ret>>>0;}/**
    * @returns {Uint8Array}
    */getEntropy(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcreatetransition_getEntropy(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {bigint}
    */getIdentityContractNonce(){const ret=wasm.documentcreatetransition_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @param {bigint} identity_contract_nonce
    */setIdentityContractNonce(identity_contract_nonce){wasm.documentcreatetransition_setIdentityContractNonce(this.__wbg_ptr,identity_contract_nonce);}/**
    * @returns {any}
    */getPrefundedVotingBalance(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcreatetransition_getPrefundedVotingBalance(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentCreateTransition=DocumentCreateTransition;class DocumentCreationNotAllowedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentCreationNotAllowedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentcreationnotallowederror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentcreationnotallowederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcreationnotallowederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentcreationnotallowederror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentCreationNotAllowedError=DocumentCreationNotAllowedError;class DocumentFacade{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentFacade.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentfacade_free(ptr);}/**
    * @param {DocumentFactory} document_factory
    */constructor(document_factory){_assertClass(document_factory,DocumentFactory);var ptr0=document_factory.__destroy_into_raw();const ret=wasm.documentfacade_new(ptr0);return DocumentFacade.__wrap(ret);}/**
    * @param {DataContract} data_contract
    * @param {any} js_owner_id
    * @param {string} document_type
    * @param {any} data
    * @returns {ExtendedDocument}
    */create(data_contract,js_owner_id,document_type,data){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(data_contract,DataContract);const ptr0=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.documentfacade_create(retptr,this.__wbg_ptr,data_contract.__wbg_ptr,addBorrowedObject(js_owner_id),ptr0,len0,addBorrowedObject(data));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ExtendedDocument.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}/**
    * @param {Uint8Array} buffer
    * @param {string} document_type
    * @param {DataContract} data_contract
    * @returns {ExtendedDocument}
    */createExtendedDocumentFromDocumentBuffer(buffer,document_type,data_contract){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;_assertClass(data_contract,DataContract);wasm.documentfacade_createExtendedDocumentFromDocumentBuffer(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1,data_contract.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ExtendedDocument.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * Creates Documents State Transition
    * @param {any} documents
    * @param {object} nonce_counter_value
    * @returns {DocumentsBatchTransition}
    */createStateTransition(documents,nonce_counter_value){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentfacade_createStateTransition(retptr,this.__wbg_ptr,addBorrowedObject(documents),addBorrowedObject(nonce_counter_value));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DocumentsBatchTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}}/**
*/exports.DocumentFacade=DocumentFacade;class DocumentFactory{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentFactory.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentfactory_free(ptr);}/**
    * @param {number} protocol_version
    * @param {any | undefined} external_entropy_generator_arg
    */constructor(protocol_version,external_entropy_generator_arg){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentfactory_new(retptr,protocol_version,isLikeNone(external_entropy_generator_arg)?0:addHeapObject(external_entropy_generator_arg));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DocumentFactory.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {DataContract} data_contract
    * @param {any} js_owner_id
    * @param {string} document_type
    * @param {any} data
    * @returns {ExtendedDocument}
    */create(data_contract,js_owner_id,document_type,data){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(data_contract,DataContract);const ptr0=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.documentfactory_create(retptr,this.__wbg_ptr,data_contract.__wbg_ptr,addBorrowedObject(js_owner_id),ptr0,len0,addBorrowedObject(data));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ExtendedDocument.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}/**
    * @param {any} documents
    * @param {object} nonce_counter_value
    * @returns {DocumentsBatchTransition}
    */createStateTransition(documents,nonce_counter_value){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentfactory_createStateTransition(retptr,this.__wbg_ptr,addBorrowedObject(documents),addBorrowedObject(nonce_counter_value));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return DocumentsBatchTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}/**
    * @param {Uint8Array} buffer
    * @param {string} document_type
    * @param {DataContract} data_contract
    * @returns {ExtendedDocument}
    */createExtendedDocumentFromDocumentBuffer(buffer,document_type,data_contract){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(document_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;_assertClass(data_contract,DataContract);wasm.documentfactory_createExtendedDocumentFromDocumentBuffer(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1,data_contract.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ExtendedDocument.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentFactory=DocumentFactory;class DocumentFieldMaxSizeExceededError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentFieldMaxSizeExceededError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentfieldmaxsizeexceedederror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentfieldmaxsizeexceedederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentfieldmaxsizeexceedederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentfieldmaxsizeexceedederror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentFieldMaxSizeExceededError=DocumentFieldMaxSizeExceededError;class DocumentIncorrectPurchasePriceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentIncorrectPurchasePriceError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentincorrectpurchasepriceerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentincorrectpurchasepriceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentincorrectpurchasepriceerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentincorrectpurchasepriceerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentIncorrectPurchasePriceError=DocumentIncorrectPurchasePriceError;class DocumentNoRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNoRevisionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnorevisionerror_free(ptr);}/**
    * @param {Document} document
    */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.documentnorevisionerror_new(ptr0);return DocumentNoRevisionError.__wrap(ret);}/**
    * @returns {Document}
    */getDocument(){const ret=wasm.documentnorevisionerror_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}}/**
*/exports.DocumentNoRevisionError=DocumentNoRevisionError;class DocumentNotForSaleError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNotForSaleError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnotforsaleerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentnotforsaleerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentnotforsaleerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentnotforsaleerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentNotForSaleError=DocumentNotForSaleError;class DocumentNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnotfounderror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.documentnotfounderror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentnotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentNotFoundError=DocumentNotFoundError;class DocumentNotProvidedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentNotProvidedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentnotprovidederror_free(ptr);}}/**
*/exports.DocumentNotProvidedError=DocumentNotProvidedError;class DocumentOwnerIdMismatchError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentOwnerIdMismatchError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentowneridmismatcherror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.documentowneridmismatcherror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getDocumentOwnerId(){const ret=wasm.documentowneridmismatcherror_getDocumentOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getExistingDocumentOwnerId(){const ret=wasm.documentowneridmismatcherror_getExistingDocumentOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documentowneridmismatcherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentowneridmismatcherror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentOwnerIdMismatchError=DocumentOwnerIdMismatchError;class DocumentTimestampWindowViolationError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTimestampWindowViolationError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttimestampwindowviolationerror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.documenttimestampwindowviolationerror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getTimestampName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttimestampwindowviolationerror_getTimestampName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {Date}
    */getTimestamp(){const ret=wasm.documenttimestampwindowviolationerror_getTimestamp(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Date}
    */getTimeWindowStart(){const ret=wasm.documenttimestampwindowviolationerror_getTimeWindowStart(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Date}
    */getTimeWindowEnd(){const ret=wasm.documenttimestampwindowviolationerror_getTimeWindowEnd(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documenttimestampwindowviolationerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttimestampwindowviolationerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentTimestampWindowViolationError=DocumentTimestampWindowViolationError;class DocumentTimestampsAreEqualError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTimestampsAreEqualError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttimestampsareequalerror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.documenttimestampsareequalerror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documenttimestampsareequalerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttimestampsareequalerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentTimestampsAreEqualError=DocumentTimestampsAreEqualError;class DocumentTimestampsMismatchError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTimestampsMismatchError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttimestampsmismatcherror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.documenttimestampsmismatcherror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documenttimestampsmismatcherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttimestampsmismatcherror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentTimestampsMismatchError=DocumentTimestampsMismatchError;class DocumentTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttransition_free(ptr);}/**
    * @returns {any}
    */getId(){const ret=wasm.documenttransition_getId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttransition_getType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */getData(){const ret=wasm.documenttransition_getData(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getAction(){const ret=wasm.documenttransition_getAction(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.documenttransition_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} js_data_contract_id
    */setDataContractId(js_data_contract_id){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttransition_setDataContractId(retptr,this.__wbg_ptr,addBorrowedObject(js_data_contract_id));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @returns {any}
    */getIdentityContractNonce(){const ret=wasm.documenttransition_getIdentityContractNonce(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getRevision(){const ret=wasm.documenttransition_getRevision(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Uint8Array | undefined}
    */getEntropy(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttransition_getEntropy(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];let v1;if(r0!==0){v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);}return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {bigint | undefined}
    */get_price(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttransition_get_price(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r2=getBigInt64Memory0()[retptr/8+1];return r0===0?undefined:BigInt.asUintN(64,r2);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any | undefined}
    */getReceiverId(){const ret=wasm.documenttransition_getReceiverId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {number} revision
    */setRevision(revision){wasm.documenttransition_setRevision(this.__wbg_ptr,revision);}/**
    * @returns {boolean}
    */hasPrefundedBalance(){const ret=wasm.documenttransition_hasPrefundedBalance(this.__wbg_ptr);return ret!==0;}/**
    * @returns {any}
    */getPrefundedVotingBalance(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttransition_getPrefundedVotingBalance(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentTransition=DocumentTransition;class DocumentTransitions{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTransitions.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttransitions_free(ptr);}/**
    */constructor(){const ret=wasm.documenttransitions_new();return DocumentTransitions.__wrap(ret);}/**
    * @param {ExtendedDocument} transition
    */addTransitionCreate(transition){_assertClass(transition,ExtendedDocument);var ptr0=transition.__destroy_into_raw();wasm.documenttransitions_addTransitionCreate(this.__wbg_ptr,ptr0);}/**
    * @param {ExtendedDocument} transition
    */addTransitionReplace(transition){_assertClass(transition,ExtendedDocument);var ptr0=transition.__destroy_into_raw();wasm.documenttransitions_addTransitionReplace(this.__wbg_ptr,ptr0);}/**
    * @param {ExtendedDocument} transition
    */addTransitionDelete(transition){_assertClass(transition,ExtendedDocument);var ptr0=transition.__destroy_into_raw();wasm.documenttransitions_addTransitionDelete(this.__wbg_ptr,ptr0);}}/**
*/exports.DocumentTransitions=DocumentTransitions;class DocumentTransitionsAreAbsentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTransitionsAreAbsentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttransitionsareabsenterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documenttransitionsareabsenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttransitionsareabsenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DocumentTransitionsAreAbsentError=DocumentTransitionsAreAbsentError;class DocumentTypeUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentTypeUpdateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documenttypeupdateerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.documenttypeupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttypeupdateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documenttypeupdateerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentTypeUpdateError=DocumentTypeUpdateError;class DocumentsBatchTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DocumentsBatchTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_documentsbatchtransition_free(ptr);}/**
    * @returns {number}
    */getType(){const ret=wasm.documentsbatchtransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.documentsbatchtransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getUserFeeIncrease(){const ret=wasm.documentsbatchtransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
    * @param {number} user_fee_increase
    */setUserFeeIncrease(user_fee_increase){wasm.documentsbatchtransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
    * @returns {Array<any>}
    */getTransitions(){const ret=wasm.documentsbatchtransition_getTransitions(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Array<any>} js_transitions
    */setTransitions(js_transitions){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentsbatchtransition_setTransitions(retptr,this.__wbg_ptr,addHeapObject(js_transitions));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {number} nonce
    */setIdentityContractNonce(nonce){wasm.documentsbatchtransition_setIdentityContractNonce(this.__wbg_ptr,nonce);}/**
    * @returns {Array<any>}
    */getModifiedDataIds(){const ret=wasm.documentsbatchtransition_getModifiedDataIds(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getSignaturePublicKeyId(){const ret=wasm.documentsbatchtransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.documentsbatchtransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {any} bls
    * @returns {boolean}
    */verifySignature(identity_public_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);wasm.documentsbatchtransition_verifySignature(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return r0!==0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {number} key_id
    */setSignaturePublicKeyId(key_id){wasm.documentsbatchtransition_setSignaturePublicKeyId(this.__wbg_ptr,key_id);}/**
    * @param {number} purpose
    * @returns {Array<any>}
    */getKeySecurityLevelRequirement(purpose){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentsbatchtransition_getKeySecurityLevelRequirement(retptr,this.__wbg_ptr,purpose);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {Uint8Array}
    */getSignature(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentsbatchtransition_getSignature(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.documentsbatchtransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.DocumentsBatchTransition=DocumentsBatchTransition;class DuplicateDocumentTransitionsWithIdsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateDocumentTransitionsWithIdsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedocumenttransitionswithidserror_free(ptr);}/**
    * @returns {Array<any>}
    */getDocumentTransitionReferences(){const ret=wasm.duplicatedocumenttransitionswithidserror_getDocumentTransitionReferences(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicatedocumenttransitionswithidserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicatedocumenttransitionswithidserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicateDocumentTransitionsWithIdsError=DuplicateDocumentTransitionsWithIdsError;class DuplicateDocumentTransitionsWithIndicesError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateDocumentTransitionsWithIndicesError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedocumenttransitionswithindiceserror_free(ptr);}/**
    * @returns {Array<any>}
    */getDocumentTransitionReferences(){const ret=wasm.duplicatedocumenttransitionswithindiceserror_getDocumentTransitionReferences(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicatedocumenttransitionswithindiceserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicatedocumenttransitionswithindiceserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicateDocumentTransitionsWithIndicesError=DuplicateDocumentTransitionsWithIndicesError;class DuplicateIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateIndexError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicateindexerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateindexerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateindexerror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicateindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateindexerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicateIndexError=DuplicateIndexError;class DuplicateIndexNameError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateIndexNameError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicateindexnameerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateindexnameerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getDuplicateIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateindexnameerror_getDuplicateIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicateindexnameerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateindexnameerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicateIndexNameError=DuplicateIndexNameError;class DuplicateUniqueIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicateUniqueIndexError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicateuniqueindexerror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.duplicateuniqueindexerror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Array<any>}
    */getDuplicatingProperties(){const ret=wasm.duplicateuniqueindexerror_getDuplicatingProperties(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicateuniqueindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicateuniqueindexerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicateUniqueIndexError=DuplicateUniqueIndexError;class DuplicatedIdentityPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeyerror_free(ptr);}/**
    * @returns {Array<any>}
    */getDuplicatedPublicKeysIds(){const ret=wasm.duplicatedidentitypublickeyerror_getDuplicatedPublicKeysIds(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicatedidentitypublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicatedidentitypublickeyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicatedIdentityPublicKeyError=DuplicatedIdentityPublicKeyError;class DuplicatedIdentityPublicKeyIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyIdError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeyiderror_free(ptr);}/**
    * @returns {Array<any>}
    */getDuplicatedIds(){const ret=wasm.duplicatedidentitypublickeyiderror_getDuplicatedIds(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicatedidentitypublickeyiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicatedidentitypublickeyiderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicatedIdentityPublicKeyIdError=DuplicatedIdentityPublicKeyIdError;class DuplicatedIdentityPublicKeyIdStateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyIdStateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeyidstateerror_free(ptr);}/**
    * @returns {Array<any>}
    */getDuplicatedIds(){const ret=wasm.duplicatedidentitypublickeyidstateerror_getDuplicatedIds(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicatedidentitypublickeyidstateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicatedidentitypublickeyidstateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicatedIdentityPublicKeyIdStateError=DuplicatedIdentityPublicKeyIdStateError;class DuplicatedIdentityPublicKeyStateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(DuplicatedIdentityPublicKeyStateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_duplicatedidentitypublickeystateerror_free(ptr);}/**
    * @returns {Array<any>}
    */getDuplicatedPublicKeysIds(){const ret=wasm.duplicatedidentitypublickeystateerror_getDuplicatedPublicKeysIds(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.duplicatedidentitypublickeystateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.duplicatedidentitypublickeystateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.DuplicatedIdentityPublicKeyStateError=DuplicatedIdentityPublicKeyStateError;class ExtendedDocument{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ExtendedDocument.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_extendeddocument_free(ptr);}/**
    * @param {any} js_raw_document
    * @param {DataContract} js_data_contract
    */constructor(js_raw_document,js_data_contract){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(js_data_contract,DataContract);wasm.extendeddocument_new(retptr,addHeapObject(js_raw_document),js_data_contract.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ExtendedDocument.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getFeatureVersion(){const ret=wasm.extendeddocument_getFeatureVersion(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */getId(){const ret=wasm.extendeddocument_getId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} js_id
    */setId(js_id){wasm.extendeddocument_setId(this.__wbg_ptr,addHeapObject(js_id));}/**
    * @returns {string}
    */getType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_getType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @param {string} document_type_name
    */setType(document_type_name){const ptr0=passStringToWasm0(document_type_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.extendeddocument_setType(this.__wbg_ptr,ptr0,len0);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.extendeddocument_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {DataContract}
    */getDataContract(){const ret=wasm.extendeddocument_getDataContract(this.__wbg_ptr);return DataContract.__wrap(ret);}/**
    * @param {any} js_data_contract_id
    */setDataContractId(js_data_contract_id){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_setDataContractId(retptr,this.__wbg_ptr,addBorrowedObject(js_data_contract_id));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @returns {Document}
    */getDocument(){const ret=wasm.extendeddocument_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}/**
    * @param {any} owner_id
    */setOwnerId(owner_id){wasm.extendeddocument_setOwnerId(this.__wbg_ptr,addHeapObject(owner_id));}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.extendeddocument_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {number | undefined} rev
    */setRevision(rev){wasm.extendeddocument_setRevision(this.__wbg_ptr,!isLikeNone(rev),isLikeNone(rev)?0:rev);}/**
    * @returns {number | undefined}
    */getRevision(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_getRevision(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];return r0===0?undefined:r1>>>0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} e
    */setEntropy(e){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(e,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.extendeddocument_setEntropy(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getEntropy(){const ret=wasm.extendeddocument_getEntropy(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} d
    */setData(d){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_setData(retptr,this.__wbg_ptr,addHeapObject(d));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getData(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_getData(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} path
    * @param {any} js_value_to_set
    */set(path,js_value_to_set){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.extendeddocument_set(retptr,this.__wbg_ptr,ptr0,len0,addHeapObject(js_value_to_set));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {string} path
    * @returns {any}
    */get(path){const ptr0=passStringToWasm0(path,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.extendeddocument_get(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
    * @param {Date | undefined} ts
    */setCreatedAt(ts){wasm.extendeddocument_setCreatedAt(this.__wbg_ptr,isLikeNone(ts)?0:addHeapObject(ts));}/**
    * @param {Date | undefined} ts
    */setUpdatedAt(ts){wasm.extendeddocument_setUpdatedAt(this.__wbg_ptr,isLikeNone(ts)?0:addHeapObject(ts));}/**
    * @returns {Date | undefined}
    */getCreatedAt(){const ret=wasm.extendeddocument_getCreatedAt(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Date | undefined}
    */getUpdatedAt(){const ret=wasm.extendeddocument_getUpdatedAt(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Metadata | undefined}
    */getMetadata(){const ret=wasm.extendeddocument_getMetadata(this.__wbg_ptr);return ret===0?undefined:Metadata.__wrap(ret);}/**
    * @param {any} metadata
    */setMetadata(metadata){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_setMetadata(retptr,this.__wbg_ptr,addHeapObject(metadata));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} options
    * @returns {any}
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_toObject(retptr,this.__wbg_ptr,addBorrowedObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */hash(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_hash(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {ExtendedDocument}
    */clone(){const ret=wasm.extendeddocument_clone(this.__wbg_ptr);return ExtendedDocument.__wrap(ret);}/**
    * @param {number} platform_version
    * @returns {ValidationResult}
    */validate(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.extendeddocument_validate(retptr,this.__wbg_ptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ValidationResult.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.ExtendedDocument=ExtendedDocument;class Identity{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(Identity.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identity_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Identity.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getId(){const ret=wasm.identity_getId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} id
    */setId(id){wasm.identity_setId(this.__wbg_ptr,addHeapObject(id));}/**
    * @param {Array<any>} public_keys
    * @returns {number}
    */setPublicKeys(public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_setPublicKeys(retptr,this.__wbg_ptr,addHeapObject(public_keys));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return r0>>>0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getPublicKeys(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_getPublicKeys(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {number} key_id
    * @returns {IdentityPublicKey | undefined}
    */getPublicKeyById(key_id){const ret=wasm.identity_getPublicKeyById(this.__wbg_ptr,key_id);return ret===0?undefined:IdentityPublicKey.__wrap(ret);}/**
    * @returns {number}
    */get balance(){const ret=wasm.identity_balance(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getBalance(){const ret=wasm.identity_getBalance(this.__wbg_ptr);return ret;}/**
    * @param {number} balance
    */setBalance(balance){wasm.identity_setBalance(this.__wbg_ptr,balance);}/**
    * @param {number} amount
    * @returns {number}
    */increaseBalance(amount){const ret=wasm.identity_increaseBalance(this.__wbg_ptr,amount);return ret;}/**
    * @param {number} amount
    * @returns {number}
    */reduceBalance(amount){const ret=wasm.identity_reduceBalance(this.__wbg_ptr,amount);return ret;}/**
    * @param {number} revision
    */setRevision(revision){wasm.identity_setRevision(this.__wbg_ptr,revision);}/**
    * @returns {number}
    */getRevision(){const ret=wasm.identity_getRevision(this.__wbg_ptr);return ret;}/**
    * @param {any} metadata
    */setMetadata(metadata){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_setMetadata(retptr,this.__wbg_ptr,addHeapObject(metadata));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {Metadata | undefined}
    */getMetadata(){const ret=wasm.identity_getMetadata(this.__wbg_ptr);return ret===0?undefined:Metadata.__wrap(ret);}/**
    * @param {any} object
    * @returns {Identity}
    */static from(object){const ret=wasm.identity_from(addHeapObject(object));return Identity.__wrap(ret);}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toObject(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_toObject(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {Uint8Array}
    */hash(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_hash(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];var r3=getInt32Memory0()[retptr/4+3];if(r3){throw takeObject(r2);}var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} public_key
    */addPublicKey(public_key){_assertClass(public_key,IdentityPublicKey);var ptr0=public_key.__destroy_into_raw();wasm.identity_addPublicKey(this.__wbg_ptr,ptr0);}/**
    * @param {Array<any>} public_keys
    */addPublicKeys(public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identity_addPublicKeys(retptr,this.__wbg_ptr,addHeapObject(public_keys));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getPublicKeyMaxId(){const ret=wasm.identity_getPublicKeyMaxId(this.__wbg_ptr);return ret;}/**
    * @param {Uint8Array} buffer
    * @returns {Identity}
    */static fromBuffer(buffer){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identity_fromBuffer(retptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Identity.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.Identity=Identity;class IdentityAlreadyExistsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAlreadyExistsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityalreadyexistserror_free(ptr);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identityalreadyexistserror_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityalreadyexistserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityalreadyexistserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityAlreadyExistsError=IdentityAlreadyExistsError;class IdentityAssetLockProofLockedTransactionMismatchError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockProofLockedTransactionMismatchError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlockprooflockedtransactionmismatcherror_free(ptr);}/**
    * @returns {any}
    */getInstantLockTransactionId(){const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_getInstantLockTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getAssetLockTransactionId(){const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_getAssetLockTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityassetlockprooflockedtransactionmismatcherror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityassetlockprooflockedtransactionmismatcherror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityAssetLockProofLockedTransactionMismatchError=IdentityAssetLockProofLockedTransactionMismatchError;class IdentityAssetLockTransactionIsNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionIsNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionisnotfounderror_free(ptr);}/**
    * @returns {any}
    */getTransactionId(){const ret=wasm.identityassetlocktransactionisnotfounderror_getTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityassetlocktransactionisnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityassetlocktransactionisnotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityAssetLockTransactionIsNotFoundError=IdentityAssetLockTransactionIsNotFoundError;class IdentityAssetLockTransactionOutPointAlreadyExistsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionOutPointAlreadyExistsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionoutpointalreadyexistserror_free(ptr);}/**
    * @returns {number}
    */getOutputIndex(){const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {any}
    */getTransactionId(){const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_getTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityassetlocktransactionoutpointalreadyexistserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityassetlocktransactionoutpointalreadyexistserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityAssetLockTransactionOutPointAlreadyExistsError=IdentityAssetLockTransactionOutPointAlreadyExistsError;class IdentityAssetLockTransactionOutPointNotEnoughBalanceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionOutPointNotEnoughBalanceError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_free(ptr);}/**
    * @returns {any}
    */getTransactionId(){const ret=wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_getTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
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
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityassetlocktransactionoutpointnotenoughbalanceerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityAssetLockTransactionOutPointNotEnoughBalanceError=IdentityAssetLockTransactionOutPointNotEnoughBalanceError;class IdentityAssetLockTransactionOutputNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionOutputNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionoutputnotfounderror_free(ptr);}/**
    * @returns {number}
    */getOutputIndex(){const ret=wasm.identityassetlocktransactionoutputnotfounderror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityassetlocktransactionoutputnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityassetlocktransactionoutputnotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityAssetLockTransactionOutputNotFoundError=IdentityAssetLockTransactionOutputNotFoundError;class IdentityAssetLockTransactionReplayError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityAssetLockTransactionReplayError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityassetlocktransactionreplayerror_free(ptr);}/**
    * @returns {any}
    */getTransactionId(){const ret=wasm.identityassetlocktransactionreplayerror_getTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityassetlocktransactionreplayerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {any}
    */getStateTransitionId(){const ret=wasm.identityassetlocktransactionreplayerror_getStateTransitionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getOutputIndex(){const ret=wasm.identityassetlocktransactionreplayerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.IdentityAssetLockTransactionReplayError=IdentityAssetLockTransactionReplayError;class IdentityContractNonceOutOfBoundsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityContractNonceOutOfBoundsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycontractnonceoutofboundserror_free(ptr);}/**
    * @returns {bigint}
    */getIdentityContractNonce(){const ret=wasm.identitycontractnonceoutofboundserror_getIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identitycontractnonceoutofboundserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycontractnonceoutofboundserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityContractNonceOutOfBoundsError=IdentityContractNonceOutOfBoundsError;class IdentityCreateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreateTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycreatetransition_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} asset_lock_proof
    */setAssetLockProof(asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_setAssetLockProof(retptr,this.__wbg_ptr,addHeapObject(asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */get assetLockProof(){const ret=wasm.identitycreatetransition_assetLockProof(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getAssetLockProof(){const ret=wasm.identitycreatetransition_getAssetLockProof(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any[]} public_keys
    */setPublicKeys(public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(public_keys,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycreatetransition_setPublicKeys(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any[]} public_keys
    */addPublicKeys(public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(public_keys,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycreatetransition_addPublicKeys(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getPublicKeys(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_getPublicKeys(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */get publicKeys(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_publicKeys(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getType(){const ret=wasm.identitycreatetransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */get identityId(){const ret=wasm.identitycreatetransition_identityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identitycreatetransition_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.identitycreatetransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getUserFeeIncrease(){const ret=wasm.identitycreatetransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
    * @param {number} user_fee_increase
    */setUserFeeIncrease(user_fee_increase){wasm.identitycreatetransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
    * @param {any} options
    * @returns {any}
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_toObject(retptr,this.__wbg_ptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreatetransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    * @param {any | undefined} bls
    */signByPrivateKey(private_key,key_type,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycreatetransition_signByPrivateKey(retptr,this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getSignature(){const ret=wasm.identitycreatetransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array | undefined} signature
    */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycreatetransition_setSignature(this.__wbg_ptr,ptr0,len0);}}/**
*/exports.IdentityCreateTransition=IdentityCreateTransition;class IdentityCreditTransferToSelfError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreditTransferToSelfError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycredittransfertoselferror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identitycredittransfertoselferror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycredittransfertoselferror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityCreditTransferToSelfError=IdentityCreditTransferToSelfError;class IdentityCreditTransferTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreditTransferTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycredittransfertransition_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycredittransfertransition_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreditTransferTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getType(){const ret=wasm.identitycredittransfertransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */get identityId(){const ret=wasm.identitycredittransfertransition_identityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */get recipientId(){const ret=wasm.identitycredittransfertransition_recipientId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {bigint}
    */get amount(){const ret=wasm.identitycredittransfertransition_amount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identitycredittransfertransition_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getRecipientId(){const ret=wasm.identitycredittransfertransition_getRecipientId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} identity_id
    */setIdentityId(identity_id){try{wasm.identitycredittransfertransition_setIdentityId(this.__wbg_ptr,addBorrowedObject(identity_id));}finally{heap[stack_pointer++]=undefined;}}/**
    * @param {any} recipient_id
    */setRecipientId(recipient_id){try{wasm.identitycredittransfertransition_setRecipientId(this.__wbg_ptr,addBorrowedObject(recipient_id));}finally{heap[stack_pointer++]=undefined;}}/**
    * @returns {number}
    */getAmount(){const ret=wasm.identitycredittransfertransition_getAmount(this.__wbg_ptr);return ret;}/**
    * @param {number} amount
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
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycredittransfertransition_toObject(retptr,this.__wbg_ptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycredittransfertransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycredittransfertransition_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycredittransfertransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    * @param {any | undefined} bls
    */signByPrivateKey(private_key,key_type,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycredittransfertransition_signByPrivateKey(retptr,this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getSignature(){const ret=wasm.identitycredittransfertransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array | undefined} signature
    */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycredittransfertransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
    * @returns {number}
    */getSignaturePublicKeyId(){const ret=wasm.identitycredittransfertransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycredittransfertransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityCreditTransferTransition=IdentityCreditTransferTransition;class IdentityCreditWithdrawalTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityCreditWithdrawalTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitycreditwithdrawaltransition_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreditwithdrawaltransition_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreditWithdrawalTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getType(){const ret=wasm.identitycreditwithdrawaltransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */get identityId(){const ret=wasm.identitycreditwithdrawaltransition_identityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {bigint}
    */get amount(){const ret=wasm.identitycreditwithdrawaltransition_amount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identitycreditwithdrawaltransition_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} identity_id
    */setIdentityId(identity_id){try{wasm.identitycreditwithdrawaltransition_setIdentityId(this.__wbg_ptr,addBorrowedObject(identity_id));}finally{heap[stack_pointer++]=undefined;}}/**
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
    */setPooling(pooling){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreditwithdrawaltransition_setPooling(retptr,this.__wbg_ptr,pooling);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any | undefined}
    */getOutputScript(){const ret=wasm.identitycreditwithdrawaltransition_getOutputScript(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array | undefined} output_script
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
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreditwithdrawaltransition_toObject(retptr,this.__wbg_ptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreditwithdrawaltransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreditwithdrawaltransition_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitycreditwithdrawaltransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    * @param {any | undefined} bls
    */signByPrivateKey(private_key,key_type,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycreditwithdrawaltransition_signByPrivateKey(retptr,this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getSignature(){const ret=wasm.identitycreditwithdrawaltransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array | undefined} signature
    */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitycreditwithdrawaltransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
    * @returns {number}
    */getSignaturePublicKeyId(){const ret=wasm.identitycreditwithdrawaltransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitycreditwithdrawaltransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityCreditWithdrawalTransition=IdentityCreditWithdrawalTransition;class IdentityFacade{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityFacade.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityfacade_free(ptr);}/**
    * @param {any} id
    * @param {Array<any>} public_keys
    * @returns {Identity}
    */create(id,public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityfacade_create(retptr,this.__wbg_ptr,addHeapObject(id),addHeapObject(public_keys));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Identity.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} buffer
    * @param {object | undefined} options
    * @returns {Identity}
    */createFromBuffer(buffer,options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identityfacade_createFromBuffer(retptr,this.__wbg_ptr,ptr0,len0,isLikeNone(options)?0:addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Identity.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} instant_lock
    * @param {Uint8Array} asset_lock_transaction
    * @param {number} output_index
    * @returns {InstantAssetLockProof}
    */createInstantAssetLockProof(instant_lock,asset_lock_transaction,output_index){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(instant_lock,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(asset_lock_transaction,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.identityfacade_createInstantAssetLockProof(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1,output_index);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return InstantAssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {number} core_chain_locked_height
    * @param {Uint8Array} out_point
    * @returns {ChainAssetLockProof}
    */createChainAssetLockProof(core_chain_locked_height,out_point){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(out_point,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identityfacade_createChainAssetLockProof(retptr,this.__wbg_ptr,core_chain_locked_height,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ChainAssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Identity} identity
    * @param {any} asset_lock_proof
    * @returns {IdentityCreateTransition}
    */createIdentityCreateTransition(identity,asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity,Identity);wasm.identityfacade_createIdentityCreateTransition(retptr,this.__wbg_ptr,identity.__wbg_ptr,addHeapObject(asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} identity_id
    * @param {any} asset_lock_proof
    * @returns {IdentityTopUpTransition}
    */createIdentityTopUpTransition(identity_id,asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityfacade_createIdentityTopUpTransition(retptr,this.__wbg_ptr,addBorrowedObject(identity_id),addBorrowedObject(asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityTopUpTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}/**
    * @param {any} identity_id
    * @param {bigint} amount
    * @param {number} core_fee_per_byte
    * @param {number} pooling
    * @param {Uint8Array | undefined} output_script
    * @param {bigint} identity_nonce
    * @returns {IdentityCreditWithdrawalTransition}
    */createIdentityCreditWithdrawalTransition(identity_id,amount,core_fee_per_byte,pooling,output_script,identity_nonce){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);var ptr0=isLikeNone(output_script)?0:passArray8ToWasm0(output_script,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityfacade_createIdentityCreditWithdrawalTransition(retptr,this.__wbg_ptr,addBorrowedObject(identity_id),amount,core_fee_per_byte,pooling,ptr0,len0,identity_nonce);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreditWithdrawalTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @param {Identity} identity
    * @param {any} recipient_id
    * @param {bigint} amount
    * @param {bigint} identity_nonce
    * @returns {IdentityCreditTransferTransition}
    */createIdentityCreditTransferTransition(identity,recipient_id,amount,identity_nonce){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity,Identity);wasm.identityfacade_createIdentityCreditTransferTransition(retptr,this.__wbg_ptr,identity.__wbg_ptr,addBorrowedObject(recipient_id),amount,identity_nonce);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreditTransferTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @param {Identity} identity
    * @param {bigint} identity_nonce
    * @param {any} public_keys
    * @returns {IdentityUpdateTransition}
    */createIdentityUpdateTransition(identity,identity_nonce,public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity,Identity);wasm.identityfacade_createIdentityUpdateTransition(retptr,this.__wbg_ptr,identity.__wbg_ptr,identity_nonce,addBorrowedObject(public_keys));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityUpdateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}}/**
*/exports.IdentityFacade=IdentityFacade;class IdentityFactory{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityFactory.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityfactory_free(ptr);}/**
    * @param {number} protocol_version
    */constructor(protocol_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityfactory_new(retptr,protocol_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityFactory.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} id
    * @param {Array<any>} public_keys
    * @returns {Identity}
    */create(id,public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityfactory_create(retptr,this.__wbg_ptr,addHeapObject(id),addHeapObject(public_keys));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Identity.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} buffer
    * @param {any} options
    * @returns {Identity}
    */createFromBuffer(buffer,options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identityfactory_createFromBuffer(retptr,this.__wbg_ptr,ptr0,len0,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Identity.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} instant_lock
    * @param {Uint8Array} asset_lock_transaction
    * @param {number} output_index
    * @returns {InstantAssetLockProof}
    */createInstantAssetLockProof(instant_lock,asset_lock_transaction,output_index){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(instant_lock,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(asset_lock_transaction,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.identityfactory_createInstantAssetLockProof(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1,output_index);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return InstantAssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {number} core_chain_locked_height
    * @param {Uint8Array} out_point
    * @returns {ChainAssetLockProof}
    */createChainAssetLockProof(core_chain_locked_height,out_point){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(out_point,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identityfactory_createChainAssetLockProof(retptr,this.__wbg_ptr,core_chain_locked_height,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ChainAssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Identity} identity
    * @param {any} asset_lock_proof
    * @returns {IdentityCreateTransition}
    */createIdentityCreateTransition(identity,asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity,Identity);wasm.identityfactory_createIdentityCreateTransition(retptr,this.__wbg_ptr,identity.__wbg_ptr,addBorrowedObject(asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @param {any} identity_id
    * @param {any} asset_lock_proof
    * @returns {IdentityTopUpTransition}
    */createIdentityTopUpTransition(identity_id,asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityfactory_createIdentityTopUpTransition(retptr,this.__wbg_ptr,addBorrowedObject(identity_id),addBorrowedObject(asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityTopUpTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;heap[stack_pointer++]=undefined;}}/**
    * @param {Identity} identity
    * @param {any} recipient_id
    * @param {bigint} amount
    * @param {bigint} identity_nonce
    * @returns {IdentityCreditTransferTransition}
    */createIdentityCreditTransferTransition(identity,recipient_id,amount,identity_nonce){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity,Identity);wasm.identityfactory_createIdentityCreditTransferTransition(retptr,this.__wbg_ptr,identity.__wbg_ptr,addBorrowedObject(recipient_id),amount,identity_nonce);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreditTransferTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @param {any} identity_id
    * @param {bigint} amount
    * @param {number} core_fee_per_byte
    * @param {number} pooling
    * @param {Uint8Array | undefined} output_script
    * @param {bigint} identity_nonce
    * @returns {IdentityCreditWithdrawalTransition}
    */createIdentityCreditWithdrawalTransition(identity_id,amount,core_fee_per_byte,pooling,output_script,identity_nonce){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);var ptr0=isLikeNone(output_script)?0:passArray8ToWasm0(output_script,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityfactory_createIdentityCreditWithdrawalTransition(retptr,this.__wbg_ptr,addBorrowedObject(identity_id),amount,core_fee_per_byte,pooling,ptr0,len0,identity_nonce);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityCreditWithdrawalTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}/**
    * @param {Identity} identity
    * @param {bigint} identity_nonce
    * @param {any} public_keys
    * @returns {IdentityUpdateTransition}
    */createIdentityUpdateTransition(identity,identity_nonce,public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity,Identity);wasm.identityfactory_createIdentityUpdateTransition(retptr,this.__wbg_ptr,identity.__wbg_ptr,identity_nonce,addBorrowedObject(public_keys));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityUpdateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);heap[stack_pointer++]=undefined;}}}/**
*/exports.IdentityFactory=IdentityFactory;class IdentityInsufficientBalanceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityInsufficientBalanceError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityinsufficientbalanceerror_free(ptr);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identityinsufficientbalanceerror_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getBalance(){const ret=wasm.identityinsufficientbalanceerror_getBalance(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.identityinsufficientbalanceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityinsufficientbalanceerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityInsufficientBalanceError=IdentityInsufficientBalanceError;class IdentityNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitynotfounderror_free(ptr);}/**
    * @param {any} identity_id
    */constructor(identity_id){const ret=wasm.identitynotfounderror_new(addHeapObject(identity_id));return IdentityNotFoundError.__wrap(ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identitynotfounderror_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identitynotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitynotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitynotfounderror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityNotFoundError=IdentityNotFoundError;class IdentityPublicKey{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKey.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickey_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityPublicKey.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getId(){const ret=wasm.identitypublickey_getId(this.__wbg_ptr);return ret>>>0;}/**
    * @param {number} id
    */setId(id){wasm.identitypublickey_setId(this.__wbg_ptr,id);}/**
    * @returns {number}
    */getType(){const ret=wasm.identitypublickey_getType(this.__wbg_ptr);return ret;}/**
    * @param {number} key_type
    */setType(key_type){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_setType(retptr,this.__wbg_ptr,key_type);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} data
    */setData(data){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(data,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitypublickey_setData(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getData(){const ret=wasm.identitypublickey_getData(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {number} purpose
    */setPurpose(purpose){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_setPurpose(retptr,this.__wbg_ptr,purpose);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getPurpose(){const ret=wasm.identitypublickey_getPurpose(this.__wbg_ptr);return ret;}/**
    * @param {number} security_level
    */setSecurityLevel(security_level){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_setSecurityLevel(retptr,this.__wbg_ptr,security_level);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getSecurityLevel(){const ret=wasm.identitypublickey_getSecurityLevel(this.__wbg_ptr);return ret;}/**
    * @param {boolean} read_only
    */setReadOnly(read_only){wasm.identitypublickey_setReadOnly(this.__wbg_ptr,read_only);}/**
    * @returns {boolean}
    */isReadOnly(){const ret=wasm.identitypublickey_isReadOnly(this.__wbg_ptr);return ret!==0;}/**
    * @param {Date} timestamp
    */setDisabledAt(timestamp){wasm.identitypublickey_setDisabledAt(this.__wbg_ptr,addHeapObject(timestamp));}/**
    * @returns {Date | undefined}
    */getDisabledAt(){const ret=wasm.identitypublickey_getDisabledAt(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {Uint8Array}
    */hash(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_hash(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];var r3=getInt32Memory0()[retptr/4+3];if(r3){throw takeObject(r2);}var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {boolean}
    */isMaster(){const ret=wasm.identitypublickey_isMaster(this.__wbg_ptr);return ret!==0;}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toObject(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_toObject(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickey_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} buffer
    * @returns {IdentityPublicKey}
    */static fromBuffer(buffer){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitypublickey_fromBuffer(retptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityPublicKey.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityPublicKey=IdentityPublicKey;class IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.identitypublickeyalreadyexistsforuniquecontractboundserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeyalreadyexistsforuniquecontractboundserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeyalreadyexistsforuniquecontractboundserror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError=IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError;class IdentityPublicKeyIsDisabledError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyIsDisabledError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeyisdisablederror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyIndex(){const ret=wasm.identitypublickeyisdisablederror_getPublicKeyIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.identitypublickeyisdisablederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeyisdisablederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityPublicKeyIsDisabledError=IdentityPublicKeyIsDisabledError;class IdentityPublicKeyIsReadOnlyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyIsReadOnlyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeyisreadonlyerror_free(ptr);}/**
    * @returns {number}
    */getKeyId(){const ret=wasm.identitypublickeyisreadonlyerror_getKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getPublicKeyIndex(){const ret=wasm.identitypublickeyisreadonlyerror_getPublicKeyIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.identitypublickeyisreadonlyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeyisreadonlyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IdentityPublicKeyIsReadOnlyError=IdentityPublicKeyIsReadOnlyError;class IdentityPublicKeyWithWitness{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityPublicKeyWithWitness.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitypublickeywithwitness_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityPublicKeyWithWitness.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getId(){const ret=wasm.identitypublickeywithwitness_getId(this.__wbg_ptr);return ret>>>0;}/**
    * @param {number} id
    */setId(id){wasm.identitypublickeywithwitness_setId(this.__wbg_ptr,id);}/**
    * @returns {number}
    */getType(){const ret=wasm.identitypublickeywithwitness_getType(this.__wbg_ptr);return ret;}/**
    * @param {number} key_type
    */setType(key_type){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_setType(retptr,this.__wbg_ptr,key_type);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint8Array} data
    */setData(data){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(data,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitypublickeywithwitness_setData(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getData(){const ret=wasm.identitypublickeywithwitness_getData(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {number} purpose
    */setPurpose(purpose){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_setPurpose(retptr,this.__wbg_ptr,purpose);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getPurpose(){const ret=wasm.identitypublickeywithwitness_getPurpose(this.__wbg_ptr);return ret;}/**
    * @param {number} security_level
    */setSecurityLevel(security_level){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_setSecurityLevel(retptr,this.__wbg_ptr,security_level);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} contract_id
    * @param {string | undefined} document_type_name
    */setContractBounds(contract_id,document_type_name){var ptr0=isLikeNone(document_type_name)?0:passStringToWasm0(document_type_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;wasm.identitypublickeywithwitness_setContractBounds(this.__wbg_ptr,addHeapObject(contract_id),ptr0,len0);}/**
    * @returns {number}
    */getSecurityLevel(){const ret=wasm.identitypublickeywithwitness_getSecurityLevel(this.__wbg_ptr);return ret;}/**
    * @param {boolean} read_only
    */setReadOnly(read_only){wasm.identitypublickeywithwitness_setReadOnly(this.__wbg_ptr,read_only);}/**
    * @returns {boolean}
    */isReadOnly(){const ret=wasm.identitypublickeywithwitness_isReadOnly(this.__wbg_ptr);return ret!==0;}/**
    * @param {Uint8Array} signature
    */setSignature(signature){const ptr0=passArray8ToWasm0(signature,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitypublickeywithwitness_setSignature(this.__wbg_ptr,ptr0,len0);}/**
    * @returns {Uint8Array}
    */getSignature(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_getSignature(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {Uint8Array}
    */hash(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_hash(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];var r3=getInt32Memory0()[retptr/4+3];if(r3){throw takeObject(r2);}var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {boolean} skip_signature
    * @returns {any}
    */toObject(skip_signature){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitypublickeywithwitness_toObject(retptr,this.__wbg_ptr,skip_signature);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityPublicKeyWithWitness=IdentityPublicKeyWithWitness;class IdentityTopUpTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityTopUpTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identitytopuptransition_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitytopuptransition_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityTopUpTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} asset_lock_proof
    */setAssetLockProof(asset_lock_proof){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitytopuptransition_setAssetLockProof(retptr,this.__wbg_ptr,addHeapObject(asset_lock_proof));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */get assetLockProof(){const ret=wasm.identitytopuptransition_assetLockProof(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getAssetLockProof(){const ret=wasm.identitytopuptransition_getAssetLockProof(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getType(){const ret=wasm.identitytopuptransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */get identityId(){const ret=wasm.identitytopuptransition_identityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identitytopuptransition_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} identity_id
    */setIdentityId(identity_id){try{wasm.identitytopuptransition_setIdentityId(this.__wbg_ptr,addBorrowedObject(identity_id));}finally{heap[stack_pointer++]=undefined;}}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.identitytopuptransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getUserFeeIncrease(){const ret=wasm.identitytopuptransition_getUserFeeIncrease(this.__wbg_ptr);return ret;}/**
    * @param {number} user_fee_increase
    */setUserFeeIncrease(user_fee_increase){wasm.identitytopuptransition_setUserFeeIncrease(this.__wbg_ptr,user_fee_increase);}/**
    * @param {any} options
    * @returns {any}
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitytopuptransition_toObject(retptr,this.__wbg_ptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitytopuptransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitytopuptransition_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identitytopuptransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    * @param {any | undefined} bls
    */signByPrivateKey(private_key,key_type,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identitytopuptransition_signByPrivateKey(retptr,this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getSignature(){const ret=wasm.identitytopuptransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array | undefined} signature
    */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identitytopuptransition_setSignature(this.__wbg_ptr,ptr0,len0);}}/**
*/exports.IdentityTopUpTransition=IdentityTopUpTransition;class IdentityUpdateTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IdentityUpdateTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_identityupdatetransition_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return IdentityUpdateTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any[] | undefined} public_keys
    */setPublicKeysToAdd(public_keys){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);var ptr0=isLikeNone(public_keys)?0:passArrayJsValueToWasm0(public_keys,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_setPublicKeysToAdd(retptr,this.__wbg_ptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getPublicKeysToAdd(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_getPublicKeysToAdd(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */get addPublicKeys(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_addPublicKeys(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getPublicKeyIdsToDisable(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_getPublicKeyIdsToDisable(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {Uint32Array | undefined} public_key_ids
    */setPublicKeyIdsToDisable(public_key_ids){var ptr0=isLikeNone(public_key_ids)?0:passArray32ToWasm0(public_key_ids,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_setPublicKeyIdsToDisable(this.__wbg_ptr,ptr0,len0);}/**
    * @returns {number}
    */getType(){const ret=wasm.identityupdatetransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */get identityId(){const ret=wasm.identityupdatetransition_identityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.identityupdatetransition_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} identity_id
    */setIdentityId(identity_id){try{wasm.identityupdatetransition_setIdentityId(this.__wbg_ptr,addBorrowedObject(identity_id));}finally{heap[stack_pointer++]=undefined;}}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.identityupdatetransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
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
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_toObject(retptr,this.__wbg_ptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.identityupdatetransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    * @param {any | undefined} bls
    */signByPrivateKey(private_key,key_type,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_signByPrivateKey(retptr,this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {number | undefined} key_id
    */setSignaturePublicKeyId(key_id){wasm.identityupdatetransition_setSignaturePublicKeyId(this.__wbg_ptr,!isLikeNone(key_id),isLikeNone(key_id)?0:key_id);}/**
    * @returns {any}
    */getSignature(){const ret=wasm.identityupdatetransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getSignaturePublicKeyId(){const ret=wasm.identityupdatetransition_getSignaturePublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @param {Uint8Array | undefined} signature
    */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
    * @returns {number}
    */getRevision(){const ret=wasm.identityupdatetransition_getRevision(this.__wbg_ptr);return ret>>>0;}/**
    * @param {number} revision
    */setRevision(revision){wasm.identityupdatetransition_setRevision(this.__wbg_ptr,revision);}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.identityupdatetransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {any} bls
    * @returns {boolean}
    */verifySignature(identity_public_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);wasm.identityupdatetransition_verifySignature(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return r0!==0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.IdentityUpdateTransition=IdentityUpdateTransition;class IncompatibleDataContractSchemaError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleDataContractSchemaError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatibledatacontractschemaerror_free(ptr);}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.incompatibledatacontractschemaerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getOperation(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibledatacontractschemaerror_getOperation(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getFieldPath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibledatacontractschemaerror_getFieldPath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.incompatibledatacontractschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibledatacontractschemaerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IncompatibleDataContractSchemaError=IncompatibleDataContractSchemaError;class IncompatibleDocumentTypeSchemaError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleDocumentTypeSchemaError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatibledocumenttypeschemaerror_free(ptr);}/**
    * @returns {string}
    */getOperation(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibledocumenttypeschemaerror_getOperation(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyPath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibledocumenttypeschemaerror_getPropertyPath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.incompatibledocumenttypeschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibledocumenttypeschemaerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IncompatibleDocumentTypeSchemaError=IncompatibleDocumentTypeSchemaError;class IncompatibleProtocolVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleProtocolVersionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatibleprotocolversionerror_free(ptr);}/**
    * @returns {number}
    */getParsedProtocolVersion(){const ret=wasm.incompatibleprotocolversionerror_getParsedProtocolVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getMinimalProtocolVersion(){const ret=wasm.incompatibleprotocolversionerror_getMinimalProtocolVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.incompatibleprotocolversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatibleprotocolversionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IncompatibleProtocolVersionError=IncompatibleProtocolVersionError;class IncompatibleRe2PatternError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncompatibleRe2PatternError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incompatiblere2patternerror_free(ptr);}/**
    * @returns {string}
    */getPattern(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatiblere2patternerror_getPattern(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatiblere2patternerror_getPath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatiblere2patternerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.incompatiblere2patternerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.incompatiblere2patternerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.IncompatibleRe2PatternError=IncompatibleRe2PatternError;class InconsistentCompoundIndexDataError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InconsistentCompoundIndexDataError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_inconsistentcompoundindexdataerror_free(ptr);}/**
    * @returns {Array<any>}
    */getIndexedProperties(){const ret=wasm.inconsistentcompoundindexdataerror_getIndexedProperties(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.inconsistentcompoundindexdataerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.inconsistentcompoundindexdataerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.inconsistentcompoundindexdataerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InconsistentCompoundIndexDataError=InconsistentCompoundIndexDataError;class InstantAssetLockProof{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InstantAssetLockProof.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_instantassetlockproof_free(ptr);}/**
    * @param {any} raw_parameters
    */constructor(raw_parameters){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.instantassetlockproof_new(retptr,addHeapObject(raw_parameters));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return InstantAssetLockProof.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getType(){const ret=wasm.instantassetlockproof_getType(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getOutputIndex(){const ret=wasm.instantassetlockproof_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {any | undefined}
    */getOutPoint(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.instantassetlockproof_getOutPoint(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getOutput(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.instantassetlockproof_getOutput(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */createIdentifier(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.instantassetlockproof_createIdentifier(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getInstantLock(){const ret=wasm.instantassetlockproof_getInstantLock(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getTransaction(){const ret=wasm.instantassetlockproof_getTransaction(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */toObject(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.instantassetlockproof_toObject(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.instantassetlockproof_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.InstantAssetLockProof=InstantAssetLockProof;class InvalidActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidActionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidactionerror_free(ptr);}}/**
*/exports.InvalidActionError=InvalidActionError;class InvalidActionNameError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidActionNameError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidactionnameerror_free(ptr);}/**
    * @param {any[]} actions
    */constructor(actions){const ptr0=passArrayJsValueToWasm0(actions,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invalidactionnameerror_new(ptr0,len0);return InvalidActionNameError.__wrap(ret);}/**
    * @returns {any[]}
    */getActions(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidactionnameerror_getActions(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}exports.InvalidActionNameError=InvalidActionNameError;class InvalidActiontError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidactionterror_free(ptr);}/**
    * @param {any} action
    */constructor(action){const ret=wasm.invalidactionterror_new(addHeapObject(action));return InvalidActionError.__wrap(ret);}}/**
*/exports.InvalidActiontError=InvalidActiontError;class InvalidAssetLockProofCoreChainHeightError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidAssetLockProofCoreChainHeightError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidassetlockproofcorechainheighterror_free(ptr);}/**
    * @returns {number}
    */getProofCoreChainLockedHeight(){const ret=wasm.invalidassetlockproofcorechainheighterror_getProofCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCurrentCoreChainLockedHeight(){const ret=wasm.invalidassetlockproofcorechainheighterror_getCurrentCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidassetlockproofcorechainheighterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidassetlockproofcorechainheighterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidAssetLockProofCoreChainHeightError=InvalidAssetLockProofCoreChainHeightError;class InvalidAssetLockProofTransactionHeightError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidAssetLockProofTransactionHeightError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidassetlockprooftransactionheighterror_free(ptr);}/**
    * @returns {number}
    */getProofCoreChainLockedHeight(){const ret=wasm.invalidassetlockprooftransactionheighterror_getProofCoreChainLockedHeight(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number | undefined}
    */getTransactionHeight(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidassetlockprooftransactionheighterror_getTransactionHeight(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];return r0===0?undefined:r1>>>0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidassetlockprooftransactionheighterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidassetlockprooftransactionheighterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidAssetLockProofTransactionHeightError=InvalidAssetLockProofTransactionHeightError;class InvalidAssetLockTransactionOutputReturnSizeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidAssetLockTransactionOutputReturnSizeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidassetlocktransactionoutputreturnsizeerror_free(ptr);}/**
    * @returns {number}
    */getOutputIndex(){const ret=wasm.invalidassetlocktransactionoutputreturnsizeerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidassetlocktransactionoutputreturnsizeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidassetlocktransactionoutputreturnsizeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidAssetLockTransactionOutputReturnSizeError=InvalidAssetLockTransactionOutputReturnSizeError;class InvalidCompoundIndexError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidCompoundIndexError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidcompoundindexerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidcompoundindexerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidcompoundindexerror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidcompoundindexerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidcompoundindexerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidCompoundIndexError=InvalidCompoundIndexError;class InvalidDataContractError{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddatacontracterror_free(ptr);}/**
    * @returns {any[]}
    */getErrors(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddatacontracterror_getErrors(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getRawDataContract(){const ret=wasm.invaliddatacontracterror_getRawDataContract(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddatacontracterror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDataContractError=InvalidDataContractError;class InvalidDataContractIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDataContractIdError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddatacontractiderror_free(ptr);}/**
    * @returns {any}
    */getExpectedId(){const ret=wasm.invaliddatacontractiderror_getExpectedId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getInvalidId(){const ret=wasm.invaliddatacontractiderror_getInvalidId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddatacontractiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddatacontractiderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDataContractIdError=InvalidDataContractIdError;class InvalidDataContractVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDataContractVersionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddatacontractversionerror_free(ptr);}/**
    * @returns {number}
    */getExpectedVersion(){const ret=wasm.invaliddatacontractversionerror_getExpectedVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getVersion(){const ret=wasm.invaliddatacontractversionerror_getVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddatacontractversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddatacontractversionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDataContractVersionError=InvalidDataContractVersionError;class InvalidDocumentActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentActionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumentactionerror_free(ptr);}}/**
*/exports.InvalidDocumentActionError=InvalidDocumentActionError;class InvalidDocumentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenterror_free(ptr);}/**
    * @param {any} raw_document
    * @param {any[]} errors
    */constructor(raw_document,errors){const ptr0=passArrayJsValueToWasm0(errors,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invaliddocumenterror_new(addHeapObject(raw_document),ptr0,len0);return InvalidDocumentError.__wrap(ret);}/**
    * @returns {any[]}
    */getErrors(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenterror_getErrors(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getRawDocument(){const ret=wasm.invaliddocumenterror_getRawDocument(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenterror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDocumentError=InvalidDocumentError;class InvalidDocumentRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentRevisionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumentrevisionerror_free(ptr);}/**
    * @returns {any}
    */getDocumentId(){const ret=wasm.invaliddocumentrevisionerror_getDocumentId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {bigint | undefined}
    */getPreviousRevision(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumentrevisionerror_getPreviousRevision(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r2=getBigInt64Memory0()[retptr/8+1];return r0===0?undefined:BigInt.asUintN(64,r2);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {bigint}
    */getDesiredRevision(){const ret=wasm.invaliddocumentrevisionerror_getDesiredRevision(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddocumentrevisionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumentrevisionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDocumentRevisionError=InvalidDocumentRevisionError;class InvalidDocumentTransitionActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTransitionActionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttransitionactionerror_free(ptr);}/**
    * @returns {string}
    */getAction(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttransitionactionerror_getAction(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddocumenttransitionactionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttransitionactionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDocumentTransitionActionError=InvalidDocumentTransitionActionError;class InvalidDocumentTransitionIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTransitionIdError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttransitioniderror_free(ptr);}/**
    * @returns {any}
    */getExpectedId(){const ret=wasm.invaliddocumenttransitioniderror_getExpectedId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getInvalidId(){const ret=wasm.invaliddocumenttransitioniderror_getInvalidId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddocumenttransitioniderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttransitioniderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDocumentTransitionIdError=InvalidDocumentTransitionIdError;class InvalidDocumentTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypeerror_free(ptr);}/**
    * @returns {string}
    */getType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttypeerror_getType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.invaliddocumenttypeerror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddocumenttypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDocumentTypeError=InvalidDocumentTypeError;class InvalidDocumentTypeInDataContractError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeInDataContractError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypeindatacontracterror_free(ptr);}/**
    * @param {string} doc_type
    * @param {any} data_contract_id
    */constructor(doc_type,data_contract_id){const ptr0=passStringToWasm0(doc_type,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invaliddocumenttypeindatacontracterror_new(ptr0,len0,addHeapObject(data_contract_id));return InvalidDocumentTypeInDataContractError.__wrap(ret);}/**
    * @returns {string}
    */getType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttypeindatacontracterror_getType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */getDataContractId(){const ret=wasm.invaliddocumenttypeindatacontracterror_getDataContractId(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.InvalidDocumentTypeInDataContractError=InvalidDocumentTypeInDataContractError;class InvalidDocumentTypeNameError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeNameError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypenameerror_free(ptr);}}exports.InvalidDocumentTypeNameError=InvalidDocumentTypeNameError;class InvalidDocumentTypeNameErrorWasm{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttypenameerrorwasm_free(ptr);}/**
    * @returns {string}
    */getName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttypenameerrorwasm_getName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddocumenttypenameerrorwasm_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttypenameerrorwasm_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidDocumentTypeNameErrorWasm=InvalidDocumentTypeNameErrorWasm;class InvalidDocumentTypeRequiredSecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidDocumentTypeRequiredSecurityLevelError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invaliddocumenttyperequiredsecuritylevelerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invaliddocumenttyperequiredsecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttyperequiredsecuritylevelerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invaliddocumenttyperequiredsecuritylevelerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.InvalidDocumentTypeRequiredSecurityLevelError=InvalidDocumentTypeRequiredSecurityLevelError;class InvalidIdentifierError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentifierError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentifiererror_free(ptr);}/**
    * @returns {string}
    */getIdentifierName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentifiererror_getIdentifierName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIdentifierError(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentifiererror_getIdentifierError(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentifiererror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentifiererror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentifierError=InvalidIdentifierError;class InvalidIdentityAssetLockProofChainLockValidationErrorWasm{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityAssetLockProofChainLockValidationErrorWasm.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_free(ptr);}/**
    * @returns {any}
    */getTransactionId(){const ret=wasm.invalididentityassetlockproofchainlockvalidationerrorwasm_getTransactionId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getHeightReportedNotLocked(){const ret=wasm.invalididentityassetlockproofchainlockvalidationerrorwasm_getHeightReportedNotLocked(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.InvalidIdentityAssetLockProofChainLockValidationErrorWasm=InvalidIdentityAssetLockProofChainLockValidationErrorWasm;class InvalidIdentityAssetLockTransactionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityAssetLockTransactionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityassetlocktransactionerror_free(ptr);}/**
    * @returns {string}
    */getErrorMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityassetlocktransactionerror_getErrorMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentityassetlocktransactionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityassetlocktransactionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityAssetLockTransactionError=InvalidIdentityAssetLockTransactionError;class InvalidIdentityAssetLockTransactionOutputError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityAssetLockTransactionOutputError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityassetlocktransactionoutputerror_free(ptr);}/**
    * @returns {number}
    */getOutputIndex(){const ret=wasm.invalididentityassetlocktransactionoutputerror_getOutputIndex(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentityassetlocktransactionoutputerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityassetlocktransactionoutputerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityAssetLockTransactionOutputError=InvalidIdentityAssetLockTransactionOutputError;class InvalidIdentityCreditTransferAmountError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditTransferAmountError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycredittransferamounterror_free(ptr);}/**
    * @returns {bigint}
    */getAmount(){const ret=wasm.invalididentitycredittransferamounterror_getAmount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {bigint}
    */getMinAmount(){const ret=wasm.invalididentitycredittransferamounterror_getMinAmount(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitycredittransferamounterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitycredittransferamounterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityCreditTransferAmountError=InvalidIdentityCreditTransferAmountError;class InvalidIdentityCreditWithdrawalTransitionAmountError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditWithdrawalTransitionAmountError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycreditwithdrawaltransitionamounterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitycreditwithdrawaltransitionamounterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitycreditwithdrawaltransitionamounterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitycreditwithdrawaltransitionamounterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.InvalidIdentityCreditWithdrawalTransitionAmountError=InvalidIdentityCreditWithdrawalTransitionAmountError;class InvalidIdentityCreditWithdrawalTransitionCoreFeeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditWithdrawalTransitionCoreFeeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_free(ptr);}/**
    * @returns {number}
    */getCoreFee(){const ret=wasm.invalididentitycreditwithdrawaltransitioncorefeeerror_getCoreFee(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitycreditwithdrawaltransitioncorefeeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitycreditwithdrawaltransitioncorefeeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityCreditWithdrawalTransitionCoreFeeError=InvalidIdentityCreditWithdrawalTransitionCoreFeeError;class InvalidIdentityCreditWithdrawalTransitionOutputScriptError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityCreditWithdrawalTransitionOutputScriptError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitycreditwithdrawaltransitionoutputscripterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitycreditwithdrawaltransitionoutputscripterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityCreditWithdrawalTransitionOutputScriptError=InvalidIdentityCreditWithdrawalTransitionOutputScriptError;class InvalidIdentityError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityerror_free(ptr);}/**
    * @returns {any[]}
    */getErrors(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityerror_getErrors(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getRawIdentity(){const ret=wasm.invalididentityerror_getRawIdentity(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.InvalidIdentityError=InvalidIdentityError;class InvalidIdentityKeySignatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityKeySignatureError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitykeysignatureerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyId(){const ret=wasm.invalididentitykeysignatureerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitykeysignatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitykeysignatureerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityKeySignatureError=InvalidIdentityKeySignatureError;class InvalidIdentityNonceError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityNonceError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitynonceerror_free(ptr);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.invalididentitynonceerror_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {bigint | undefined}
    */getCurrentIdentityContractNonce(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitynonceerror_getCurrentIdentityContractNonce(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r2=getBigInt64Memory0()[retptr/8+1];return r0===0?undefined:BigInt.asUintN(64,r2);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {bigint}
    */getSettingIdentityContractNonce(){const ret=wasm.invalididentitynonceerror_getSettingIdentityContractNonce(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {Error}
    */getError(){const ret=wasm.invalididentitynonceerror_getError(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitynonceerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitynonceerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityNonceError=InvalidIdentityNonceError;class InvalidIdentityPublicKeyDataError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeyDataError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeydataerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyId(){const ret=wasm.invalididentitypublickeydataerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */getValidationError(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitypublickeydataerror_getValidationError(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitypublickeydataerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitypublickeydataerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityPublicKeyDataError=InvalidIdentityPublicKeyDataError;class InvalidIdentityPublicKeyIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeyIdError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeyiderror_free(ptr);}/**
    * @returns {number}
    */getId(){const ret=wasm.invalididentitypublickeyiderror_getId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitypublickeyiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitypublickeyiderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityPublicKeyIdError=InvalidIdentityPublicKeyIdError;class InvalidIdentityPublicKeySecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeySecurityLevelError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeysecuritylevelerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyId(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getPublicKeyPurpose(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getPublicKeyPurpose(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getPublicKeySecurityLevel(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getPublicKeySecurityLevel(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitypublickeysecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitypublickeysecuritylevelerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityPublicKeySecurityLevelError=InvalidIdentityPublicKeySecurityLevelError;class InvalidIdentityPublicKeyTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityPublicKeyTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentitypublickeytypeerror_free(ptr);}/**
    * @param {number} key_type
    */constructor(key_type){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitypublickeytypeerror_new(retptr,key_type);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return InvalidIdentityPublicKeyTypeError.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getPublicKeyType(){const ret=wasm.invalididentitypublickeytypeerror_getPublicKeyType(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentitypublickeytypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentitypublickeytypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityPublicKeyTypeError=InvalidIdentityPublicKeyTypeError;class InvalidIdentityRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityRevisionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityrevisionerror_free(ptr);}/**
    * @returns {any}
    */getIdentityId(){const ret=wasm.invalididentityrevisionerror_getIdentityId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCurrentRevision(){const ret=wasm.invalididentityrevisionerror_getCurrentRevision(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentityrevisionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityrevisionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIdentityRevisionError=InvalidIdentityRevisionError;class InvalidIdentityUpdateTransitionDisableKeysError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityUpdateTransitionDisableKeysError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityupdatetransitiondisablekeyserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentityupdatetransitiondisablekeyserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityupdatetransitiondisablekeyserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityupdatetransitiondisablekeyserror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.InvalidIdentityUpdateTransitionDisableKeysError=InvalidIdentityUpdateTransitionDisableKeysError;class InvalidIdentityUpdateTransitionEmptyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIdentityUpdateTransitionEmptyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalididentityupdatetransitionemptyerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalididentityupdatetransitionemptyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityupdatetransitionemptyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalididentityupdatetransitionemptyerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.InvalidIdentityUpdateTransitionEmptyError=InvalidIdentityUpdateTransitionEmptyError;class InvalidIndexPropertyTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIndexPropertyTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidindexpropertytypeerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexpropertytypeerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexpropertytypeerror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexpropertytypeerror_getPropertyName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexpropertytypeerror_getPropertyType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidindexpropertytypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexpropertytypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIndexPropertyTypeError=InvalidIndexPropertyTypeError;class InvalidIndexedPropertyConstraintError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidIndexedPropertyConstraintError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidindexedpropertyconstrainterror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexedpropertyconstrainterror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexedpropertyconstrainterror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexedpropertyconstrainterror_getPropertyName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getConstraintName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexedpropertyconstrainterror_getConstraintName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getReason(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexedpropertyconstrainterror_getReason(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidindexedpropertyconstrainterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidindexedpropertyconstrainterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidIndexedPropertyConstraintError=InvalidIndexedPropertyConstraintError;class InvalidInitialRevisionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidInitialRevisionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidinitialrevisionerror_free(ptr);}/**
    * @param {Document} document
    */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.invalidinitialrevisionerror_new(ptr0);return InvalidInitialRevisionError.__wrap(ret);}/**
    * @returns {Document}
    */getDocument(){const ret=wasm.invalidinitialrevisionerror_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}}/**
*/exports.InvalidInitialRevisionError=InvalidInitialRevisionError;class InvalidInstantAssetLockProofError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidInstantAssetLockProofError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidinstantassetlockprooferror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidinstantassetlockprooferror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidinstantassetlockprooferror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidInstantAssetLockProofError=InvalidInstantAssetLockProofError;class InvalidInstantAssetLockProofSignatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidInstantAssetLockProofSignatureError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidinstantassetlockproofsignatureerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidinstantassetlockproofsignatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidinstantassetlockproofsignatureerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidInstantAssetLockProofSignatureError=InvalidInstantAssetLockProofSignatureError;class InvalidJsonSchemaRefError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidJsonSchemaRefError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidjsonschemareferror_free(ptr);}/**
    * @returns {string}
    */getRefError(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidjsonschemareferror_getRefError(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidjsonschemareferror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidjsonschemareferror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidJsonSchemaRefError=InvalidJsonSchemaRefError;class InvalidSignaturePublicKeyPurposeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidSignaturePublicKeyPurposeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidsignaturepublickeypurposeerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyPurpose(){const ret=wasm.invalidsignaturepublickeypurposeerror_getPublicKeyPurpose(this.__wbg_ptr);return ret;}/**
    * @returns {Array<any>}
    */getKeyPurposeRequirement(){const ret=wasm.invalidsignaturepublickeypurposeerror_getKeyPurposeRequirement(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidsignaturepublickeypurposeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidsignaturepublickeypurposeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidSignaturePublicKeyPurposeError=InvalidSignaturePublicKeyPurposeError;class InvalidSignaturePublicKeySecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidSignaturePublicKeySecurityLevelError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidsignaturepublickeysecuritylevelerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeySecurityLevel(){const ret=wasm.invalidsignaturepublickeysecuritylevelerror_getPublicKeySecurityLevel(this.__wbg_ptr);return ret;}/**
    * @returns {Array<any>}
    */getKeySecurityLevelRequirement(){const ret=wasm.invalidsignaturepublickeysecuritylevelerror_getKeySecurityLevelRequirement(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidsignaturepublickeysecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidsignaturepublickeysecuritylevelerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidSignaturePublicKeySecurityLevelError=InvalidSignaturePublicKeySecurityLevelError;class InvalidStateTransitionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidStateTransitionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidstatetransitionerror_free(ptr);}/**
    * @param {any[]} error_buffers
    * @param {any} raw_state_transition
    */constructor(error_buffers,raw_state_transition){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(error_buffers,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.invalidstatetransitionerror_new_wasm(retptr,ptr0,len0,addHeapObject(raw_state_transition));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return InvalidStateTransitionError.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getErrors(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidstatetransitionerror_getErrors(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getRawStateTransition(){const ret=wasm.invalidstatetransitionerror_getRawStateTransition(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.InvalidStateTransitionError=InvalidStateTransitionError;class InvalidStateTransitionSignatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidStateTransitionSignatureError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidstatetransitionsignatureerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidstatetransitionsignatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidstatetransitionsignatureerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidStateTransitionSignatureError=InvalidStateTransitionSignatureError;class InvalidStateTransitionTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InvalidStateTransitionTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invalidstatetransitiontypeerror_free(ptr);}/**
    * @param {number} transition_type
    */constructor(transition_type){const ret=wasm.invalidstatetransitiontypeerror_new(transition_type);return InvalidStateTransitionTypeError.__wrap(ret);}/**
    * @returns {number}
    */getType(){const ret=wasm.invalidstatetransitiontypeerror_getType(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.invalidstatetransitiontypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.invalidstatetransitiontypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.InvalidStateTransitionTypeError=InvalidStateTransitionTypeError;class JsonSchemaCompilationError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(JsonSchemaCompilationError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_jsonschemacompilationerror_free(ptr);}/**
    * @returns {string}
    */getError(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemacompilationerror_getError(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.jsonschemacompilationerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemacompilationerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.JsonSchemaCompilationError=JsonSchemaCompilationError;class JsonSchemaError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(JsonSchemaError.prototype);obj.__wbg_ptr=ptr;return obj;}toJSON(){return{message:this.message,keyword:this.keyword,instancePath:this.instancePath,schemaPath:this.schemaPath,propertyName:this.propertyName,params:this.params,code:this.code};}toString(){return JSON.stringify(this);}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_jsonschemaerror_free(ptr);}/**
    * @returns {string}
    */getKeyword(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_getKeyword(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getInstancePath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_getInstancePath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getSchemaPath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_getSchemaPath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_getPropertyName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */getParams(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_getParams(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.jsonschemaerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */toString(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_toString(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */get keyword(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_keyword(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */get instancePath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_instancePath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */get schemaPath(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_schemaPath(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */get propertyName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_propertyName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */get params(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.jsonschemaerror_params(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {number}
    */get code(){const ret=wasm.jsonschemaerror_code(this.__wbg_ptr);return ret>>>0;}}/**
*/exports.JsonSchemaError=JsonSchemaError;class MasterPublicKeyUpdateError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasterPublicKeyUpdateError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masterpublickeyupdateerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.masterpublickeyupdateerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masterpublickeyupdateerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masterpublickeyupdateerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasterPublicKeyUpdateError=MasterPublicKeyUpdateError;class MasternodeIncorrectVoterIdentityIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeIncorrectVoterIdentityIdError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodeincorrectvoteridentityiderror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.masternodeincorrectvoteridentityiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodeincorrectvoteridentityiderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodeincorrectvoteridentityiderror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasternodeIncorrectVoterIdentityIdError=MasternodeIncorrectVoterIdentityIdError;class MasternodeIncorrectVotingAddressError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeIncorrectVotingAddressError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodeincorrectvotingaddresserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.masternodeincorrectvotingaddresserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodeincorrectvotingaddresserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodeincorrectvotingaddresserror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasternodeIncorrectVotingAddressError=MasternodeIncorrectVotingAddressError;class MasternodeNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodenotfounderror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.masternodenotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodenotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodenotfounderror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasternodeNotFoundError=MasternodeNotFoundError;class MasternodeVoteAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeVoteAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodevotealreadypresenterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.masternodevotealreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotealreadypresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotealreadypresenterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasternodeVoteAlreadyPresentError=MasternodeVoteAlreadyPresentError;class MasternodeVoteTransition{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeVoteTransition.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodevotetransition_free(ptr);}/**
    * @param {number} platform_version
    */constructor(platform_version){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotetransition_new(retptr,platform_version);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return MasternodeVoteTransition.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getOwnerId(){const ret=wasm.masternodevotetransition_getOwnerId(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getType(){const ret=wasm.masternodevotetransition_getType(this.__wbg_ptr);return ret;}/**
    * @returns {any}
    */getProTxHash(){const ret=wasm.masternodevotetransition_getProTxHash(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {any} pro_tx_hash
    */setProTxHash(pro_tx_hash){try{wasm.masternodevotetransition_setProTxHash(this.__wbg_ptr,addBorrowedObject(pro_tx_hash));}finally{heap[stack_pointer++]=undefined;}}/**
    * @param {any} options
    * @returns {any}
    */toObject(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotetransition_toObject(retptr,this.__wbg_ptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toBuffer(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotetransition_toBuffer(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotetransition_toJSON(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */getModifiedDataIds(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotetransition_getModifiedDataIds(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
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
    */getContestedDocumentResourceVotePoll(){const ret=wasm.masternodevotetransition_getContestedDocumentResourceVotePoll(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array} private_key
    * @param {number} key_type
    * @param {any | undefined} bls
    */signByPrivateKey(private_key,key_type,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.masternodevotetransition_signByPrivateKey(retptr,this.__wbg_ptr,ptr0,len0,key_type,isLikeNone(bls)?0:addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getSignature(){const ret=wasm.masternodevotetransition_getSignature(this.__wbg_ptr);return takeObject(ret);}/**
    * @param {Uint8Array | undefined} signature
    */setSignature(signature){var ptr0=isLikeNone(signature)?0:passArray8ToWasm0(signature,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.masternodevotetransition_setSignature(this.__wbg_ptr,ptr0,len0);}/**
    * @param {IdentityPublicKey} identity_public_key
    * @param {Uint8Array} private_key
    * @param {any} bls
    */sign(identity_public_key,private_key,bls){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(identity_public_key,IdentityPublicKey);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.masternodevotetransition_sign(retptr,this.__wbg_ptr,identity_public_key.__wbg_ptr,ptr0,len0,addHeapObject(bls));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasternodeVoteTransition=MasternodeVoteTransition;class MasternodeVotedTooManyTimesError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MasternodeVotedTooManyTimesError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_masternodevotedtoomanytimeserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.masternodevotedtoomanytimeserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotedtoomanytimeserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.masternodevotedtoomanytimeserror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MasternodeVotedTooManyTimesError=MasternodeVotedTooManyTimesError;class MaxDocumentsTransitionsExceededError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MaxDocumentsTransitionsExceededError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_maxdocumentstransitionsexceedederror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.maxdocumentstransitionsexceedederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.maxdocumentstransitionsexceedederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.maxdocumentstransitionsexceedederror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MaxDocumentsTransitionsExceededError=MaxDocumentsTransitionsExceededError;class MaxIdentityPublicKeyLimitReachedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MaxIdentityPublicKeyLimitReachedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_maxidentitypublickeylimitreachederror_free(ptr);}/**
    * @returns {number}
    */getMaxItems(){const ret=wasm.maxidentitypublickeylimitreachederror_getMaxItems(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.maxidentitypublickeylimitreachederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.maxidentitypublickeylimitreachederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MaxIdentityPublicKeyLimitReachedError=MaxIdentityPublicKeyLimitReachedError;class Metadata{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(Metadata.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_metadata_free(ptr);}/**
    * @param {any} options
    */constructor(options){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.metadata_new(retptr,addHeapObject(options));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Metadata.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @param {any} object
    * @returns {Metadata}
    */static from(object){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.metadata_from(retptr,addHeapObject(object));var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return Metadata.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */toJSON(){const ret=wasm.metadata_toJSON(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */toObject(){const ret=wasm.metadata_toObject(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getBlockHeight(){const ret=wasm.metadata_getBlockHeight(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCoreChainLockedHeight(){const ret=wasm.metadata_getCoreChainLockedHeight(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getTimeMs(){const ret=wasm.metadata_getTimeMs(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getProtocolVersion(){const ret=wasm.metadata_getProtocolVersion(this.__wbg_ptr);return ret;}}/**
*/exports.Metadata=Metadata;class MismatchOwnerIdsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MismatchOwnerIdsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_mismatchowneridserror_free(ptr);}/**
    * @param {any[]} documents
    */constructor(documents){const ptr0=passArrayJsValueToWasm0(documents,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.mismatchowneridserror_new(ptr0,len0);return MismatchOwnerIdsError.__wrap(ret);}/**
    * @returns {any[]}
    */getDocuments(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.mismatchowneridserror_getDocuments(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MismatchOwnerIdsError=MismatchOwnerIdsError;class MissingDataContractIdError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDataContractIdError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdatacontractiderror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingdatacontractiderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingdatacontractiderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingDataContractIdError=MissingDataContractIdError;class MissingDocumentTransitionActionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDocumentTransitionActionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdocumenttransitionactionerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingdocumenttransitionactionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingdocumenttransitionactionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingDocumentTransitionActionError=MissingDocumentTransitionActionError;class MissingDocumentTransitionTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDocumentTransitionTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdocumenttransitiontypeerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingdocumenttransitiontypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingdocumenttransitiontypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingDocumentTransitionTypeError=MissingDocumentTransitionTypeError;class MissingDocumentTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingDocumentTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingdocumenttypeerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingdocumenttypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingdocumenttypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingDocumentTypeError=MissingDocumentTypeError;class MissingIdentityPublicKeyIdsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingIdentityPublicKeyIdsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingidentitypublickeyidserror_free(ptr);}/**
    * @returns {Array<any>}
    */getDuplicatedIds(){const ret=wasm.missingidentitypublickeyidserror_getDuplicatedIds(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.MissingIdentityPublicKeyIdsError=MissingIdentityPublicKeyIdsError;class MissingMasterPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingMasterPublicKeyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingmasterpublickeyerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingmasterpublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingmasterpublickeyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingMasterPublicKeyError=MissingMasterPublicKeyError;class MissingPositionsInDocumentTypePropertiesError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingPositionsInDocumentTypePropertiesError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingpositionsindocumenttypepropertieserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingpositionsindocumenttypepropertieserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingpositionsindocumenttypepropertieserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingpositionsindocumenttypepropertieserror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MissingPositionsInDocumentTypePropertiesError=MissingPositionsInDocumentTypePropertiesError;class MissingPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingPublicKeyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingpublickeyerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyId(){const ret=wasm.missingpublickeyerror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingpublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingpublickeyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingPublicKeyError=MissingPublicKeyError;class MissingStateTransitionTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingStateTransitionTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingstatetransitiontypeerror_free(ptr);}/**
    */constructor(){const ret=wasm.missingstatetransitiontypeerror_new();return MissingStateTransitionTypeError.__wrap(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingstatetransitiontypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingstatetransitiontypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.MissingStateTransitionTypeError=MissingStateTransitionTypeError;class MissingTransferKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(MissingTransferKeyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_missingtransferkeyerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.missingtransferkeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingtransferkeyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.missingtransferkeyerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.MissingTransferKeyError=MissingTransferKeyError;class NoDocumentsSuppliedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(NoDocumentsSuppliedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_nodocumentssuppliederror_free(ptr);}/**
    */constructor(){const ret=wasm.nodocumentssuppliederror_new();return NoDocumentsSuppliedError.__wrap(ret);}}/**
*/exports.NoDocumentsSuppliedError=NoDocumentsSuppliedError;class NoTransferKeyForCoreWithdrawalAvailableError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(NoTransferKeyForCoreWithdrawalAvailableError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_notransferkeyforcorewithdrawalavailableerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.notransferkeyforcorewithdrawalavailableerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.notransferkeyforcorewithdrawalavailableerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.notransferkeyforcorewithdrawalavailableerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.NoTransferKeyForCoreWithdrawalAvailableError=NoTransferKeyForCoreWithdrawalAvailableError;class NonConsensusErrorWasm{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_nonconsensuserrorwasm_free(ptr);}}/**
*/exports.NonConsensusErrorWasm=NonConsensusErrorWasm;class NotImplementedIdentityCreditWithdrawalTransitionPoolingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(NotImplementedIdentityCreditWithdrawalTransitionPoolingError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_free(ptr);}/**
    * @returns {number}
    */getPooling(){const ret=wasm.notimplementedidentitycreditwithdrawaltransitionpoolingerror_getPooling(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.notimplementedidentitycreditwithdrawaltransitionpoolingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.notimplementedidentitycreditwithdrawaltransitionpoolingerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.NotImplementedIdentityCreditWithdrawalTransitionPoolingError=NotImplementedIdentityCreditWithdrawalTransitionPoolingError;class OverflowError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(OverflowError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_overflowerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.overflowerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.overflowerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.overflowerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.OverflowError=OverflowError;class PlatformValueError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PlatformValueError.prototype);obj.__wbg_ptr=ptr;return obj;}toJSON(){return{};}toString(){return JSON.stringify(this);}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_platformvalueerror_free(ptr);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.platformvalueerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */toString(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.platformvalueerror_toString(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */valueOf(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.platformvalueerror_valueOf(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.PlatformValueError=PlatformValueError;class PrefundedSpecializedBalanceInsufficientError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PrefundedSpecializedBalanceInsufficientError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_prefundedspecializedbalanceinsufficienterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.prefundedspecializedbalanceinsufficienterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.prefundedspecializedbalanceinsufficienterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.prefundedspecializedbalanceinsufficienterror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.PrefundedSpecializedBalanceInsufficientError=PrefundedSpecializedBalanceInsufficientError;class PrefundedSpecializedBalanceNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PrefundedSpecializedBalanceNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_prefundedspecializedbalancenotfounderror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.prefundedspecializedbalancenotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.prefundedspecializedbalancenotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.prefundedspecializedbalancenotfounderror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.PrefundedSpecializedBalanceNotFoundError=PrefundedSpecializedBalanceNotFoundError;class ProtocolVersionParsingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ProtocolVersionParsingError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_protocolversionparsingerror_free(ptr);}/**
    * @param {string} parsing_error
    */constructor(parsing_error){const ptr0=passStringToWasm0(parsing_error,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.protocolversionparsingerror_new(ptr0,len0);return ProtocolVersionParsingError.__wrap(ret);}/**
    * @returns {string}
    */getParsingError(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.protocolversionparsingerror_getParsingError(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.protocolversionparsingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.protocolversionparsingerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.protocolversionparsingerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.ProtocolVersionParsingError=ProtocolVersionParsingError;class PublicKeyIsDisabledError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PublicKeyIsDisabledError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_publickeyisdisablederror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyId(){const ret=wasm.publickeyisdisablederror_getPublicKeyId(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.publickeyisdisablederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.publickeyisdisablederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.PublicKeyIsDisabledError=PublicKeyIsDisabledError;class PublicKeySecurityLevelNotMetError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PublicKeySecurityLevelNotMetError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_publickeysecuritylevelnotmeterror_free(ptr);}/**
    * @returns {number}
    */getPublicKeySecurityLevel(){const ret=wasm.publickeysecuritylevelnotmeterror_getPublicKeySecurityLevel(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getKeySecurityLevelRequirement(){const ret=wasm.publickeysecuritylevelnotmeterror_getKeySecurityLevelRequirement(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.publickeysecuritylevelnotmeterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.publickeysecuritylevelnotmeterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.PublicKeySecurityLevelNotMetError=PublicKeySecurityLevelNotMetError;class RevisionAbsentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(RevisionAbsentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_revisionabsenterror_free(ptr);}/**
    * @param {Document} document
    */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.revisionabsenterror_new(ptr0);return RevisionAbsentError.__wrap(ret);}/**
    * @returns {Document}
    */getDocument(){const ret=wasm.revisionabsenterror_getDocument(this.__wbg_ptr);return Document.__wrap(ret);}}/**
*/exports.RevisionAbsentError=RevisionAbsentError;class SerializedObjectParsingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SerializedObjectParsingError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_serializedobjectparsingerror_free(ptr);}/**
    * @returns {string}
    */getParsingError(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.serializedobjectparsingerror_getParsingError(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.serializedobjectparsingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.serializedobjectparsingerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.SerializedObjectParsingError=SerializedObjectParsingError;class SignatureShouldNotBePresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SignatureShouldNotBePresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_signatureshouldnotbepresenterror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.signatureshouldnotbepresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.signatureshouldnotbepresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.SignatureShouldNotBePresentError=SignatureShouldNotBePresentError;class StateTransitionFactory{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(StateTransitionFactory.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_statetransitionfactory_free(ptr);}/**
    * @param {Uint8Array} buffer
    * @param {any} _options
    * @returns {Promise<any>}
    */createFromBuffer(buffer,_options){const ptr0=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.statetransitionfactory_createFromBuffer(this.__wbg_ptr,ptr0,len0,addHeapObject(_options));return takeObject(ret);}}/**
*/exports.StateTransitionFactory=StateTransitionFactory;class StateTransitionMaxSizeExceededError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(StateTransitionMaxSizeExceededError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_statetransitionmaxsizeexceedederror_free(ptr);}/**
    * @returns {bigint}
    */getActualSizeBytes(){const ret=wasm.statetransitionmaxsizeexceedederror_getActualSizeBytes(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {bigint}
    */getMaxSizeBytes(){const ret=wasm.statetransitionmaxsizeexceedederror_getMaxSizeBytes(this.__wbg_ptr);return BigInt.asUintN(64,ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.statetransitionmaxsizeexceedederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.statetransitionmaxsizeexceedederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.StateTransitionMaxSizeExceededError=StateTransitionMaxSizeExceededError;class SystemPropertyIndexAlreadyPresentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SystemPropertyIndexAlreadyPresentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_systempropertyindexalreadypresenterror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.systempropertyindexalreadypresenterror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.systempropertyindexalreadypresenterror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.systempropertyindexalreadypresenterror_getPropertyName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.systempropertyindexalreadypresenterror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.systempropertyindexalreadypresenterror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.SystemPropertyIndexAlreadyPresentError=SystemPropertyIndexAlreadyPresentError;class TooManyMasterPublicKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TooManyMasterPublicKeyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_toomanymasterpublickeyerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.toomanymasterpublickeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.toomanymasterpublickeyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.toomanymasterpublickeyerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.TooManyMasterPublicKeyError=TooManyMasterPublicKeyError;class TryingToDeleteImmutableDocumentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TryingToDeleteImmutableDocumentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_tryingtodeleteimmutabledocumenterror_free(ptr);}/**
    * @param {Document} document
    */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.tryingtodeleteimmutabledocumenterror_new(ptr0);return TryingToDeleteImmutableDocumentError.__wrap(ret);}}/**
*/exports.TryingToDeleteImmutableDocumentError=TryingToDeleteImmutableDocumentError;class TryingToReplaceImmutableDocumentError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TryingToReplaceImmutableDocumentError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_tryingtoreplaceimmutabledocumenterror_free(ptr);}/**
    * @param {Document} document
    */constructor(document){_assertClass(document,Document);var ptr0=document.__destroy_into_raw();const ret=wasm.tryingtoreplaceimmutabledocumenterror_new(ptr0);return TryingToReplaceImmutableDocumentError.__wrap(ret);}}/**
*/exports.TryingToReplaceImmutableDocumentError=TryingToReplaceImmutableDocumentError;class UndefinedIndexPropertyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UndefinedIndexPropertyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_undefinedindexpropertyerror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.undefinedindexpropertyerror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getIndexName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.undefinedindexpropertyerror_getIndexName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {string}
    */getPropertyName(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.undefinedindexpropertyerror_getPropertyName(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.undefinedindexpropertyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.undefinedindexpropertyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.UndefinedIndexPropertyError=UndefinedIndexPropertyError;class UniqueIndicesLimitReachedError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UniqueIndicesLimitReachedError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_uniqueindiceslimitreachederror_free(ptr);}/**
    * @returns {string}
    */getDocumentType(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.uniqueindiceslimitreachederror_getDocumentType(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getIndexLimit(){const ret=wasm.uniqueindiceslimitreachederror_getIndexLimit(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.uniqueindiceslimitreachederror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.uniqueindiceslimitreachederror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.UniqueIndicesLimitReachedError=UniqueIndicesLimitReachedError;class UnknownAssetLockProofTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownAssetLockProofTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknownassetlockprooftypeerror_free(ptr);}/**
    * @returns {number | undefined}
    */getType(){const ret=wasm.unknownassetlockprooftypeerror_getType(this.__wbg_ptr);return ret===0xFFFFFF?undefined:ret;}}/**
*/exports.UnknownAssetLockProofTypeError=UnknownAssetLockProofTypeError;class UnknownDocumentCreationRestrictionModeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownDocumentCreationRestrictionModeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknowndocumentcreationrestrictionmodeerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.unknowndocumentcreationrestrictionmodeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknowndocumentcreationrestrictionmodeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknowndocumentcreationrestrictionmodeerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.UnknownDocumentCreationRestrictionModeError=UnknownDocumentCreationRestrictionModeError;class UnknownSecurityLevelError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownSecurityLevelError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknownsecuritylevelerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.unknownsecuritylevelerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknownsecuritylevelerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknownsecuritylevelerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.UnknownSecurityLevelError=UnknownSecurityLevelError;class UnknownStorageKeyRequirementsError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownStorageKeyRequirementsError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknownstoragekeyrequirementserror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.unknownstoragekeyrequirementserror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknownstoragekeyrequirementserror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknownstoragekeyrequirementserror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.UnknownStorageKeyRequirementsError=UnknownStorageKeyRequirementsError;class UnknownTradeModeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownTradeModeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknowntrademodeerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.unknowntrademodeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknowntrademodeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknowntrademodeerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.UnknownTradeModeError=UnknownTradeModeError;class UnknownTransferableTypeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnknownTransferableTypeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unknowntransferabletypeerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.unknowntransferabletypeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknowntransferabletypeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unknowntransferabletypeerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.UnknownTransferableTypeError=UnknownTransferableTypeError;class UnsupportedFeatureError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnsupportedFeatureError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unsupportedfeatureerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.unsupportedfeatureerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unsupportedfeatureerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unsupportedfeatureerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.UnsupportedFeatureError=UnsupportedFeatureError;class UnsupportedProtocolVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnsupportedProtocolVersionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unsupportedprotocolversionerror_free(ptr);}/**
    * @returns {number}
    */getParsedProtocolVersion(){const ret=wasm.unsupportedprotocolversionerror_getParsedProtocolVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getLatestVersion(){const ret=wasm.unsupportedprotocolversionerror_getLatestVersion(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {number}
    */getCode(){const ret=wasm.unsupportedprotocolversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unsupportedprotocolversionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.UnsupportedProtocolVersionError=UnsupportedProtocolVersionError;class UnsupportedVersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnsupportedVersionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unsupportedversionerror_free(ptr);}/**
    * @returns {number}
    */getReceivedVersion(){const ret=wasm.unsupportedversionerror_getReceivedVersion(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getMinVersion(){const ret=wasm.unsupportedversionerror_getMinVersion(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getMaxVersion(){const ret=wasm.unsupportedversionerror_getMaxVersion(this.__wbg_ptr);return ret;}/**
    * @returns {number}
    */getCode(){const ret=wasm.unsupportedversionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.unsupportedversionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.UnsupportedVersionError=UnsupportedVersionError;class ValidationResult{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ValidationResult.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_validationresult_free(ptr);}/**
    * @param {any[] | undefined} errors_option
    */constructor(errors_option){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);var ptr0=isLikeNone(errors_option)?0:passArrayJsValueToWasm0(errors_option,wasm.__wbindgen_malloc);var len0=WASM_VECTOR_LEN;wasm.validationresult_new(retptr,ptr0,len0);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return ValidationResult.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * This is just a test method - doesn't need to be in the resulted binding. Please
    * remove before shipping
    * @returns {(string)[]}
    */errorsText(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.validationresult_errorsText(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {boolean}
    */isValid(){const ret=wasm.validationresult_isValid(this.__wbg_ptr);return ret!==0;}/**
    * @returns {any[]}
    */getErrors(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.validationresult_getErrors(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any[]}
    */get errors(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.validationresult_errors(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
    * @returns {any}
    */getData(){const ret=wasm.validationresult_getData(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {any}
    */getFirstError(){const ret=wasm.validationresult_getFirstError(this.__wbg_ptr);return takeObject(ret);}}/**
*/exports.ValidationResult=ValidationResult;class ValueError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ValueError.prototype);obj.__wbg_ptr=ptr;return obj;}toJSON(){return{message:this.message};}toString(){return JSON.stringify(this);}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_valueerror_free(ptr);}/**
    * @returns {string}
    */getMessage(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.valueerror_getMessage(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {number}
    */getCode(){const ret=wasm.valueerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.valueerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}/**
*/exports.ValueError=ValueError;class VersionError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VersionError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_versionerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.versionerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.versionerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.versionerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.VersionError=VersionError;class VotePollNotAvailableForVotingError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VotePollNotAvailableForVotingError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_votepollnotavailableforvotingerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.votepollnotavailableforvotingerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.votepollnotavailableforvotingerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.votepollnotavailableforvotingerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.VotePollNotAvailableForVotingError=VotePollNotAvailableForVotingError;class VotePollNotFoundError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VotePollNotFoundError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_votepollnotfounderror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.votepollnotfounderror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.votepollnotfounderror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.votepollnotfounderror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.VotePollNotFoundError=VotePollNotFoundError;class WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_free(ptr);}/**
    * @returns {number}
    */getCode(){const ret=wasm.withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}/**
    * @returns {any}
    */serialize(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_serialize(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];var r2=getInt32Memory0()[retptr/4+2];if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}/**
*/exports.WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError=WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError;class WrongPublicKeyPurposeError{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(WrongPublicKeyPurposeError.prototype);obj.__wbg_ptr=ptr;return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_wrongpublickeypurposeerror_free(ptr);}/**
    * @returns {number}
    */getPublicKeyPurpose(){const ret=wasm.wrongpublickeypurposeerror_getPublicKeyPurpose(this.__wbg_ptr);return ret;}/**
    * @returns {Array<any>}
    */getKeyPurposeRequirement(){const ret=wasm.wrongpublickeypurposeerror_getKeyPurposeRequirement(this.__wbg_ptr);return takeObject(ret);}/**
    * @returns {number}
    */getCode(){const ret=wasm.wrongpublickeypurposeerror_getCode(this.__wbg_ptr);return ret>>>0;}/**
    * @returns {string}
    */get message(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.wrongpublickeypurposeerror_message(retptr,this.__wbg_ptr);var r0=getInt32Memory0()[retptr/4+0];var r1=getInt32Memory0()[retptr/4+1];deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1);}}}exports.WrongPublicKeyPurposeError=WrongPublicKeyPurposeError;async function __wbg_load(module,imports){if(typeof Response==='function'&&module instanceof Response){if(typeof WebAssembly.instantiateStreaming==='function'){try{return await WebAssembly.instantiateStreaming(module,imports);}catch(e){if(module.headers.get('Content-Type')!='application/wasm'){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e);}else{throw e;}}}const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports);}else{const instance=await WebAssembly.instantiate(module,imports);if(instance instanceof WebAssembly.Instance){return{instance,module};}else{return instance;}}}function __wbg_get_imports(){const imports={};imports.wbg={};imports.wbg.__wbg_set_ada80c5c4e5df1d8=function(arg0,arg1,arg2,arg3){(0,_lodash.set)(getObject(arg0),getStringFromWasm0(arg1,arg2),takeObject(arg3));};imports.wbg.__wbg_generate_c944ea15fe62e1b8=function(){return handleError(function(arg0){const ret=getObject(arg0).generate();return addHeapObject(ret);},arguments);};imports.wbg.__wbg_from_47629db8f6f87531=function(arg0,arg1){const ret=Buffer.from(getArrayU8FromWasm0(arg0,arg1));return addHeapObject(ret);};imports.wbg.__wbg_from_9bf7e71421cc4717=function(arg0,arg1){var v0=getArrayU8FromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*1);const ret=Buffer.from(v0);return addHeapObject(ret);};imports.wbg.__wbg_buffer_3df8c93101cd6f78=function(arg0){const ret=getObject(arg0).buffer;return addHeapObject(ret);};imports.wbg.__wbg_byteOffset_6131852d44b5703a=function(arg0){const ret=getObject(arg0).byteOffset;return ret;};imports.wbg.__wbg_length_6fc1fdfcb18d52bd=function(arg0){const ret=getObject(arg0).length;return ret;};imports.wbg.__wbg_new_22a3961eb3e8ec59=function(arg0){const ret=new _Identifier.default(takeObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_toBuffer_04108c06526aa767=function(arg0,arg1){const ret=getObject(arg1).toBuffer();const ptr1=passArray8ToWasm0(ret,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len1;getInt32Memory0()[arg0/4+0]=ptr1;};imports.wbg.__wbg_verifySignature_af546a19c0256a12=function(){return handleError(function(arg0,arg1,arg2,arg3,arg4,arg5,arg6){const ret=getObject(arg0).verifySignature(getArrayU8FromWasm0(arg1,arg2),getArrayU8FromWasm0(arg3,arg4),getArrayU8FromWasm0(arg5,arg6));return ret;},arguments);};imports.wbg.__wbg_privateKeyToPublicKey_f3cfb252d56150fe=function(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).privateKeyToPublicKey(getArrayU8FromWasm0(arg1,arg2));return addHeapObject(ret);},arguments);};imports.wbg.__wbg_sign_1d3cc47f42719b68=function(){return handleError(function(arg0,arg1,arg2,arg3,arg4){const ret=getObject(arg0).sign(getArrayU8FromWasm0(arg1,arg2),getArrayU8FromWasm0(arg3,arg4));return addHeapObject(ret);},arguments);};imports.wbg.__wbindgen_error_new=function(arg0,arg1){const ret=new Error(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);};imports.wbg.__wbindgen_is_undefined=function(arg0){const ret=getObject(arg0)===undefined;return ret;};imports.wbg.__wbindgen_in=function(arg0,arg1){const ret=(getObject(arg0)in getObject(arg1));return ret;};imports.wbg.__wbindgen_number_get=function(arg0,arg1){const obj=getObject(arg1);const ret=typeof obj==='number'?obj:undefined;getFloat64Memory0()[arg0/8+1]=isLikeNone(ret)?0:ret;getInt32Memory0()[arg0/4+0]=!isLikeNone(ret);};imports.wbg.__wbindgen_boolean_get=function(arg0){const v=getObject(arg0);const ret=typeof v==='boolean'?v?1:0:2;return ret;};imports.wbg.__wbindgen_is_null=function(arg0){const ret=getObject(arg0)===null;return ret;};imports.wbg.__wbindgen_number_new=function(arg0){const ret=arg0;return addHeapObject(ret);};imports.wbg.__wbindgen_string_new=function(arg0,arg1){const ret=getStringFromWasm0(arg0,arg1);return addHeapObject(ret);};imports.wbg.__wbindgen_is_falsy=function(arg0){const ret=!getObject(arg0);return ret;};imports.wbg.__wbindgen_string_get=function(arg0,arg1){const obj=getObject(arg1);const ret=typeof obj==='string'?obj:undefined;var ptr1=isLikeNone(ret)?0:passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len1;getInt32Memory0()[arg0/4+0]=ptr1;};imports.wbg.__wbindgen_is_bigint=function(arg0){const ret=typeof getObject(arg0)==='bigint';return ret;};imports.wbg.__wbindgen_is_object=function(arg0){const val=getObject(arg0);const ret=typeof val==='object'&&val!==null;return ret;};imports.wbg.__wbindgen_object_clone_ref=function(arg0){const ret=getObject(arg0);return addHeapObject(ret);};imports.wbg.__wbindgen_jsval_eq=function(arg0,arg1){const ret=getObject(arg0)===getObject(arg1);return ret;};imports.wbg.__wbindgen_bigint_from_i64=function(arg0){const ret=arg0;return addHeapObject(ret);};imports.wbg.__wbindgen_bigint_from_u64=function(arg0){const ret=BigInt.asUintN(64,arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontract_new=function(arg0){const ret=DataContract.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractgenericerror_new=function(arg0){const ret=DataContractGenericError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenttypeindatacontracterror_new=function(arg0){const ret=InvalidDocumentTypeInDataContractError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractcreatetransition_new=function(arg0){const ret=DataContractCreateTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractupdatetransition_new=function(arg0){const ret=DataContractUpdateTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentalreadyexistserror_new=function(arg0){const ret=DocumentAlreadyExistsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentnorevisionerror_new=function(arg0){const ret=DocumentNoRevisionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentnotprovidederror_new=function(arg0){const ret=DocumentNotProvidedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidactionerror_new=function(arg0){const ret=InvalidActionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidactionnameerror_new=function(arg0){const ret=InvalidActionNameError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumentactionerror_new=function(arg0){const ret=InvalidDocumentActionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenterror_new=function(arg0){const ret=InvalidDocumentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidinitialrevisionerror_new=function(arg0){const ret=InvalidInitialRevisionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_mismatchowneridserror_new=function(arg0){const ret=MismatchOwnerIdsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_nodocumentssuppliederror_new=function(arg0){const ret=NoDocumentsSuppliedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_revisionabsenterror_new=function(arg0){const ret=RevisionAbsentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_tryingtodeleteimmutabledocumenterror_new=function(arg0){const ret=TryingToDeleteImmutableDocumentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_tryingtoreplaceimmutabledocumenterror_new=function(arg0){const ret=TryingToReplaceImmutableDocumentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documenttransition_new=function(arg0){const ret=DocumentTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentsbatchtransition_new=function(arg0){const ret=DocumentsBatchTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_document_new=function(arg0){const ret=Document.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontracterror_new=function(arg0){const ret=DataContractError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontracthavenewuniqueindexerror_new=function(arg0){const ret=DataContractHaveNewUniqueIndexError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractimmutablepropertiesupdateerror_new=function(arg0){const ret=DataContractImmutablePropertiesUpdateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractinvalidindexdefinitionupdateerror_new=function(arg0){const ret=DataContractInvalidIndexDefinitionUpdateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractmaxdepthexceederror_new=function(arg0){const ret=DataContractMaxDepthExceedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractuniqueindiceschangederror_new=function(arg0){const ret=DataContractUniqueIndicesChangedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicateindexnameerror_new=function(arg0){const ret=DuplicateIndexNameError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_incompatibledatacontractschemaerror_new=function(arg0){const ret=IncompatibleDataContractSchemaError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_incompatibledocumenttypeschemaerror_new=function(arg0){const ret=IncompatibleDocumentTypeSchemaError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_incompatiblere2patternerror_new=function(arg0){const ret=IncompatibleRe2PatternError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicateindexerror_new=function(arg0){const ret=DuplicateIndexError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidcompoundindexerror_new=function(arg0){const ret=InvalidCompoundIndexError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidindexpropertytypeerror_new=function(arg0){const ret=InvalidIndexPropertyTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidindexedpropertyconstrainterror_new=function(arg0){const ret=InvalidIndexedPropertyConstraintError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_systempropertyindexalreadypresenterror_new=function(arg0){const ret=SystemPropertyIndexAlreadyPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_undefinedindexpropertyerror_new=function(arg0){const ret=UndefinedIndexPropertyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_uniqueindiceslimitreachederror_new=function(arg0){const ret=UniqueIndicesLimitReachedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddatacontractiderror_new=function(arg0){const ret=InvalidDataContractIdError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddatacontractversionerror_new=function(arg0){const ret=InvalidDataContractVersionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenttypenameerror_new=function(arg0){const ret=InvalidDocumentTypeNameError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidjsonschemareferror_new=function(arg0){const ret=InvalidJsonSchemaRefError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_protocolversionparsingerror_new=function(arg0){const ret=ProtocolVersionParsingError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_serializedobjectparsingerror_new=function(arg0){const ret=SerializedObjectParsingError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractnotpresenterror_new=function(arg0){const ret=DataContractNotPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documenttransitionsareabsenterror_new=function(arg0){const ret=DocumentTransitionsAreAbsentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicatedocumenttransitionswithidserror_new=function(arg0){const ret=DuplicateDocumentTransitionsWithIdsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicatedocumenttransitionswithindiceserror_new=function(arg0){const ret=DuplicateDocumentTransitionsWithIndicesError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitycontractnonceoutofboundserror_new=function(arg0){const ret=IdentityContractNonceOutOfBoundsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_inconsistentcompoundindexdataerror_new=function(arg0){const ret=InconsistentCompoundIndexDataError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenttransitionactionerror_new=function(arg0){const ret=InvalidDocumentTransitionActionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenttransitioniderror_new=function(arg0){const ret=InvalidDocumentTransitionIdError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenttypeerror_new=function(arg0){const ret=InvalidDocumentTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingdatacontractiderror_new=function(arg0){const ret=MissingDataContractIdError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingdocumenttransitionactionerror_new=function(arg0){const ret=MissingDocumentTransitionActionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingdocumenttransitiontypeerror_new=function(arg0){const ret=MissingDocumentTransitionTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingdocumenttypeerror_new=function(arg0){const ret=MissingDocumentTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicatedidentitypublickeyerror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicatedidentitypublickeyiderror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyIdError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityassetlockprooflockedtransactionmismatcherror_new=function(arg0){const ret=IdentityAssetLockProofLockedTransactionMismatchError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityassetlocktransactionreplayerror_new=function(arg0){const ret=IdentityAssetLockTransactionReplayError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityassetlocktransactionisnotfounderror_new=function(arg0){const ret=IdentityAssetLockTransactionIsNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityassetlocktransactionoutpointalreadyexistserror_new=function(arg0){const ret=IdentityAssetLockTransactionOutPointAlreadyExistsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityassetlocktransactionoutputnotfounderror_new=function(arg0){const ret=IdentityAssetLockTransactionOutputNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitycredittransfertoselferror_new=function(arg0){const ret=IdentityCreditTransferToSelfError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityinsufficientbalanceerror_new=function(arg0){const ret=IdentityInsufficientBalanceError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidassetlockproofcorechainheighterror_new=function(arg0){const ret=InvalidAssetLockProofCoreChainHeightError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidassetlockprooftransactionheighterror_new=function(arg0){const ret=InvalidAssetLockProofTransactionHeightError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidassetlocktransactionoutputreturnsizeerror_new=function(arg0){const ret=InvalidAssetLockTransactionOutputReturnSizeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityassetlocktransactionoutpointnotenoughbalanceerror_new=function(arg0){const ret=IdentityAssetLockTransactionOutPointNotEnoughBalanceError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityassetlockproofchainlockvalidationerrorwasm_new=function(arg0){const ret=InvalidIdentityAssetLockProofChainLockValidationErrorWasm.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityassetlocktransactionerror_new=function(arg0){const ret=InvalidIdentityAssetLockTransactionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityassetlocktransactionoutputerror_new=function(arg0){const ret=InvalidIdentityAssetLockTransactionOutputError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitycredittransferamounterror_new=function(arg0){const ret=InvalidIdentityCreditTransferAmountError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitycreditwithdrawaltransitioncorefeeerror_new=function(arg0){const ret=InvalidIdentityCreditWithdrawalTransitionCoreFeeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitycreditwithdrawaltransitionoutputscripterror_new=function(arg0){const ret=InvalidIdentityCreditWithdrawalTransitionOutputScriptError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_notimplementedidentitycreditwithdrawaltransitionpoolingerror_new=function(arg0){const ret=NotImplementedIdentityCreditWithdrawalTransitionPoolingError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitykeysignatureerror_new=function(arg0){const ret=InvalidIdentityKeySignatureError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitypublickeydataerror_new=function(arg0){const ret=InvalidIdentityPublicKeyDataError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitypublickeysecuritylevelerror_new=function(arg0){const ret=InvalidIdentityPublicKeySecurityLevelError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitypublickeytypeerror_new=function(arg0){const ret=InvalidIdentityPublicKeyTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidinstantassetlockprooferror_new=function(arg0){const ret=InvalidInstantAssetLockProofError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidinstantassetlockproofsignatureerror_new=function(arg0){const ret=InvalidInstantAssetLockProofSignatureError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingmasterpublickeyerror_new=function(arg0){const ret=MissingMasterPublicKeyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingpublickeyerror_new=function(arg0){const ret=MissingPublicKeyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_incompatibleprotocolversionerror_new=function(arg0){const ret=IncompatibleProtocolVersionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentifiererror_new=function(arg0){const ret=InvalidIdentifierError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidsignaturepublickeypurposeerror_new=function(arg0){const ret=InvalidSignaturePublicKeyPurposeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidsignaturepublickeysecuritylevelerror_new=function(arg0){const ret=InvalidSignaturePublicKeySecurityLevelError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidstatetransitionsignatureerror_new=function(arg0){const ret=InvalidStateTransitionSignatureError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_jsonschemacompilationerror_new=function(arg0){const ret=JsonSchemaCompilationError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_jsonschemaerror_new=function(arg0){const ret=JsonSchemaError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_publickeyisdisablederror_new=function(arg0){const ret=PublicKeyIsDisabledError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_publickeysecuritylevelnotmeterror_new=function(arg0){const ret=PublicKeySecurityLevelNotMetError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidstatetransitiontypeerror_new=function(arg0){const ret=InvalidStateTransitionTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingstatetransitiontypeerror_new=function(arg0){const ret=MissingStateTransitionTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_statetransitionmaxsizeexceedederror_new=function(arg0){const ret=StateTransitionMaxSizeExceededError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unsupportedprotocolversionerror_new=function(arg0){const ret=UnsupportedProtocolVersionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unsupportedversionerror_new=function(arg0){const ret=UnsupportedVersionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_wrongpublickeypurposeerror_new=function(arg0){const ret=WrongPublicKeyPurposeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_balanceisnotenougherror_new=function(arg0){const ret=BalanceIsNotEnoughError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_basicblserror_new=function(arg0){const ret=BasicBLSError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_basicecdsaerror_new=function(arg0){const ret=BasicECDSAError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitynotfounderror_new=function(arg0){const ret=IdentityNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_signatureshouldnotbepresenterror_new=function(arg0){const ret=SignatureShouldNotBePresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractalreadypresenterror_new=function(arg0){const ret=DataContractAlreadyPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractconfigupdateerror_new=function(arg0){const ret=DataContractConfigUpdateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractisreadonlyerror_new=function(arg0){const ret=DataContractIsReadonlyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractupdatepermissionerror_new=function(arg0){const ret=DataContractUpdatePermissionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datatriggerconditionerror_new=function(arg0){const ret=DataTriggerConditionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datatriggerexecutionerror_new=function(arg0){const ret=DataTriggerExecutionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datatriggerinvalidresulterror_new=function(arg0){const ret=DataTriggerInvalidResultError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentalreadypresenterror_new=function(arg0){const ret=DocumentAlreadyPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentnotfounderror_new=function(arg0){const ret=DocumentNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentowneridmismatcherror_new=function(arg0){const ret=DocumentOwnerIdMismatchError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documenttimestampwindowviolationerror_new=function(arg0){const ret=DocumentTimestampWindowViolationError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documenttimestampsareequalerror_new=function(arg0){const ret=DocumentTimestampsAreEqualError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documenttimestampsmismatcherror_new=function(arg0){const ret=DocumentTimestampsMismatchError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicateuniqueindexerror_new=function(arg0){const ret=DuplicateUniqueIndexError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumentrevisionerror_new=function(arg0){const ret=InvalidDocumentRevisionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicatedidentitypublickeyidstateerror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyIdStateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_duplicatedidentitypublickeystateerror_new=function(arg0){const ret=DuplicatedIdentityPublicKeyStateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityalreadyexistserror_new=function(arg0){const ret=IdentityAlreadyExistsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitypublickeyisdisablederror_new=function(arg0){const ret=IdentityPublicKeyIsDisabledError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitypublickeyisreadonlyerror_new=function(arg0){const ret=IdentityPublicKeyIsReadOnlyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitynonceerror_new=function(arg0){const ret=InvalidIdentityNonceError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitypublickeyiderror_new=function(arg0){const ret=InvalidIdentityPublicKeyIdError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityrevisionerror_new=function(arg0){const ret=InvalidIdentityRevisionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_maxidentitypublickeylimitreachederror_new=function(arg0){const ret=MaxIdentityPublicKeyLimitReachedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingidentitypublickeyidserror_new=function(arg0){const ret=MissingIdentityPublicKeyIdsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_valueerror_new=function(arg0){const ret=ValueError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractnotpresentnotconsensuserror_new=function(arg0){const ret=DataContractNotPresentNotConsensusError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_platformvalueerror_new=function(arg0){const ret=PlatformValueError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitypublickey_new=function(arg0){const ret=IdentityPublicKey.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityerror_new=function(arg0){const ret=InvalidIdentityError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unknownassetlockprooftypeerror_new=function(arg0){const ret=UnknownAssetLockProofTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_chainassetlockproof_new=function(arg0){const ret=ChainAssetLockProof.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_instantassetlockproof_new=function(arg0){const ret=InstantAssetLockProof.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitycreatetransition_new=function(arg0){const ret=IdentityCreateTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitycredittransfertransition_new=function(arg0){const ret=IdentityCreditTransferTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitycreditwithdrawaltransition_new=function(arg0){const ret=IdentityCreditWithdrawalTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitypublickeywithwitness_new=function(arg0){const ret=IdentityPublicKeyWithWitness.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitytopuptransition_new=function(arg0){const ret=IdentityTopUpTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identityupdatetransition_new=function(arg0){const ret=IdentityUpdateTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalidstatetransitionerror_new=function(arg0){const ret=InvalidStateTransitionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masternodevotetransition_new=function(arg0){const ret=MasternodeVoteTransition.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_withdrawaloutputscriptnotallowedwhensigningwithownerkeyerror_new=function(arg0){const ret=WithdrawalOutputScriptNotAllowedWhenSigningWithOwnerKeyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_contesteddocumentstemporarilynotallowederror_new=function(arg0){const ret=ContestedDocumentsTemporarilyNotAllowedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_contesteduniqueindexwithuniqueindexerror_new=function(arg0){const ret=ContestedUniqueIndexWithUniqueIndexError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentfieldmaxsizeexceedederror_new=function(arg0){const ret=DocumentFieldMaxSizeExceededError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unsupportedfeatureerror_new=function(arg0){const ret=UnsupportedFeatureError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_contesteduniqueindexonmutabledocumenttypeerror_new=function(arg0){const ret=ContestedUniqueIndexOnMutableDocumentTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_overflowerror_new=function(arg0){const ret=OverflowError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentcreationnotallowederror_new=function(arg0){const ret=DocumentCreationNotAllowedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unknowndocumentcreationrestrictionmodeerror_new=function(arg0){const ret=UnknownDocumentCreationRestrictionModeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unknowntrademodeerror_new=function(arg0){const ret=UnknownTradeModeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unknowntransferabletypeerror_new=function(arg0){const ret=UnknownTransferableTypeError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityupdatetransitiondisablekeyserror_new=function(arg0){const ret=InvalidIdentityUpdateTransitionDisableKeysError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentityupdatetransitionemptyerror_new=function(arg0){const ret=InvalidIdentityUpdateTransitionEmptyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invalididentitycreditwithdrawaltransitionamounterror_new=function(arg0){const ret=InvalidIdentityCreditWithdrawalTransitionAmountError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_invaliddocumenttyperequiredsecuritylevelerror_new=function(arg0){const ret=InvalidDocumentTypeRequiredSecurityLevelError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masterpublickeyupdateerror_new=function(arg0){const ret=MasterPublicKeyUpdateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_toomanymasterpublickeyerror_new=function(arg0){const ret=TooManyMasterPublicKeyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_disablingkeyidalsobeingaddedinsametransitionerror_new=function(arg0){const ret=DisablingKeyIdAlsoBeingAddedInSameTransitionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_maxdocumentstransitionsexceedederror_new=function(arg0){const ret=MaxDocumentsTransitionsExceededError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingpositionsindocumenttypepropertieserror_new=function(arg0){const ret=MissingPositionsInDocumentTypePropertiesError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_datacontractboundsnotpresenterror_new=function(arg0){const ret=DataContractBoundsNotPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unknownstoragekeyrequirementserror_new=function(arg0){const ret=UnknownStorageKeyRequirementsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_unknownsecuritylevelerror_new=function(arg0){const ret=UnknownSecurityLevelError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_versionerror_new=function(arg0){const ret=VersionError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentcontestnotpaidforerror_new=function(arg0){const ret=DocumentContestNotPaidForError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_notransferkeyforcorewithdrawalavailableerror_new=function(arg0){const ret=NoTransferKeyForCoreWithdrawalAvailableError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_missingtransferkeyerror_new=function(arg0){const ret=MissingTransferKeyError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentcontestdocumentwithsameidalreadypresenterror_new=function(arg0){const ret=DocumentContestDocumentWithSameIdAlreadyPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masternodeincorrectvoteridentityiderror_new=function(arg0){const ret=MasternodeIncorrectVoterIdentityIdError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masternodeincorrectvotingaddresserror_new=function(arg0){const ret=MasternodeIncorrectVotingAddressError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masternodevotealreadypresenterror_new=function(arg0){const ret=MasternodeVoteAlreadyPresentError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masternodevotedtoomanytimeserror_new=function(arg0){const ret=MasternodeVotedTooManyTimesError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_votepollnotavailableforvotingerror_new=function(arg0){const ret=VotePollNotAvailableForVotingError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_votepollnotfounderror_new=function(arg0){const ret=VotePollNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentcontestidentityalreadycontestanterror_new=function(arg0){const ret=DocumentContestIdentityAlreadyContestantError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentcontestnotjoinableerror_new=function(arg0){const ret=DocumentContestNotJoinableError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentcontestcurrentlylockederror_new=function(arg0){const ret=DocumentContestCurrentlyLockedError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_masternodenotfounderror_new=function(arg0){const ret=MasternodeNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_prefundedspecializedbalancenotfounderror_new=function(arg0){const ret=PrefundedSpecializedBalanceNotFoundError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_prefundedspecializedbalanceinsufficienterror_new=function(arg0){const ret=PrefundedSpecializedBalanceInsufficientError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentincorrectpurchasepriceerror_new=function(arg0){const ret=DocumentIncorrectPurchasePriceError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documentnotforsaleerror_new=function(arg0){const ret=DocumentNotForSaleError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_documenttypeupdateerror_new=function(arg0){const ret=DocumentTypeUpdateError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbg_identitypublickeyalreadyexistsforuniquecontractboundserror_new=function(arg0){const ret=IdentityPublicKeyAlreadyExistsForUniqueContractBoundsError.__wrap(arg0);return addHeapObject(ret);};imports.wbg.__wbindgen_cb_drop=function(arg0){const obj=takeObject(arg0).original;if(obj.cnt--==1){obj.a=0;return true;}const ret=false;return ret;};imports.wbg.__wbg_debug_efabe4eb183aa5d4=function(arg0,arg1,arg2,arg3){console.debug(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));};imports.wbg.__wbg_error_a7e23606158b68b9=function(arg0){console.error(getObject(arg0));};imports.wbg.__wbg_error_50f42b952a595a23=function(arg0,arg1,arg2,arg3){console.error(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));};imports.wbg.__wbg_info_24d8f53d98f12b95=function(arg0,arg1,arg2,arg3){console.info(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));};imports.wbg.__wbg_log_9b164efbe6db702f=function(arg0,arg1,arg2,arg3){console.log(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));};imports.wbg.__wbg_warn_8342bfbc6028193a=function(arg0,arg1,arg2,arg3){console.warn(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));};imports.wbg.__wbindgen_jsval_loose_eq=function(arg0,arg1){const ret=getObject(arg0)==getObject(arg1);return ret;};imports.wbg.__wbindgen_bigint_from_i128=function(arg0,arg1){const ret=arg0<<BigInt(64)|BigInt.asUintN(64,arg1);return addHeapObject(ret);};imports.wbg.__wbindgen_bigint_from_u128=function(arg0,arg1){const ret=BigInt.asUintN(64,arg0)<<BigInt(64)|BigInt.asUintN(64,arg1);return addHeapObject(ret);};imports.wbg.__wbg_String_88810dfeb4021902=function(arg0,arg1){const ret=String(getObject(arg1));const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len1;getInt32Memory0()[arg0/4+0]=ptr1;};imports.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(arg0,arg1){const ret=getObject(arg0)[getObject(arg1)];return addHeapObject(ret);};imports.wbg.__wbg_set_841ac57cff3d672b=function(arg0,arg1,arg2){getObject(arg0)[takeObject(arg1)]=takeObject(arg2);};imports.wbg.__wbindgen_is_string=function(arg0){const ret=typeof getObject(arg0)==='string';return ret;};imports.wbg.__wbg_crypto_1d1f22824a6a080c=function(arg0){const ret=getObject(arg0).crypto;return addHeapObject(ret);};imports.wbg.__wbg_msCrypto_eb05e62b530a1508=function(arg0){const ret=getObject(arg0).msCrypto;return addHeapObject(ret);};imports.wbg.__wbg_getRandomValues_3aa56aa6edec874c=function(){return handleError(function(arg0,arg1){getObject(arg0).getRandomValues(getObject(arg1));},arguments);};imports.wbg.__wbg_randomFillSync_5c9c955aa56b6049=function(){return handleError(function(arg0,arg1){getObject(arg0).randomFillSync(takeObject(arg1));},arguments);};imports.wbg.__wbg_require_cca90b1a94a0255b=function(){return handleError(function(){const ret=module.require;return addHeapObject(ret);},arguments);};imports.wbg.__wbg_process_4a72847cc503995b=function(arg0){const ret=getObject(arg0).process;return addHeapObject(ret);};imports.wbg.__wbg_versions_f686565e586dd935=function(arg0){const ret=getObject(arg0).versions;return addHeapObject(ret);};imports.wbg.__wbg_node_104a2ff8d6ea03a2=function(arg0){const ret=getObject(arg0).node;return addHeapObject(ret);};imports.wbg.__wbg_new_0394642eae39db16=function(){const ret=new Array();return addHeapObject(ret);};imports.wbg.__wbg_get_7303ed2ef026b2f5=function(arg0,arg1){const ret=getObject(arg0)[arg1>>>0];return addHeapObject(ret);};imports.wbg.__wbg_set_b4da98d504ac6091=function(arg0,arg1,arg2){getObject(arg0)[arg1>>>0]=takeObject(arg2);};imports.wbg.__wbg_from_6bc98a09a0b58bb1=function(arg0){const ret=Array.from(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_isArray_04e59fb73f78ab5b=function(arg0){const ret=Array.isArray(getObject(arg0));return ret;};imports.wbg.__wbg_length_820c786973abdd8a=function(arg0){const ret=getObject(arg0).length;return ret;};imports.wbg.__wbg_push_109cfc26d02582dd=function(arg0,arg1){const ret=getObject(arg0).push(getObject(arg1));return ret;};imports.wbg.__wbg_toString_8b9ec1a295be145a=function(arg0){const ret=getObject(arg0).toString();return addHeapObject(ret);};imports.wbg.__wbg_instanceof_ArrayBuffer_ef2632aa0d4bfff8=function(arg0){let result;try{result=getObject(arg0)instanceof ArrayBuffer;}catch(_unused){result=false;}const ret=result;return ret;};imports.wbg.__wbg_instanceof_Error_fac23a8832b241da=function(arg0){let result;try{result=getObject(arg0)instanceof Error;}catch(_unused2){result=false;}const ret=result;return ret;};imports.wbg.__wbg_new_87297f22973157c8=function(arg0,arg1){const ret=new Error(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);};imports.wbg.__wbg_message_eab7d45ec69a2135=function(arg0){const ret=getObject(arg0).message;return addHeapObject(ret);};imports.wbg.__wbg_newwithargs_3be36855b48d969f=function(arg0,arg1,arg2,arg3){const ret=new Function(getStringFromWasm0(arg0,arg1),getStringFromWasm0(arg2,arg3));return addHeapObject(ret);};imports.wbg.__wbg_newnoargs_c9e6043b8ad84109=function(arg0,arg1){const ret=new Function(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);};imports.wbg.__wbg_call_557a2f2deacc4912=function(){return handleError(function(arg0,arg1){const ret=getObject(arg0).call(getObject(arg1));return addHeapObject(ret);},arguments);};imports.wbg.__wbg_call_587b30eea3e09332=function(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).call(getObject(arg1),getObject(arg2));return addHeapObject(ret);},arguments);};imports.wbg.__wbg_name_2a8bae31363c6a51=function(arg0){const ret=getObject(arg0).name;return addHeapObject(ret);};imports.wbg.__wbg_new_0f2b71ca2f2a6029=function(){const ret=new Map();return addHeapObject(ret);};imports.wbg.__wbg_set_da7be7bf0e037b14=function(arg0,arg1,arg2){const ret=getObject(arg0).set(getObject(arg1),getObject(arg2));return addHeapObject(ret);};imports.wbg.__wbg_next_ec061e48a0e72a96=function(){return handleError(function(arg0){const ret=getObject(arg0).next();return addHeapObject(ret);},arguments);};imports.wbg.__wbg_next_f4bc0e96ea67da68=function(arg0){const ret=getObject(arg0).next;return addHeapObject(ret);};imports.wbg.__wbg_done_b6abb27d42b63867=function(arg0){const ret=getObject(arg0).done;return ret;};imports.wbg.__wbg_value_2f4ef2036bfad28e=function(arg0){const ret=getObject(arg0).value;return addHeapObject(ret);};imports.wbg.__wbg_isSafeInteger_2088b01008075470=function(arg0){const ret=Number.isSafeInteger(getObject(arg0));return ret;};imports.wbg.__wbg_getTime_40bd09e020e8bc8c=function(arg0){const ret=getObject(arg0).getTime();return ret;};imports.wbg.__wbg_new_606a90d0f3d171c7=function(arg0){const ret=new Date(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_new0_494c19a27871d56f=function(){const ret=new Date();return addHeapObject(ret);};imports.wbg.__wbg_setTime_2d1dc9ec65d52540=function(arg0,arg1){const ret=getObject(arg0).setTime(arg1);return ret;};imports.wbg.__wbg_constructor_f2623999a1f453eb=function(arg0){const ret=getObject(arg0).constructor;return addHeapObject(ret);};imports.wbg.__wbg_entries_13e011453776468f=function(arg0){const ret=Object.entries(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_getPrototypeOf_61452d62417f6406=function(arg0){const ret=Object.getPrototypeOf(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_keys_964fd67be8b2f724=function(arg0){const ret=Object.keys(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_new_2b6fea4ea03b1b95=function(){const ret=new Object();return addHeapObject(ret);};imports.wbg.__wbg_iterator_7c7e58f62eb84700=function(){const ret=Symbol.iterator;return addHeapObject(ret);};imports.wbg.__wbg_new_2b55e405e4af4986=function(arg0,arg1){try{var state0={a:arg0,b:arg1};var cb0=(arg0,arg1)=>{const a=state0.a;state0.a=0;try{return __wbg_adapter_1626(a,state0.b,arg0,arg1);}finally{state0.a=a;}};const ret=new Promise(cb0);return addHeapObject(ret);}finally{state0.a=state0.b=0;}};imports.wbg.__wbg_resolve_ae38ad63c43ff98b=function(arg0){const ret=Promise.resolve(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_then_8df675b8bb5d5e3c=function(arg0,arg1){const ret=getObject(arg0).then(getObject(arg1));return addHeapObject(ret);};imports.wbg.__wbg_globalThis_b70c095388441f2d=function(){return handleError(function(){const ret=globalThis.globalThis;return addHeapObject(ret);},arguments);};imports.wbg.__wbg_self_742dd6eab3e9211e=function(){return handleError(function(){const ret=self.self;return addHeapObject(ret);},arguments);};imports.wbg.__wbg_window_c409e731db53a0e2=function(){return handleError(function(){const ret=window.window;return addHeapObject(ret);},arguments);};imports.wbg.__wbg_global_1c72617491ed7194=function(){return handleError(function(){const ret=global.global;return addHeapObject(ret);},arguments);};imports.wbg.__wbg_instanceof_Uint8Array_1349640af2da2e88=function(arg0){let result;try{result=getObject(arg0)instanceof Uint8Array;}catch(_unused3){result=false;}const ret=result;return ret;};imports.wbg.__wbg_new_09938a7d020f049b=function(arg0){const ret=new Uint8Array(getObject(arg0));return addHeapObject(ret);};imports.wbg.__wbg_newwithlength_89eeca401d8918c2=function(arg0){const ret=new Uint8Array(arg0>>>0);return addHeapObject(ret);};imports.wbg.__wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b=function(arg0,arg1,arg2){const ret=new Uint8Array(getObject(arg0),arg1>>>0,arg2>>>0);return addHeapObject(ret);};imports.wbg.__wbg_subarray_d82be056deb4ad27=function(arg0,arg1,arg2){const ret=getObject(arg0).subarray(arg1>>>0,arg2>>>0);return addHeapObject(ret);};imports.wbg.__wbg_length_0aab7ffd65ad19ed=function(arg0){const ret=getObject(arg0).length;return ret;};imports.wbg.__wbg_set_3698e3ca519b3c3c=function(arg0,arg1,arg2){getObject(arg0).set(getObject(arg1),arg2>>>0);};imports.wbg.__wbindgen_is_function=function(arg0){const ret=typeof getObject(arg0)==='function';return ret;};imports.wbg.__wbindgen_object_drop_ref=function(arg0){takeObject(arg0);};imports.wbg.__wbg_buffer_55ba7a6b1b92e2ac=function(arg0){const ret=getObject(arg0).buffer;return addHeapObject(ret);};imports.wbg.__wbg_deleteProperty_9235094bd32a2d37=function(){return handleError(function(arg0,arg1){const ret=Reflect.deleteProperty(getObject(arg0),getObject(arg1));return ret;},arguments);};imports.wbg.__wbg_get_f53c921291c381bd=function(){return handleError(function(arg0,arg1){const ret=Reflect.get(getObject(arg0),getObject(arg1));return addHeapObject(ret);},arguments);};imports.wbg.__wbg_has_40b8c976775c8ead=function(){return handleError(function(arg0,arg1){const ret=Reflect.has(getObject(arg0),getObject(arg1));return ret;},arguments);};imports.wbg.__wbg_set_07da13cc24b69217=function(){return handleError(function(arg0,arg1,arg2){const ret=Reflect.set(getObject(arg0),getObject(arg1),getObject(arg2));return ret;},arguments);};imports.wbg.__wbg_parse_76a8a18ca3f8730b=function(){return handleError(function(arg0,arg1){const ret=JSON.parse(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);},arguments);};imports.wbg.__wbg_stringify_7f140af65a8ed0a9=function(){return handleError(function(arg0,arg1){const ret=JSON.stringify(getObject(arg0),getObject(arg1));return addHeapObject(ret);},arguments);};imports.wbg.__wbindgen_debug_string=function(arg0,arg1){const ret=debugString(getObject(arg1));const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len1;getInt32Memory0()[arg0/4+0]=ptr1;};imports.wbg.__wbindgen_bigint_get_as_i64=function(arg0,arg1){const v=getObject(arg1);const ret=typeof v==='bigint'?v:undefined;getBigInt64Memory0()[arg0/8+1]=isLikeNone(ret)?BigInt(0):ret;getInt32Memory0()[arg0/4+0]=!isLikeNone(ret);};imports.wbg.__wbindgen_throw=function(arg0,arg1){throw new Error(getStringFromWasm0(arg0,arg1));};imports.wbg.__wbindgen_memory=function(){const ret=wasm.memory;return addHeapObject(ret);};imports.wbg.__wbindgen_closure_wrapper13475=function(arg0,arg1,arg2){const ret=makeMutClosure(arg0,arg1,201,__wbg_adapter_56);return addHeapObject(ret);};return imports;}function __wbg_init_memory(imports,maybe_memory){}function __wbg_finalize_init(instance,module){wasm=instance.exports;__wbg_init.__wbindgen_wasm_module=module;cachedBigInt64Memory0=null;cachedFloat64Memory0=null;cachedInt32Memory0=null;cachedUint32Memory0=null;cachedUint8Memory0=null;return wasm;}function initSync(module){if(wasm!==undefined)return wasm;const imports=__wbg_get_imports();__wbg_init_memory(imports);if(!(module instanceof WebAssembly.Module)){module=new WebAssembly.Module(module);}const instance=new WebAssembly.Instance(module,imports);return __wbg_finalize_init(instance,module);}async function __wbg_init(input){if(wasm!==undefined)return wasm;const imports=__wbg_get_imports();if(typeof input==='string'||typeof Request==='function'&&input instanceof Request||typeof URL==='function'&&input instanceof URL){input=fetch(input);}__wbg_init_memory(imports);const{instance,module}=await __wbg_load(await input,imports);return __wbg_finalize_init(instance,module);}var _default=exports.default=__wbg_init;
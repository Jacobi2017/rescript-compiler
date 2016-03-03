// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("../runtime/caml_builtin_exceptions");

var is_js = /* true */1;

var match_001 = /* array */[];

var big_endian = /* false */0;

var word_size = 64;

var unix = /* true */1;

var win32 = /* false */0;

var cygwin = /* false */0;

var max_array_length = 4294967295;

var max_string_length = 4294967295;

var interactive = [/* false */0];

function set_signal(sig_num, sig_beh) {
  ;
  return sig_beh;
}

var sigint = -6;

var Break = {
  0: "Sys.Break",
  1: Caml_builtin_exceptions.get_id(),
  length: 2,
  tag: 248
};

function catch_break(on) {
  if (on) {
    ;
    return /* Signal_handle */{
            0: function () {
              throw Break;
            },
            length: 1,
            tag: 0
          };
  }
  else {
    ;
    return /* Signal_default */0;
  }
}

var argv = match_001;

var executable_name = "cmd";

var os_type = "Unix";

var sigabrt = -1;

var sigalrm = -2;

var sigfpe = -3;

var sighup = -4;

var sigill = -5;

var sigkill = -7;

var sigpipe = -8;

var sigquit = -9;

var sigsegv = -10;

var sigterm = -11;

var sigusr1 = -12;

var sigusr2 = -13;

var sigchld = -14;

var sigcont = -15;

var sigstop = -16;

var sigtstp = -17;

var sigttin = -18;

var sigttou = -19;

var sigvtalrm = -20;

var sigprof = -21;

var ocaml_version = "4.02.3+dev1-2015-07-10";

exports.argv              = argv;
exports.executable_name   = executable_name;
exports.interactive       = interactive;
exports.os_type           = os_type;
exports.unix              = unix;
exports.win32             = win32;
exports.cygwin            = cygwin;
exports.word_size         = word_size;
exports.big_endian        = big_endian;
exports.is_js             = is_js;
exports.max_string_length = max_string_length;
exports.max_array_length  = max_array_length;
exports.set_signal        = set_signal;
exports.sigabrt           = sigabrt;
exports.sigalrm           = sigalrm;
exports.sigfpe            = sigfpe;
exports.sighup            = sighup;
exports.sigill            = sigill;
exports.sigint            = sigint;
exports.sigkill           = sigkill;
exports.sigpipe           = sigpipe;
exports.sigquit           = sigquit;
exports.sigsegv           = sigsegv;
exports.sigterm           = sigterm;
exports.sigusr1           = sigusr1;
exports.sigusr2           = sigusr2;
exports.sigchld           = sigchld;
exports.sigcont           = sigcont;
exports.sigstop           = sigstop;
exports.sigtstp           = sigtstp;
exports.sigttin           = sigttin;
exports.sigttou           = sigttou;
exports.sigvtalrm         = sigvtalrm;
exports.sigprof           = sigprof;
exports.Break             = Break;
exports.catch_break       = catch_break;
exports.ocaml_version     = ocaml_version;
/* No side effect */

<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# CMUdict

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> The Carnegie Mellon Pronouncing Dictionary.

<section class="intro">

The [Carnegie Mellon University Pronouncing Dictionary (CMUDict)][cmudict], created by the Speech Group in the School of Computer Science at CMU, is "an open-source machine-readable pronunciation dictionary for North American English that contains over 134,000 words".

</section>

<!-- /.intro -->











<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/datasets-cmudict-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

## Usage

```text
Usage: cmudict [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --data name           Dataset name: dict, phones, symbols, vp.
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the `--data` option is set to a supported dataset name, the CLI prints the contents of the respective dataset file as plain text. Otherwise, the output format is newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```bash
$ cmudict --data symbols
AA
AA0
AA1
AA2
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<!-- <license> -->

## License

The data files (databases) and their contents are licensed under a [BSD-2-Clause license][bsd-license]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/datasets-cmudict`][@stdlib/datasets-cmudict]</span><span class="delimiter">: </span><span class="description">the Carnegie Mellon Pronouncing Dictionary (CMUdict).</span>


</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-cmudict-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-cmudict-cli

[test-image]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-cmudict@v0.2.2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-cmudict@v0.2.2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-cmudict@v0.2.2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-cmudict@v0.2.2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2#cli
[cli-url]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/tree/cli
[@stdlib/datasets-cmudict]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/tree/deno
[deno-readme]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/tree/umd
[umd-readme]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/tree/esm
[esm-readme]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/datasets-cmudict@v0.2.2/blob/main/branches.md

[cmudict]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict#about

[arpabet]: https://en.wikipedia.org/wiki/ARPABET

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[bsd-license]: https://opensource.org/licenses/bsd-license.html

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->

/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ComponentDocs = require('app_modules/site/components/page/component/docs');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;
const CodeClass = require('app_modules/site/components/code-class');

module.exports = (
<ComponentDocs>
  <p className="site-text-introduction">Data tables are an enhanced version of an HTML table and are used to display tabular data.</p>
  <p>To initialize a data table, apply the <CodeClass className="table"/> class to the <code>table</code> element. This class creates a <code>table</code> with formatted cells and allows you to use data table utilities.</p>
  <h4 className="site-text-heading--label">Accessibility</h4>
  <p>To create an accessible table, the top row of column headers (<code>th</code>) are placed in a <code>thead</code>. Each one receives the <code>scope="col"</code> attribute. The first non-actionable (meaning that doesn't contain a checkbox or menu) column in each row should be marked as a <code>th</code> with a <code>scope="row"</code> attribute.</p>
  <p>For available classes and options, see the <a href="#overview">data table overview legend</a> below.</p>
</ComponentDocs>
);

/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const MediaObject = require('ui/components/media-objects/index.react');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const Checkbox = require('ui/components/forms/flavors/checkbox/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

const image1 = (
  <SvgIcon className={pf('icon icon-standard-task timeline__icon')} sprite="standard" symbol="task" />
);

const image2 = (
  <SvgIcon className={pf('icon icon-standard-event timeline__icon')} sprite="standard" symbol="event" />
);

const image3 = (
  <SvgIcon className={pf('icon icon-standard-log-a-call timeline__icon')} sprite="standard" symbol="log_a_call" />
);

const image4 = (
  <SvgIcon className={pf('icon icon-standard-email timeline__icon')} sprite="standard" symbol="email" />
);

const content = (
  <div className={pf('timeline__actions')}>
    <p className={pf('timeline__date')}>Feb 24</p>
    <ButtonIcon flavor="icon-border-filled" sprite="utility" symbol="switch" assistiveText="Switch" />
  </div>
);

const form = (
  <Checkbox assistiveText="mark-complete" />
);

module.exports = (
  <div className='demo-only'>
    <ul className={pf('timeline')}>
      <li className={pf('timeline__item')}>
        <span className={pf('assistive-text')}>Task</span>
        <MediaObject figureLeft={content} flavor="reverse">
          <MediaObject className={pf('media--timeline timeline__media--task')} figureLeft={image1}>
            <MediaObject figureLeft={form} className={pf('tile media--small')}>
              <p className={pf('tile__title truncate')}>
                <a href="#">Review proposals for EBC deck with larger team and have marketing review this</a>
              </p>
              <ul className={pf('tile__detail list--horizontal text-body--small')}>
                <li className={pf('list__item m-right--large')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>Contact:</dt><dd className={pf('dl--inline__detail')}><a href="#">Lei Chan</a></dd></dl></li>
                <li className={pf('list__item')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>Assigned to:</dt><dd className={pf('dl--inline__detail')}><a href="#">Betty Mason</a></dd></dl></li>
              </ul>
            </MediaObject>
          </MediaObject>
        </MediaObject>
      </li>
      <li className={pf('timeline__item')}>
        <span className={pf('assistive-text')}>Event</span>
        <MediaObject figureLeft={content} flavor="reverse">
          <MediaObject className={pf('media--timeline timeline__media--event')} figureLeft={image2}>
            <p><a href="#">Company One — EBC Meeting</a></p>
            <p className={pf('truncate')}>Let's get together to review the theater's layout and facilities. We'll also discuss potential things that truncate at a certain width.</p>
            <ul className={pf('list--horizontal text-body--small')}>
              <li className={pf('list__item m-right--large')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>Time:</dt><dd className={pf('dl--inline__detail')}><a href="#">Feb 23, 2015 11:00am&ndash;12:00pm</a></dd></dl></li>
              <li className={pf('list__item')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>Location:</dt><dd className={pf('dl--inline__detail')}><a href="#">300 Pike St, San Francisco CA</a></dd></dl></li>
            </ul>
            <dl className={pf('dl--inline text-body--small')}><dt className={pf('dl--inline__label')}>Name:</dt><dd className={pf('dl--inline__detail')}><a href="#">Lei Chan</a>, <a href="#">Jason Dewar</a>, <a href="#">Gwen Jones</a> and <a href="#">Pete Schaffer</a></dd></dl>
          </MediaObject>
        </MediaObject>
      </li>
      <li className={pf('timeline__item')}>
        <span className={pf('assistive-text')}>Call</span>
        <MediaObject figureLeft={content} flavor="reverse">
          <MediaObject className={pf('media--timeline timeline__media--call')} figureLeft={image3}>
            <p><a href="#">Mobile conversation on Monday</a></p>
            <p className={pf('truncate')}>Lei seemed interested in closing this deal quickly! Let's move move.</p>
            <ul className={pf('list--horizontal text-body--small')}>
              <li className={pf('list__item m-right--large')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>Name:</dt><dd className={pf('dl--inline__detail')}><a href="#">Lei Chan</a></dd></dl></li>
              <li className={pf('list__item')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>Assigned to:</dt><dd className={pf('dl--inline__detail')}><a href="#">Betty Mason</a></dd></dl></li>
            </ul>
          </MediaObject>
        </MediaObject>
      </li>
      <li className={pf('timeline__item')}>
        <span className={pf('assistive-text')}>Email</span>
        <MediaObject figureLeft={content} flavor="reverse">
          <MediaObject className={pf('media--timeline timeline__media--email')} figureLeft={image4}>
            <div className={pf('tile')}>
              <p className={pf('tile__title truncate')}>
                <a href="#">Updated Proposals</a>
              </p>
              <div className={pf('tile__detail')}>
                <p className={pf('truncate')}>Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it's truncated.</p>
                <ul className={pf('list--horizontal text-body--small')}>
                  <li className={pf('list__item m-right--large')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>To:</dt><dd className={pf('dl--inline__detail')}><a href="#">Lei Chan</a></dd></dl></li>
                  <li className={pf('list__item')}><dl className={pf('dl--inline')}><dt className={pf('dl--inline__label')}>From:</dt><dd className={pf('dl--inline__detail')}><a href="#">Jason Dewar</a></dd></dl></li>
                </ul>
              </div>
            </div>
          </MediaObject>
        </MediaObject>
      </li>
    </ul>
  </div>
);

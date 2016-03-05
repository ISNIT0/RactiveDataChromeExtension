// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.devtools.panels.elements.createSidebarPane(
  "Ractive Data",
  function(sidebar) {
    function update() {
      sidebar.setExpression("!$0._ractive ? { info: 'Pick a Ractive managed node to see the context.' } : $0._ractive.context ? $0._ractive.context.get() : $0._ractive.root.get($0._ractive.keypath.str)");
    }

    update();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(update);
  }
);

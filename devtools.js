// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.devtools.panels.elements.createSidebarPane(
  "Ractive Data",
  function(sidebar) {
    function update() {
        var query = "$0._ractive ?\
            $0._ractive.proxy.ractive?\
                $0._ractive.proxy.ractive.get()\
            :\
                $0._ractive.root.get($0._ractive.keypath.str)\
        :\
            'No a Ractive Element';"
        
      sidebar.setExpression(query);
    }

    update();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(update);
  }
);

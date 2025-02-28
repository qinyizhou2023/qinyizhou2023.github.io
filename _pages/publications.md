---
layout: page
permalink: /publications/
title: publications
description: My publications.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->
<div class="publications">

{% bibliography %}

</div>

<style>
.abstract-text {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: justify;
    display: none;
}

.abstract-toggle {
    color: #1976d2;
    cursor: pointer;
    font-size: 0.9em;
    margin-top: 5px;
    display: inline-block;
}

.abstract-toggle:hover {
    text-decoration: underline;
}
</style>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.abstract-toggle').forEach(function(button) {
        button.addEventListener('click', function() {
            var abstract = this.nextElementSibling;
            if (abstract.style.display === 'none' || !abstract.style.display) {
                abstract.style.display = 'block';
                this.textContent = 'hide abstract';
            } else {
                abstract.style.display = 'none';
                this.textContent = 'show abstract';
            }
        });
    });
});
</script> -->

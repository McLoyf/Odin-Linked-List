<h1>Linked List</h1>

<p>
  A simple JavaScript linked list implementation made for The Odin Project.
</p>

<h2>Features</h2>

<ul>
  <li>Add values to the end of the list with <code>append()</code></li>
  <li>Add values to the beginning of the list with <code>prepend()</code></li>
  <li>Check the list size with <code>size()</code></li>
  <li>Get the first value with <code>head()</code></li>
  <li>Get the last value with <code>tail()</code></li>
  <li>Get a value at a specific index with <code>at()</code></li>
  <li>Remove the first value with <code>pop()</code></li>
  <li>Check if a value exists with <code>contains()</code></li>
  <li>Find the index of a value with <code>findIndex()</code></li>
  <li>Print the list with <code>toString()</code></li>
</ul>

<h2>Technologies Used</h2>

<ul>
  <li>JavaScript</li>
  <li>ES Modules</li>
</ul>

<h2>Example Usage</h2>

<pre><code>import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("bird");

console.log(list.toString());
// ( bird ) -> ( dog ) -> ( cat ) -> null
</code></pre>

<h2>Project Notes</h2>

<p>
  This project was built to practice data structures, object-oriented programming,
  and basic linked list operations in JavaScript.
</p>
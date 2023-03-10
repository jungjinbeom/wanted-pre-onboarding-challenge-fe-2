/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @function
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tag] - 태그
 */
function addTodo({ content, category, tag }) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 *
 * @function
 * @param {number} id - 아이디
 * @returns {Todo[]} - Todo 목록 반환
 */
function getTodo({ id }) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 *
 * @function
 * @param {number} id - 아이디
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {boolean} isCompleted - 완료 여부
 * @param {string[]} [tag] - 태그
 * @returns {Todo} - Todo 수정할일
 *
 */
function updateTodo({ id, content, category, isCompleted, tag }) {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 *
 * @function
 * @param {number} id - 아이디
 * @param {string[]} [tag] - 태그
 * @returns {Todo[]} -삭제된 Todo를 제외한 나머지 목록을 반환
 */
function deleteTodo({ id, tag }) {}

/**
 * @swagger
 * tags:
 *   name: dbitem
 *   description: Home page
 */

/**
 * @swagger
 * /dbitem:
 *   get:
 *     summary: Get dbitems based on query parameters.
 *     tags: [dbitem]
 *     parameters:
 *       - in: query
 *         name: db_name
 *         schema:
 *           type: string
 *         description: db_name filter.
 *     responses:
 *       '200':
 *         description: Successful response with profiles.
 *         content:
 *           application/json:
 *             example:
 *               dbitems:
 *                 - dbitems
 *                 - row_count
 *                 - message
 *       '500':
 *         description: Internal server error.
 */


/**
 * @swagger
 * /dbitem:
 *   post:
 *     summary: Create a new dbitem.
 *     tags: [dbitem]
 *     parameters:
 *       - in: query
 *         name: db_name
 *         schema:
 *           type: string
 *         description: db_name filter.
 *       - in: query
 *         name: dbtype_code
 *         schema:
 *           type: number
 *         description: file dbtype_code filter.
 *     responses:
 *       '200':
 *         description: Successful response with result and lastID.
 *         content:
 *           application/json:
 *             example:
 *               result: true
 *               lastID: 20
 *       '500':
 *         description: Internal server error.
 */
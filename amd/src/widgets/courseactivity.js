// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Cohorts Info widgets.
 *
 * @module     report_lmsace_reports/courseactivity
 * @copyright  2023 LMSACE <https://lmsace.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define([], function () {

    /* global siteresourceofcourses */

    /**
     * Initialize the course activity chart.
     *
     * @param {report_lmsace_reports/main} main
     */
    function init(main) {
        showCourseActivityChart(main);
    }

    var showCourseActivityChart = function (main) {

        let ctx = document.getElementById('course-activity-chart');
        if (ctx) {
            let type = 'doughnut';
            var bgColor = main.getRandomColors(['c1', 'c7', 'c4']);
            main.buildChart(ctx, type, siteresourceofcourses.label, siteresourceofcourses.value, bgColor, null);
        }
    };

    return {
        init: init
    };

});

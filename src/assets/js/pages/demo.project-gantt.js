/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Project Gantt 
*/

$(document).ready(function (e) {
    var tasks = [{
            id: '1',
            name: 'Draft the new contract document for sales team',
            start: '2019-07-16',
            end: '2019-07-20',
            progress: 55,
        },
        {
            id: '2',
            name: 'Find out the old contract documents',
            start: '2019-07-19',
            end: '2019-07-21',
            progress: 85,
            dependencies: '1'
        },
        {
            id: '3',
            name: 'Organize meeting with sales associates to understand need in detail',
            start: '2019-07-21',
            end: '2019-07-22',
            progress: 80,
            dependencies: '2'
        },
        {
            id: '4',
            name: 'iOS App home page',
            start: '2019-07-15',
            end: '2019-07-17',
            progress: 80
        },
        {
            id: '5',
            name: 'Write a release note',
            start: '2019-07-18',
            end: '2019-07-22',
            progress: 65,
            dependencies: '4'
        },
        {
            id: '6',
            name: 'Setup new sales project',
            start: '2019-07-20',
            end: '2019-07-31',
            progress: 15,
        },
        {
            id: '7',
            name: 'Invite user to a project',
            start: '2019-07-25',
            end: '2019-07-26',
            progress: 99,
            dependencies: '6'
        },
        {
            id: '8',
            name: 'Coordinate with business development',
            start: '2019-07-28',
            end: '2019-07-30',
            progress: 35,
            dependencies: '7'
        },
        {
            id: '9',
            name: 'Kanban board design',
            start: '2019-08-01',
            end: '2019-08-03',
            progress: 25,
            dependencies: '8'
        },
        {
            id: '10',
            name: 'Enable analytics tracking',
            start: '2019-08-05',
            end: '2019-08-07',
            progress: 60,
            dependencies: '9'
        }
    ];
    var gantt = new Gantt("#tasks-gantt", tasks, {
        view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
        bar_height: 20,
        padding: 18,
        view_mode: 'Week',
        custom_popup_html: function(task) {
            // the task object will contain the updated
            // dates and progress value
            var end_date = task.end;
            var progressCls = task.progress >= 60? "bg-success": (task.progress >= 30 && task.progress < 60 ? "bg-primary": "bg-warning");
            return '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">' +
                '<div class="arrow"></div><div class="popover-body">' +
                '<h5>${task.name}</h5><p class="mb-2">Expected to finish by ${end_date}</p>' +
                '<div class="progress mb-2" style="height: 10px;">' +
                '<div class="progress-bar ${progressCls}" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}"'+
                    ' aria-valuemin="0" aria-valuemax="100">${task.progress}%</div>' +
                '</div></div></div>';
        }
    });

    // handling the mode changes
    $("#modes-filter :input").change(function() {
        gantt.change_view_mode($(this).val()); 
    });
});

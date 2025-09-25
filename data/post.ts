import { PostType } from "@/types";

const author = {
    name: "Success Sam",
    avatar: "/img/blog/author.png",
};

const categories = [
    "Agriculture",
    "Business",
    "Technology",
    "Lifestyle",
    "Education",
];

const contentTemplates = [
    `Lorem ipsum dolor sit amet consectetur. Odio in velit scelerisque diam viverra. Vulputate nibh nibh posuere morbi laoreet faucibus mauris amet. Diam at vitae eget at proin in porta rhoncus. Morbi orci euismod amet sit placerat. Ornare donec et laoreet gravida. Consectetur diam mauris in mattis in pharetra. Aliquam praesent sed sollicitudin condimentum vitae cursus sed a. Sem viverra mattis ipsum id faucibus sagittis at. Tellus vitae augue lobortis viverra sed. Montes feugiat sit leo proin egestas. Lectus dolor donec eget proin nullam semper. Pellentesque tincidunt mattis viverra consectetur gravida. Sit tellus est tempor quis nec commodo faucibus vestibulum. Libero nisi malesuada sit quisque leo leo.

Nec condimentum hac potenti gravida urna. Facilisis justo aliquet magna aliquet. Nec feugiat aliquam odio non nunc feugiat vitae. Pretium et id amet faucibus platea malesuada morbi. Consectetur curabitur enim auctor nisi nec sollicitudin ultrices ipsum ac eget nulla eu. Velit phasellus enim sodales tellus ultricies nascetur velit. Tincidunt a aliquet amet nunc etiam. Vel egestas nec orci mauris proin in mattis interdum. Est id tellus vestibulum sit consectetur faucibus consequat egestas maecenas. Arcu rhoncus quis enim ac nunc. Pellentesque massa quam eu aenean viverra facilisi sit enim nunc. A eu vitae tristique sit. Amet at commodo metus et dui bibendum eu.`,

    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,

    `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
];

function makePost(id: number): PostType {
    const category = categories[(id - 1) % categories.length];
    const title = `Sample Post Title ${id}`;
    const subtitle = "Lorem ipsum dolor sit amet consectetur. Nunc pellentesque gravida diam arcu pellentesque risus id faucibus convallis.";
    const content = contentTemplates[(id - 1) % contentTemplates.length];
    const publishedAt = new Date(2025, 3, 8 + id).toISOString();
    const slug = `post-${id}`;
    return {
        id,
        slug,
        title,
        subtitle,
        content,
        image: `/img/blog/${id}.jpg`,
        category,
        tags: [category.toLowerCase()],
        author,
        publishedAt,
        readMinutes: 3 + (id % 5),
    };
}

export const posts: PostType[] = Array.from({ length: 23 }, (_, idx) => makePost(idx + 1));



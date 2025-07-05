<template>
    <div class="aside-nav-wrapper">
        <a
            class="vp-link"
            href="https://ifdian.net/order/create?user_id=7d8be312ae6111ef823652540025c377&remark=&affiliate_code="
            target="_blank"
            rel="noreferrer"
        >
            <span>请我喝杯奶茶</span>
            <span class="arrow">→</span>
        </a>
    </div>
</template>

<style scoped>
	.aside-nav-wrapper {
        display: flex;
        flex-direction: column;
        gap:6px;
        margin: 16px 16px 0;
        padding-top: 8px;
        border-top: lpx solid var(--vp-c-divider);
    }

	.vp-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: var(--c-text);
        font-size: 12px;
        transition: color 0.2s ease;
    }

	.vp-link:hover {
	    color: var(--vp-c-brand-1);
	}

	.arrow{
        margin-left: 12px;
        flex-shrink: 0;
	}
</style>
